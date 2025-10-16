"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

type Props = {
    to?: string; // 이동할 경로 (기본: /admin/structure/notice)
    children: React.ReactNode; // 감쌀 요소 (예: 기관명 div)
    tripleClickMs?: number; // 트리플 클릭 허용 간격
    longPressMs?: number; // 롱프레스 기준 시간
};

export default function AdminTrigger({
    to = "/admin/structure/notice",
    children,
    tripleClickMs = 2000,
    longPressMs = 1200,
}: Props) {
    const router = useRouter();
    const clicks = useRef<number>(0);
    const lastTs = useRef<number>(0);
    const pressTimer = useRef<number | null>(null);

    // 트리플 클릭(2초 내 3회)
    function onClick(e: React.MouseEvent) {
        const now = Date.now();
        if (now - lastTs.current > tripleClickMs) {
            clicks.current = 0;
        }
        clicks.current += 1;
        lastTs.current = now;
        if (clicks.current >= 3) {
            clicks.current = 0;
            router.push(to);
        }
    }

    // ✅ 롱프레스(1.2초)
    function onMouseDown() {
        clearTimer();
        // @ts-ignore
        pressTimer.current = window.setTimeout(() => {
            router.push(to);
        }, longPressMs);
    }
    function onMouseUpLeave() {
        clearTimer();
    }
    function clearTimer() {
        if (pressTimer.current) {
            clearTimeout(pressTimer.current);
            pressTimer.current = null;
        }
    }

    useEffect(() => clearTimer, []);

    return (
        <span
            onClick={onClick}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUpLeave}
            onMouseLeave={onMouseUpLeave}
            onTouchStart={onMouseDown}
            onTouchEnd={onMouseUpLeave}
            className="select-none cursor-default"
            aria-hidden
        >
            {children}
        </span>
    );
}
