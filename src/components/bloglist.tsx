"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { SanityTypes } from "@/@types";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import { useState } from "react";

interface BlogProps {
  posts: SanityTypes.Post[];
}
const parentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.8,
      ease: "easeInOut",
      staggerChildren: 0.5,
    },
  },
};
const childVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};
const POSTS_PER_PAGE = 4;

export default function BlogClient({ posts }: BlogProps) {
  const [visiblePosts, setVisiblePosts] = useState(POSTS_PER_PAGE);
  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + POSTS_PER_PAGE);
  };
  return (
    <div>
      {/* Title */}
      <div className="relative flex flex-col items-center justify-center gap-3 text-center bg-green-800 p-8 h-[300px] md:h-[600px] xl:h-[900px] xs:pt-52 sm:pt-32 md:pt-0">
        <motion.p
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[1.02rem] text-green-200 font-medium tracking-wider"
        >
          OUR BLOG
        </motion.p>
        <motion.h1
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-5xl text-white mt-2 mb-32 font-medium"
        >
          Insights, Tips, And Inspiration
        </motion.h1>
        <motion.div
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute top-[85%] md:top-[60%] lg:top-[70%] xl:top-[60%] md:px-5 lg:px-0 flex justify-center items-center left-0 right-0 mx-auto"
        >
          <Image
            src="/brandpic/office/exmpl2.jpg"
            alt="H"
            width={1800}
            height={500}
            className="sm:aspect-[5/2] xs:max-h-[165px] md:max-h-[340px] xl:max-h-[500px] aspect-auto mx-8 rounded-2xl object-cover object-center"
            priority
            quality={100}
          />
        </motion.div>
      </div>

      <div className="flex xl:flex-row-reverse flex-col justify-center gap-5 pt-52 bg-slate-100">
        {/* Latest Blog */}
        <div>
          <motion.h1
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xl text-green-800 ml-5 py-3"
          >
            Latest Post
          </motion.h1>
          <motion.div
            variants={parentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:grid md:grid-cols-2 md:place-items-start items-center min-w-[315px] xl:max-h-[685px] mx-3 bg-white rounded-2xl"
          >
            {posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).slice(0, 4).map((post, key) => (
              <motion.div
                variants={childVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                key={key}
                className="flex flex-col px-4 py-2 xl:max-w-[250px]"
              >
                <Link href={`/post/${post.slug.current}`}>
                  <Image
                    src={urlFor(post.image).url()}
                    alt={post.title}
                    width={660}
                    height={330}
                    className="sm:h-full sm:w-full rounded-2xl mx-auto aspect-[-3/2] object-center object-cover"
                  />
                  <h1 className="mt-3 aspect-auto text-lg xl:text-sm font-bold">
                    {post.title}
                  </h1>
                </Link>
                <p className="text-[0.8rem] text-accent">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <div className="text-sm my-2 line-clamp-2">
                  <PortableText value={post.body} />
                </div>
                <Link
                  href={`/post/${post.slug.current}`}
                  className="text-green-800 my-2 md:hidden"
                >
                  Read More
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Feature Blog */}
        <div className="px-10 py-2">
          <motion.h1
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xl text-green-800 ml-2 py-4"
          >
            Feature Post
          </motion.h1>
          <div className="flex flex-col items-center gap-3">
            {posts.sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()).slice(0, visiblePosts).map((post, key) => (
              <motion.div
                variants={childVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                key={key}
                className="flex gap-4 pb-4"
              >
                <Link href={`/post/${post.slug.current}`}>
                  <Image
                    src={urlFor(post.image).url()}
                    alt={post.title}
                    height={300}
                    width={300}
                    quality={100}
                    className="rounded-2xl min-w-[105px] aspect-square object-cover object-center cursor-pointer"
                  />
                </Link>
                <div className="flex flex-col gap-2 items-start max-w-[465px]">
                  <div>
                    <Link
                      href={`/post/${post.slug.current}`}
                      className="text-2xl xl:text-3xl text-green-950 font-bold cursor-pointer"
                    >
                      {post.title}
                    </Link>
                    <p className="text-[0.8rem] text-accent mt-2">
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <div className="line-clamp-5 mt-2 text-sm">
                      <PortableText value={post.body} />
                    </div>
                  </div>
                  <div>
                    <Link
                      href={`/post/${post.slug.current}`}
                      className="text-green-800 cursor-pointer"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
            {/* Load More */}
            {visiblePosts < posts.length && (
              <motion.div
                variants={childVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-6 flex justify-center bg-slate-100"
              >
                <Button
                  className="rounded-xl px-6 bg-green-800 text-white mx-auto hover:bg-white hover:text-green-900 hover:border-2 border-green-800"
                  onClick={loadMorePosts}
                >
                  Load More
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
