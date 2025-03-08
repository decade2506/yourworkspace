import { client } from "@/sanity/lib/client";
import React from "react";
import { CalendarIcon } from "lucide-react";
import { SanityTypes } from "@/@types";

// Use proper Next.js 15+ typing for params
type PostPageProps = {
  params: Promise<{
    slug: string;
  }>;
  searchParams?: Record<string, string | string[] | undefined>;
};

async function getPost(slug: string): Promise<any> {
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

// Add metadata generation
export async function generateMetadata({ params }: PostPageProps) {
  const resolvedParams = await params;
  const post = await getPost(resolvedParams.slug);
  
  return {
    title: post?.title || "Post",
    description: `Read about ${post?.title || "our content"}`,
  };
}

// Add static params generation to pre-render pages at build time
export async function generateStaticParams() {
  const posts = await client.fetch(`*[_type == "post"]{ "slug": slug.current }`);
  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }: PostPageProps) {
  const resolvedParams = await params;
  const post: SanityTypes.Post = await getPost(resolvedParams.slug);

  if (!post) {
    return <div className="text-center">Post not found</div>;
  }

  return (
    <div className="flex flex-col items-center w-full p-6">
      <CalendarIcon size={20} />
      <div className="text-gray-500 text-sm mt-2">
        {new Date(post.publishedAt).toDateString()}
      </div>
      <h1 className="text-3xl font-bold mt-4">{post.title}</h1>
    </div>
  );
}