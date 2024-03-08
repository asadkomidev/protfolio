import { revalidatePath } from "next/cache";
import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";

export async function getProjects() {
  const query = groq`*[_type == 'project'] {
      name,
      description,
       github,
       website,
       "technologies": technologies[] -> {
        name,
      }
     }`;

  const data = await client.fetch(query);
  revalidatePath("/blog");

  return data;
}

export async function getProject(slug: string) {
  const query = groq`*[_type == 'post' &&  slug.current == '${slug}'] {
      name,
      description,
      github,
      website,
      technologies
    }[0]`;

  const data = await client.fetch(query);

  return data;
}
