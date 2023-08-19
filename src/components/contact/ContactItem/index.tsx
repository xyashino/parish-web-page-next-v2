import React from "react";
import Link from "next/link";
import { CopyItem, CopyItemProps } from "./copyItem";

interface CopyData extends CopyItemProps {
  copy: boolean;
}

interface LinkData {
  href: string;
  target?: string;
  linkText: string;
}

export type ContactItemProps = {
  title: string;
  description?: string;
  icon?: React.ReactNode;
} & (CopyData | LinkData);

export const ContactItem = ({
  icon,
  title,
  description = "",
  ...rest
}: ContactItemProps) => {
  return (
    <div>
      <h2 className="flex items-center space-x-4 mt-4 text-base font-medium text-gray-800 dark:text-white">
        <span>{title}</span>
        {icon}
      </h2>

      <p className="mt-2 text-sm text-muted-foreground">{description}</p>

      {"copy" in rest ? (
        <CopyItem triggerText={rest.triggerText} copyText={rest.copyText} />
      ) : (
        <Link
          href={rest.href}
          target={rest.target ?? "_blank"}
          className="mt-2 text-sm text-destructive hover:underline"
        >
          {rest.linkText}
        </Link>
      )}
    </div>
  );
};
