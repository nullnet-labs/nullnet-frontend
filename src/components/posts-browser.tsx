import styles from '@/styles/posts-browser.module.css';

import classes from '@/lib/css-class-list';
import { tags, posts } from '@/lib/mock-data';

import PreviewCard from '@/components/preview-card';

type PostsBrowserProps = {
    page: number,
    featured?: boolean
}

export default function PostsBrowser({ page, featured }: PostsBrowserProps) {
    const postsPerPage = 20;
    const pages = Math.ceil(posts.length / postsPerPage);

    let selectedPosts = posts.slice(0, postsPerPage);
    const selectedFeature: string[] = featured ? posts[Math.floor(Math.random() * posts.length)] : ['', ''];

    if (featured) {
        const featureIndex = selectedPosts.indexOf(selectedFeature);
        if (featureIndex >= 0) {
            selectedPosts.splice(featureIndex, 1);
        }
    }

    return (
        <main className={styles['primary-content']}>
            <h3 className="row-1 col-1 text-base my-3">
                Tags
            </h3>

            <aside className="row-2 col-1">
                <ul>
                    {
                        tags.map((tagName) => (
                            <li key={tagName}>
                                {tagName}
                            </li>
                        ))
                    }
                </ul>
            </aside>

            <h3 className="row-1 col-2 text-base m-3">
                Posts
            </h3>

            <section className="row-2 col-2">

                <div className="flex flex-wrap gap-x-9 gap-y-4 justify-around my-3">
                    {
                        featured && <PreviewCard src={selectedFeature[0]} href={selectedFeature[1]} featured={true} />
                    }

                    {
                        selectedPosts.map((preview) => (
                            <PreviewCard src={preview[0]} href={preview[1]} key={preview[1]} />
                        ))
                    }
                </div>
            </section>

            <nav className={classes('row-3 col-2 my-8 text-lg text-center', styles.paginator)}>
                {
                    // naive for now; would render 100 pages if they existed
                    Array.from({ length: pages }, (value, index) => {
                        const pageNum = index + 1;

                        // not sure the syntax parser likes this...
                        return (
                            pageNum == page ?
                                <span key={pageNum}>
                                    {pageNum}
                                </span>
                            :
                                <a key={pageNum} className="dim-accent-bordered-btn hover-glow">
                                    {pageNum}
                                </a>
                        )
                    })
                }
            </nav>
        </main>
    );
};
