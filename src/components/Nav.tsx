"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "About",
        path: "/about",
      },
    {
        name: "Workspace",
        path: "/workspace",
    },
    {
        name: "Coffee",
        path: "/coffee",
    },
    {
        name: "Blog",
        path: "/blog",
    },
    {
        name: "Contact",
        path: "/contact",
      },
]

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-7">
            {Links.map((link,index) => {
                return (
                    <Link href={link.path} key={index} className={`${link.path===pathname && "text-accent"} font-medium hover:text-accent`}>
                        {link.name}
                    </Link>
                );
            })  }
        </nav>
    );
}

export default Nav;