"use client";

import { useEffect, useState } from "react";

const Links = [
    {
        name: "Home",
        path: "#home",
    },
    {
        name: "Sobre",
        path: "#sobre",
    },
    {
        name: "Projetos",
        path: "#projetos",
    },
];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState<string>("home");

    useEffect(() => {
        const handleObserver = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleObserver, {
            threshold: 0.6, // Define quanto da seção precisa estar visível para ser considerada ativa
        });

        const sections = document.querySelectorAll("section");
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <nav className="flex gap-8">
            {Links.map((link, index) => (
                <a
                    href={link.path}
                    key={index}
                    className={`capitalize font-medium transition-all ${
                        activeSection === link.path.replace("#", "")
                            ? "text-white border-b-2 border-azul"
                            : "hover:text-azul"
                    }`}
                >
                    {link.name}
                </a>
            ))}
        </nav>
    );
};

export default Navbar;
