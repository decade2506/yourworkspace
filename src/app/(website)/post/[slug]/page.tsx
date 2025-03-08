import { client } from "@/sanity/lib/client";
import React from "react";
import { CalendarIcon } from "lucide-react";
import { SanityTypes } from "@/@types";
import { Metadata } from "next";

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
  `
  return await client.fetch(query, { slug })
}

export async function generateMetadata(props: any): Promise<Metadata> {
  const slug = props.params.slug;
  const post = await getPost(slug);
  
  return {
    title: post.title,
    description: `Read ${post.title} on Your Site`,
  };
}

export default async function Post({params: {slug}}: {params: {slug: string}}) {
  const post: SanityTypes.Post = await getPost(slug);
  
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