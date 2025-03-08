import { SanityTypes } from '@/@types';
import { client } from '@/sanity/lib/client';
import React from 'react'
import { CalendarIcon } from 'lucide-react';

async function getPost(slug: string): Promise<any> {
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
    return await client.fetch(query, {slug});
}

export default async function Post({params: {slug}}: {params: {slug: string;}}) {
    const post: SanityTypes.Post = await getPost(slug);
  return (
    <div className="flex flex-col items-center w-full">
        <CalendarIcon size={20}/>
        <div>{new Date(post.publishedAt).toDateString()}</div>
    </div>
  )
}