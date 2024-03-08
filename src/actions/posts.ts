import { revalidatePath } from "next/cache";
import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";

export async function getPosts() {
  const query = groq`*[_type == 'post'] {
        title,
         desc,
          'slug': slug.current,
          mainImage,
          publishedAt,
        }`;

  const data = await client.fetch(query);
  revalidatePath("/blog");

  return data;
}

export async function getPost(slug: string) {
  const query = groq`*[_type == 'post' &&  slug.current == '${slug}'] {
      title,
      desc,
       'slug': slug.current,
       mainImage,
       publishedAt,
       body,
    }[0]`;

  const data = await client.fetch(query);

  return data;
}
