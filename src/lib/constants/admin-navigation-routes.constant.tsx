import AddIcon from "@/components/icons/AddIcon";
import ListIcon from "@/components/icons/ListIcon";
import ProfileIcon from "@/components/icons/ProfileIcon";
import AnnouncementIcon from "@/components/icons/AnnouncementIcon";
import IntentionIcon from "@/components/icons/IntentionIcon";
import EditIcon from "@/components/icons/EditIcon";
import GalleryIcon from "@/components/icons/GalleryIcon";
import CategoriesIcon from "@/components/icons/CategoriesIcon";
import AlbumIcon from "@/components/icons/AlbumIcon";
import { NavigationItemType } from "@/types/interfaces/navigation.interface";

export const ADMIN_NAVIGATION_ROUTES: NavigationItemType[] = [
  {
    href: "/admin/intentions",
    text: "Intencje",
    icon: <IntentionIcon />,
    nestedRoutes: [
      {
        href: "",
        text: "Wszystkie",
        icon: <ListIcon />,
      },
      {
        href: "/create",
        text: "Utwórz",
        icon: <AddIcon />,
      },
    ],
  },
  {
    href: "/admin/announcements",
    text: "Ogłoszenia",
    icon: <AnnouncementIcon />,
    nestedRoutes: [
      {
        href: "",
        text: "Wszystkie",
        icon: <ListIcon />,
      },
      {
        href: "/create",
        text: "Utwórz",
        icon: <AddIcon />,
      },
    ],
  },
  {
    href: "/admin/gallery",
    text: "Galeria",
    icon: <GalleryIcon />,
    nestedRoutes: [
      {
        href: "/categories",
        text: "Katagorie",
        icon: <CategoriesIcon />,
      },
      {
        href: "/albums",
        text: "Albumy",
        icon: <AlbumIcon />,
      },
    ],
  },
  {
    href: "/admin/administrators",
    text: "Administratorzy",
    icon: <ProfileIcon />,
    nestedRoutes: [
      {
        href: "/manage",
        text: "Zarządzaj",
        icon: <EditIcon />,
      },
    ],
  },
];
