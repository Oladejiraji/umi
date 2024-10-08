import React from "react";

interface IProps {
  color: string;
  width?: string;
  height?: string;
}

function Search({ color, width, height }: IProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "14"}
      height={height || "14"}
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        fill={color}
        d="M6.115 12.23c-1.707 0-3.153-.592-4.338-1.776C.592 9.269 0 7.823 0 6.115c0-1.707.592-3.154 1.777-4.338C2.962.592 4.407 0 6.115 0c1.708 0 3.154.592 4.339 1.777 1.184 1.184 1.777 2.63 1.777 4.338 0 .714-.12 1.396-.36 2.046-.24.65-.56 1.216-.96 1.697l2.754 2.753c.139.139.21.313.213.522a.707.707 0 01-.213.532.718.718 0 01-.527.218.717.717 0 01-.526-.218l-2.754-2.754c-.5.413-1.075.736-1.725.97-.65.233-1.323.35-2.018.35zm0-1.5c1.289 0 2.38-.446 3.274-1.34.895-.895 1.342-1.986 1.342-3.275 0-1.288-.447-2.38-1.342-3.274C8.495 1.947 7.404 1.5 6.115 1.5c-1.288 0-2.38.447-3.274 1.341C1.947 3.735 1.5 4.827 1.5 6.115c0 1.289.447 2.38 1.341 3.274.895.895 1.986 1.342 3.274 1.342z"
      ></path>
    </svg>
  );
}

export default Search;
