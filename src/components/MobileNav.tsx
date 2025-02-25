"use client"
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import { CiMenuBurger } from "react-icons/ci";

const Links = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Workspace',
        path: '/Workspace',
    },
    {
        name: 'Blog',
        path: '/Blog',
    },
];

const MobileNav = () => {
    const pathname=usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuBurger className="text-[30px] text-accent"></CiMenuBurger>
            </SheetTrigger>
            <SheetContent className="flex flex-col bg-white/80">
                <nav className="flex flex-col justify-center items-center gap-10 mt-[350px]">s
                    {Links.map((link, index)=>{
                        return (
                            <Link href={link.path} key={index} className={`${link.path===pathname && "text-accent border-b-2 border-accent"} text-2xl hover:text-accent font-medium`}>
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav