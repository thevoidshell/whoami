import {
    FaGithub,
    FaLinkedin,
    FaFilePdf,
} from "react-icons/fa";

import {
    MdEmail,
} from "react-icons/md";

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
        label: "Resume PDF",
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
                                        text-subtle
                                        hover:text-foreground
                                        transition-colors
                                        duration-200
                                    "
                                >
                                    <Icon
                                        size={20}
                                    />
                                </a>
                            </li>
                        );
                    })}

                </ul>
            </nav>
        </aside>
    );
}