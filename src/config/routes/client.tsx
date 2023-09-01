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
        description: "Aktualne intencje na ten tydzien...",
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
        href: "/articles/sacrament",
        description: "Informacje o sakramentach...",
      },
      {
        title: "Pogrzeb",
        href: "/article/funeral",
        description: "Procedury związane z pogrzebami...",
      },
      {
        title: "Grupy Duszpasterskie",
        href: "/articles/groups",
        description: "Lista grup działających przy parafii...",
      },
    ],
  },
  {
    title: "Parafia",
    nestedRoutes: [
      {
        title: "Patron",
        href: "/article/patron",
        description: "Informacje o patronie parafii...",
      },
      {
        title: "Nabożeństwa",
        href: "/article/services",
        description: "Harmonogram nabożeństw...",
      },
      {
        title: "Rada Duszpasterska",
        href: "/article/council",
        description: "Zadania i działania rady duszpasterskiej...",
      },
      {
        title: "Historia Parafii",
        href: "/article/history",
        description: "Historyczne informacje dotyczące parafii...",
      },
      {
        title: "Kancelaria Parafialna",
        href: "/article/office",
        description: "Godziny otwarcia i kontakt do kancelarii...",
      },
    ],
  },
  {
    title: "Kontakt",
    href: "/contact",
  },
];
