import HeroSection from '@/components/hero-section';
import SearchForm from '@/components/search-form';
import PostsBrowser from '@/components/posts-browser';

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <SearchForm />
            <PostsBrowser page={1} featured={true} />
        </>
    );
};
