"use client";

import { useEffect, useState } from "react";

const links = [
    { id: "home", label: "Home" },
    { id: "profile", label: "Profile" },
    { id: "work", label: "Work" },
    { id: "contact", label: "Contact" },
];

export default function MobileNavigation() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const sections = links
            .map((link) => document.getElementById(link.id))
            .filter(Boolean) as HTMLElement[];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-45% 0px -45% 0px",
                threshold: 0,
            }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <nav
            aria-label="Mobile section navigation"
            className="
                md:hidden
                fixed
                bottom-0
                left-0
                right-0
                z-50
                border-t
                border-border
                bg-background/90
                backdrop-blur-md
            "
        >
            <ul className="flex py-4">
                {links.map((link) => (
                    <li
                        key={link.id}
                        className="flex-1 text-center"
                    >
                        <a
                            href={`#${link.id}`}
                            aria-current={
                                activeSection === link.id
                                    ? "page"
                                    : undefined
                            }
                            className={`
                                block
                                py-2
                                font-mono
                                text-[11px]
                                uppercase
                                tracking-[0.15em]
                                transition-colors
                                duration-300
                                ${activeSection === link.id
                                    ? "text-foreground"
                                    : "text-subtle"
                                }
                            `}
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}