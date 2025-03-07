'use client';

import { usePathname } from 'next/navigation';
export default function useInvalidname() {
    const pathname = usePathname();
    const invalidPaths = ['studio', 'admin'];
    const isInvalid = invalidPaths.some((path) => pathname.includes(path));
    return  isInvalid;
}