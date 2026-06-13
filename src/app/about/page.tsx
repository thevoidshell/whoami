export default function AboutPage() {
    return (
        <main className="min-h-screen p-8">
            <div className="max-w-4xl mx-auto">

                <h1 className="text-4xl font-bold mb-8">
                    About
                </h1>

                <section className="mb-12">
                    <p className="text-gray-300 leading-relaxed">
                        I'm Rachel, a Computer Information Systems student
                        exploring cybersecurity through hands-on projects,
                        infrastructure labs, malware analysis, and security
                        research.
                    </p>

                    <p className="text-gray-300 leading-relaxed mt-4">
                        My current focus areas include Linux administration,
                        web infrastructure, detection engineering, malware
                        analysis, and applying AI to security problems.
                    </p>

                    <p className="text-gray-300 leading-relaxed mt-4">
                        I'm currently building projects while developing practical cybersecurity and
                        systems engineering skills.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">
                        Skills
                    </h2>

                    <div className="flex flex-wrap gap-2">
                        {[
                            "Cybersecurity",
                            "Linux Administration",
                            "Network Security",
                            "System Hardening",
                            "Malware Analysis",
                            "Threat Detection",
                            "Python",
                            "Git",
                            "Technical Documentation"
                        ].map((skill) => (
                            <span
                                key={skill}
                                className="px-3 py-2 border rounded"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">
                        Tech Stack
                    </h2>

                    <div className="flex flex-wrap gap-2">
                        {[
                            "Python",
                            "TypeScript",
                            "JavaScript",
                            "HTML",
                            "CSS",
                            "Linux",
                            "Git",
                            "GitHub",
                            "Next.js",
                            "Tailwind"
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-2 border rounded"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>

            </div>
        </main>
    );
}