import { Head } from "$fresh/runtime.ts";
import { CSS, render } from "$gfm";
import { Post } from "../loaders/blog.ts";

export interface Props {
  post: Post | null;
}
export default function PostPage({ post }: Props) {
  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <main class="max-w-screen-md px-4 pt-16 mx-auto">
        <h1 class="text-5xl font-bold">{post?.title ?? "No title"}</h1>
        <time class="text-gray-500">
          {post
            ? new Date(post.publishedAt).toLocaleDateString("en-us", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
            : new Date().toISOString()}
        </time>
        <div
          class="mt-8 markdown-body"
          dangerouslySetInnerHTML={{
            __html: post
              ? render(post.content)
              : "<div>Nothing to see here</div>",
          }}
        />
      </main>
    </>
  );
}
