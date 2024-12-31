"use client";

import { useState, useEffect, useRef } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { DialogTitle } from "@radix-ui/react-dialog";
import Lenis from "lenis";

const links = [
    { name: "Home", path: "#home" },
    { name: "Sobre", path: "#sobre" },
    { name: "Projetos", path: "#projetos" },
];

const MobNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.05,
        });
        lenisRef.current = lenis;

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetHash: string) => {
        if (targetHash.startsWith("#")) {
            e.preventDefault();
            const targetElement = document.querySelector(targetHash);

            if (targetElement instanceof HTMLElement) {
                lenisRef.current?.scrollTo(targetElement);
            }

            setTimeout(() => setIsOpen(false), 30);
        }
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <button className="flex justify-center items-center">
                    <CiMenuFries className="text-[32px] text-azul" />
                </button>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <DialogTitle className="hidden">Menu de Navegação</DialogTitle>

                {/* Logo */}
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-6xl font-semibold">
                            Digo<span className="text-azul">.</span>
                        </h1>
                    </Link>
                </div>

                {/* Itens */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => (
                        <Link
                            href={link.path}
                            key={index}
                            className={`${link.path === pathname &&
                                "text-white border-b-2 border-azul"
                                } capitalize text-xl hover:text-azul transition-all`}
                            onClick={(e) => handleLinkClick(e, link.path)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobNavbar;
