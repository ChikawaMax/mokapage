import Link from "next/link";
import React from "react";
import { LinksArray } from "./header";

export const Footer = () => {
  return (
    <footer className="bg-muted flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground">
        &copy; 無断複写・転載を禁じます。
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        {LinksArray.map((Links, index) => {
          return (
            <Link
              key={index}
              href={Links.link}
              className="text-xs hover:underline underline-offset-4"
              prefetch={false}
            >
              {Links.page}
            </Link>
          );
        })}
      </nav>
    </footer>
  );
};
