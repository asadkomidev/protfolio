"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { format } from "date-fns";

import { PostList } from "@/types/post";

type Props = {
  post: PostList;
};

const PostCard = ({ post }: Props) => {
  const router = useRouter();

  return (
    <article className="">
      <div className="flex flex-col md:flex-row items-start w-full gap-6 border-l pl-4 md:pl-0">
        <div className="min-w-48  h-full">
          <p className="pl-4 pt-4 text-sm text-muted-foreground">
            {format(post.publishedAt, "MMMM dd, yyyy")}
          </p>
        </div>
        <div
          onClick={() => router.push(`/blog/${post.slug}`)}
          className="flex flex-col w-full hover:bg-zinc-400/5 hover:dark:bg-zinc-400/5 p-4 rounded-lg cursor-pointer"
        >
          <h1 className="pb-2 text-base font-medium">{post.title}</h1>
          <p className="text-muted-foreground text-sm">{post.desc}</p>
          <p className="pt-6 text-sm ">
            <Link href={`/`} className="flex items-center gap-2">
              <span className=""> Read more</span>
              <span className="">
                <ChevronRight className="w-4 h-4" />
              </span>
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
