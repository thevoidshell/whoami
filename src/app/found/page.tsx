import Button from "@/components/Button";

export default function FoundEasterEggPage() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col justify-between p-6 md:p-12 lg:p-16 selection:bg-foreground selection:text-background">

            {/* Top Metadata Header */}
            <div className="border-b border-border pb-4 flex justify-between items-center font-mono text-xs uppercase tracking-[0.25em] text-subtle">
                <div>Record // Object-XXX</div>
                <div className="flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Status: Unindexed</span>
                </div>
            </div>

            {/* Central Document Content */}
            <div className="max-w-xl my-auto py-12 md:py-24">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-subtle block mb-6">
                    [ Discovery Log ]
                </span>

                <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
                    You scanned a random QR code.
                </h1>

                <div className="space-y-6 text-muted leading-relaxed font-sans text-base">
                    <p className="text-foreground font-serif text-lg italic">
                        Honestly... I expected better.
                    </p>

                    <p>
                        Curiosity is admirable. Blind trust is considerably less so. Most people trigger actions from QR codes without a second thought. Attackers know that.
                    </p>

                    <p>
                        Fortunately for you, this one only leads to a mildly judgmental webpage.
                    </p>

                    <div className="border-l-2 border-border pl-4 my-6 space-y-2 font-mono text-xs uppercase tracking-wider text-subtle">
                        <p>• Preview the destination URL before opening it.</p>
                        <p>• Trusting physical printouts blindly is a risk.</p>
                        <p>• Curiosity is useful.</p>
                        <p>• Caution is baseline.</p>
                    </div>

                    <p className="text-foreground text-sm font-mono tracking-wide">
                        One last thing... The browser rarely tells the whole story.
                    </p>
                </div>
            </div>

            {/* Bottom System Navigation */}
            <div className="border-t border-border pt-6 flex justify-between items-end">
                <div className="font-mono text-xs text-subtle max-w-[200px] md:max-w-sm leading-normal">
                    Locally resolved via hardware scan.<br />
                    System timestamp: 2026.07.01
                </div>

                <Button href="/#home">
                    ← Return to Archive
                </Button>
            </div>

            {/* Hidden Console Log Reward */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        console.log(
                            "%c[!] LAYER TWO UNLOCKED %c\\n\\nYou checked the source, scanned the QR, and opened the console.\\n\\nVerdict: Aggressive curiosity validated.\\n\\n- R", 
                            "color: #10b981; font-family: monospace; font-size: 13px; font-weight: bold;",
                            "color: #a3a3a3; font-family: monospace; font-size: 12px; line-height: 1.5;"
                        );
                    `
                }}
            />

        </main>
    );
}