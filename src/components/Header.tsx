import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import Nav from "@/components/Nav"

const Header = () => {
    return (
        <header className="py-5 xl:py-8 bg-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    Logo
                </Link>
                {/* Navigation */}
                <div className="hidden xl:flex">
                   <Nav />  
                </div>
                {/* Mobile Nav */}
               <div className="xl:hidden">Mobile Nav</div>
            </div>
        </header>
    );
}

export default Header;