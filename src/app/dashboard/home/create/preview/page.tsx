"use client";

import { Button } from "@/components/shared";
import { useImageContext } from "@/context/ImagesContext";
import { Left, Plus, Right } from "@/lib/svg/dashboard";
import { AppRoutes } from "@/utils/routes";
import { useRouter } from "next/navigation";
import React from "react";

const Preview = () => {
  const router = useRouter();
  const { images } = useImageContext();

  return (
    <div className="flex w-full flex-col gap-[100px]">
      <div className="preview_grid">
        {images.map((img, i) => (
          <div key={i}>
            <div className="h-[154px] w-[154px]">
              <img
                src={img.image}
                alt="Preview Image"
                className="rounded-[5px]"
              />
              {/* <Image src={img.image} alt="Preview Image" /> */}
            </div>
          </div>
        ))}
        <Button className="h-full border-none bg-primary-700">
          <div className="flex flex-col items-center justify-center">
            <Plus color="#868686" />
            <p className="font-geist-medium text-xs">Add Images</p>
          </div>
        </Button>
      </div>
      <div className="flex justify-center gap-[27px]">
        <Button
          className="h-full w-[139px] gap-2 border-none bg-primary-400 drop-shadow-xl"
          onClick={() => {
            router.push(AppRoutes.dashboard.home.create.path);
          }}
        >
          <Left color="#868686" />
          <p className="text-xs">Dashboard</p>
        </Button>
        <Button className="h-full w-[139px] gap-2 border-none bg-primary-400 drop-shadow-xl">
          <Right color="#868686" />
          <p className="text-xs">Continue</p>
        </Button>
      </div>
    </div>
  );
};

export default Preview;
