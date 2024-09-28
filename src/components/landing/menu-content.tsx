import React, { ReactNode } from "react";
import Link from "next/link";
import { Coffee, Github, GlobeUk, Twitter } from "@/lib/svg/icons";

interface IMenuContentItem {
  label: string;
  icon?: ReactNode;
}

const MenuContentItem = (props: IMenuContentItem) => {
  const { icon, label } = props;
  return (
    <div className="app_menu_content__item flex items-center justify-between">
      <div className="flex items-center gap-2">
        <p className="app_menu_content__item__label">{label}</p>
        {icon}
      </div>

      <p className="app_menu_content__item__coming">Coming soon</p>
    </div>
  );
};

export default function MenuContent() {
  return (
    <div className="app_menu_content flex h-full flex-col justify-between px-6 pb-2 pt-6">
      <div className="app_menu_content__ctt flex flex-col gap-10">
        <h5 className="app_menu_content__ctt__title">
          Umi is sill in beta and is constantly being updated
        </h5>

        <div className="flex flex-col gap-2">
          <MenuContentItem label="Explore" icon={<GlobeUk />} />
          <MenuContentItem label="Galleries" />
          <MenuContentItem label="Pro" />
          <MenuContentItem label="Support Us" icon={<Coffee />} />
          <p className="app_menu_content__ctt__notes">Notes</p>
        </div>
      </div>

      <div className="app_menu_content__footer flex justify-center gap-4">
        <Link href="#">
          <Github />
        </Link>

        <Link href="#">
          <Twitter />
        </Link>
      </div>
    </div>
  );
}
