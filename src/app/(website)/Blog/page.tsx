import BlogClient from "@/components/bloglist";
import { client } from "@/sanity/lib/client";
import { SanityTypes } from "@/@types";

export const revalidate = 5;
async function getPosts() {
  const query = `*[_type=='post'] | order(publishedAt desc)`;
  return await client.fetch<SanityTypes.Post[]>(query);
}

export default async function Blog() {
  const posts = await getPosts(); // Fetch data on the server

  return <BlogClient posts={posts} />; // Pass the posts as props
}
