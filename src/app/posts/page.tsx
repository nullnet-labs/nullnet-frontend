import SearchForm from "@/components/search-form";
import PostsBrowser from "@/components/posts-browser";

export default function PostsPage() {
    return (
        <>
            <SearchForm />
            <PostsBrowser page={1} />
        </>
    )
}
