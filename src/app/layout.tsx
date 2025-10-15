import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "(사)대전실업극복시민연대 일어서는사람들",
    description: "안녕하세요, (사)대전실업극복시민연대 일어서는사람들입니다.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`antialiased`}>{children}</body>
        </html>
    );
}
