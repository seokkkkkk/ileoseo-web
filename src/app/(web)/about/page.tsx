import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "법인소개 | 대전실업극복시민연대 일어서는사람들",
    description:
        "(사)대전실업극복시민연대 일어서는사람들은 민간차원의 실업극복, 빈곤극복 의지를 모아 취약계층근로자를 위한 종합적인 지원활동을 벌여 실업 및 빈곤을 극복하도록 하고 취약계층 근로자의 권익신장을 도모하며 지역사회 공동체 확립을 목적으로 한다.",
    keywords: [
        "법인소개",
        "대전실업극복시민연대",
        "일어서는사람들",
        "단체소개",
    ],
};

export default function AboutPage() {
    return (
        <div className="space-y-10">
            <section className="gap-8">
                {/* Content */}
                <article className="space-y-10">
                    {/* 소개 */}
                    <section id="intro" className="card soft-ring p-6">
                        <Image
                            src="/images/logo.png"
                            alt="일어서는사람들 로고"
                            width={320}
                            height={320}
                            className="w-64 h-64 object-contain mx-auto"
                            priority
                        />
                        <h2 className="text-brand-green text-xl font-bold mb-3">
                            (사)대전실업극복시민연대 일어서는 사람들
                        </h2>
                        <p className="text-neutral-800 leading-relaxed">
                            (사)대전실업극복시민연대 일어서는 사람들은 1997년
                            외환위기이후 실업대란의 시대적 상황에 따라
                            실업극복국민위원회 출범, 1998년 11월, 40여개의
                            시민사회단체가 ‘대전실업극복시민운동협의회’ 의
                            명칭으로 설립되었다.
                        </p>
                        <p className="mt-3 text-neutral-800 leading-relaxed">
                            이후 2003년 4월, ‘(사)대전실업극복시민연대 일어서는
                            사람들’로 단체 명칭을 변경하였다.
                        </p>
                        <p className="mt-3 text-neutral-800 leading-relaxed">
                            주요활동으로 저소득 실직가정의 생계비 및 겨울나기
                            지원사업, 실직가정돕기 결연 및 취업지원, 민간위탁
                            공공근로 일자리 운영, 실업관련 정책활동 등을
                            수행하였다.
                        </p>
                        <p className="mt-3 text-neutral-800 leading-relaxed">
                            2001년 7월, 보건복지부로부터 저소득 주민의 일자리 및
                            복지지원을 수행하는 지역자활센터를 지정받아 현재까지
                            운영하고 있다.
                        </p>
                    </section>
                    {/* 설립목적 */}
                    <section id="purpose" className="card soft-ring p-6">
                        <h2 className="text-brand-green text-xl font-bold mb-3">
                            설립목적
                        </h2>
                        <p className="text-neutral-800 leading-relaxed">
                            민간차원의 실업극복, 빈곤극복 의지를 모아
                            취약계층근로자를 위한 종합적인 지원활동을 벌여 실업
                            및 빈곤을 극복하도록 하고 취약계층 근로자의
                            권익신장을 도모하며 지역사회 공동체 확립을 목적으로
                            한다.
                        </p>
                    </section>
                </article>
            </section>
        </div>
    );
}
