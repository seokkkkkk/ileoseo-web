export function deepDecode(s: string) {
    try {
        let prev = s,
            cur = s;
        do {
            prev = cur;
            cur = decodeURIComponent(cur);
        } while (cur !== prev);
        return cur;
    } catch {
        return s;
    }
}
