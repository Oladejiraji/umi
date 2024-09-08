import {
  Command as ShadcnCommand,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandEmpty,
} from "@/components/ui/command";
import cx from "classnames";
import { useRef, useState } from "react";

interface IProps {
  commandData: { value: string; label: string }[];
  placeholder: string;
  onSelect: (value: string) => void;
  inputClass?: string;
  className?: string;
}

export default function Command(props: IProps) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { commandData, placeholder, onSelect, inputClass, className } = props;
  return (
    <ShadcnCommand
      className={cx("h-full", {
        [`${className}`]: !!className,
      })}
    >
      <CommandInput
        placeholder={placeholder}
        ref={inputRef}
        value={inputValue}
        className={cx("", {
          [`${inputClass}`]: !!inputClass,
        })}
        onValueChange={(search) => {
          setInputValue(search);
        }}
      />
      <CommandEmpty
        onClick={() => {
          onSelect(inputValue);
          setInputValue("");
        }}
        className=" cursor-pointer  italic bg-neutral-900 py-1 px-2"
      >
        <p className="block  truncate font-semibold text-primary">
          {inputValue}
        </p>
      </CommandEmpty>

      <CommandList hidden={!inputValue}>
        <CommandGroup>
          {commandData.map((item, i) => (
            <CommandItem
              key={i}
              onSelect={(value) => {
                onSelect(value);
                setInputValue("");
              }}
            >
              <span>{item.label}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
      </CommandList>
    </ShadcnCommand>
  );
}
