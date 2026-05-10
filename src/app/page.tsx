import styles from '@/styles/home.module.css';
import classes from '@/lib/css-class-list';
import TopNav from '@/components/top-nav';
import HeroSection from '@/components/hero-section';

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
        </>
    );
};
