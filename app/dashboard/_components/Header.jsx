"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation' // Import useRouter
import React, { useEffect } from 'react'

function Header(){
    const path = usePathname();
    const router = useRouter();  // Initialize useRouter

    useEffect(() => {
        console.log(path)
    }, []);

    // Function to navigate to Dashboard
    const navigateToDashboard = () => {
        router.push('/dashboard');  // Navigate to dashboard
    };

    return (
        <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
            <Image src={'/logo.svg'} width={160} height={100} alt='logo' />
            <ul className='hidden md:flex gap-6'>
                <li 
                    onClick={navigateToDashboard} // Add onClick handler
                    className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                    ${path == '/dashboard' && 'text-primary font-bold'}
                    `}
                >
                    Dashboard
                </li>
            </ul>
            <UserButton />
        </div>
    );
}

export default Header;





