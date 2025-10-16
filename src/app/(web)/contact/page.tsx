import { Metadata } from "next";

export const metadata: Metadata = {
    title: "오시는길 | 대전실업극복시민연대 일어서는사람들",
    description:
        "(사)대전실업극복시민연대 일어서는사람들 오시는길 안내 — 대전광역시 서구 계룡로 676, 주원빌딩 503호. 평일 09:00~18:00.",
    keywords: ["오시는길", "위치", "대전", "서구", "계룡로", "주원빌딩"],
};

export default function ContactPage() {
    return (
        <div className="space-y-10">
            {/* 헤더 */}
            <header className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-6 md:p-10">
                <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">
                    오시는길
                </h1>
                <p className="text-neutral-700 leading-relaxed max-w-3xl mb-3 text-lg font-semibold">
                    (사)대전실업극복시민연대 일어서는사람들
                </p>
                <p className="text-neutral-700 leading-relaxed max-w-3xl">
                    대전광역시 서구 계룡로 676, 주원빌딩 503호
                </p>
            </header>

            {/* 지도 섹션 */}
            <section className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-6">
                <h2 className="text-lg font-semibold mb-3">📍 위치 안내</h2>
                <p className="mb-4 text-neutral-800">
                    대전광역시 서구 계룡로 676, 주원빌딩 503호
                </p>
                <div className="w-full h-[400px] overflow-hidden rounded-xl">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d534.1125422331835!2d127.3951525739114!3d36.33588302038785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565494f982e732d%3A0xcdd5adc1a6e3a96d!2z64yA7KCE6rSR7Jet7IucIOyEnOq1rCDqs4Tro6HroZwgNjc2!5e0!3m2!1sko!2skr!4v1760589041284!5m2!1sko!2skr"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>

            {/* 정보 섹션 */}
            <section className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-6 grid gap-6 md:grid-cols-2">
                <div>
                    <h2 className="text-lg font-semibold mb-2">⏰ 이용시간</h2>
                    <p className="text-neutral-800">평일 09:00 ~ 18:00</p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-2">📞 전화번호</h2>
                    <p className="text-neutral-800">
                        <a href="tel:0422228712" className="hover:underline">
                            042-222-8712
                        </a>
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-2">
                        👤 사업자정보
                    </h2>
                    <p className="text-neutral-800">
                        상호명: (사)대전실업극복시민연대 일어서는사람들
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-2">📍 주소</h2>
                    <p className="text-neutral-800">
                        대전광역시 서구 계룡로 676, 주원빌딩 503호
                    </p>
                </div>
            </section>
        </div>
    );
}
