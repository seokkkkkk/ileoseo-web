"use client";

import Image from "next/image";

type FileItem = {
    _key: string;
    url?: string;
    mime?: string;
    size?: number;
    filename?: string;
    [k: string]: any;
};

type Props = {
    files: FileItem[];
};

function formatBytes(bytes?: number) {
    if (!bytes || bytes <= 0) return "";
    const units = ["B", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / Math.pow(1024, i)).toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
}

function extFromName(name?: string) {
    if (!name) return "";
    const dot = name.lastIndexOf(".");
    return dot >= 0 ? name.slice(dot + 1).toLowerCase() : "";
}

function fileNameFromUrl(url?: string) {
    if (!url) return "";
    try {
        const raw = url.split("/").pop() || "";
        return decodeURIComponent(raw);
    } catch {
        return url.split("/").pop() || "";
    }
}

function previewKind(
    mime?: string,
    name?: string
): "image" | "video" | "audio" | "pdf" | null {
    const ext = extFromName(name);
    const byExt = () => {
        if (["png", "jpg", "jpeg", "gif", "webp", "avif", "svg"].includes(ext))
            return "image";
        if (["mp4", "webm", "ogg", "mov", "m4v"].includes(ext)) return "video";
        if (["mp3", "wav", "ogg", "m4a", "aac", "flac"].includes(ext))
            return "audio";
        if (ext === "pdf") return "pdf";
        return null;
    };
    if (!mime) return byExt();
    if (mime.startsWith("image/")) return "image";
    if (mime.startsWith("video/")) return "video";
    if (mime.startsWith("audio/")) return "audio";
    if (mime === "application/pdf") return "pdf";
    return null;
}

function icon(kind: ReturnType<typeof previewKind>) {
    const base =
        "inline-flex items-center justify-center w-8 h-8 rounded-lg ring-1 ring-black/5 bg-neutral-50";
    const svg = (d: string) => (
        <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden>
            <path d={d} />
        </svg>
    );
    if (kind === "image")
        return (
            <div className={base}>
                {svg(
                    "M21 19V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12m18 0a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2m18 0-6-6-4 4-2-2-6 6"
                )}
            </div>
        );
    if (kind === "video")
        return (
            <div className={base}>
                {svg(
                    "M17 10.5V6a2 2 0 0 0-2-2H5A2 2 0 0 0 3 6v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4.5l4 4v-11l-4 4Z"
                )}
            </div>
        );
    if (kind === "audio")
        return (
            <div className={base}>
                {svg(
                    "M9 18V5l12-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0m12-2a3 3 0 1 1-6 0"
                )}
            </div>
        );
    if (kind === "pdf")
        return (
            <div className={`${base} text-red-600`}>
                {svg(
                    "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6"
                )}
            </div>
        );
    return (
        <div className={base}>
            {svg(
                "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6"
            )}
        </div>
    );
}

function badge(text: string) {
    return (
        <span className="inline-flex items-center rounded-md border border-neutral-200 bg-neutral-50 px-1.5 py-[1px] text-[10px] font-medium text-neutral-600">
            {text}
        </span>
    );
}

export default function Attachments({ files }: Props) {
    const items = files.map((f) => {
        const filename = f.filename || fileNameFromUrl(f.url);
        const kind = previewKind(f.mime, filename);
        return { ...f, filename, kind };
    });

    return (
        <section className="mt-6">
            <h2 className="mb-2 text-base font-semibold">첨부파일</h2>

            {/* 얇고 길쭉한 리스트 */}
            <ul className="divide-y divide-neutral-200 rounded-xl border border-neutral-200 bg-white shadow-sm">
                {items.map((f) => {
                    const previewHref =
                        f.kind === "pdf" ? `${f.url}#view=FitH` : f.url;

                    return (
                        <li
                            key={f._key}
                            className="flex items-center gap-3 px-3 py-2.5 sm:px-4 sm:py-3"
                        >
                            {icon(f.kind)}
                            <div className="min-w-0 flex-1">
                                <div className="truncate text-sm font-medium">
                                    {f.filename || "파일"}
                                </div>
                                <div className="mt-0.5 flex flex-wrap items-center gap-1.5">
                                    {f.mime ? badge(f.mime) : null}
                                    {f.size ? badge(formatBytes(f.size)) : null}
                                </div>
                            </div>

                            <div className="flex shrink-0 items-center gap-1.5">
                                {/* 미리보기: 모달 없이 새 탭 */}
                                {f.kind ? (
                                    <a
                                        href={previewHref}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-lg border border-neutral-300 px-2.5 py-1 text-xs font-medium hover:bg-neutral-50"
                                        aria-label={`${f.filename} 미리보기(새 탭)`}
                                    >
                                        미리보기
                                    </a>
                                ) : null}
                                <a
                                    href={f.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-lg bg-neutral-600 px-2.5 py-1 text-xs font-semibold text-white hover:bg-neutral-700"
                                    aria-label={`${f.filename} 다운로드`}
                                >
                                    다운로드
                                </a>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
