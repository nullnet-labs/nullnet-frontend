import styles from '@/styles/home.module.css';
import classes from '@/lib/css-class-list';
import TopNav from '@/components/top-nav';
import HeroSection from '@/components/hero-section';
import SearchForm from '@/components/search-form';
import PostsBrowser from '@/components/posts-browser';

export default function HomePage() {
    return (
        <>
            <TopNav />
            <HeroSection />
            <SearchForm />
            <PostsBrowser page={1} featured={true} />
        </>
    );
};
