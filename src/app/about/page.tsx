import Button from "@/components/Button";
import Tag from "@/components/Tag";
import { getPortfolioTopics, getTechStack } from "@/lib/github";
import { socials } from "@/data/socials";

export default async function AboutPage() {
    const focusAreas = await getPortfolioTopics();
    const techStack = await getTechStack();

    const skills = [
        "Cybersecurity",
        "Linux Administration",
        "Network Security",
        "System Hardening",
        "Malware Analysis",
        "Threat Detection",
        "Version Control",
        "Technical Documentation",
    ];

    return (
        <main className="min-h-screen p-8">
            <div className="max-w-4xl mx-auto">

                <h1 className="font-serif text-4xl font-semibold mb-10">
                    About
                </h1>

                <section className="mb-14">
                    <p className="text-muted leading-relaxed">
                        I'm Rachel, a Computer Information Systems student focused on cybersecurity,
                        systems engineering, and applied AI.
                    </p>

                    <p className="mt-4 text-muted leading-relaxed">
                        I learn through building, analyzing, securing, and documenting systems.
                    </p>

                    <p className="mt-4 text-muted leading-relaxed max-w-3xl">
                        My work explores how complex technologies operate — from hardened
                        infrastructure and defensive security to machine learning systems
                        and their behavior.
                    </p>
                </section>


                <section className="mb-14">
                    <h2 className="font-serif text-2xl font-semibold mb-5">
                        Skills
                    </h2>

                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <Tag key={skill}>
                                {skill}
                            </Tag>
                        ))}
                    </div>
                </section>


                <section className="mb-14">
                    <h2 className="font-serif text-2xl font-semibold mb-5">
                        Tools & Technologies
                    </h2>

                    <div className="flex flex-wrap gap-2">
                        {techStack.map((tech) => (
                            <Tag key={tech}>
                                {tech}
                            </Tag>
                        ))}
                    </div>
                </section>


                <section className="mb-14">
                    <h2 className="font-serif text-2xl font-semibold mb-5">
                        Areas of Study
                    </h2>

                    <div className="flex flex-wrap gap-2">
                        {focusAreas.map((topic) => (
                            <Tag key={topic}>
                                {topic}
                            </Tag>
                        ))}
                    </div>
                </section>


                <section>
                    <h2 className="font-serif text-2xl font-semibold mb-5">
                        Connect
                    </h2>

                    <div className="flex flex-wrap gap-3">
                        <Button href={socials.github} external>
                            GitHub
                        </Button>

                        <Button href={socials.linkedin} external>
                            LinkedIn
                        </Button>

                        <Button href={socials.email}>
                            Email
                        </Button>
                    </div>
                </section>

            </div>
        </main>
    );
}