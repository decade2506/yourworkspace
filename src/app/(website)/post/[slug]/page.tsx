import { client } from "@/sanity/lib/client";
import React from "react";
import { CalendarIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
// import Link from "next/link";

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

export async function generateMetadata(props: any): Promise<Metadata> {
  const slug = props.params.slug;
  const post = await getPost(slug);

  return {
    title: post.title,
    description: `Read ${post.title} on Your Site`,
  };
}

export default async function Post(props: any) {
  const slug = props.params.slug;
  const post = await getPost(slug);

  return (
    <div>
      {/* title */}
      <div className="relative flex flex-col items-center justify-center text-center bg-green-800 p-8 h-[300px] md:h-[600px] xl:h-[900px] xs:pt-72 sm:pt-32 md:pt-0">
        <h1 className="text-3xl md:text-5xl text-white mt-2 mb-2 font-medium">
          {post.title}
        </h1>
        <div className="text-yellow-600 text-sm mb-52 flex items-center gap-2">
          <CalendarIcon size={20} />
          {new Date(post.publishedAt).toDateString()}
        </div>
        <div className="absolute top-[88%] md:top-[60%] lg:top-[70%] xl:top-[60%] md:px-5 lg:px-0 flex justify-center left-0 right-0 mx-auto">
          <Image
            src={urlFor(post.image).url()}
            alt={post.title}
            width={1800}
            height={500}
            className="sm:aspect-[5/2] xs:max-h-[165px] md:max-h-[340px] xl:max-h-[500px] aspect-auto mx-8 rounded-2xl object-cover object-center"
            priority
            quality={100}
          />
        </div>
      </div>
      {/* content */}
      <article className="pt-44 px-10 pb-20 prose max-w-3xl mx-auto">
        <PortableText value={post.body} />
      </article>
      {/* Latest Blog */}
    </div>
  );
}
