import styles from '@/styles/home.module.css';
import classes from '@/lib/css-class-list';
import TopNav from '@/components/top-nav';
import HeroSection from '@/components/hero-section';
import SearchForm from '@/components/search-form';
import Repeat from '@/components/repeat';
import SiteCard from '@/components/site-card';

import Image from "next/image";

export default function HomePage() {
    const motds: string[] = [
        "Where did the rest of the Internet go?",
        "The Web isn't dead, it's just tucked away somewhere.",
        "The Internet can still be fun!"
    ];

    return (
        <>
            <TopNav />
            <HeroSection />
            <SearchForm />

            <section>
                <header className="relative mx-5 border-b text-sm" style={{borderColor: 'var(--primary-accent)'}}>
                    <span className={classes('relative inline-block h-full border-t px-4', styles['manila-tab'])}>
                        Featured Pages
                    </span>
                </header>

                <div className="my-2 py-2 whitespace-nowrap overflow-hidden">
                    <Repeat x={3}>
                        <span className={styles['rightward-marquee']}>
                            <SiteCard
                                src="/dev/thumbs/ytoo.org.jpg"
                                href="https://ytoo.org"
                            />
                            <SiteCard
                                src="/dev/thumbs/www.cameronsworld.net.jpg"
                                href="https://www.cameronsworld.net"
                            />
                            <SiteCard
                                src="/dev/thumbs/web.archive.org.jpg"
                                href="https://web.archive.org"
                            />
                            <SiteCard
                                src="/dev/thumbs/virtualself.co.jpg"
                                href="https://virtualself.co"
                            />
                            <SiteCard
                                src="/dev/thumbs/everskies.com.jpg"
                                href="https://everskies.com"
                            />
                            <SiteCard
                                src="/dev/thumbs/lain.angelic-trust.net_wired.html.jpg"
                                href="https://lain.angelic-trust.net/wired.html"
                            />
                            <SiteCard
                                src="/dev/thumbs/www.mercurialworld.com.jpg"
                                href="https://www.mercurialworld.com"
                            />
                            <SiteCard
                                src="/dev/thumbs/psxdatacenter.com.jpg"
                                href="https://psxdatacenter.com"
                            />
                            <SiteCard
                                src="/dev/thumbs/www.girlsgogames.com.jpg"
                                href="https://www.girlsgogames.com"
                            />
                        </span>
                    </Repeat>
                </div>

                <footer className="mx-5 border-b" style={{borderColor: 'var(--primary-accent-dim)'}}></footer>
            </section>
        </>
    );
};
