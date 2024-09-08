import React from "react";
import { HomeHeader, HomeSidebar } from "@/components/dashboard/home";
import Privacy from "@/lib/svg/dashboard/Privacy";
import ImagesContextProvider from "@/context/ImagesContext";

interface IProps {
  children: React.ReactNode;
}

export default async function HomeLayout(props: IProps) {
  const { children } = props;

  return (
    <ImagesContextProvider>
      <main className="flex h-full max-h-screen w-full">
        <div className="w-[240px] border-r border-r-primary-300 bg-primary-200">
          <HomeSidebar />
        </div>
        <div className="flex flex-1 items-center justify-center border border-primary-300 bg-primary-200 px-3 py-3">
          <div className="relative h-full w-full">
            {/* <div className="absolute left-0 top-0 z-[1] flex h-full w-full items-center justify-center">
            <Image src={DashboardAssets.Mask2} alt="Mask 2" />
            </div>
            <div className="absolute bottom-[100px] left-0 z-[1] flex h-full w-full items-center justify-center">
            <Image src={DashboardAssets.Mask1} alt="Mask 1" />
            </div> */}
            <div className="relative z-[2] flex h-full w-full flex-col rounded-[20px] border border-primary-300 p-6 drop-shadow-xl">
              <div className="mb-[80px]">
                <HomeHeader />
              </div>
              <div className="flex flex-1">{children}</div>
              <div className="flex items-center gap-1">
                <Privacy color="#868686" />
                <p className="font-geist-medium text-[13px] text-grey-600">
                  Privacy
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </ImagesContextProvider>
  );
}
