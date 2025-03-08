import { client } from "@/sanity/lib/client";
import React from "react";
import { CalendarIcon } from "lucide-react";

// Define Post Type
type PostType = {
  _id: string;
  publishedAt: string;
  title: string;
  author: {
    name: string;
    image: string;
  };
  image: string;
  slug: {
    current: string;
  };
  body: any;
};

// Fetch post from Sanity
async function getPost(slug: string): Promise<PostType | null> {
  try {
    const query = `*[_type == 'post' && slug.current == $slug][0]{
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

    return await client.fetch(query, { slug });
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

// Main Page Component
export default async function Post({ params }: { params: { slug: string } }) {
  if (!params?.slug) {
    return <div className="text-center">Invalid post</div>;
  }

  const post = await getPost(params.slug);

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
      <div className="mt-2 text-gray-600">By {post.author.name}</div>
    </div>
  );
}

