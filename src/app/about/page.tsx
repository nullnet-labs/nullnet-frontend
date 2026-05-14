import styles from '@/styles/about.module.css';
import classes from '@/lib/css-class-list';

import SearchForm from "@/components/search-form";

export default function AboutPage() {
    return (
        <main className="text-center">
            <SearchForm />

            <h1 className="text-5xl font-semibold my-16">
                About Project Nullnet
            </h1>

            <article className={classes('text-left text-base w-[50dvw] m-auto', styles['about-article'])}>
                <p>
                    Project Nullnet is an online Web-page discovery platform,
                    to find the parts of the Internet that are otherwise hard
                    to find.
                </p>

                <p>
                    It aims to provide an online escape hatch from
                    automated recommendation algorithms, to instead find
                    content that lives outside of any mainstream ecosystem.
                    The platform aspires to become a way for users to find
                    places on the Web that are fun, creative, personal,
                    artistically inspired, non-commercial, educational, or
                    otherwise not optimized for monetization & SEO.
                </p>

                <p>
                    At the time of writing, other platforms have had similar
                    aims, by providing website directories, webring lists,
                    alternative search engines, and even communities centered 
                    around sharing & creating alternative spaces on the Web.
                    These platforms are & were inspirations for creating
                    Project Nullnet, and they're held with high regard by its
                    creator. However, Project Nullnet may be the first
                    platform that's specifically purpose-built for providing
                    discoverability for off-platform content, all using
                    discovery tools that are driven by the general userbase
                    themselves.
                </p>

                <p>
                    Project Nullnet will use a community-driven tagging &
                    onsite search system that's most familiarly native to
                    Booru sites, re-purposed, re-written, and extended for Web 
                    spaces rather than images. This allows for a powerful
                    discovery experience with minimal algorithmic
                    interference. Once this project matures, it can hopefully
                    serve as a way for people to once again discover the wider
                    Web.
                </p>

                <p>
                    Nullnet is still under development by its sole creator,
                    Nicolas Hernandez.
                </p>
            </article>

            <h1 className="text-5xl font-semibold my-16">
                t[n.n]
            </h1>
        </main>
    )
}
