import { AppRoutes } from "@/utils/routes";
import { redirect } from "next/navigation";

export default async function Index() {
  return redirect(AppRoutes.dashboard.home.create.path);
}
