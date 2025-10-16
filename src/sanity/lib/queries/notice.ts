import { groq } from "next-sanity";

// 최신 공지 1건
export const NOTICE_LATEST_QUERY = groq`*[_type=="notice" && isPublished==true && defined(slug.current)]
  | order(publishedAt desc)[0]{
    title,
    publishedAt,
    // 메인 이미지 필드가 있다면 함께 노출
    images[]{ ..., "url": asset->url },
    files[]{ ..., "url": asset->url },

    // 바디 안의 이미지 블록 전체
    "bodyImages": body[_type=="image"]{ ..., "url": asset->url },

    // 단순 URL 배열만 필요할 때
    "imageUrls": body[_type=="image"].asset->url,

    // 리스트/카드용 대표 이미지(우선 images[0] → 없으면 body 첫 이미지)
    "coverImage": coalesce(images[0].asset->url, body[_type=="image"][0].asset->url),

    "slug": slug.current,
    "imageCount": count(body[_type=="image"]),
    "hasImages": defined(body[_type=="image"][0])
  }`;

// 최신 공지 3건 (타이틀, 게시일, 슬러그 3개)
export const NOTICE_LATEST_LIST_QUERY = groq`*[_type=="notice" && isPublished==true && defined(slug.current)]
  | order(publishedAt desc)[0..2]{
    title,
    publishedAt,
    "slug": slug.current,
  }`;

// 모든 공지 목록
export const NOTICE_LIST_QUERY = groq`*[_type=="notice" && isPublished==true && defined(slug.current)]
  | order(publishedAt desc){
    _id,
    title,
    publishedAt,
    "slug": slug.current,

    // 카드 썸네일로 쓰기 좋은 대표 이미지
    "coverImage": coalesce(images[0].asset->url, body[_type=="image"][0].asset->url),

    // 필요하다면 바디 이미지 URL 전부(목록 화면에서 가볍게 쓰려면 이 줄만 둬도 OK)
    "imageUrls": body[_type=="image"].asset->url,

    // 목록에서도 첫 1~2장만 미리보기 하고 싶다면:
    // "previewImages": body[_type=="image"][0..1]{ ..., "url": asset->url }
  }`;

// 개별 공지
export const NOTICE_DETAIL_QUERY = groq`*[
  _type=="notice" && isPublished==true && defined(slug.current) && slug.current == $slug
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
        metadata { dimensions { width, height } }
      }
    }
  },
  files[]{ ..., "url": asset->url },

  // 편의 필드 (선택)
  "bodyImages": body[_type=="image"]{ ..., "url": asset->url },
  "imageUrls":  body[_type=="image"].asset->url
}`;
