import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = process.env.NEXT_PUBLIC_HOST || "http://localhost:3000";
    return [
        { url: `${base}/`, lastModified: new Date() },
        { url: `${base}/about`, lastModified: new Date() },
        { url: `${base}/programs`, lastModified: new Date() },
        { url: `${base}/partners`, lastModified: new Date() },
        { url: `${base}/donate`, lastModified: new Date() },
        { url: `${base}/notices`, lastModified: new Date() },
        { url: `${base}/contact`, lastModified: new Date() },
    ];
}
