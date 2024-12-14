"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Sobre",
        path: "/sobre",
    },
    {
        name: "Projetos",
        path: "/projetos",
    },
];

const Navbar = () => {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <nav className="flex gap-8">
            {Links.map((link, index) => {
                return (
                    <Link href={link.path} key={index} className={`${link.path === pathname && "text-white border-b-2 border-azul"} capitalize font-medium hover:text-azul transition-all`}>
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Navbar;