import { Bell, Gallery, Home, Stats, Vr } from "@/lib/svg/dashboard";
import { AppRoutes } from "./routes";
import { convertBoxLength } from "./helper";

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

export const HomeSidebarLinks = [];

export const bgCards = [
  {
    id: 1,
    width: convertBoxLength(71),
    height: convertBoxLength(71),
    radius: convertBoxLength(22),
    position: [-0.25, 0, 1],
  },

  {
    id: 2,
    width: convertBoxLength(71),
    height: convertBoxLength(71),
    radius: convertBoxLength(22),
    position: [0.25, 0, -1],
  },

  {
    id: 3,
    width: convertBoxLength(72),
    height: convertBoxLength(87),
    radius: convertBoxLength(22),
    position: [-1.6, 0.2, -0.2],
  },

  {
    id: 4,
    width: convertBoxLength(72),
    height: convertBoxLength(72),
    radius: convertBoxLength(22),
    position: [-1.8, -1, 0.2],
  },

  {
    id: 5,
    width: convertBoxLength(72),
    height: convertBoxLength(72),
    radius: convertBoxLength(22),
    position: [-3, -0.3, -0.2],
  },

  {
    id: 6,
    width: convertBoxLength(72),
    height: convertBoxLength(100),
    radius: convertBoxLength(22),
    position: [0.25, -1.2, 0.4],
  },

  {
    id: 7,
    width: convertBoxLength(72),
    height: convertBoxLength(72),
    radius: convertBoxLength(22),
    position: [1.5, -0.5, -0.4],
  },

  {
    id: 8,
    width: convertBoxLength(72),
    height: convertBoxLength(100),
    radius: convertBoxLength(22),
    position: [1.7, 1, -0.23],
  },

  {
    id: 9,
    width: convertBoxLength(72),
    height: convertBoxLength(72),
    radius: convertBoxLength(22),
    position: [1.9, 0.6, 0.6],
  },
];

export const ProfessionOptions = [
  { label: "Visual Designer", value: "Visual Designer" },
  { label: "Digital Artist", value: "Digital Artist" },
  { label: "Photographer", value: "Photographer" },
  { label: "Motion Designer", value: "Motion Designer" },
  { label: "Other", value: "Other" },
];

export const UmiUsageOptions = [
  { label: "I'd just like to explore", value: "I'd just like to explore" },
  { label: "Design Inspiration", value: "Design Inspiration" },
  {
    label: "I came to scout the competition",
    value: "I came to scout the competition",
  },
  { label: "Portfolio", value: "Portfolio" },
  { label: "Don't know", value: "Don't know" },
  { label: "Other", value: "Other" },
];
