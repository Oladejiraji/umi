import {
  Bell,
  Docs,
  Gallery,
  Home,
  Stats,
  Terms,
  Vr,
} from "@/lib/svg/dashboard";
import { AppRoutes } from "./routes";

export const SidebarLinks = [
  {
    icon: (color: string) => <Home color={color} />,
    route: AppRoutes.dashboard.home.path,
  },
  {
    icon: (color: string) => <Gallery color={color} />,
    route: "#",
  },
  {
    icon: (color: string) => <Vr color={color} />,
    route: "#",
  },
  {
    icon: (color: string) => <Stats color={color} />,
    route: "#",
  },
  {
    icon: (color: string) => <Bell color={color} />,
    route: "#",
  },
];

export const HomeSidebarLinks = [
  {
    route: AppRoutes.dashboard.home.create.path,
    text: "Create Gallery",
  },
  {
    route: AppRoutes.dashboard.home.edit.path,
    text: "Edit Gallery",
  },
  {
    route: AppRoutes.dashboard.home.templates.path,
    text: "Templates",
  },
  {
    route: AppRoutes.dashboard.home.docs.path,
    text: "Documentation",
    icon: (color: string) => <Docs color={color} />,
  },
  {
    route: AppRoutes.dashboard.home.terms.path,
    text: "Terms and Condition",
    icon: (color: string) => <Terms color={color} />,
  },
];
