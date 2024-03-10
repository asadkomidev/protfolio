import { type Metadata } from 'next'
import { getPosts } from "@/actions/posts";
import { PostList } from "@/types/post";
import Posts from "@/components/blog/posts";
import Container from "@/components/shared/container";

export const metadata: Metadata = {
  title: "Blog - Insights on Full-Stack Development, .NET, React, and Tech Trends",
  description: "Gain valuable insights from Asad Komi's blog, featuring tutorials, deep dives into .NET, React, Next.js, and discussions on the latest in web development.",
};

export const revalidate = 20;

export default async function Page() {
  const posts: PostList[] = await getPosts();

  return (
    <Container className="min-h-[80vh]">
      <Posts data={posts} />
    </Container>
  );
}
