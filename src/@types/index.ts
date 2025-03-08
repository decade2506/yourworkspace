import { SanityImageAssetDocument } from "next-sanity";
import { PortableTextBlock } from "sanity";

export namespace SanityTypes {
    export interface Post {
        _id: string;
        publishedAt: string;
        title: string;
        slug: {current: string};
        image: SanityImageAssetDocument;
        body: any;
    }
}