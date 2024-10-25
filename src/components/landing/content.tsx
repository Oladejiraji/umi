import React from "react";
import Image from "next/image";
import landing from "@/lib/assets/landing";
import { ArrowForward } from "@/lib/svg/icons";

export default function Content() {
  return (
    <div className="app_landing__ctt">
      <div className="app_landing__ctt__left flex flex-col gap-5">
        <div className="app_landing__ctt__left__img">
          <Image src={landing.left} alt="left" />
        </div>

        <div className="app_landing__ctt__left__ctt flex flex-col gap-1">
          <div className="">
            <button type="button" className="app_landing__ctt__left__ctt__btn">
              exhibition
            </button>
          </div>
          <p className="app_landing__ctt__left__ctt__text">
            Immersive environments for your works
          </p>
        </div>
      </div>
      <div className="app_landing__ctt__center flex flex-col items-center gap-10">
        <div className="flex justify-center">
          <div className="app_landing__ctt__center__early">
            <p className="app_landing__ctt__center__early__text">
              Umi is still in beta, but you can always get early access
            </p>
            <ArrowForward />
          </div>
        </div>

        <div className="app_landing__ctt__center__banner flex flex-col items-center gap-5">
          <h3 className="app_landing__ctt__center__banner__big">
            Gallery, Studio, Exhibition We call it Home.
          </h3>

          <p className="app_landing__ctt__center__banner__small">
            Display your works in the louvre, or on the moon. We’ve got you
            either way.
          </p>
        </div>

        <div className="">
          <button type="button" className="app_landing__ctt__center__btn">
            Upload image
          </button>
        </div>
      </div>
      <div className="app_landing__ctt__right flex flex-col gap-2">
        <div className="app_landing__ctt__right__ctt">
          <p className="app_landing__ctt__right__ctt__text app_landing__ctt__right__ctt__text__light">
            now on view -
          </p>
          <p className="app_landing__ctt__right__ctt__text">Your best works</p>
        </div>
        <div className="app_landing__ctt__right__img">
          <Image src={landing.right} alt="right" />
        </div>
      </div>
    </div>
  );
}
