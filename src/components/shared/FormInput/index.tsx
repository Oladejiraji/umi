"use client";
import React, { ReactNode, useState } from "react";

import cx from "classnames";
import { type FieldError } from "react-hook-form";

import { Input as ShadInput } from "../../ui/input";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RenderIf } from "../render-if";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerClass?: string;
  error?: FieldError;
  subText?: string;
  details?: string;
  lefticon?: ReactNode;
}

/**
 *
 * NOTE: Must be used in a Form(shadcn form)
 */

const Input = ({
  label,
  containerClass,
  error,
  id,
  required,
  type = "text",
  subText,
  details,
  lefticon,
  ...rest
}: InputProps) => {
  const [isPasswordField, _] = useState(type === "password");
  return (
    <FormItem
      className={cx(
        "space-y-0",
        { "flex flex-col gap-1": !!label },
        { [`${containerClass}`]: !!containerClass },
      )}
    >
      {label ? (
        <FormLabel
          className={cx(
            "font-geist-medium text-[15px] leading-[1.4rem] text-grey-100",
          )}
          htmlFor={id}
        >
          {label} {required && <span className="text-danger-50">*</span>}
        </FormLabel>
      ) : null}
      <FormControl className="">
        <div className={cx({ "flex items-center gap-4": details })}>
          <div className={cx("relative", { "w-[60%]": details })}>
            <RenderIf condition={!!lefticon}>
              <div className="absolute left-0 top-[50%] translate-y-[-50%]">
                {lefticon}
              </div>
            </RenderIf>
            <ShadInput
              className="!mt-0 h-11 border border-grey-400 focus:ring-transparent focus-visible:ring-transparent"
              id={id}
              // ref={ref}
              type={
                isPasswordField
                  ? "password"
                  : type === "password"
                    ? "text"
                    : type
              }
              {...rest}
            />
          </div>
          <RenderIf condition={!!details}>
            <p>{details}</p>
          </RenderIf>
        </div>
      </FormControl>
      {!!error && <FormMessage className="text-xs text-red-500" />}
      {subText && (
        <p className="mt-0.5 text-xs font-normal leading-4 text-neutral-600">
          {subText}
        </p>
      )}
    </FormItem>
  );
};

export default Input;
