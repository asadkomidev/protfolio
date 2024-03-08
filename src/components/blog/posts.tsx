"use client";

import { Heading } from "../shared/heading";
import PostCard from "./post-card";
import { PostList } from "@/types/post";

type Props = {
  data: PostList[];
};
const Posts = ({ data }: Props) => {
  return (
    <Heading
      title="Things I’ve made trying to put my dent in the universe."
      intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
    >
      <div className="flex flex-col gap-y-16">
        {data.map((post, i) => (
          <PostCard key={i} post={post} />
        ))}
      </div>
    </Heading>
  );
};

export default Posts;
