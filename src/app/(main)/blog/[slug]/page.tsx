import Image from "next/image";
import { format } from "date-fns";
import { PortableText } from "@portabletext/react";

import { getPost } from "@/actions/posts";
import { PostList } from "@/types/post";
import Container from "@/components/shared/container";

import { urlForImage } from "../../../../../sanity/lib/image";
import { components } from "@/components/blog/render/render-component";

export const revalidate = 20;

export default async function Page({ params }: { params: { slug: string } }) {
  const data: PostList = await getPost(params.slug);

  return (
    <Container className="min-h-[80vh]">
      <div className="py-12 md:py-48 md:px-32 flex flex-col">
        <p className="text-muted-foreground border-l dark:border-white pl-4">
          {format(data.publishedAt, "MMMM dd, yyyy")}
        </p>
        <h1 className="text-3xl md:text-5xl font-bold pt-6 ">{data.title}</h1>
        <p className="py-8 text-muted-foreground">{data.desc}</p>
        <Image
          priority
          src={urlForImage(data.mainImage)}
          alt=""
          width={800}
          height={500}
          className="object-cover aspect-video rounded-lg"
        />
        <div className="py-12">
          <div className="prose pb-12 prose-headings:dark:text-white prose-p:dark:text-muted-foreground prose-li:dark:text-muted-foreground prose-a:dark:text-muted-foreground prose-strong:dark:text-muted-foreground prose-blockquote:dark:text-muted-foreground ">
            {/* @ts-ignore */}
            <PortableText value={data.body} components={components} />
          </div>
        </div>
      </div>
    </Container>
  );
}
