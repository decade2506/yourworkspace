'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Nav from './Nav';
import MobileNav from './MobileNav';

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    // Function to handle scroll event
    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    // Add scroll event listener when component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Calculate background opacity based on scroll position
    // Start with 0.6 opacity (your bg-green-50/60) and decrease to 0
    const bgOpacity = Math.max(0, 0.3 + (scrollPosition / 300) * 0.5);

    return (
        <header
            className={`w-full py-2 xl:py-4 backdrop-blur-sm fixed top-0 left-0 z-50 transition-all duration-300 h-[80px] border-b-2`}
            style={{
                backgroundColor: `rgba(255,255,255 , ${bgOpacity})`,
                transform: bgOpacity === 0 ? 'translateY(-100%)' : 'translateY(0)'
            }}
        >
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <div className="flex items-center gap-3">
                        <Image
                            src="/brandpic/logo.png"
                            alt="Logo"
                            width={92}
                            height={60}
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