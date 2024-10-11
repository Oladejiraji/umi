import AuthAssets from "@/lib/assets/auth";
import Image from "next/image";
import React from "react";
import cx from "classnames";

interface IProps {
  options: Array<{ label: string; value: string }>;
  value: string;
  onChange: (val: string) => void;
}

const PanelSelect = (props: IProps) => {
  const { options, value, onChange } = props;
  return (
    <div className="flex flex-col gap-2">
      {options.map((option, i) => {
        const isValue = option.value === value;
        return (
          <button
            key={i}
            type="button"
            className="flex items-center justify-between rounded-lg border border-[#111111] bg-[#0A0A0A] p-4"
            onClick={() => onChange(option.value)}
          >
            <p
              className={cx(
                "font-geist-medium text-base text-[#494949] transition-all",
                {
                  "text-white": isValue,
                },
              )}
            >
              {option.label}
            </p>
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-black">
              <div>
                <Image
                  src={isValue ? AuthAssets.Tick : AuthAssets.Dash}
                  alt="dsh assets"
                />
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default PanelSelect;
