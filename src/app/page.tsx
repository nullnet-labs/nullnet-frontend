import styles from '@/styles/home.module.css';
import classes from '@/lib/css-class-list';
import TopNav from '@/components/top-nav';
import HeroSection from '@/components/hero-section';
import SearchForm from '@/components/search-form';
import PreviewCard from '@/components/preview-card';

export default function HomePage() {
    // TODO clear mock data when I wire up the backend
    const tags: string[] = [
        'independent',
        'nonprofit',
        'noncommercial',
        'no_ads',
        'search_engine',
        'retro',
        'personal_homepage',
        'music_artist',
        'guestbook',
        'link_hub',
        'autoplay_audio',
        'gif_graphics',
        'donation_link',
        'user_generated_content',
        'public_service',
        'updated_2024',
        'updated_2026',
        'minimal_javascript',
        'vanilla',
        'pure_vanilla',
        'jquery',
        'webgl',
        'pixel_art',
        'browser_games',
        'portal_style',
        'retro_gaming',
        'game_database',
        'fansite',
        'serial_experiments_lain',
        'anime_inspired',
        'cyberpunk',
        'archive',
        'abandoned',
        'community',
        'experimental',
        'indie_web'
    ];

    const featured: string[][] = [
        ['/dev/thumbs/nickhz.live_cyber.jpg', 'https://nickhz.live/cyber'],
        ['/dev/thumbs/ytoo.org.jpg', 'https://ytoo.org'],
        ['/dev/thumbs/www.cameronsworld.net.jpg', 'https://www.cameronsworld.net'],
        ['/dev/thumbs/web.archive.org.jpg', 'https://web.archive.org'],
        ['/dev/thumbs/virtualself.co.jpg', 'https://virtualself.co'],
        ['/dev/thumbs/everskies.com.jpg', 'https://everskies.com'],
        ['/dev/thumbs/forum.melonland.net.jpg', 'https://forum.melonland.net'],
        ['/dev/thumbs/oyaswmi.net.jpg', 'https://oyaswmi.net'],
        ['/dev/thumbs/www.girlsgogames.com.jpg', 'https://www.girlsgogames.com'],
        ['/dev/thumbs/lain.angelic-trust.net_wired.html.jpg', 'https://lain.angelic-trust.net/wired.html'],
        ['/dev/thumbs/www.mercurialworld.com.jpg', 'https://www.mercurialworld.com'],
        ['/dev/thumbs/psxdatacenter.com.jpg', 'https://psxdatacenter.com'],
        ['/dev/thumbs/espy.world.jpg', 'https://espy.world'],
        ['/dev/thumbs/activetheory.net.jpg', 'https://activetheory.net'],
        ['/dev/thumbs/corru.observer.jpg', 'https://corru.observer'],
        ['/dev/thumbs/classic.systemspace.network.jpg', 'https://classic.systemspace.network'],
        ['/dev/thumbs/eieio.games.jpg', 'https://eieio.games'],
        ['/dev/thumbs/neocities.org.jpg', 'https://neocities.org'],
        ['/dev/thumbs/nekoweb.org.jpg', 'https://nekoweb.org'],
        ['/dev/thumbs/www.tubcat.com.jpg', 'https://www.tubcat.com']
    ];
    const selectedFeature: string[] = featured[Math.floor(Math.random() * featured.length)];

    return (
        <>
            <TopNav />
            <HeroSection />
            <SearchForm />

            <main className={styles['primary-content']}>
                <aside className="tags">
                    <h3 className="text-base my-3">
                        Tags
                    </h3>
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
                <section className="posts">
                    <h3 className="text-base my-3">
                        Posts
                    </h3>

                    <div className="flex flex-wrap gap-x-9 gap-y-4">
                        <PreviewCard src={selectedFeature[0]} href={selectedFeature[1]} featured={true} />

                        {
                            featured.map((preview) => (
                                preview[1] != selectedFeature[1] && <PreviewCard src = { preview[0]} href = { preview[1]} key = { preview[1]}/>
                            ))
                        }
                    </div>
                </section>
            </main>
        </>
    );
};
