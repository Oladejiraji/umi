import React from "react";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Sidebar } from "@/components/dashboard";
import { AppRoutes } from "@/utils/routes";

interface IProps {
  children: React.ReactNode;
}

export default async function Layout(props: IProps) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect(AppRoutes.auth.login.path);
  }

  const { children } = props;

  return (
    <main className="app_dashboard_layout flex w-full flex-1">
      <div className="w-16 bg-primary-100">
        jj
        <Sidebar />
      </div>
      <div className="flex-1">{children}</div>
    </main>
  );
}
