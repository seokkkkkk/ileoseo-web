import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "위탁기관 | 대전실업극복시민연대 일어서는사람들",
    description:
        "대전서구지역자활센터 등 (사)대전실업극복시민연대 일어서는사람들과 함께하는 수행·위탁기관을 소개합니다.",
    keywords: ["위탁기관", "자활센터", "복지기관", "협력기관"],
};

export default function PartnersPage() {
    const partners = [
        {
            name: "대전서구지역자활센터",
            summary: "창업, 취업 등 일자리 제공 및 복지 서비스 지원",
            tel: "042-572-1654",
            fax: "042-527-1655",
            href: "http://www.djsj.or.kr/", // 추후 공식 홈페이지 URL로 교체
        },
        {
            name: "나우리재가노인복지센터",
            summary: "재가 노인 복지 서비스 제공",
            tel: "010-222-2982",
            href: "",
        },
    ];

    return (
        <div className="space-y-10">
            <header className="card soft-ring p-6 md:p-10">
                <h1 className="text-brand-black text-2xl md:text-3xl font-extrabold tracking-tight mb-3">
                    위탁기관
                </h1>
                <p className="text-neutral-700 leading-relaxed max-w-3xl">
                    (사)대전실업극복시민연대 일어서는 사람들과 함께하는
                    수행·위탁기관을 소개합니다.
                </p>
            </header>

            <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {partners.map((p, i) => (
                    <article
                        key={i}
                        className="card soft-ring p-6 hover:shadow-md transition-shadow flex flex-col justify-between"
                    >
                        <div>
                            <h2 className="text-lg font-semibold text-brand-black">
                                {p.name}
                            </h2>
                            <p className="text-sm text-neutral-700 leading-relaxed">
                                {p.summary}
                            </p>
                            <dl className="mt-4 text-sm text-neutral-700 space-y-1">
                                {p.tel && (
                                    <div className="flex gap-2">
                                        <dt className="w-10 text-neutral-500">
                                            Tel.
                                        </dt>
                                        <dd>
                                            <a
                                                href={`tel:${p.tel.replace(
                                                    /[^0-9]/g,
                                                    ""
                                                )}`}
                                                className="hover:underline"
                                            >
                                                {p.tel}
                                            </a>
                                        </dd>
                                    </div>
                                )}
                                {p.fax && (
                                    <div className="flex gap-2">
                                        <dt className="w-10 text-neutral-500">
                                            Fax.
                                        </dt>
                                        <dd>{p.fax}</dd>
                                    </div>
                                )}
                            </dl>
                        </div>

                        {/* 버튼 영역 */}
                        <div className="mt-6 flex gap-2">
                            {p.href && (
                                <Link
                                    href={p.href}
                                    className="inline-flex items-center justify-center rounded-lg px-3 h-9 text-sm font-medium border border-[#66B84E] text-[#66B84E] hover:bg-[#66B84E]/10 transition-colors"
                                >
                                    사이트 바로가기
                                </Link>
                            )}
                            <a
                                href={`tel:${p.tel?.replace(/[^0-9]/g, "")}`}
                                className="inline-flex items-center justify-center rounded-lg px-3 h-9 text-sm font-medium bg-[#66B84E] text-white hover:opacity-90 transition-opacity"
                            >
                                전화하기
                            </a>
                        </div>
                    </article>
                ))}
            </section>

            <section className="card soft-ring p-6">
                <h2 className="text-xl font-bold mb-5">유관기관</h2>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {/* 고용노동부 */}
                    <article className="card soft-ring p-6 hover:shadow-md transition-shadow flex flex-col justify-between">
                        <div className="flex items-center gap-4">
                            {/* 로고 이미지 */}
                            <img
                                src="/images/moel.png" // public/images 폴더에 moel.png 추가
                                alt="고용노동부 로고"
                                className="w-12 h-12 object-contain"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-[#003478]">
                                    고용노동부
                                </h3>
                                <p className="text-sm text-neutral-600">
                                    고용정책, 노동복지, 산업안전 등 노동 관련
                                    정부 부처
                                </p>
                            </div>
                        </div>

                        {/* 버튼 영역 */}
                        <div className="mt-6 flex gap-2">
                            <Link
                                href="https://www.moel.go.kr/"
                                target="_blank"
                                className="inline-flex items-center justify-center rounded-lg px-3 h-9 text-sm font-medium border border-[#66B84E] text-[#66B84E] hover:bg-[#66B84E]/10 transition-colors"
                            >
                                사이트 바로가기
                            </Link>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
}
