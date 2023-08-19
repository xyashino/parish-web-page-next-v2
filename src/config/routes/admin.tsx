import { SingleNavigationItemWithIcon } from "@/types/interfaces/navigation.interface";
import {
  ImageIcon,
  PersonIcon,
  ChatBubbleIcon,
  FileTextIcon,
} from "@radix-ui/react-icons";

export const ADMIN_NAVIGATION_ROUTES: SingleNavigationItemWithIcon[] = [
  {
    href: "/admin/intentions",
    title: "Intencje",
    icon: <ChatBubbleIcon />,
  },
  {
    href: "/admin/announcements",
    title: "Ogłoszenia",
    icon: <FileTextIcon />,
  },
  {
    href: "/admin/gallery",
    title: "Galeria",
    icon: <ImageIcon />,
  },
  {
    href: "/admin/administrators",
    title: "Administratorzy",
    icon: <PersonIcon />,
  },
];
