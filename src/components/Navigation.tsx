"use client";

import { useEffect, useState } from "react";

const links = [
    { id: "home", label: "01 HOME" },
    { id: "profile", label: "02 PROFILE" },
    { id: "work", label: "03 WORK" },
    { id: "contact", label: "04 CONTACT" },
];

export default function Navigation() {
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
                // Creates a "detection zone" in the middle of the screen
                rootMargin: "-45% 0px -45% 0px",
                threshold: 0,
            }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

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
                                className={`
                                    block
                                    font-mono
                                    text-[13px]
                                    uppercase
                                    tracking-[0.25em]
                                    transition-all
                                    duration-300
                                    ${activeSection === link.id
                                        ? "text-foreground translate-x-4"
                                        : "text-subtle hover:text-foreground hover:translate-x-2"
                                    }
                                `}
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