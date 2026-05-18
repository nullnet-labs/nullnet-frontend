import SearchForm from "@/components/search-form";
import PreviewCard from '@/components/preview-card';
import styles from "@/styles/post-viewer.module.css";
import { postData } from "@/lib/mock-data";

import classes from "@/lib/css-class-list";
import { notFound } from "next/navigation";

type PostPageProps = {
    params:Promise<{id: string}>
}

export default async function PostPage(props:PostPageProps) {
    const params = await props.params;
    const postDatum = postData.get(parseInt(params.id));

    if (!postDatum) {
        notFound();
    }

    return (
        <>
            <SearchForm />

            <main className={styles['primary-content']}>
                <input type="checkbox" id="tag-pane-expander" className={classes('hidden', styles['tag-pane-handle'])} />

                <h3 className={classes('row-1 col-1 text-lg md:text-base my-3 hidden md:block', styles['tag-pane'])}>
                    Tags
                </h3>

                <aside className={classes('row-2 col-1 text-lg/8 md:text-sm/5 hidden md:block text-blue-200', styles['tag-pane'])}>
                    <ul>
                        {
                            Array.from(postDatum.tags).map((tagName) => (
                                <li key={tagName}>
                                    {tagName}
                                </li>
                            ))
                        }
                    </ul>
                </aside>

                <label htmlFor="tag-pane-expander" className={classes('row-1 row-end-4 col-1 mr-2 md:hidden', styles['tag-pane-handle'])}>
                    <div className="sticky inline-block top-px text-lg px-30 pl-2 mx-auto">
                        v ＴＡＧＳ v
                    </div>
                </label>

                <h3 className="row-1 col-2 text-lg m-3 text-center md:text-left">
                    {postDatum.title}
                </h3>

                <section className="row-2 col-2 text-center">
                    {/* post details */}

                    {/* 
                        will likely remain the LCP of the entire site, so optimize here... 

                        Image component needs width & height or fill.
                        
                        Using fill damages aspect ratios, and I won't know width & height 
                        unless (until?) I store it as metadata with the post
                    */}
                    <img src={postDatum.image} alt={postDatum.title} className="mx-auto" style={{maxHeight: 675}} />

                    <br />

                    <h3>
                        <a href={postDatum.url} target="_blank" className="text-lg underline">
                            {postDatum.url}&#x1f517;
                        </a>
                    </h3>
                </section>

                <nav className="relative row-3 col-2 my-8 min-w-px">
                    <h3 className="text-lg">
                        Linked to:
                    </h3>
                    <nav className={styles['linked-pages']}>
                        {
                            postDatum.linkedTo.length ? postDatum.linkedTo.map((linkedPage, index) => 
                                <PreviewCard datum={linkedPage} key={`linked-to-${linkedPage.id}`} />
                            )
                                :
                            <aside>
                                Nothing!
                            </aside>
                        }
                    </nav>

                    <br />

                    <h3 className="text-lg">
                        Linked from:
                    </h3>
                    <nav className={styles['linked-pages']}>
                        {
                            postDatum.linkedFrom.length ? postDatum.linkedFrom.map((linkedPage, index) => 
                                <PreviewCard datum={linkedPage} key={`linked-from-${linkedPage.id}`} />
                            )
                                :
                            <aside>
                                Nothing!
                            </aside>
                        }
                    </nav>
                </nav>

                <aside className="row-span-3 col-3 hidden xl:block md:pr-5" style={{width: 236}}>
                    {/* the content going all the way to the edge of the page is jarring on bigger screens */}
                </aside>

                <section className="row-4 col-span-2 xl:col-span-3 text-center">
                    {/* if the site starts getting traffic, i'll need some space to pay for keeping it alive */}
                </section>
            </main>
        </>
    )
}
