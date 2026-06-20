import {
    FaGithub,
    FaLinkedin,
    FaFilePdf,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import { socials } from "@/data/socials";


const contacts = [
    {
        href: socials.github,
        label: "GitHub",
        icon: FaGithub,
        external: true,
    },
    {
        href: socials.linkedin,
        label: "LinkedIn",
        icon: FaLinkedin,
        external: true,
    },
    {
        href: socials.email,
        label: "Email",
        icon: MdEmail,
        external: false,
    },
    {
        href: "/resume.pdf",
        label: "Resume",
        icon: FaFilePdf,
        external: true,
    },
];


export default function ContactRail() {
    return (
        <aside
            className="
                fixed
                right-12
                top-1/2
                -translate-y-1/2
                z-50
            "
        >
            <nav>
                <ul className="flex flex-col gap-8">

                    {contacts.map((contact) => {
                        const Icon = contact.icon;

                        return (
                            <li key={contact.label}>

                                <a
                                    href={contact.href}
                                    target={
                                        contact.external
                                            ? "_blank"
                                            : undefined
                                    }
                                    rel={
                                        contact.external
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    aria-label={contact.label}
                                    title={contact.label}
                                    className="
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

                                            transition-all
                                            duration-300

                                            pointer-events-none

                                            group-hover:opacity-100
                                            group-hover:translate-x-0
                                        "
                                    >
                                        {contact.label}
                                    </span>


                                    {/* Icon */}
                                    <span
                                        className="
                                            transition-transform
                                            duration-300
                                            group-hover:scale-110
                                        "
                                    >
                                        <Icon size={18} />
                                    </span>

                                </a>

                            </li>
                        );
                    })}

                </ul>
            </nav>
        </aside>
    );
}