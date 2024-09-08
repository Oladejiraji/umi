import React, { ReactNode } from "react";

import cx from "classnames";

import { Button as ShadCNButton } from "@/components/ui/button";
import Loader from "../Loader";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: "default" | "destructive" | "secondary" | "ghost" | "link";
  loading?: boolean;
  size?: "default" | "sm" | "lg" | "icon";
  children: ReactNode;
}

const Button = (props: IButton) => {
  const {
    variant,
    loading,
    className,
    children,
    disabled,
    type = "submit",
    ...rest
  } = props;
  return (
    <>
      <ShadCNButton
        disabled={loading || disabled}
        variant={variant}
        className={cx(
          `${className} font-geist-500 gap-1`,
          {
            "bg-neutral-150 cursor-not-allowed border-neutral-500": disabled,
          },
          { "cursor-progress opacity-85": loading },
        )}
        type={type}
        {...rest}
      >
        {loading ? <Loader /> : children}
      </ShadCNButton>
    </>
  );
};

export default Button;
