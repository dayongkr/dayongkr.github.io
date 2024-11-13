import { getPosts } from "@/libs/post";
import { format } from "date-fns";
import Link from "next/link";

export function RecentPosts() {
  const posts = getPosts();

  return (
    <>
      <h2 className="text-xl">최근 글</h2>
      {posts.map(({ slug, post }) => (
        <Link href={`/posts/${slug}`} key={slug}>
          <article className="flex flex-col gap-1">
            <h3 className="text-xl font-bold">{post.data.title}</h3>
            <p className="text-lg mb-2">{post.data.summary}</p>
            <p className="text-sm">
              {format(post.data.date, "yyyy년 MM월 dd일")}
            </p>
          </article>
        </Link>
      ))}
    </>
  );
}
