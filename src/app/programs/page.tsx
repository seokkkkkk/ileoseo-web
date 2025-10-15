import { Metadata } from "next";

export const metadata: Metadata = {
    title: "주요사업 | 대전실업극복시민연대 일어서는사람들",
    description:
        "정책기획, 자활지원, 일자리 창출, 복지 및 권익 향상 등 주요사업을 소개합니다.",
    keywords: ["자활지원", "일자리", "창업지원", "복지사업", "취약계층"],
};

export default function ProgramsPage() {
    const programs = [
        {
            title: "1. 정책기획·조사연구·홍보교육",
            desc: "실업자, 저소득근로자 지원을 원활히 하기 위한 정책기획, 조사연구, 홍보교육사업",
        },
        {
            title: "2. 일자리 연결",
            desc: "구인․구직 상담을 통한 일자리 연결 사업",
        },
        {
            title: "3. 자활·창업 지원",
            desc: "실업자의 자활 지원을 위한 창업 및 일자리창출 사업",
        },
        {
            title: "4. 교육 및 상담",
            desc: "실업자 및 저소득 근로자의 권리와 관련된 교육 및 상담사업",
        },
        {
            title: "5. 복지·사회안전망 확대",
            desc: "실업자 및 저소득주민의 복지증진을 위한 사회안전망 확대 사업",
        },
        {
            title: "6. 연대·네트워크 구축",
            desc: "실업, 빈곤관련 단체와의 네트워크 구축사업 및 연대사업",
        },
        {
            title: "7. 권익신장 활동",
            desc: "실업자 및 저소득근로자 조직화를 통한 권익신장 사업",
        },
        {
            title: "8. 복지 서비스 제공",
            desc: "노인, 장애인 등의 복지증진을 위한 서비스 제공 사업",
        },
        {
            title: "9. 기타 목적사업",
            desc: "기타 이 법인의 목적 달성에 필요한 사업",
        },
    ];

    return (
        <div className="space-y-10">
            <header className="card soft-ring p-6 md:p-10">
                <h1 className="text-brand-black text-2xl md:text-3xl font-extrabold tracking-tight mb-3">
                    주요사업
                </h1>
                <p className="text-neutral-700 leading-relaxed max-w-3xl">
                    (사)대전실업극복시민연대 일어서는 사람들은 실업자와 저소득
                    근로자의 자립과 복지증진을 위해 다음과 같은 주요 사업을
                    추진하고 있습니다.
                </p>
            </header>

            <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {programs.map((p, i) => (
                    <div
                        key={i}
                        className="card soft-ring p-6 hover:shadow-md transition-shadow"
                    >
                        <h2 className="text-lg font-semibold text-brand-black">
                            {p.title}
                        </h2>
                        <p className="text-sm text-neutral-700 leading-relaxed">
                            {p.desc}
                        </p>
                    </div>
                ))}
            </section>
        </div>
    );
}
