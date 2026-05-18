import styles from '@/component-styles/posts-browser.module.css';

import classes from '@/lib/css-class-list';
import { previews, PreviewDatum } from '@/lib/mock-data';

import PreviewCard from '@/components/preview-card';
import SearchForm from './search-form';

type PostsBrowserProps = {
    page: number,
    featured?: boolean
}

export default function PostsBrowser({ page, featured }: PostsBrowserProps) {
    const postsPerPage = 18;
    const pages = Math.ceil(previews.length / postsPerPage);

    const selectedPosts: PreviewDatum[] = previews.slice(postsPerPage * (page - 1), postsPerPage * page);
    const selectedFeature: PreviewDatum = previews[Math.floor(Math.random() * previews.length)];

    const tagSet: Set<string> = new Set();
    if (featured) {
        selectedFeature.tags.forEach(tag => tagSet.add(tag));

        const featureIndex = selectedPosts.indexOf(selectedFeature);
        if (featureIndex >= 0) {
            selectedPosts.splice(featureIndex, 1);
        }
    }
    selectedPosts.forEach(post => post.tags.forEach(tag => tagSet.add(tag)));

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
                            Array.from(tagSet).map((tagName) => (
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

                <h3 className="row-1 col-2 text-lg md:text-base m-3 text-center md:text-left">
                    Posts
                </h3>

                <section className="row-2 col-2">

                    <div className="flex flex-wrap gap-x-9 md:gap-x-0 lg:gap-x-9 gap-y-4 justify-around my-3">
                        {
                            featured && <PreviewCard datum={selectedFeature} featured={true} />
                        }

                        {
                            selectedPosts.map((preview, index) => (
                                <PreviewCard datum={preview} key={preview.id} />
                            ))
                        }
                    </div>
                </section>

                <nav className={classes('row-3 col-2 my-8 text-lg text-center', styles.paginator)}>
                    {
                        // naive for now; would render 100 page labels if they existed
                        Array.from({ length: pages }, (value, index) => {
                            const pageNum = index + 1;

                            // not sure the syntax parser likes this...
                            return (
                                pageNum == page ?
                                    <span key={pageNum}>
                                        {pageNum}
                                    </span>
                                :
                                    <a href={`/posts?page=${pageNum}`} key={pageNum} className="dim-accent-bordered-btn hover-glow">
                                        {pageNum}
                                    </a>
                            )
                        })
                    }
                </nav>

                <aside className="row-span-3 col-3 hidden xl:block md:pr-5" style={{width: 236}}>
                    {/* fingers crossed, this right-side space won't be needed for ads */}
                </aside>

                <section className="row-4 col-span-2 xl:col-span-3 text-center">
                    {/* but if the site starts getting traffic, i'll need this lower space to pay for keeping it alive */}
                </section>
            </main>
        </>
    );
};
