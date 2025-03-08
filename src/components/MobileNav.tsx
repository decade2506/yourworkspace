"use client";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet";
import { usePathname } from "next/navigation";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";

const Links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/About",
  },
  {
    name: "Workspace",
    path: "/Workspace",
  },
  {
    name: "Coffee",
    path: "/Coffee",
  },
  {
    name: "Blog",
    path: "/Blog",
  },
  {
    name: "Contact",
    path: "/Contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="flex justify-center items-center"
        onClick={() => setOpen(true)}
      >
        <CiMenuBurger className="text-[30px] border-2 text-accent"></CiMenuBurger>
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-white">
        <SheetTitle className="sr-only"></SheetTitle>
        <nav className="flex flex-col justify-center items-center mt-40 gap-10">
          {Links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${link.path === pathname &&
                  "text-accent"
                  } text-2xl hover:text-accent font-medium`}
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
