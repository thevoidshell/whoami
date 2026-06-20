import Button from "@/components/Button";

export default function ResumeSection() {
    return (
        <section
            id="resume"
            className="min-h-screen px-12 py-24 max-w-5xl"
        >
            <h1 className="font-serif text-4xl font-semibold">
                Resume
            </h1>

            <p className="mt-6 max-w-2xl text-muted leading-relaxed">
                View and download my latest resume in PDF format.
            </p>

            <div className="mt-10">
                <Button
                    href="/resume.pdf"
                    external
                >
                    Download PDF
                </Button>
            </div>

        </section>
    );
}