"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
    icon: React.ReactNode;
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <div key={item.href}>
          <Link
            href={item.href}
            className={cn(
              pathname === item.href
                ? "bg-foreground hover:bg-foreground text-background font-bold"
                : "hover:bg-foreground hover:text-background hover:font-bold",
              "justify-start flex items-center text-foreground uppercase  p-2 transition-all duration-200 ease-in-out"
            )}
            draggable={false}
          >
            <span>{item.icon}</span>
            <span className="ml-2">{item.title}</span>
          </Link>
          <Separator className="bg-foreground w-5/6 mx-auto" />
        </div>
      ))}
    </nav>
  );
}
