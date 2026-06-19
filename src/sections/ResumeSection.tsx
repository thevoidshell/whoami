import Button from "@/components/Button";

export default function ResumeSection() {
    return (
        <section id="resume">
            <main className="min-h-screen p-8">
                <section className="max-w-5xl mx-auto">
                    <h1 className="font-serif text-4xl font-semibold">
                        Resume
                    </h1>

                    <p className="mt-4 max-w-2xl text-muted leading-relaxed">
                        View and download my latest resume in PDF format.
                    </p>

                    <div className="mt-8">
                        <Button
                            href="/resume.pdf"
                            external
                        >
                            Download PDF
                        </Button>
                    </div>

                    <div className="mt-12 border-t border-border pt-6">

                        <iframe
                            src="/resume.pdf"
                            title="Resume"
                            className="w-full h-[1000px]"
                        />

                    </div>

                </section>
            </main>
        </section>
    );
}