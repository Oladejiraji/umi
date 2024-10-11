"use client";

import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader } from "@/components/shared";
import { AppRoutes } from "@/utils/routes";
import { verifyUser } from "@/lib/auth";

const Complete = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const code = searchParams.get("code");
  const error = searchParams.get("error");

  const submit = async () => {
    if (!code) {
      router.push(AppRoutes.auth.login.path);
      return;
    }
    if (error) return;
    try {
      await verifyUser({ code });
      router.push(AppRoutes.auth.info.path);
    } catch (error: any) {
      router.push(`${AppRoutes.auth.verify.path}?error=${error.message}`);
    }
  };

  useEffect(() => {
    submit();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      {error ? (
        <>
          <p className="pt-8 text-center font-geist-medium text-xl text-white">
            Oops!!
          </p>
          <p className="pt-8 text-center font-geist-medium text-xl text-white">
            {error}
          </p>
        </>
      ) : (
        <>
          <Loader />
          <p className="pt-8 text-center font-geist-medium text-xl text-white">
            Please wait while we setup your account
          </p>
        </>
      )}
    </div>
  );
};

export default Complete;
