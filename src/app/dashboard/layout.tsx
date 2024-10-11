import React from "react";

interface IProps {
  children: React.ReactNode;
}

export default async function Layout(props: IProps) {
  const { children } = props;

  return (
    <main className="app_dashboard_layout flex w-full flex-1">
      <div className="flex-1">{children}</div>
    </main>
  );
}
