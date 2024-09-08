import AuthAssets from "@/lib/assets/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../shared";

interface IProps {
  text: string;
  path: string;
}

const AuthLink = ({ text, path }: IProps) => {
  const router = useRouter();
  return (
    <div className="absolute top-10 right-6">
      <Button
        className="bg-grey-500 "
        onClick={() => {
          router.push(path);
        }}
      >
        <div className="flex items-center justify-center">
          <p className="font-geist-medium text-xs">{text}</p>
          <div className="w-4 h-10 flex items-center justify-center">
            <Image src={AuthAssets.Right} alt="Right Icon" />
          </div>
        </div>
      </Button>
    </div>
  );
};

export default AuthLink;
