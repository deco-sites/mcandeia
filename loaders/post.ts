import { Slug } from "../functions/slugFromUrl.ts";
import { Blog, Post } from "./blog.ts";

export interface Props {
  slug: Slug;
  blog: Blog;
}

export default function Post(
  { slug, blog: { posts } }: Props,
  _req: Request,
): Post | null {
  return posts.find((post) => post.slug === slug) ?? null;
}
