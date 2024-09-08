"use client";

import { Button } from "@/components/shared";
import FileUpload from "@/components/shared/FileUpload";
import { useImageContext } from "@/context/ImagesContext";
import DashboardAssets from "@/lib/assets/dashboard";
import Layout from "@/lib/svg/dashboard/Layout";
import { FilePlusPreview } from "@/types/generalTypes";
import { AppRoutes } from "@/utils/routes";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProtectedPage() {
  const router = useRouter();
  const { addImage } = useImageContext();
  return (
    <div className="flex w-full items-center">
      <div className="flex w-full flex-1 flex-col items-center gap-[72px]">
        <FileUpload
          setFile={(files: FilePlusPreview[]) => {
            files.forEach((file) => {
              addImage(file.preview);
            });
            router.push(AppRoutes.dashboard.home.create.preview.path);
          }}
          accept={{
            "image/jpeg": [".jpg", ".jpeg"],
            "image/png": [".png"],
            "image/webp": [".webp"],
          }}
        >
          <div>
            <div className="relative h-[374px] w-[602px]">
              <div className="absolute left-[-44px] top-[44px] z-[1] h-[374px] w-[602px]">
                <Image src={DashboardAssets.Shadow} alt="Shadow Asset" fill />
              </div>
              <div className="upload_linear_gradient absolute z-[2] flex h-full w-full flex-col items-center justify-center gap-8 rounded-[20px] bg-primary-200">
                <div className="h-[101px] w-[101px]">
                  <Image src={DashboardAssets.Upload} alt="Upload Logo" />
                </div>
                <div className="text-center font-geist-medium text-[13px]">
                  <p className="text-grey-100">Drag and drop artwork</p>
                  <p className="text-grey-1300">Its your canvas</p>
                </div>
              </div>
            </div>
          </div>
        </FileUpload>
        <div className="flex flex-col gap-2">
          <Button className="bg-primary-500 h-10 w-[290px] gap-1 border border-primary-300">
            <div className="flex items-center gap-2">
              <Layout color="#868686" />
              <p className="text-grey-1300 text-xs">Browse Images</p>
            </div>
          </Button>
          <Button className="border-none bg-transparent">
            <p className="text-xs text-grey-100 underline">How to use Umi</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
