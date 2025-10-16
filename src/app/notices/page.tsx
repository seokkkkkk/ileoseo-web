import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { NOTICE_LIST_QUERY } from "@/sanity/lib/queries/notice";
import Image from "next/image";

export const metadata = {
    title: "공지사항 | 대전실업극복시민연대 일어서는사람들",
    description:
        "CMS 후원 자동이체 양식 등 주요 안내사항을 확인하실 수 있습니다.",
    keywords: ["공지사항", "CMS", "자동이체", "후원신청"],
};

export const revalidate = 60;

type NoticeListItem = {
    _id: string;
    title: string;
    publishedAt: string;
    slug: string; // defined(slug.current)로 보장
    coverImage?: string | null;
    imageUrls?: string[] | null;
};

export default async function NoticesPage() {
    const notices: NoticeListItem[] = await client.fetch(NOTICE_LIST_QUERY);

    if (!notices?.length) {
        return (
            <div className="max-w-3xl mx-auto py-16">
                <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">
                    공지사항
                </h1>
                <p className="text-neutral-700">
                    등록된 공지사항이 아직 없습니다.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-10 max-w-3xl mx-auto">
            <header className="w-full max-w-3xl rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-6 md:p-10">
                <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">
                    공지사항
                </h1>
                <p className="text-neutral-700">
                    (사)대전실업극복시민연대 일어서는사람들의 공지사항을
                    확인하실 수 있습니다.
                </p>
            </header>

            <ul className="space-y-6">
                {notices.map((n) => {
                    const preview = n.coverImage ?? n.imageUrls?.[0] ?? null;
                    return (
                        <li key={n._id}>
                            <Link
                                href={`/notices/${n.slug}`}
                                replace
                                className="block rounded-xl border border-neutral-200 hover:border-neutral-300 hover:shadow-sm transition"
                            >
                                <div className="p-5 flex gap-4">
                                    <div className="flex-1 flex flex-col justify-between">
                                        <h2 className="font-semibold text-base md:text-lg line-clamp-2">
                                            {n.title}
                                        </h2>
                                        <time className="text-sm text-neutral-500">
                                            {new Date(
                                                n.publishedAt
                                            ).toLocaleDateString("ko-KR")}
                                        </time>
                                    </div>
                                    {preview ? (
                                        <div className="relative w-28 h-20 shrink-0 rounded-lg overflow-hidden bg-neutral-100">
                                            <Image
                                                src={preview}
                                                alt={n.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-28 h-20 shrink-0 rounded-lg bg-transparent" />
                                    )}
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
