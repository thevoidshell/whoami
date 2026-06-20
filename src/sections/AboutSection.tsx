import Tag from "@/components/Tag";
import { getPortfolioTopics, getTechStack } from "@/lib/github";

export default async function AboutSection() {
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
        <section
            id="profile"
            aria-label="Profile section"
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
                <header>
                    <h1 className="font-serif text-4xl font-semibold mb-10">
                        Profile
                    </h1>
                </header>

                <div className="mb-14">
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
                </div>

                <div className="mb-14">
                    <h2 id="skills-heading" className="font-serif text-2xl font-semibold mb-5">
                        Skills
                    </h2>

                    <div
                        className="flex flex-wrap gap-2"
                        role="list"
                        aria-labelledby="skills-heading"
                    >
                        {skills.map((skill) => (
                            <div key={skill} role="listitem">
                                <Tag>{skill}</Tag>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-14">
                    <h2 id="tech-heading" className="font-serif text-2xl font-semibold mb-5">
                        Tools & Technologies
                    </h2>

                    <div
                        className="flex flex-wrap gap-2"
                        role="list"
                        aria-labelledby="tech-heading"
                    >
                        {techStack.map((tech) => (
                            <div key={tech} role="listitem">
                                <Tag>{tech}</Tag>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 id="focus-heading" className="font-serif text-2xl font-semibold mb-5">
                        Areas of Study
                    </h2>

                    <div
                        className="flex flex-wrap gap-2"
                        role="list"
                        aria-labelledby="focus-heading"
                    >
                        {focusAreas.map((topic) => (
                            <div key={topic} role="listitem">
                                <Tag>{topic}</Tag>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}