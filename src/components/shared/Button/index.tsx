import React, { ReactNode } from "react";

import cx from "classnames";

import { Button as ShadCNButton } from "@/components/ui/button";
import Loader2 from "../Loader/Loader2";

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
          `${className} font-geist-500 h-12 gap-1`,
          {
            "opacity-80": disabled,
          },
          { "cursor-progress opacity-85": loading },
        )}
        type={type}
        {...rest}
      >
        {loading ? <Loader2 /> : children}
      </ShadCNButton>
    </>
  );
};

export default Button;
