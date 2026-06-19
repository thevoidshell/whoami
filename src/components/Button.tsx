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
    text-xs uppercase
    tracking-[0.2em]
    font-mono
    text-muted
    transition-colors
    hover:text-foreground
    hover:border-foreground
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