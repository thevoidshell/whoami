export default function Navigation() {
    return (
        <aside
            className="
                fixed
                left-0
                top-0
                h-screen
                w-56
                flex
                items-center
                px-8
            "
        >
            <nav className="space-y-8 font-mono text-sm">
                <a href="#home">
                    01 HOME
                </a>

                <a href="#profile">
                    02 PROFILE
                </a>

                <a href="#work">
                    03 WORK
                </a>

                <a href="#resume">
                    04 RESUME
                </a>
            </nav>
        </aside>
    );
}