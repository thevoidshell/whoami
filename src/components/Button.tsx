import Link from "next/link";

interface ButtonProps {
    href: string;
    children: React.ReactNode;
    external?: boolean;
}

const styles = `
    inline-flex items-center
    px-4 py-2
    border border-border

    font-mono
    text-xs
    uppercase
    tracking-[0.2em]

    text-muted
    transition-colors

    hover:text-foreground
    hover:border-foreground

    focus-visible:outline-none
    focus-visible:text-foreground
    focus-visible:border-foreground
`;

export default function Button({
    href,
    children,
    external = false,
}: ButtonProps) {
    if (external) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles}
            >
                {children}
            </a>
        );
    }

    return (
        <Link
            href={href}
            className={styles}
        >
            {children}
        </Link>
    );
}