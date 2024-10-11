"use client";
import React, {
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";

import cx from "classnames";
import { Input as ShadInput } from "../../ui/input";
import { RenderIf } from "../render-if";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerClass?: string;
  className?: string;
  errors?: any;
  touched?: any;
  subText?: string;
  details?: string;
  lefticon?: ReactNode;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  name: string;
  validate?: boolean;
  ref?: RefObject<HTMLInputElement>;
  focusOnMount?: boolean;
}

const Input = ({
  label,
  containerClass,
  errors,
  touched,
  id,
  required,
  type = "text",
  subText,
  details,
  lefticon,
  onChange,
  onBlur,
  name,
  validate = true,
  focusOnMount = false,
  className,
  ...rest
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isPasswordField, _] = useState(type === "password");
  const hasError = ((errors[name] && touched[name]) || false) && validate;
  useEffect(() => {
    if (!focusOnMount) return;
    inputRef.current?.focus();
  }, []);
  return (
    <div
      className={cx(
        "space-y-0",
        { "flex flex-col gap-1": !!label },
        { [`${containerClass}`]: !!containerClass },
      )}
    >
      {label ? (
        <label
          className={cx(
            "font-geist-medium text-base leading-[1.4rem] text-[#5D5D5D]",
          )}
          htmlFor={id}
        >
          {label} {required && <span className="text-danger-50">*</span>}
        </label>
      ) : null}
      <div className="">
        <div className={cx({ "flex items-center gap-4": details })}>
          <div className={cx("relative", { "w-[60%]": details })}>
            <RenderIf condition={!!lefticon}>
              <div className="absolute left-0 top-[50%] translate-y-[-50%]">
                {lefticon}
              </div>
            </RenderIf>
            <ShadInput
              className={cx(
                "!mt-0 h-11 border border-[#1E1E1E] bg-[#171717] outline-0 focus:outline-0 focus:ring-transparent focus-visible:ring-transparent",
                { "border-[red]": !!hasError },
                { [`${className}`]: !!className },
              )}
              id={id}
              ref={inputRef}
              onChange={onChange}
              onBlur={onBlur}
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
      </div>
      {!!hasError && <p className="text-xs text-red-500">{errors[name]}</p>}
      {subText && (
        <p className="mt-0.5 text-xs font-normal leading-4 text-neutral-600">
          {subText}
        </p>
      )}
    </div>
  );
};

export default Input;
