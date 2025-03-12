import { client } from "@/sanity/lib/client";
import React from "react";
import { CalendarIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Link from "next/link";

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

async function getLatestPosts(currentPostId: string): Promise<any[]> {
  const query = `
  *[_type == 'post' && _id != $currentPostId] | order(publishedAt desc) [0...4] {
    _id,
    title,
    slug,
    image,
    publishedAt
  }
  `;
  return await client.fetch(query, { currentPostId });
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
  const latestPosts = await getLatestPosts(post._id);

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
      <div className="pt-44 flex flex-col gap-10 xl:flex-row mx-[15%]">
        {/* content */}
        <article className=" pt-10 pl-10 pb-20 prose max-w-5xl mx-auto">
          <PortableText value={post.body} />
        </article>
        {/* Latest Blog */}
        <div className="pr-3 py-2 xl:mr-[-10%]">
          <h1
            className="text-xl text-center xl:text-left text-green-800 ml-2 py-4 mb-5"
          >
            Latest Post
          </h1>
          <div className="flex flex-col md:flex-row flex-wrap xl:flex-nowrap xl:flex-col md:items-center justify-center items-start gap-3">
            {latestPosts.map((latestPosts) => (
              <div
              key={latestPosts._id}
                className="flex items-center xs:gap-12 sm:gap-3 pb-4"
              >
                <Link href={`/post/${latestPosts.slug.current}`}>
                  <Image
                    src={urlFor(latestPosts.image).url()}
                    alt={latestPosts.title}
                    height={200}
                    width={200}
                    quality={100}
                    className="rounded-2xl xs:max-w-[40px] min-w-[80px] md:max-w-[80px] lg:max-w-[120px] aspect-square object-cover object-center cursor-pointer"
                  />
                </Link>
                <div className="flex flex-col items-center justify-center gap-2 md:max-w-[160px] text-left">
                  <div>
                    <Link
                      href={`/post/${latestPosts.slug.current}`}
                      className="text-[1.05rem] sm:text-2xl md:text-[1.1rem] text-green-950 font-medium cursor-pointer"
                    > 
                      {latestPosts.title}
                    </Link>
                    <p className="text-[0.8rem] text-accent mt-2">
                      {new Date(latestPosts.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
