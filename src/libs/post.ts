import matter from "gray-matter";
import { readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const POSTS_DIR = resolve(process.cwd(), "src/_posts");

export function getPost(slug: string): ReturnType<typeof matter> {
  const postPath = resolve(POSTS_DIR, slug, "index.md");
  const postText = readFileSync(postPath, "utf-8");

  return matter(postText);
}

export function getPosts(): {
  slug: string;
  post: ReturnType<typeof matter>;
}[] {
  const postPaths = readdirSync(POSTS_DIR);
  const posts = postPaths.map((postPath) => ({
    slug: postPath,
    post: getPost(postPath),
  }));

  return posts.sort((a, b) => a.post.data.date - b.post.data.date);
}
