import styles from '@/styles/home.module.css';
import classes from '@/lib/css-class-list';
import TopNav from '@/components/top-nav';
import HeroSection from '@/components/hero-section';
import SearchForm from '@/components/search-form';
import Repeat from '@/components/repeat';

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

            <section>
                <header className="relative mx-5 border-b text-sm" style={{borderColor: 'var(--primary-accent)'}}>
                    <span className={classes('relative inline-block h-full border-t px-4', styles['manila-tab'])}>
                        Featured Pages
                    </span>
                </header>

                <div className="my-2 py-2 whitespace-nowrap overflow-hidden">
                    <Repeat x={12}>
                        <span className={styles['rightward-marquee']}>
                            <span className="mx-8 cursor-pointer" style={{display: 'inline-block', border: '1px outset var(--primary-accent)', width: '175px', height: '85px'}}>
                                Featured Page
                            </span>
                        </span>
                    </Repeat>
                </div>

                <footer className="mx-5 border-b" style={{borderColor: 'var(--primary-accent-dim)'}}></footer>
            </section>

            <SearchForm />
        </>
    );
};
