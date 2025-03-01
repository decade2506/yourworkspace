import Link from "next/link";
// import { Button } from "./ui/button";
import Image from "next/image";
import Nav from "@/components/Nav"
import MobileNav from "@/components/MobileNav";

const Header = () => {
    return (
        <header className="w-full py-2 xl:py-1 bg-white fixed top-0 left-0 h-[80px] z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <div className="flex items-center gap-3 ">
                        <Image
                        src="/brandpic/logo.png"
                        alt="Logo"
                        width={92}
                        height={60}
                        />
                        <h1 className="mt-3 text-xl">Coffee Shop <br /> & Serviced Office</h1>
                    </div>
                </Link>
                {/* Navigation */}
                <div className="hidden xl:flex">
                    <Nav />
                </div>
                {/* Mobile Nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
}

export default Header;