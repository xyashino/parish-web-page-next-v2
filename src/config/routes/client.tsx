import { NestedNavigationItem } from "@/types/interfaces/navigation.interface";

export const CLIENT_NAVIGATION_ROUTES: NestedNavigationItem[] = [
  {
    title: "Ogłoszenia",
    nestedRoutes: [
      {
        title: "Ogłoszenia Parfialne",
        href: "/announcements",
        description: "Lorem",
      },
      {
        title: "Intencje Parfialne",
        href: "/intentions",
        description: "Lorem",
      },
    ],
  },
  {
    title: "Galeria",
    href: "/gallery",
  },
  {
    title: "Duszpasterstwo",
    nestedRoutes: [
      {
        title: "Ogłoszenia Parfialne",
        href: "/announcements",
        description: "Lorem",
      },
      {
        title: "Intencje Parfialne",
        href: "/intentions",
        description: "Lorem",
      },
    ],
  },
  {
    title: "Parafia",
    nestedRoutes: [
      {
        title: "Ogłoszenia Parfialne",
        href: "/announcements",
        description: "Lorem",
      },
      {
        title: "Intencje Parfialne",
        href: "/intentions",
        description: "Lorem",
      },
    ],
  },
  {
    title: "Kontakt",
    href: "/contact",
  },
];
