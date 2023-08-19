import {
  BackpackIcon,
  DrawingPinFilledIcon,
  EnvelopeOpenIcon,
} from "@radix-ui/react-icons";
import PhoneIcon from "@/components/icons/PhoneIcon";
import { ContactItemProps } from "@/components/contact/ContactItem";

export const CONTACT_DATA: ContactItemProps[] = [
  {
    title: "Email",
    description: "Odpowiadamy w ciągu 24 godzin.",
    href: "mailto:szczypirpan123@gmail.com",
    linkText: "szczypirpan123@gmail.com",
    icon: <EnvelopeOpenIcon />,
  },
  {
    title: "Telefon",
    description: "Prosimy o kontakt w godzinach 8:00 - 18:00.",
    triggerText: "507 577 910",
    copyText: "507 577 910",
    copy: true,
    icon: <PhoneIcon />,
  },
  {
    title: "Adres",
    description: "Na przeciwko szkoły w Gruszowie Wielkim.",
    href: "https://www.google.com/maps/place/Ko%C5%9Bci%C3%B3%C5%82+%C5%9Bw.+Maksymiliana+Kolbe+w+Gruszowie/@50.1928893,21.0308726,17z/data=!3m1!4b1!4m6!3m5!1s0x473d7bc064c094d5:0x43123091c4e284d7!8m2!3d50.1928859!4d21.0334529!16s%2Fg%2F11b7l5kcqv?entry=ttu",
    linkText: "Gruszów Wielki 205, 33-200 Dąbrowa Tarnowska",
    icon: <DrawingPinFilledIcon />,
  },
  {
    title: "Nr konta",
    description: "Dla chętnych do wspierania naszej parafii.",
    copy: true,
    triggerText: "76 9462 0003 2001 0013 3724 0001",
    copyText: "76 9462 0003 2001 0013 3724 0001",
    icon: <BackpackIcon />,
  },
];
