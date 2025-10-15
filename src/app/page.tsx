import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <section className="card soft-ring px-6 py-10 md:px-10 md:py-14">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                    {/* 왼쪽 로고 */}
                    <div className="flex-shrink-0 mx-auto md:mx-0">
                        <Image
                            src="/images/logo.png"
                            alt="일어서는사람들 로고"
                            width={320}
                            height={320}
                            className="w-64 h-64 md:w-80 md:h-80 object-contain"
                            priority
                        />
                    </div>

                    {/* 오른쪽 텍스트 */}
                    <div className="flex flex-col gap-4 md:gap-6">
                        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                            (사)대전실업극복시민연대{" "}
                            <span className="block text-brand-green">
                                일어서는사람들
                            </span>
                        </h1>
                        <p className="text-base md:text-lg text-neutral-700 max-w-3xl leading-relaxed">
                            (사)대전실업극복시민연대 일어서는사람들은 1997년
                            외환위기 이후 실업 대란의 시대적 상황에 따라
                            실업극복국민위원회 출범, 1988년 11월, 40여개의
                            시민사회단체가 '대전실업극복시민운동협의회'의
                            명칭으로 설립되었다.
                            <br />
                            <br />
                            이후 2003년 4월, '(사)대전실업극복시민연대 일어서는
                            사람들'로 단체 명칭을 변경하였다.
                            <br />
                            <br />
                            주요활동으로 저소득 실직가정의 생계비 및 겨울나기
                            지원사업, 실직가정돕기 결연 및 취업지원, 민간위탁
                            공공근로 일자리운영, 실업관련 정책활동 등을
                            수행하였다. 2001년 7월, 보건복지부로부터 저소득
                            주민의 일자리 및 복지지원을 수행하는 지역자활센터를
                            지정받아 현재까지 운영하고 있다.
                        </p>
                    </div>
                </div>
            </section>

            {/* 공지사항 */}
            <section className="mt-12 card soft-ring p-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold">공지사항</h2>
                    <Link
                        href="/notices"
                        className="text-sm text-brand-green hover:underline"
                    >
                        더보기
                    </Link>
                </div>

                <ul className="soft-divider">
                    <li className="flex items-center justify-between py-3">
                        <Link href="/notices" className="hover:underline">
                            CMS후원 자동이체 양식
                        </Link>
                    </li>
                </ul>
            </section>
        </>
    );
}
