"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

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