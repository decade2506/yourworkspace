"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import useInvalidname from "@/lib/use-invalid-paths";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Function to handle scroll event
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  // Add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate background opacity based on scroll position
  const bgOpacity = Math.max(0, 0.4 + (scrollPosition / 300) * 0.5);
  const invalidPath: boolean = useInvalidname();
  if (invalidPath) return <></>;

  return (
    <header
      className={`w-full py-2 xl:py-4 backdrop-blur-sm fixed top-0 left-0 z-50 transition-all duration-300 h-[80px] xxs:px-5 md:px-24`}
      style={{
        backgroundColor: `rgba(255,255,255 , ${bgOpacity})`,
        transform: bgOpacity === 0 ? "translateY(-100%)" : "translateY(0)",
      }}
    >
      <div className="container flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center justify-center xl:mt-[-8%]">
            <Image
              src="/brandpic/logo.png"
              alt="Logo"
              width={92}
              height={60}
              priority
              className="w-[92px] h-[60px] object-contain"
            />
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
};

export default Header;
