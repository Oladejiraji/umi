"use client";
import { HomeSidebarLinks } from "@/utils/static";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cx from "classnames";
import Image from "next/image";
import DashboardAssets from "@/lib/assets/dashboard";

const HomeSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="h-full px-3 pt-16 pb-6 flex flex-col justify-between">
      <div className=" flex flex-col justify-center gap-2 font-geist-medium">
        <h3 className="pb-2 px-3 text-xs text-grey-800">Home</h3>
        <div>
          {HomeSidebarLinks.slice(0, 3).map((link, i) => {
            const active = link.route.includes(pathname);
            return (
              <div key={i} className="relative">
                {active && (
                  <motion.div
                    className="absolute top-0 left-0 h-full w-full bg-primary-400 drop-shadow-xl rounded-[7px]"
                    layoutId="sidebar-main-links"
                  />
                )}
                <Link
                  href={link.route}
                  className={cx(
                    " bg-transparent text-[13px] relative px-3 py-2 block",
                    {
                      "text-grey-900": active,
                      "text-grey-600": !active,
                    }
                  )}
                >
                  {link.text}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        {HomeSidebarLinks.slice(-2).map((link, i) => {
          const active = link.route.includes(pathname);
          const activeColor = active ? "#C2C2C2" : "#868686";
          return (
            <div key={i} className="relative flex items-center">
              {active && (
                <motion.div
                  className="absolute top-0 left-0 h-full w-full bg-primary-400 rounded-[7px] drop-shadow-xl"
                  layoutId="sidebar-main-links"
                />
              )}
              {link.icon && <>{link.icon(activeColor)}</>}

              <Link
                href={link.route}
                className={cx(
                  " bg-transparent text-[13px] relative px-3 py-2 block",
                  {
                    "text-grey-900": active,
                    "text-grey-600": !active,
                  }
                )}
              >
                {link.text}
              </Link>
            </div>
          );
        })}
        <div className="flex items-center gap-2 mt-12 p-2 bg-primary-400 rounded-[5px] drop-shadow-base">
          <div className="w-6 h-6 ">
            <Image
              src={DashboardAssets.Kurosawa}
              alt="Profile Images"
              className="rounded"
            />
          </div>
          <h3 className="text-xs text-grey-600">A. Kurosawa</h3>
        </div>
      </div>
    </aside>
  );
};

export default HomeSidebar;
