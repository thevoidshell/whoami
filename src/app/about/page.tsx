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
        "Git",
        "Technical Documentation",
    ];

    return (
        <main className="min-h-screen p-8">
            <div className="max-w-4xl mx-auto">

                <h1 className="text-4xl font-bold mb-8">
                    About Me
                </h1>

                <section className="mb-12">
                    <p className="text-gray-300 leading-relaxed">
                        I'm Rachel, a Computer Information Systems student focused on cybersecurity, systems engineering, and applied AI.

                        I learn by building, breaking, analyzing, and documenting systems.
                    </p>

                    <p className="mt-4 text-gray-300 leading-relaxed">
                        My work focuses on understanding how complex systems operate — from web infrastructure and defensive security to machine learning models and their behavior.
                    </p>
                </section>


                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">
                        Skills
                    </h2>

                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <Tag
                                key={skill}
                            >
                                {skill}
                            </Tag>
                        ))}
                    </div>
                </section>


                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">
                        Tech Stack
                    </h2>

                    <div className="flex flex-wrap gap-2">
                        {techStack.map((tech) => (
                            <Tag
                                key={tech}
                            >
                                {tech}
                            </Tag>
                        ))}
                    </div>
                </section>


                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">
                        Technical Focus Areas
                    </h2>

                    <div className="flex flex-wrap gap-2">
                        {focusAreas.map((topic) => (
                            <Tag
                                key={topic}
                            >
                                {topic}
                            </Tag>
                        ))}
                    </div>
                </section>


                <section>
                    <h2 className="text-2xl font-bold mb-4">
                        Connect
                    </h2>

                    <div className="flex flex-wrap gap-3">

                        <Button
                            href={socials.github}
                            external
                        >
                            GitHub
                        </Button>


                        <Button
                            href={socials.linkedin}
                            external
                        >
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