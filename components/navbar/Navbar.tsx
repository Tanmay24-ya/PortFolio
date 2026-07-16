"use client";

const links = [
    { name: "Briefing", href: "#briefing" },
    { name: "Missions", href: "#missions" },
    { name: "Arsenal", href: "#arsenal" },
    { name: "Command", href: "#command-center" },
    { name: "Contact", href: "#footer" },
];

export default function Navbar() {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
                {/* Logo */}
                <a href="#briefing" className="flex items-center gap-3">
                    <div className="h-3 w-3 animate-pulse rounded-full bg-emerald-400" />

                    <span className="font-bold tracking-[5px]">
                        MISSION CONTROL
                    </span>
                </a>

                {/* Navigation */}
                <nav className="hidden items-center gap-8 md:flex">
                    {links.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm uppercase tracking-[0.2em] text-white/70 transition hover:text-cyan-400"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}