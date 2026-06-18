import Button from "@/components/Button";
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
                    About
                </h1>

                <section className="mb-12">
                    <p className="text-gray-300 leading-relaxed">
                        I'm Rachel, a Computer Information Systems student exploring
                        cybersecurity through hands-on projects, infrastructure labs,
                        malware analysis, and security research.
                    </p>

                    <p className="mt-4 text-gray-300 leading-relaxed">
                        My current focus areas include Linux administration, web
                        infrastructure, detection engineering, malware analysis, and
                        applying AI to security problems.
                    </p>

                    <p className="mt-4 text-gray-300 leading-relaxed">
                        I'm currently building projects while developing practical
                        cybersecurity and systems engineering skills.
                    </p>
                </section>


                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">
                        Skills
                    </h2>

                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <span
                                key={skill}
                                className="px-3 py-2 border rounded"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>


                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">
                        Tech Stack
                    </h2>

                    <div className="flex flex-wrap gap-2">
                        {techStack.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-2 border rounded"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>


                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">
                        Technical Focus Areas
                    </h2>

                    <div className="flex flex-wrap gap-2">
                        {focusAreas.map((topic) => (
                            <span
                                key={topic}
                                className="px-3 py-2 border rounded"
                            >
                                {topic}
                            </span>
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