import { groq } from "next-sanity";

// 최신 공지 1건
export const NOTICE_LATEST_QUERY = groq`*[
  _type == "notice" && isPublished == true && defined(slug.current)
] | order(publishedAt desc)[0]{
  title,
  publishedAt,
  "slug": slug.current,

  // 본문(이미지 메타 포함)
  body[]{
    ...,
    _type == "image" => {
      ...,
      asset->{
        _id,
        url,
        mimeType,
        metadata { dimensions { width, height } }
      }
    }
  },

  // 첨부파일(파일만)
  files[]{
    "url": asset->url,
    "filename": asset->originalFilename,
    "size": asset->size,
    "mime": asset->mimeType
  },

  // 편의 필드
  "bodyImages": body[_type == "image"]{ "url": asset->url },
  "imageUrls": body[_type == "image"].asset->url,
  "coverImage": body[_type == "image"][0].asset->url,
  "imageCount": count(body[_type == "image"]),
  "hasImages": defined(body[_type == "image"][0])
}`;

// 최신 공지 3건 (타이틀, 게시일, 슬러그 3개)
export const NOTICE_LATEST_LIST_QUERY = groq`*[
  _type == "notice" && isPublished == true && defined(slug.current)
] | order(publishedAt desc)[0..2]{
  title,
  publishedAt,
  "slug": slug.current
}`;

// 모든 공지 목록
export const NOTICE_LIST_QUERY = groq`*[
  _type == "notice" && isPublished == true && defined(slug.current)
] | order(publishedAt desc){
  _id,
  title,
  publishedAt,
  "slug": slug.current,

  // body에서 첫 이미지를 대표로 사용
  "coverImage": body[_type == "image"][0].asset->url,

  // 목록에서 가볍게 썸네일만 쓰고 싶을 때
  // "imageUrls": body[_type == "image"].asset->url
}`;

// 개별 공지
export const NOTICE_DETAIL_QUERY = groq`*[
  _type == "notice" && isPublished == true && defined(slug.current) && slug.current == $slug
][0]{
  title,
  publishedAt,

  body[]{
    ...,
    _type == "image" => {
      ...,
      asset->{
        _id,
        url,
        mimeType,
        metadata { dimensions { width, height } }
      }
    }
  },

  files[]{
    "url": asset->url,
    "filename": asset->originalFilename,
    "size": asset->size,
    "mime": asset->mimeType
  },

  // 편의
  "bodyImages": body[_type == "image"]{ "url": asset->url },
  "imageUrls": body[_type == "image"].asset->url
}`;
