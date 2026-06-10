import SearchForm from "@/components/search-form";

export default function NewPostPage() {
    return (
        <>
            <SearchForm />

            <main className="text-sm 2xl:w-7xl lg:w-5xl md:3xl mx-auto my-12">
                <h1 className="text-2xl">
                    Create or Update Post
                </h1>

                <p className="my-4">
                    All new posts & post updates are subject to moderator approval.
                </p>

                <h3 className="text-lg italic">
                    Guidelines:
                </h3>

                <ul className="list-disc mb-4">
                    <li>
                        At the moment, we only allow one post per fully-qualified website domain
                        <ul className="list-disc list-inside">
                            <li>
                                For example:
                                "<a href="https://neocities.org/" target="_blank" className="underline">neocities.org</a>"
                                & "<a href="https://1.neocities.org/" target="_blank" className="underline">1.neocities.org</a>"
                                are each allowed to have their own posts, but "<a href="https://www.youtube.com/" target="_blank" className="underline">www.youtube.com</a>"
                                and "<a href="https://www.youtube.com/watch?v=oHg5SJYRHA0" target="_blank" className="underline">www.youtube.com/watch?v=oHg5SJYRHA0</a>"
                                can't each have their own posts because they're both at the same domain (www.youtube.com)
                            </li>
                            <li>
                                You may submit another post for an existing domain, but it will become a request to update the current posting, rather than becoming its own post
                            </li>
                        </ul>
                        <br />
                    </li>
                    <li>
                        No NSFW-focused websites
                    </li>
                    <li>
                        No shock sites
                    </li>
                    <li>
                        No sites focused on delivering illegal content or services
                    </li>
                    <li>
                        These guidelines are subject to change at any time
                        <br />
                        <br />
                    </li>
                    <li>
                        You're encouraged to also back up any new websites you find, by using <a href="https://web.archive.org/" target="_blank" className="underline">the Wayback Machine on the Internet Archive</a>!
                    </li>
                </ul>

                <form>
                    Web page URL:
                    <br />
                    <input type="text" name="url" className="accent-bordered-btn" />
                </form>
            </main>
        </>
    );
}
