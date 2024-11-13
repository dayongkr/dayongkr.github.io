import { getPost, getPosts } from "@/libs/post";
import { format } from "date-fns";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

export async function generateStaticParams() {
  const posts = getPosts();

  return posts.map((post) => ({
    postSlug: post.slug,
  }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ postSlug: string }>;
}) {
  const { postSlug } = await params;
  const {
    content,
    data: { title, date },
  } = getPost(postSlug);

  return (
    <article className="prose">
      <header>
        <h1 className="!mb-2">{title}</h1>
        <p className="text-sm">{format(date, "yyyy년 MM월 dd일")}</p>
      </header>
      <MDXRemote
        source={content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            format: "md",
          },
        }}
      />
    </article>
  );
}
