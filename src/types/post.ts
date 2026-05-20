import { TagCategory } from "./tag"

/**
 * Data for any displays that show previews of posts, like in search results 
 * or content linked to the current post.
 * 
 * Tag IDs are only used for the posts browser, to aggregate a non-repeating 
 * set of tags to set up the tag-listing display.
 */
export interface PostListing {
    id: number,
    thumb: string,
    url: string,
    title: string,
    tags: string,
    tagIds?: number[]
};

/**
 * Data for post details to display into the UI.
 */
export interface PostDetail {
    title: string,
    image: string,
    url: string,
    linkedTo: PostListing[],
    linkedFrom: PostListing[],
    tags: TagCategory[]
};
