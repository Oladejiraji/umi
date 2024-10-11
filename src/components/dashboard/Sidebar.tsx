"use client";
import DashboardAssets from "@/lib/assets/dashboard";
import { Help, Out, Settings } from "@/lib/svg/dashboard";
import Search from "@/lib/svg/dashboard/Search";
import { SidebarLinks } from "@/utils/static";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Sidebar = () => {
  const signoutHandler = async () => {
    // try {
    //   await signOut();
    //   router.push(AppRoutes.auth.login.path);
    // } catch (error: any) {
    //   errorToast(error.message);
    // }
  };
  return (
    <aside className="flex h-full flex-col justify-between p-4">
      <div className="flex flex-col items-center gap-16">
        <div className="h-8 w-8">
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
                  className="absolute left-0 top-0 h-full w-full rounded-[7px] bg-grey-700"
                  layoutId="sidebar-main-links"
                />
              )}
              <Link
                href={link.route}
                className="relative flex h-10 w-10 items-center justify-center bg-transparent"
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
          className="flex h-10 w-10 items-center justify-center rounded-[7px]"
        >
          <Help />
        </Link>
        <Link
          href="#"
          className="flex h-10 w-10 items-center justify-center rounded-[7px]"
        >
          <Settings />
        </Link>
        <button
          title="Logout"
          onClick={signoutHandler}
          className="flex h-10 w-10 items-center justify-center rounded-[7px]"
        >
          <Out />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
