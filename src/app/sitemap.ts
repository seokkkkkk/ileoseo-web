import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = "https://ileoseo.vercel.app";
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
