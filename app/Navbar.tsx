'use client';

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { AiFillBug } from "react-icons/ai";
import classNames from 'classnames';

const Navbar = () => {
    const currentPath = usePathname();

    const links = [
        {
            label: "Dashboard",
            href: "/"
        }, {
            label: "Issues",
            href: "/issues"
        }
    ]
        
    return (
        <nav className='flex items-center px-5 border-b space-x-6 h-14 mb-5'>
            <Link href="/" className='text-black'>
                <AiFillBug size="1.5rem"/>
            </Link>
            <ul className='flex space-x-6'>
                {links.map((link, index) => (
                    <li key={index}>
                        <Link 
                            href={link.href} 
                            className={classNames({
                                'text-zinc-500': link.href !== currentPath,
                                'text-black': link.href === currentPath,
                                'hover:text-black transition-colors': true,
                                'font-medium': true,
                            })}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar