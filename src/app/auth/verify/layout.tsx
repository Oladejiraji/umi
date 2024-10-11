import React, { Suspense } from "react";

const VerifyLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Suspense>{children}</Suspense>;
};

export default VerifyLayout;
