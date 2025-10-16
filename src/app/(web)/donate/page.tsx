import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "후원안내 | 대전실업극복시민연대 일어서는사람들",
    description:
        "지정후원, 비지정후원, CMS 자동이체 등 다양한 방법으로 일어서는사람들의 활동을 후원하실 수 있습니다.",
    keywords: ["후원", "기부", "CMS", "자동이체", "비지정후원", "지정후원"],
};

export default function DonatePage() {
    return (
        <div className="space-y-10">
            {/* Hero */}
            <header className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-6 md:p-10">
                <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">
                    후원안내
                </h1>
                <p className="text-neutral-700 leading-relaxed max-w-3xl">
                    (사)대전실업극복시민연대일어서는사람들 후원자 모집
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                    <a
                        href="tel:0422338712"
                        className="inline-flex items-center justify-center rounded-lg px-4 h-11 text-sm font-medium bg-[#66B84E] text-white hover:opacity-90"
                    >
                        전화로 문의하기 (042-233-8712)
                    </a>
                </div>
            </header>

            {/* 후원 종류 */}
            <section className="grid gap-4 md:grid-cols-2">
                <article className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-6">
                    <h2 className="text-lg font-semibold mb-2">후원 종류</h2>
                    <ul className="list-none space-y-2 text-neutral-800">
                        <li>
                            <b className="font-medium">지정후원</b> : 후원자가
                            특정대상이나 특정사업에 사용되도록 후원금의 용도를
                            지정
                        </li>
                        <li>
                            <span className="font-medium">비지정후원</span> :
                            후원자가 후원금의 사용 용도를 지정하지 않고,
                            법인에서 진행하는 전체 사업에 후원
                        </li>
                    </ul>
                </article>

                <article className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-6">
                    <h2 className="text-lg font-semibold mb-2">후원 방법</h2>
                    <ul className="list-disc ps-5 space-y-2 text-neutral-800">
                        <li>CMS 자동이체</li>
                        <li>온라인 입금</li>
                        <li>통장입금</li>
                        <li>현금</li>
                    </ul>
                    <p className="mt-4 text-sm text-neutral-700">
                        신청방법: 전화, 방문, 홈페이지를 통한 후원신청서 작성{" "}
                        <br />
                        (CMS후원신청서:{" "}
                        <Link
                            href="/notices"
                            className="underline hover:no-underline"
                        >
                            공지사항
                        </Link>{" "}
                        참조)
                    </p>
                </article>
            </section>
            {/* 물품후원 */}
            <section className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-6">
                <h2 className="text-lg font-semibold mb-2">물품후원</h2>
                <p className="text-neutral-800">
                    물품후원의 경우 법인(
                    <a
                        href="tel:0422338712"
                        className="underline hover:no-underline"
                    >
                        042-233-8712
                    </a>
                    )으로 연락주시면 찾아가서 접수하겠습니다.
                </p>
            </section>

            {/* 계좌 안내 */}
            <section className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-6">
                <h2 className="text-lg font-semibold mb-4">후원금 계좌안내</h2>
                <div className="rounded-xl bg-[#F7F7F5] p-4">
                    <div className="text-sm text-neutral-600">하나은행</div>
                    <div className="text-xl font-bold tracking-wide mt-1">
                        601-910045-57705
                    </div>
                    <div className="text-sm text-neutral-700 mt-1">
                        예금주 : (사)대전실업극복시민연대일어서는사람들
                    </div>
                </div>
            </section>
        </div>
    );
}
