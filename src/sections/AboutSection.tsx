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
            className="min-h-screen px-12 py-24 max-w-5xl"
        >

            <h1 className="font-serif text-4xl font-semibold mb-10">
                Profile
            </h1>


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
            </div>


            <div className="mb-14">
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
            </div>


            <div>
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
            </div>

        </section>
    );
}