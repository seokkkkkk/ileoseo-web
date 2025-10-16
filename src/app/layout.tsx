import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/site-header";
import { Footer } from "@/components/site-footer";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
    title: "대전실업극복시민연대 일어서는사람들",
    description:
        "실업자·저소득 근로자의 자립과 권익 향상을 위한 일자리 연계, 자활·창업지원, 복지·교육·상담 및 연대사업을 수행합니다.",
    keywords: [
        "대전실업극복시민연대",
        "일어서는사람들",
        "대전서구지역자활센터",
        "자활사업",
        "취약계층",
        "후원안내",
    ],
    metadataBase: new URL(
        process.env.NEXT_PUBLIC_HOST || "http://localhost:3000"
    ),
    openGraph: {
        title: "대전실업극복시민연대 일어서는사람들",
        description: "지역과 함께 다시 일어서는 사회",
        url: process.env.NEXT_PUBLIC_HOST || "http://localhost:3000",
        images: [
            {
                url: "/images/og-cover.png",
                width: 1200,
                height: 630,
                alt: "대전실업극복시민연대 일어서는사람들",
            },
        ],
        type: "website",
        locale: "ko_KR",
    },
    twitter: {
        card: "summary_large_image",
        title: "대전실업극복시민연대 일어서는사람들",
        description: "지역과 함께 다시 일어서는 사회",
        images: ["/images/og-cover.png"],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const base = process.env.NEXT_PUBLIC_HOST || "http://localhost:3000";
    return (
        <html lang="ko">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "NGO",
                            name: "(사)대전실업극복시민연대 일어서는사람들",
                            url: base,
                            logo: `${base}/images/og-cover.png`,
                            address: {
                                "@type": "PostalAddress",
                                streetAddress:
                                    "대전광역시 서구 계룡로 676, 주원빌딩 503호",
                                addressCountry: "KR",
                            },
                            telephone: "042-222-8712",
                        }),
                    }}
                />
            </head>
            <body className="min-h-screen grid grid-rows-[auto_1fr_auto]">
                <Header />
                <main className="py-8">
                    <div className="container">{children}</div>
                </main>
                <Footer />
                <GoogleTagManager
                    gtmId={process.env.NEXT_PUBLIC_GTM_ID || ""}
                />
                <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
            </body>
        </html>
    );
}
