"use client";

import { blogContent } from "@/content/blog-content";
import { PageLayout } from "../shared/page-layout";
import PostCard from "./post-card";
import { PostList } from "@/types/post";

type Props = {
  data: PostList[];
};
const Posts = ({ data }: Props) => {
  return (
    <PageLayout
      title={blogContent.title}
      intro={blogContent.intro}
    >
      <div className="flex flex-col gap-y-16">
        {data.map((post, i) => (
          <PostCard key={i} post={post} />
        ))}
      </div>
    </PageLayout>
  );
};

export default Posts;
