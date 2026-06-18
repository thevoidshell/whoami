import Button from "@/components/Button";

export default function ResumePage() {
    return (
        <main className="min-h-screen p-8">

            <section className="max-w-5xl mx-auto">

                <h1 className="text-4xl font-bold mb-4">
                    Resume
                </h1>


                <p className="text-gray-400 mb-6">
                    View or download my latest resume.
                </p>


                <div className="mb-8">
                    <Button
                        href="/resume.pdf"
                        external
                    >
                        Download Resume
                    </Button>
                </div>


                <div className="border rounded-lg overflow-hidden">

                    <iframe
                        src="/resume.pdf"
                        title="Resume"
                        className="w-full h-[1000px]"
                    />

                </div>

            </section>

        </main>
    );
}