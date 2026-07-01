import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-border px-6 md:px-12 py-12">
            <div
                className="
                    grid
                    gap-12
                    items-start

                    lg:grid-cols-[1.6fr_auto_auto]
                "
            >
                {/* Left */}

                <div className="max-w-md">
                    <h2 className="font-serif text-2xl font-semibold mb-4">
                        whoami
                    </h2>

                    <p className="text-muted leading-relaxed mb-2">
                        The repository behind this archive.
                    </p>

                    <p className="text-muted leading-relaxed mb-8">
                        nothing here is random
                    </p>

                    <Link
                        href="#"
                        className="
                            inline-flex
                            items-center
                            text-sm
                            transition-colors
                            hover:text-foreground
                        "
                    >
                        View Source →
                    </Link>
                </div>

                {/* Metadata */}

                <div className="space-y-8">
                    <div>
                        <p className="font-mono text-xs uppercase tracking-[0.15em] text-subtle mb-2">
                            Language
                        </p>

                        <p>TypeScript</p>
                    </div>

                    <div>
                        <p className="font-mono text-xs uppercase tracking-[0.15em] text-subtle mb-2">
                            Revised
                        </p>

                        <p>Jul 2026</p>
                    </div>
                </div>

                {/* QR */}

                <div className="hidden lg:flex items-center justify-end">
                    <Image
                        src="/qr/qr-dark.svg"
                        alt="QR code"
                        width={104}
                        height={104}
                        className="select-none"
                    />
                </div>
            </div>
        </footer>
    );
}