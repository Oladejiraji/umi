"use client";

import Image from "next/image";
import React from "react";
import { useSearchParams } from "next/navigation";
import AuthAssets from "@/lib/assets/auth";

const Complete = () => {
  const searchParams = useSearchParams();

  const email = searchParams.get("email");

  return (
    <div className="mx-auto flex w-[345px] flex-col items-center justify-center">
      <div className="mb-[56px] w-9">
        <Image alt="Logo Icon" src={AuthAssets.Umi} />
      </div>
      <div>
        <h1 className="pb-8 text-center font-geist-medium text-xl text-white">Hey, Check your Email</h1>
        <p className="text-center font-geist-medium text-base text-[#5D5D5D]">We’ve sent a confirmation email.</p>
        <p className="text-center font-geist-medium text-base text-[#5D5D5D]">
          Please check your inbox at <span className="text-white">{email}</span>
        </p>
        <p className="pt-[50px] text-center font-geist-medium text-sm text-[#494949]">If you do not find an email in your inbox, please check your junk or spam folder</p>
      </div>
    </div>
  );
};

export default Complete;
