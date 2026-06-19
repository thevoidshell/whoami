import Link from "next/link";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/projects",
    label: "Work",
  },
  {
    href: "/resume",
    label: "Resume",
  },
];

export default function Navbar() {
  return (
    <nav className="border-b border-border">

      <div className="max-w-4xl mx-auto px-8 py-6">

        <ul className="
          flex flex-wrap gap-6
          text-xs uppercase tracking-[0.2em]
          font-mono
        ">

          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="
                  text-subtle
                  hover:text-foreground
                  transition-colors
                "
              >
                {link.label}
              </Link>
            </li>
          ))}

        </ul>

      </div>

    </nav>
  );
}