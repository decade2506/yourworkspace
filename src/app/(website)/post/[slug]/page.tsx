import { SanityTypes } from "@/@types";
import { client } from "@/sanity/lib/client";
import React from "react";
import { CalendarIcon } from "lucide-react";

// Fetch post from Sanity
async function getPost(slug: string): Promise<SanityTypes.Post | null> {
  try {
    const query = `*[_type=='post' && slug.current == $slug][0]{
      _id,
      publishedAt,
      title,
      author -> {
          name,
          image
      },
      image,
      slug,
      body
    }`;

    const post = await client.fetch<SanityTypes.Post | null>(query, { slug });
    return post ?? null;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

// Main page component
export default async function Post({ params }: { params: Awaited<{ slug: string }> }) {
  const post = await getPost(params.slug);

  if (!post) {
    return <div className="text-center">Post not found</div>;
  }

  return (
    <div className="flex flex-col items-center w-full">
      <CalendarIcon size={20} />
      <div>{new Date(post.publishedAt).toDateString()}</div>
    </div>
  );
}
