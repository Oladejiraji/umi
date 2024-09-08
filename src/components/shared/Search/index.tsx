import { Input } from "@/components/ui/input";
import React, { ChangeEventHandler, ReactNode } from "react";
import { RenderIf } from "../render-if";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerClass?: string;
  subText?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  lefticon?: ReactNode;
  command?: string;
}

const Search = (props: InputProps) => {
  const { value, onChange, placeholder, lefticon, command } = props;
  return (
    <div className="relative h-full">
      <RenderIf condition={!!lefticon}>
        <div className="absolute left-[10px] top-[50%] translate-y-[-50%]">
          {lefticon}
        </div>
      </RenderIf>
      <Input
        value={value}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
        className="h-full border border-primary-300 bg-transparent px-8 font-geist-medium text-xs text-grey-1000"
      />
      <RenderIf condition={!!command}>
        <div className="absolute right-[10px] top-[50%] translate-y-[-50%] bg-primary-100 p-0 text-xs text-grey-1100">
          ⌘{command}
        </div>
      </RenderIf>
    </div>
  );
};

export default Search;
