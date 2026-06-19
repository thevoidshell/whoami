export default function Navigation() {
    const links = [
        { id: "home", label: "01 HOME" },
        { id: "profile", label: "02 PROFILE" },
        { id: "work", label: "03 WORK" },
        { id: "resume", label: "04 RESUME" },
    ];

    return (
        <aside
            className="
                fixed
                left-12
                top-1/2
                -translate-y-1/2
                z-50
                w-48
            "
        >
            <nav>
                <ul className="flex flex-col gap-8">
                    {links.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                className="
                                    font-mono
                                    text-sm
                                    uppercase
                                    tracking-[0.25em]
                                    text-muted
                                    hover:text-foreground
                                    transition-colors
                                    duration-200
                                "
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}