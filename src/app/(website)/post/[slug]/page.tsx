import { client } from "@/sanity/lib/client";
import { Metadata } from "next";
import PostClient from "@/components/PostClient";

async function getPost(slug: string) {
  const query = `
    *[_type == 'post' && slug.current == $slug]{
      _id,
      publishedAt,
      title,
      slug,
      image,
      body
    }[0]
  `;
  return await client.fetch(query, { slug });
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);

  return {
    title: post ? post.title : "Post Not Found",
    description: post ? `Read ${post.title} on Your Site` : "This post is unavailable.",
  };
}

export default function Post({ params }: { params: { slug: string } }) {
  return <PostClient slug={params.slug} />;
}
