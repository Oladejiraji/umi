import Link from "next/link";
import React from "react";
import Menu from "./menu";

export default function Header() {
  return (
    <div className="app_landing_header justify-content-end flex">
      <div className="app_landing_header__ctt flex w-full justify-end">
        <Menu />
        <div className="app_landing_header__nav flex items-center gap-4">
          <Link href="#" className="app_landing_header__nav__login">
            Log in
          </Link>

          <Link href="#" className="app_landing_header__nav__join">
            Join Now
          </Link>
        </div>
      </div>
    </div>
  );
}
