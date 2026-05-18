import HeroSection from '@/components/hero-section';
import PostsBrowser from '@/components/posts-browser';

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <PostsBrowser page={1} featured={true} />
        </>
    );
};
