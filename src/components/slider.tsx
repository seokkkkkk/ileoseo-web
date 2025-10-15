"use client";
import Image from "next/image";
import { useState } from "react";

export default function Slider({ images }: { images: string[] }) {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((p) => (p === 0 ? images.length - 1 : p - 1));
    const next = () => setCurrent((p) => (p === images.length - 1 ? 0 : p + 1));

    return (
        <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5">
                <Image
                    src={images[current]}
                    alt={`CMS 후원 자동이체 양식 ${current + 1}`}
                    width={1200}
                    height={1600}
                    className="w-full h-auto transition-all duration-300"
                    priority
                />
            </div>

            {/* 컨트롤 */}
            <button
                onClick={prev}
                className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/80 rounded-full px-4 py-2shadow hover:bg-white"
                aria-label="이전"
            >
                ◀
            </button>
            <button
                onClick={next}
                className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/80 rounded-full px-4 py-2 shadow hover:bg-white"
                aria-label="다음"
            >
                ▶
            </button>

            {/* 인디케이터 */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${
                            current === i ? "bg-[#66B84E]" : "bg-neutral-300"
                        }`}
                        aria-label={`${i + 1}번째 이미지로 이동`}
                    />
                ))}
            </div>
        </div>
    );
}
