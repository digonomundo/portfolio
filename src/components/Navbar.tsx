import Lenis from "lenis";
import React, { useEffect } from "react";

const LinksNavBar = () => {
    const links = [
        { name: "Home", path: "#home" },
        { name: "Sobre", path: "#sobre" },
        { name: "Projetos", path: "#projetos" },
    ];

    return (
        <nav className="flex gap-8">
            {links.map((link) => (
                <a
                    href={link.path}
                    key={link.name}
                    className="capitalize font-medium transition-all text-white hover:border-b-2 border-azul hover:text-azul"
                >
                    {link.name}
                </a>
            ))}
        </nav>
    );
};

const Navbar = () => {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.05,
        });

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        const handleLinkClick = (e: Event) => {
            const target = e.currentTarget as HTMLAnchorElement;
            const targetHash = target.getAttribute("href");
            if (targetHash?.startsWith("#")) {
                e.preventDefault();
                const targetElement = document.querySelector(targetHash);
                if (targetElement instanceof HTMLElement) lenis.scrollTo(targetElement);
            }
        };

        const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
        links.forEach((link) => link.addEventListener("click", handleLinkClick));

        return () => {
            lenis.destroy();
            links.forEach((link) => link.removeEventListener("click", handleLinkClick));
        };
    }, []);

    return <LinksNavBar />;
};

export default Navbar;