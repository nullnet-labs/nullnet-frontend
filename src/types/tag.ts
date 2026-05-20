
/**
 * Data for tag listings to display into the UI.
 */
export interface Tag {
    name: string,
    posts: string
}

/**
 * Data for tag categories to display into the UI.
 */
export interface TagCategory {
    category: string,
    tags: Tag[]
}
