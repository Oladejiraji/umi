import React from "react";

interface IProps {
  color: string;
}

function Filter({ color }: IProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        fill={color}
        d="M6.708 13.792V9.208h1.084v1.75h6v1.084h-6v1.75H6.708zm-6.5-1.75v-1.084h4.584v1.084H.208zm3-2.75v-1.75h-3V6.458h3v-1.75h1.084v4.584H3.208zm3-1.75V6.458h7.584v1.084H6.208zm3-2.75V.208h1.084v1.75h3.5v1.084h-3.5v1.75H9.208zm-9-1.75V1.958h7.584v1.084H.208z"
      ></path>
    </svg>
  );
}

export default Filter;
