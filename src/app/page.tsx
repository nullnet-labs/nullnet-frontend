import HeroSection from '@/components/hero-section';
import PostsBrowser from '@/components/posts-browser';
import HomeNav from '@/components/home-nav';

export default function HomePage() {
    return (
        <>
            <HomeNav />
            <HeroSection />
            <PostsBrowser page={1} featured={true} />
        </>
    );
};
