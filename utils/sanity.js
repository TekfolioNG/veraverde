// utils/sanity.js
import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: "p9bv97k2",
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: false,
});

export const fetchPosts = async () => {
  try {
    const posts = await sanityClient.fetch(`
      *[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        publishedAt,
        excerpt,
        body,
        "imageUrl": mainImage.asset->url,
        "imageAlt": mainImage.alt,
        author
      }
    `);

    console.log("Posts with full data:", posts);
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const fetchPost = async (slug) => {
  try {
    const post = await sanityClient.fetch(
      `
      *[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        publishedAt,
        excerpt,
        body,
        "imageUrl": mainImage.asset->url,
        "imageAlt": mainImage.alt,
        author
      }
    `,
      { slug }
    );

    return post;
  } catch (error) {
    console.error("Error fetching single post:", error);
    throw error;
  }
};
