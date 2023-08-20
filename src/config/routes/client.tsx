import { NestedNavigationItem } from "@/types/interfaces/navigation.interface";

export const CLIENT_NAVIGATION_ROUTES: NestedNavigationItem[] = [
  {
    title: "Ogłoszenia",
    nestedRoutes: [
      {
        title: "Ogłoszenia Parafialne",
        href: "/announcements",
        description: "Aktualne ogłosznenia na ten tydzień...",
      },
      {
        title: "Intencje Parafialne",
        href: "/intentions",
        description: "Lorem ipsum dolor sit amet...",
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
        title: "Sakramenty",
        href: "/sacrament",
        description: "Informacje o sakramentach...",
      },
      {
        title: "Pogrzeb",
        href: "/funeral",
        description: "Procedury związane z pogrzebami...",
      },
      {
        title: "Grupy Duszpasterskie",
        href: "/groups",
        description: "Lista grup działających przy parafii...",
      },
    ],
  },
  {
    title: "Parafia",
    nestedRoutes: [
      {
        title: "Patron",
        href: "/patron",
        description: "Informacje o patronie parafii...",
      },
      {
        title: "Nabożeństwa",
        href: "/services",
        description: "Harmonogram nabożeństw...",
      },
      {
        title: "Rada Duszpasterska",
        href: "/council",
        description: "Zadania i działania rady duszpasterskiej...",
      },
      {
        title: "Proboszczowie w historii parafii",
        href: "/clergy",
        description: "Lista proboszczów, którzy prowadzili parafię...",
      },
      {
        title: "Kancelaria Parafialna",
        href: "/office",
        description: "Godziny otwarcia i kontakt do kancelarii...",
      },
    ],
  },
  {
    title: "Kontakt",
    href: "/contact",
  },
];
