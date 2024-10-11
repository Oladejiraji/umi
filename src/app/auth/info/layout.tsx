import React, { Suspense } from "react";

const InfoLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Suspense>{children}</Suspense>;
};

export default InfoLayout;
