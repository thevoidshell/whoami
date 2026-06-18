import Link from "next/link";

interface ButtonProps {
    href: string;
    children: React.ReactNode;
    external?: boolean;
}

export default function Button({
    href,
    children,
    external = false,
}: ButtonProps) {
    const styles =
        "px-4 py-2 border border-gray-700 rounded-md transition hover:bg-white hover:text-black";

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
        <Link href={href} className={styles}>
            {children}
        </Link>
    );
}