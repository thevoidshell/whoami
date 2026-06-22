import Button from "@/components/Button";
import { socials } from "@/data/socials";

export default function ContactSection() {
    const contacts = [
        {
            label: "Email",
            value: socials.email,
            href: `mailto:${socials.email}`,
            external: false,
        },
        {
            label: "GitHub",
            value: "thevoidshell",
            href: socials.github,
            external: true,
        },
        {
            label: "LinkedIn",
            value: "Rachel Gupta",
            href: socials.linkedin,
            external: true,
        },
    ];

    return (
        <section
            id="contact"
            className="
                min-h-screen
                px-6
                md:px-12
                pt-20
                pb-28
                md:py-24
                flex
                flex-col
                justify-center
            "
        >
            <div className="max-w-5xl w-full">
                <h1 className="font-serif text-4xl font-semibold">
                    Contact
                </h1>

                <p className="mt-6 max-w-2xl text-muted leading-relaxed">
                    Open to discussions around cybersecurity,
                    systems engineering, infrastructure,
                    and intelligent technologies.
                </p>

                <div className="mt-12 space-y-6">
                    {contacts.map((contact) => (
                        <div key={contact.label}>
                            <p className="font-mono text-xs tracking-[0.2em] text-subtle uppercase">
                                {contact.label}
                            </p>

                            <a
                                href={contact.href}
                                className="mt-2 inline-block text-foreground hover:text-muted transition-colors"
                                target={contact.external ? "_blank" : undefined}
                                rel={contact.external ? "noopener noreferrer" : undefined}
                                aria-label={`${contact.label}: ${contact.value}`}
                            >
                                {contact.value}
                            </a>
                        </div>
                    ))}
                </div>

                <div className="mt-12">
                    <Button href={socials.resume} external>
                        Download Resume PDF
                    </Button>
                </div>
            </div>
        </section>
    );
}