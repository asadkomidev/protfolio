import { getPosts } from "@/actions/posts";
import { PostList } from "@/types/post";
import Posts from "@/components/blog/posts";
import Container from "@/components/shared/container";

export const revalidate = 20;

export default async function Page() {
  const posts: PostList[] = await getPosts();

  return (
    <Container className="h-[80vh]">
      <Posts data={posts} />
    </Container>
  );
}
