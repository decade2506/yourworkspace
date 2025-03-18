"use client";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Links = [
  {
    name: "Trang chủ",
    path: "/",
},
{
    name: "Về chúng tôi",
    path: "/About",
  },
{
    name: "Không gian làm việc",
    path: "/Workspace",
},
{
    name: "Cà phê",
    path: "/Coffee",
},
{
    name: "Blog",
    path: "/Blog",
},
{
    name: "Liên lạc",
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
        <GiHamburgerMenu className="text-[30px] text-[#028f76]"></GiHamburgerMenu>
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-white">
        <SheetTitle className="sr-only"></SheetTitle>
        <nav className="flex flex-col items-center mt-40 gap-10">
          {Links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${link.path === pathname &&
                  "text-accent"
                  } text-2xl hover:text-accent font-medium text-center`}
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
