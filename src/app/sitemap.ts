import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = "https://ileoseo.vercel.app";
    return [
        { url: `${base}/`, changeFrequency: "daily", priority: 1 },
        { url: `${base}/about`, changeFrequency: "daily", priority: 0.8 },
        { url: `${base}/programs`, changeFrequency: "daily", priority: 0.8 },
        { url: `${base}/partners`, changeFrequency: "daily", priority: 0.8 },
        { url: `${base}/donate`, changeFrequency: "daily", priority: 0.8 },
        { url: `${base}/notices`, changeFrequency: "daily", priority: 0.8 },
        { url: `${base}/contact`, changeFrequency: "daily", priority: 0.8 },
    ];
}
