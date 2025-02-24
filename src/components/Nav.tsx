"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Workspace",
        path: "/Workspace",
    },
    {
        name: "Blog",
        path: "/Blog",
    },
]

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
            {Links.map((link,index) => {
                return (
                    <Link href={link.path} key={index} className={`${link.path===pathname && "text-accent border-b-2 border-accent"}`}>
                        {link.name}
                    </Link>
                );
            })  }
        </nav>
    );
}

export default Nav