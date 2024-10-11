import React, { Suspense } from "react";

const CompleteLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Suspense>{children}</Suspense>;
};

export default CompleteLayout;
