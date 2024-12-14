"use client";

import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci'
import { DialogTitle } from '@radix-ui/react-dialog';

const links = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Sobre',
        path: '/sobre',
    },
    {
        name: 'Projetos',
        path: '/projetos',
    },
];

const MobNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const handleLinkClick = () => {
        setTimeout(() => { setIsOpen(false) }, 300);
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <button className="flex justify-center items-center">
                    <CiMenuFries className="text-[32px] text-azul" />
                </button>
            </SheetTrigger>
            <SheetContent className="flex flex-col" >
                <DialogTitle className='hidden'>Menu de Navegação</DialogTitle>

                {/* Logo */}
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/" className="">
                        <h1 className="text-6xl font-semibold =">
                            Digo<span className="text-azul">.</span>
                        </h1>
                    </Link>
                </div>

                {/* Itens */}
                <nav className='flex flex-col justify-center items-center gap-8'>
                    {links.map((link, index) => {
                        return (
                            <Link href={link.path} key={index}
                                className={`${link.path === pathname && "text-white border-b-2 border-azul"} capitalize text-xl hover:text-azul transition-all`} onClick={handleLinkClick}>
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobNavbar