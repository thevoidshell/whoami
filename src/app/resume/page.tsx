export default function ResumePage() {
    return (
        <main className="min-h-screen p-8">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">
                    Resume
                </h1>

                <p className="text-gray-400 mb-6">
                    View or download my latest resume.
                </p>

                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border rounded-lg px-4 py-2 mb-8"
                >
                    Download Resume
                </a>

                <div className="border rounded-lg overflow-hidden">
                    <iframe
                        src="/resume.pdf"
                        className="w-full h-[1000px]"
                        title="Resume"
                    />
                </div>
            </div>
        </main>
    );
}