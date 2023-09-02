import { extract } from "std/encoding/front_matter.ts";

export interface Post {
  slug: string;
  title: string;
  publishedAt: Date;
  content: string;
  snippet: string;
}

/**
 * @title {{{slug}}}
 */
export interface PostContent {
  /**
   * @format textarea
   */
  text: string;
  slug: string;
}

export interface Props {
  posts: PostContent[];
}

export interface Blog {
  posts: Post[];
}

const fromPostContent = ({ text, slug }: PostContent): Post => {
  const { attrs, body } = extract(text);
  return {
    slug,
    title: attrs.title as string,
    publishedAt: new Date(attrs.published_at as string),
    content: body,
    snippet: attrs.snippet as string,
  };
};

export default function blog({ posts }: Props): Blog {
  return {
    posts: posts.map(fromPostContent),
  };
}
