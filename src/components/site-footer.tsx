import Link from "next/link";

export function Footer() {
    return (
        <footer className="mt-8 soft-ring bg-white">
            <div className="container py-8 grid gap-6 md:grid-cols-3">
                <div>
                    <div className="font-semibold mb-2">
                        (사)대전실업극복시민연대 일어서는사람들
                    </div>
                    <p className="text-sm text-neutral-600">
                        1997 외환위기 이후, 지역과 함께 실업·빈곤 문제 해결을
                        위해 활동해왔습니다.
                    </p>
                </div>
                <div>
                    <div className="font-semibold mb-2">바로가기</div>
                    <ul className="space-y-1 text-sm">
                        <li>
                            <Link href="/about" className="hover:underline">
                                법인소개
                            </Link>
                        </li>
                        <li>
                            <Link href="/programs" className="hover:underline">
                                주요사업
                            </Link>
                        </li>
                        <li>
                            <Link href="/donate" className="hover:underline">
                                후원안내
                            </Link>
                        </li>
                        <li>
                            <Link href="/notices" className="hover:underline">
                                공지사항
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:underline">
                                오시는길
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="font-semibold mb-2">연락처</div>
                    <p className="text-sm text-neutral-600">
                        대전광역시 서구 계룡로 676 주원빌딩 503호 (우)35305
                        <br />
                        Tel. 042-22-8712
                    </p>
                </div>
            </div>
            <div className="soft-ring py-4 text-center text-xs text-neutral-500">
                © {new Date().getFullYear()} (사)대전실업극복시민연대
                일어서는사람들. All rights reserved.
            </div>
        </footer>
    );
}
