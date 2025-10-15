"use client";
import Link from "next/link";
import { useState } from "react";

const nav = [
    {
        href: "/about",
        label: "법인소개",
    },
    { href: "/programs", label: "주요사업" },
    { href: "/partners", label: "위탁기관" },
    { href: "/donate", label: "후원안내" },
    { href: "/notices", label: "공지사항" },
    { href: "/contact", label: "오시는길" },
];

export function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
            <div className="container flex items-center justify-between py-3">
                {/* 로고 */}
                <Link href="/" className="flex items-center gap-2">
                    <img
                        src="/images/logo.png"
                        alt="일어서는사람들 로고"
                        className="h-8 w-8"
                    />
                    <span className="font-semibold">
                        (사)대전실업극복시민연대 일어서는사람들
                    </span>
                </Link>

                {/* 데스크탑 네비 */}
                <nav className="hidden md:flex items-center gap-6 relative z-50">
                    {nav.map((n) => (
                        <div key={n.href} className="relative group">
                            <Link
                                href={n.href}
                                className="text-sm hover:text-brand-green transition-colors"
                            >
                                {n.label}
                            </Link>
                        </div>
                    ))}
                </nav>

                {/* 모바일 토글 */}
                <button
                    aria-label="메뉴 열기"
                    className="md:hidden rounded-lg border px-3 py-2"
                    onClick={() => setOpen((v) => !v)}
                >
                    메뉴
                </button>
            </div>

            {/* 모바일 드로어 */}
            {open && (
                <div className="md:hidden border-t bg-white">
                    <div className="container py-2">
                        <nav className="grid gap-2">
                            {nav.map((n) => (
                                <div key={n.href}>
                                    <Link
                                        href={n.href}
                                        className="rounded-lg px-2 py-2 hover:bg-brand-warmgray block font-medium"
                                        onClick={() => setOpen(false)}
                                    >
                                        {n.label}
                                    </Link>
                                </div>
                            ))}
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}
