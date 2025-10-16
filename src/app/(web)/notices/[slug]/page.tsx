import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { NOTICE_DETAIL_QUERY } from "@/sanity/lib/queries/notice";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { deepDecode } from "@/lib/slug";

export const revalidate = 60;
export const dynamicParams = true; // slug 추가 시 ISR로 처리

type NoticeDetail = {
    title: string;
    publishedAt: string;
    body: any;
    imageUrls?: string[];
    bodyImages?: { _type: "image"; url?: string }[];
    files?:
        | { url?: string; _type: string; _key: string; [k: string]: any }[]
        | null;
};

export async function generateStaticParams() {
    // 너무 많이 빌드하지 않게 상위 20개만 정적 생성 (원하면 늘리기)
    const slugs: { slug: string }[] = await client.fetch(`
    *[_type=="notice" && isPublished==true && defined(slug.current)]
      | order(publishedAt desc)[0..19]{ "slug": slug.current }
  `);
    return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: {
    params: Promise<{ slug: string }>;
}) {
    const { slug: rawSlug } = await props.params;
    const slug = deepDecode(rawSlug);

    const data: { title?: string } | null = await client.fetch(
        `*[_type=="notice" && slug.current==$slug][0]{title}`,
        { slug }
    );
    const title = data?.title ? `${data.title} | 공지사항` : "공지사항";
    return { title };
}

export default async function NoticeDetailPage(props: {
    params: Promise<{ slug: string }>;
}) {
    const { slug: rawSlug } = await props.params;
    const slug = deepDecode(rawSlug);

    const detail: NoticeDetail | null = await client.fetch(
        NOTICE_DETAIL_QUERY,
        { slug }
    );

    if (!detail) {
        notFound();
    }

    return (
        <div className="space-y-10 max-w-3xl mx-auto">
            <article className="w-full max-w-3xl rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-6 md:p-10">
                {/* 뒤로가기 버튼, route에서 제거 */}
                <Link
                    href="/notices"
                    replace
                    className="text-sm text-neutral-500 hover:underline"
                    aria-label="뒤로가기"
                >
                    공지사항 / {detail.title}
                </Link>
                <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2">
                    {detail.title}
                </h1>
                <time className="text-sm text-neutral-500 block mb-6">
                    {new Date(detail.publishedAt).toLocaleString("ko-KR")}
                </time>

                {/* 본문 렌더 */}
                <PortableText
                    value={detail.body}
                    components={{
                        types: {
                            image: ({ value }) => {
                                const url = value?.asset?.url;
                                const dims = value?.asset?.metadata?.dimensions;
                                if (!url) return null;
                                const width = Math.round(dims?.width || 1200);
                                const height = Math.round(dims?.height || 800);
                                return (
                                    <div className="my-6">
                                        <Image
                                            src={url}
                                            alt={value?.alt || ""}
                                            width={width}
                                            height={height}
                                        />
                                    </div>
                                );
                            },
                        },
                        block: {
                            normal: ({ children }) => (
                                <p className="leading-7 my-4">{children}</p>
                            ),
                        },
                    }}
                />

                {/* 첨부파일(옵션) */}
                {detail.files?.length ? (
                    <section className="mt-8">
                        <h2 className="font-semibold mb-2">첨부파일</h2>
                        <ul className="list-disc pl-5 space-y-1">
                            {detail.files.map((f) => (
                                <li key={f._key}>
                                    <a
                                        className="text-blue-600 underline"
                                        href={f.url}
                                        target="_blank"
                                    >
                                        {f.url?.split("/").pop() ??
                                            "파일 다운로드"}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>
                ) : null}
            </article>
        </div>
    );
}
