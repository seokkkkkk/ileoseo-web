export const metadata = {
    title: "공지사항 | 대전실업극복시민연대 일어서는사람들",
    description:
        "CMS 후원 자동이체 양식 등 주요 안내사항을 확인하실 수 있습니다.",
    keywords: ["공지사항", "CMS", "자동이체", "후원신청"],
};

import Slider from "@/components/slider";

export default function NoticesPage() {
    const images = ["/images/cms-form-1.png", "/images/cms-form-2.png"]; // 이미지 2장

    return (
        <div className="space-y-10 max-w-3xl mx-auto">
            <header className="w-full max-w-3xl rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-6 md:p-10">
                <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">
                    CMS 후원 자동이체 양식
                </h1>
                <p className="text-neutral-700 leading-relaxed max-w-3xl">
                    CMS 출금이체 동의서 양식을 아래에서 확인하실 수 있습니다.
                </p>
            </header>

            {/* 이미지 슬라이더 */}
            <section className="relative w-full max-w-3xl mx-auto">
                <Slider images={images} />
            </section>
        </div>
    );
}
