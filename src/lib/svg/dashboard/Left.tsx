import React from "react";

interface IProps {
  color: string;
}

function Left({ color }: IProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="8"
      fill="none"
      viewBox="0 0 12 8"
    >
      <path
        fill={color}
        d="M2.49 3.458h8.55a.528.528 0 01.543.538.532.532 0 01-.155.387.52.52 0 01-.387.159H2.49l2.035 2.035c.11.11.167.238.173.383a.514.514 0 01-.163.391.549.549 0 01-.393.169.547.547 0 01-.383-.177L.875 4.458a.625.625 0 01-.186-.454.64.64 0 01.048-.25.752.752 0 01.144-.219L3.76.657a.502.502 0 01.368-.163.57.57 0 01.387.176c.114.115.17.244.167.387a.55.55 0 01-.177.387L2.49 3.458z"
      ></path>
    </svg>
  );
}

export default Left;
