"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
    const [lightMode, setLightMode] = useState(false);


    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "light") {
            document.documentElement.classList.add("light");
            setLightMode(true);
        }
    }, []);


    function toggleTheme() {
        const html = document.documentElement;

        if (lightMode) {
            html.classList.remove("light");
            localStorage.setItem("theme", "dark");
        } else {
            html.classList.add("light");
            localStorage.setItem("theme", "light");
        }

        setLightMode(!lightMode);
    }


    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="
                fixed
                top-6
                right-6
                md:top-10
                md:right-12
                z-50

                group
                flex
                items-center
                justify-end
                gap-3

                text-subtle
                hover:text-foreground

                transition-colors
                duration-300
            "
        >

            {/* Hover label */}
            <span
                className="
                    font-mono
                    text-xs
                    uppercase
                    tracking-[0.25em]
                    whitespace-nowrap

                    opacity-0
                    translate-x-3

                    pointer-events-none

                    transition-all
                    duration-300

                    group-hover:opacity-100
                    group-hover:translate-x-0
                "
            >
                {lightMode ? "Dark Mode" : "Light Mode"}
            </span>


            {/* Icon */}
            <span
                className="
                    transition-transform
                    duration-300
                    group-hover:scale-110
                "
            >
                {lightMode ? (
                    <Moon size={18} />
                ) : (
                    <Sun size={18} />
                )}
            </span>

        </button>
    );
}