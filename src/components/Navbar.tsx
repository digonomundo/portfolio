const Navbar = () => {
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
    return (
        <nav className="flex gap-8">
            {Links.map((link, index) => (
                <a
                    href={link.path}
                    key={index}
                    className={"capitalize font-medium transition-all text-white hover:border-b-2 border-azul hover:text-azul"}>
                    {link.name}
                </a>
            ))}
        </nav>
    );
};

export default Navbar;
