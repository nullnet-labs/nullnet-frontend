import PostsBrowser from "@/components/posts-browser";

type PostsPageParams = {
    page?:string
}

type PostsPageProps = {
    searchParams:Promise<PostsPageParams>
}

export default async function PostsPage({ searchParams }: PostsPageProps) {
    const urlParams = await searchParams;
    const pageNum = Math.max(1, parseInt(urlParams?.page || '1') || 1);

    return (
        <PostsBrowser page={pageNum} featured={pageNum == 1} />
    )
}
