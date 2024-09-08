import React from "react";

interface IProps {
  color: string;
}

function Right({ color }: IProps) {
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
        d="M10.01 4.542H1.46a.528.528 0 01-.543-.538c0-.152.052-.281.155-.387a.52.52 0 01.387-.159h8.55L7.974 1.423a.557.557 0 01-.173-.383.514.514 0 01.163-.391.549.549 0 01.393-.169c.14.003.268.062.383.177l2.885 2.885a.626.626 0 01.186.454.64.64 0 01-.048.25.753.753 0 01-.145.219L8.74 7.343a.502.502 0 01-.368.163.57.57 0 01-.387-.176.524.524 0 01-.167-.387.551.551 0 01.177-.387l2.014-2.014z"
      ></path>
    </svg>
  );
}

export default Right;
