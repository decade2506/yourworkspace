"use client";

import { useState, useEffect } from "react";
import { CalendarIcon } from "lucide-react";
import { client } from "@/sanity/lib/client";

interface PostProps {
  slug: string;
}

export default function PostClient({ slug }: PostProps) {
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
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
        const data = await client.fetch(query, { slug });
        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (!post) return <p className="text-center">Post not found.</p>;

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
