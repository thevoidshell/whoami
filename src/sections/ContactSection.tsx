import Button from "@/components/Button";
import { socials } from "@/data/socials";

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="
    min-h-screen
    px-6
    md:px-12

    py-20
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

                    <div>
                        <p className="font-mono text-xs tracking-[0.2em] text-subtle uppercase">
                            Email
                        </p>

                        <a
                            href={socials.email}
                            className="mt-2 inline-block text-foreground hover:text-muted transition-colors"
                        >
                            {socials.email.replace("mailto:", "")}
                        </a>
                    </div>


                    <div>
                        <p className="font-mono text-xs tracking-[0.2em] text-subtle uppercase">
                            GitHub
                        </p>

                        <a
                            href={socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-block text-foreground hover:text-muted transition-colors"
                        >
                            thevoidshell
                        </a>
                    </div>


                    <div>
                        <p className="font-mono text-xs tracking-[0.2em] text-subtle uppercase">
                            LinkedIn
                        </p>

                        <a
                            href={socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-block text-foreground hover:text-muted transition-colors"
                        >
                            Rachel Gupta
                        </a>
                    </div>

                </div>


                <div className="mt-12">
                    <Button
                        href="/resume.pdf"
                        external
                    >
                        Download Resume PDF
                    </Button>
                </div>

            </div>

        </section>
    );
}