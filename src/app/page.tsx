import { AppRoutes } from "@/utils/routes";
import { redirect } from "next/navigation";

// Landing page can be here
export default async function Index() {
  return redirect(AppRoutes.dashboard.home.create.path);
}
