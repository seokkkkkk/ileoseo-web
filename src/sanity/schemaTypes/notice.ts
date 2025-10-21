import { defineType, defineField } from "sanity";
import { client } from "../lib/client";

export const notice = defineType({
    name: "notice",
    title: "공지사항",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "제목",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "slug",
            title: "슬러그(주소)",
            description:
                "❗️공지사항 페이지 URL이 됩니다. 반드시 생성되어야 합니다.",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
                slugify: async (input) => {
                    const base = input
                        .trim()
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[^0-9a-z\-가-힣]/g, "")
                        .replace(/-+/g, "-")
                        .slice(0, 96);

                    // 같은 slug가 이미 존재하는지 검사
                    const existing = await client.fetch(
                        `count(*[_type == "notice" && slug.current == $slug])`,
                        { slug: base }
                    );

                    if (existing === 0) {
                        return base;
                    }

                    // 중복 시 "-2", "-3" 등 숫자 붙이기
                    let counter = 2;
                    let newSlug = `${base}-${counter}`;
                    while (
                        (await client.fetch(
                            `count(*[_type == "notice" && slug.current == $slug])`,
                            { slug: newSlug }
                        )) > 0
                    ) {
                        counter++;
                        newSlug = `${base}-${counter}`;
                    }

                    return newSlug;
                },
            },
        }),

        defineField({
            name: "summary",
            title: "요약",
            type: "text",
            rows: 2,
            hidden: true,
        }),

        defineField({
            name: "files",
            title: "첨부파일",
            type: "array",
            of: [
                {
                    type: "file",
                    options: {
                        storeOriginalFilename: true,
                    },
                    validation: (Rule) => Rule.required().assetRequired(),
                },
            ],
        }),

        defineField({
            name: "body",
            title: "본문",
            type: "array",
            of: [
                { type: "block" },
                { type: "image", options: { hotspot: true } },
            ],
        }),

        defineField({
            name: "publishedAt",
            title: "게시일",
            type: "datetime",
            initialValue: () => new Date().toISOString(),
        }),

        defineField({
            name: "isPublished",
            title: "공개 여부",
            type: "boolean",
            initialValue: true,
        }),
    ],
    preview: {
        select: { title: "title", subtitle: "publishedAt" },
    },
});
