"use client";

import { AuthLink } from "@/components/auth";
import { Button } from "@/components/shared";
import AuthAssets from "@/lib/assets/auth";
import logos from "@/lib/assets/logos";
import { AppRoutes } from "@/utils/routes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Onboarding = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center w-full flex-1 relative">
      <AuthLink path={AppRoutes.auth.login.path} text="Sign In" />
      <div className="flex flex-col items-center max-w-[328px] w-auto">
        <div className="flex flex-col items-center gap-3 text-center mb-10 ">
          <div className="w-8 h-8">
            <Image src={logos.logo} alt="Umi Logo" />
          </div>
          <h1 className="text-2xl font-geist-semibold">
            <span className="text-grey-200">Let’s </span>get started
          </h1>
          <h3 className="text-[14px] text-grey-100 leading-[18px] font-geist-medium">
            Umi is the leading platform for visual creatives to showcase & build
          </h3>
        </div>
        <div className="flex flex-col gap-2">
          <Button
            className="w-[328px] h-11 font-geist-medium"
            variant="default"
          >
            <div className="w-5 h-auto">
              <Image src={AuthAssets.Google} alt="Google Logo" />
            </div>
            <p>Sign up with Google</p>
          </Button>
          <Button
            className="w-[328px] h-11 font-geist-medium bg-[rgba(160,160,160,0.25)] "
            variant="default"
            onClick={() => {
              router.push(AppRoutes.auth.signup.path);
            }}
          >
            <div className="w-5 h-auto">
              <Image src={AuthAssets.Mail} alt="Google Logo" />
            </div>
            <p>Continue with Email</p>
          </Button>
        </div>
        <div className="mt-6">
          <p className="text-sm text-grey-100 text-center leading-4 font-geist-regular">
            By signing up you agree to our terms of service and privacy policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
