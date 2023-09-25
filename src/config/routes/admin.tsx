import { SingleNavigationItemWithIcon } from "@/types/navigation";
import {
  ChatBubbleIcon,
  FileTextIcon,
  ImageIcon,
  PersonIcon,
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
