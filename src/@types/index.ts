import { SanityImageAssetDocument } from "next-sanity";

export namespace SanityTypes {
    export interface Post {
        _id: string;
        publishedAt: string;
        title: string;
        slug: {current: string};
        image: SanityImageAssetDocument;
        description: string;
        body: any;
    }
}