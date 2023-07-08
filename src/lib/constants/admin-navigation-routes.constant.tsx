import { NavigationItemType } from "@/types/interfaces/navigation.interface";
import {
  ListBulletIcon,
  ImageIcon,
  ArchiveIcon,
  PersonIcon,
  DashboardIcon,
  ChatBubbleIcon,
  FileTextIcon,
  PlusCircledIcon,
  Pencil2Icon,
} from "@radix-ui/react-icons";

export const ADMIN_NAVIGATION_ROUTES: NavigationItemType[] = [
  {
    href: "/admin/intentions",
    text: "Intencje",
    icon: <ChatBubbleIcon />,
    nestedRoutes: [
      {
        href: "",
        text: "Wszystkie",
        icon: <ListBulletIcon />,
      },
      {
        href: "/create",
        text: "Utwórz",
        icon: <PlusCircledIcon />,
      },
    ],
  },
  {
    href: "/admin/announcements",
    text: "Ogłoszenia",
    icon: <FileTextIcon />,
    nestedRoutes: [
      {
        href: "",
        text: "Wszystkie",
        icon: <ListBulletIcon />,
      },
      {
        href: "/create",
        text: "Utwórz",
        icon: <PlusCircledIcon />,
      },
    ],
  },
  {
    href: "/admin/gallery",
    text: "Galeria",
    icon: <ImageIcon />,
    nestedRoutes: [
      {
        href: "/categories",
        text: "Katagorie",
        icon: <DashboardIcon />,
      },
      {
        href: "/albums",
        text: "Albumy",
        icon: <ArchiveIcon />,
      },
    ],
  },
  {
    href: "/admin/administrators",
    text: "Administratorzy",
    icon: <PersonIcon />,
    nestedRoutes: [
      {
        href: "/manage",
        text: "Zarządzaj",
        icon: <Pencil2Icon />,
      },
    ],
  },
];
