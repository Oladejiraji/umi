"use client";
import DashboardAssets from "@/lib/assets/dashboard";
import { Help, Out, Settings } from "@/lib/svg/dashboard";
import Search from "@/lib/svg/dashboard/Search";
import { signOut } from "@/services/auth/queries";
import { errorToast } from "@/utils/helper";
import { AppRoutes } from "@/utils/routes";
import { SidebarLinks } from "@/utils/static";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

const Sidebar = () => {
  const router = useRouter();
  const signoutHandler = async () => {
    try {
      await signOut();
      router.push(AppRoutes.auth.login.path);
    } catch (error: any) {
      errorToast(error.message);
    }
  };
  return (
    <aside className="p-4 flex flex-col justify-between h-full">
      <div className="flex flex-col items-center gap-16">
        <div className="w-8 h-8">
          <Image src={DashboardAssets.Avatar} alt="Umi Logo" />
        </div>
        <Link href="#">
          <Search color="#868686" />
        </Link>
      </div>
      <div className="flex flex-col items-center gap-2">
        {SidebarLinks.map((link, i) => {
          const active = link.route.includes("home");
          const activeColor = active ? "#C2C2C2" : "#868686";
          return (
            <div key={i} className="relative">
              {active && (
                <motion.div
                  className="absolute top-0 left-0 h-full w-full bg-grey-700 rounded-[7px]"
                  layoutId="sidebar-main-links"
                />
              )}
              <Link
                href={link.route}
                className="w-10 h-10 flex items-center justify-center bg-transparent relative"
              >
                {link.icon(activeColor)}
              </Link>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col items-center gap-2">
        <Link
          href="#"
          className="w-10 h-10 flex items-center justify-center rounded-[7px]"
        >
          <Help />
        </Link>
        <Link
          href="#"
          className="w-10 h-10 flex items-center justify-center rounded-[7px]"
        >
          <Settings />
        </Link>
        <button
          title="Logout"
          onClick={signoutHandler}
          className="w-10 h-10 flex items-center justify-center rounded-[7px]"
        >
          <Out />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
