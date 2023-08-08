import { SingleNavigationItem } from "@/types/interfaces/navigation.interface";
import {
  ImageIcon,
  PersonIcon,
  ChatBubbleIcon,
  FileTextIcon,
} from "@radix-ui/react-icons";

export const ADMIN_NAVIGATION_ROUTES: SingleNavigationItem[] = [
  {
    href: "/admin/intentions",
    text: "Intencje",
    icon: <ChatBubbleIcon />,
  },
  {
    href: "/admin/announcements",
    text: "Ogłoszenia",
    icon: <FileTextIcon />,
  },
  {
    href: "/admin/gallery",
    text: "Galeria",
    icon: <ImageIcon />,
  },
  {
    href: "/admin/administrators",
    text: "Administratorzy",
    icon: <PersonIcon />,
  },
];
