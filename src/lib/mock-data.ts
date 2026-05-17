
// for displaying on the post-previews browser
export interface PreviewDatum {
    id: number,
    thumb: string,
    url: string,
    title: string
    tags: string[]
}

// 42 unique entries
export const previews: PreviewDatum[] = [
    {
        id: 1,
        thumb: "/dev/thumbs/nickhz.live_cyber.jpg",
        url: "https://nickhz.live/cyber",
        title: "Cyber Workbench",
        tags: [
            'personal_homepage',
            'noncommercial',
            'no_ads',
            'updated_2026',
            'pure_vanilla',
            'cyberpunk',
            'experimental'
        ]
    },
    {
        id: 2,
        thumb: "/dev/thumbs/ytoo.org.jpg",
        url: "https://ytoo.org",
        title: "Ytoo!",
        tags: [
            'retro',
            'noncommercial',
            'fake_ads',
            'search_engine',
            'link_hub',
            'has_guestbook',
            'updated_2024',
            '83x31_button',
            'pure_vanilla',
            'minimal_javascript'
        ]
    },
    {
        id: 3,
        thumb: "/dev/thumbs/www.cameronsworld.net.jpg",
        url: "https://www.cameronsworld.net",
        title: "Cameron's World",
        tags: [
            'noncommercial',
            'no_ads',
            'retro',
            'gif_graphics',
            'link_hub',
            'donation_link',
            'vanilla',
            'fake_ads',
            'experimental'
        ]
    },
    {
        id: 4,
        thumb: "/dev/thumbs/web.archive.org.jpg",
        url: "https://web.archive.org",
        title: "Wayback Machine",
        tags: [
            'nonprofit',
            'public_service',
            'no_ads',
            'search_engine',
            'archive',
            'updated_2026'
        ]
    },
    {
        id: 5,
        thumb: "/dev/thumbs/virtualself.co.jpg",
        url: "https://virtualself.co",
        title: "Virtual Self",
        tags: [
            'no_ads',
            'cyberpunk',
            'webgl',
            'music_artist',
            'experimental'
        ]
    },
    {
        id: 6,
        thumb: "/dev/thumbs/everskies.com.jpg",
        url: "https://everskies.com",
        title: "Everskies - Everskies",
        tags: [
            'gif_graphics',
            'user_generated_content',
            'pixel_art',
            'community'
        ]
    },
    {
        id: 7,
        thumb: "/dev/thumbs/forum.melonland.net.jpg",
        url: "https://forum.melonland.net",
        title: "Melonland Forum - Home!",
        tags: [
            'noncommercial',
            'fake_ads',
            'retro',
            'gif_graphics',
            'community',
            'user_generated_content',
            'updated_2026',
            'web_forum',
            'indie_web',
            'php'
        ]
    },
    {
        id: 8,
        thumb: "/dev/thumbs/oyaswmi.net.jpg",
        url: "https://oyaswmi.net",
        title: "World Wide Website",
        tags: [
            'noncommercial',
            'no_ads',
            'personal_homepage',
            'fansite',
            'serial_experiments_lain',
            'autoplay_audio',
            'webgl',
            'anime_inspired',
            'cyberpunk',
            'experimental'
        ]
    },
    {
        id: 9,
        thumb: "/dev/thumbs/www.girlsgogames.com.jpg",
        url: "https://www.girlsgogames.com",
        title: "Girls games - Play free online games for girls at girlsgogames.com",
        tags: [
            'updated_2026',
            'browser_games',
            'game_database'
        ]
    },
    {
        id: 10,
        thumb: "/dev/thumbs/lain.angelic-trust.net_wired.html.jpg",
        url: "https://lain.angelic-trust.net/wired.html",
        title: "LAIN - SERIAL EXPERIMENT - OMNIPRESENCE",
        tags: [
            'noncommercial',
            'no_ads',
            'retro',
            'frameset_site',
            'gif_graphics',
            'fansite',
            'serial_experiments_lain',
            'anime_inspired',
            'cyberpunk',
            'abandoned',
            'experimental',
            'php'
        ]
    },
    {
        id: 11,
        thumb: "/dev/thumbs/www.mercurialworld.com.jpg",
        url: "https://www.mercurialworld.com",
        title: "Home | Mercurial World",
        tags: [
            'fake_ads',
            'retro',
            'music_artist',
            'gif_graphics',
            'autoplay_audio',
            'experimental'
        ]
    },
    {
        id: 12,
        thumb: "/dev/thumbs/psxdatacenter.com.jpg",
        url: "https://psxdatacenter.com",
        title: "The Playstation Datacenter - PS1, PS2 & PSP games database with covers, cheats, screens, etc.",
        tags: [
            'frameset_site',
            'retro',
            'retro_gaming',
            'game_database',
            'updated_2025',
            'archive'
        ]
    },
    {
        id: 13,
        thumb: "/dev/thumbs/espy.world.jpg",
        url: "https://espy.world",
        title: "▷ ESPY.WORLD ◁",
        tags: [
            'noncommercial',
            'no_ads',
            'personal_homepage',
            'gif_graphics',
            'vanilla'
        ]
    },
    {
        id: 14,
        thumb: "/dev/thumbs/activetheory.net.jpg",
        url: "https://activetheory.net",
        title: "Active Theory - Creative Digital Experiences",
        tags: [
            'no_ads',
            'webgl',
            'experimental'
        ]
    },
    {
        id: 15,
        thumb: "/dev/thumbs/corru.observer.jpg",
        url: "https://corru.observer",
        title: "corru.observer",
        tags: [
            'noncommercial',
            'no_ads',
            'gif_graphics',
            'pixel_art',
            'vanilla'
        ]
    },
    {
        id: 16,
        thumb: "/dev/thumbs/classic.systemspace.network.jpg",
        url: "https://classic.systemspace.network",
        title: "TSUKI",
        tags: [
            'noncommercial',
            'no_ads',
            'gif_graphics',
            'vanilla',
            'cyberpunk',
            'anime_inspired',
            'serial_experiments_lain',
            'archived'
        ]
    },
    {
        id: 17,
        thumb: "/dev/thumbs/eieio.games.jpg",
        url: "https://eieio.games",
        title: "eieio.games",
        tags: [
            'no_ads',
            'browser_games',
            'nextjs'
        ]
    },
    {
        id: 18,
        thumb: "/dev/thumbs/neocities.org.jpg",
        url: "https://neocities.org",
        title: "Neocities: Create your own free website!",
        tags: [
            'no_ads',
            'link_hub',
            'user_generated_content',
            'community'
        ]
    },
    {
        id: 19,
        thumb: "/dev/thumbs/nekoweb.org.jpg",
        url: "https://nekoweb.org",
        title: "nekoweb",
        tags: [
            'no_ads',
            'link_hub',
            'user_generated_content',
            'community'
        ]
    },
    {
        id: 20,
        thumb: "/dev/thumbs/www.tubcat.com.jpg",
        url: "https://www.tubcat.com",
        title: "THE WWW FAN WEB PAGE FOR TUBCAT THE FATTEST KITTY EVA :D!!!!!!!!!!!!!!!!!!!!!!",
        tags: [
            'noncommercial',
            'no_ads',
            'abandoned',
            'the_www_fan_web_page_for_tubcat_the_fattest_kitty_eva!!!!!!!!!!!!!!!!!!!!!!'
        ]
    },
    {
        id: 21,
        thumb: "/dev/thumbs/brisray.com_web_webring-list.htm.jpg",
        url: "https://brisray.com/web/webring-list.htm",
        title: "A Webring List",
        tags: [
            'noncommercial',
            'no_ads',
            'link_hub',
            'public_service',
            'archive',
            'vanilla'
        ]
    },
    {
        id: 22,
        thumb: "/dev/thumbs/newgrounds.com.jpg",
        url: "https://newgrounds.com",
        title: "Newgrounds.com — Everything, By Everyone",
        tags: [
            'user_generated_content',
            'updated_2026',
            'browser_games',
            'web_portal',
            'community'
        ]
    },
    {
        id: 23,
        thumb: "/dev/thumbs/web.badges.world.jpg",
        url: "https://web.badges.world",
        title: "web-badges-world",
        tags: [
            'noncommercial',
            'no_ads',
            'retro',
            'vanilla',
            'gif_graphics'
        ]
    },
    {
        id: 24,
        thumb: "/dev/thumbs/frutigeraeroarchive.org.jpg",
        url: "https://frutigeraeroarchive.org",
        title: "Frutiger Aero Archive",
        tags: [
            'noncommercial',
            'no_ads',
            'retro',
            'jquery',
            'browser_games',
            'donation_link',
            'links_hub',
            '88x31_button'
        ]
    },
    {
        id: 25,
        thumb: "/dev/thumbs/www.art.yale.edu.jpg",
        url: "https://www.art.yale.edu",
        title: "Home - Yale School of Art",
        tags: [
            'no_ads',
            'user_generated_content',
            'vanilla',
            'experimental'
        ]
    },
    {
        id: 26,
        thumb: "/dev/thumbs/www.arngren.net.jpg",
        url: "https://www.arngren.net",
        title: "ATV, drone, elbil, elsykkel, rc helikopter, ATV, robot, elatv",
        tags: [
            'retro',
            'experimental',
            'storefront'
        ]
    },
    {
        id: 27,
        thumb: "/dev/thumbs/www.angels-heaven.org_english_default_en.htm.jpg",
        url: "https://www.angels-heaven.org/english/default_en.htm",
        title: "EN - TALKS WITH TEACHINGS FROM MY COSMIC FRIENDS - universe-people.org",
        tags: [
            'retro',
            'gif_graphics',
            'frameset_site',
            'experimental'
        ]
    },
    {
        id: 28,
        thumb: "/dev/thumbs/cheapycore.com.jpg",
        url: "https://cheapycore.com",
        title: "CHEAPCORE",
        tags: [
            'noncommercial',
            'fake_ads',
            'astro_web_framework'
        ]
    },
    {
        id: 29,
        thumb: "/dev/thumbs/webamp.org.jpg",
        url: "https://webamp.org",
        title: "Webamp · Winamp 2 in your browser",
        tags: [
            'no_ads',
            'retro'
        ]
    },
    {
        id: 30,
        thumb: "/dev/thumbs/modarchive.org.jpg",
        url: "https://modarchive.org",
        title: "The Mod Archive v4.0b - A distinctive collection of modules",
        tags: [
            'no_ads',
            'donation_link',
            'retro',
            'community',
            'user_generated_content',
            'vanilla'
        ]
    },
    {
        id: 31,
        thumb: "/dev/thumbs/trace.moe.jpg",
        url: "https://trace.moe",
        title: "Anime Scene Search Engine - trace.moe",
        tags: [
            'search_engine',
            'donation_link',
            'nextjs'
        ]
    },
    {
        id: 32,
        thumb: "/dev/thumbs/bryantcodes.art.jpg",
        url: "https://bryantcodes.art",
        title: "bryantcodes.art",
        tags: [
            'no_ads',
            'personal_homepage',
            'experimental',
            'nextjs'
        ]
    },
    {
        id: 33,
        thumb: "/dev/thumbs/www.oldavista.com.jpg",
        url: "https://www.oldavista.com",
        title: "Old'aVista: Home",
        tags: [
            'retro',
            'noncommercial',
            'fake_ads',
            'search_engine',
            'link_hub',
            'pure_vanilla',
            'minimal_javascript'
        ]
    },
    {
        id: 34,
        thumb: "/dev/thumbs/vapor95.com.jpg",
        url: "https://vapor95.com",
        title: "Vapor95.com | Vaporwave & Aesthetic Clothing",
        tags: [
            'storefront',
            'shopify'
        ]
    },
    {
        id: 35,
        thumb: "/dev/thumbs/oldschool.runescape.com.jpg",
        url: "https://oldschool.runescape.com",
        title: "Old School RuneScape - Play Old School RS",
        tags: [
            'no_ads',
            'retro',
            'athena_web_framework',
            'community',
            'retro_gaming'
        ]
    },
    {
        id: 36,
        thumb: "/dev/thumbs/onlinesequencer.net.jpg",
        url: "https://onlinesequencer.net",
        title: "Online Sequencer",
        tags: [
            'user_generated_content',
            'jquery'
        ]
    },
    {
        id: 37,
        thumb: "/dev/thumbs/safebooru.donmai.us.jpg",
        url: "https://safebooru.donmai.us",
        title: "Danbooru: Anime Image Board",
        tags: [
            'anime_inspired',
            'user_generated_content'
        ]
    },
    {
        id: 38,
        thumb: "/dev/thumbs/crxw.net.jpg",
        url: "https://crxw.net",
        title: "crxw's special place",
        tags: [
            'personal_homepage',
            'music_artist',
            'anime_inspired',
            'gif_graphics',
            'retro',
            'fake_ads',
            'vanilla'
        ]
    },
    {
        id: 39,
        thumb: "/dev/thumbs/archive.sudomemo.net.jpg",
        url: "https://archive.sudomemo.net",
        title: "Flipnote Archive",
        tags: [
            'archive',
            'donation_link'
        ]
    },
    {
        id: 40,
        thumb: "/dev/thumbs/cnvmp3.com.jpg",
        url: "https://cnvmp3.com",
        title: "Youtube to MP3 Converter (Ad-free)",
        tags: [
            'noncommercial',
            'no_ads',
            'donation_link'
        ]
    },
    {
        id: 41,
        thumb: "/dev/thumbs/forum.agoraroad.com.jpg",
        url: "https://forum.agoraroad.com",
        title: "Agora Road's Macintosh Cafe",
        tags: [
            'noncommercial',
            'fake_ads',
            'retro',
            'gif_graphics',
            'community',
            'user_generated_content',
            'updated_2026',
            'web_forum',
            'indie_web',
            'php'
        ]
    },
    {
        id: 42,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            'nonprofit',
            'no_ads',
            'pure_vanilla'
        ]
    },
    {
        id: 43,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            'nonprofit',
            'no_ads',
            'pure_vanilla'
        ]
    },
    {
        id: 44,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            'nonprofit',
            'no_ads',
            'pure_vanilla'
        ]
    },
    {
        id: 45,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            'nonprofit',
            'no_ads',
            'pure_vanilla'
        ]
    },
    {
        id: 46,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            'nonprofit',
            'no_ads',
            'pure_vanilla'
        ]
    },
    {
        id: 47,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            'nonprofit',
            'no_ads',
            'pure_vanilla'
        ]
    },
    {
        id: 48,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            'nonprofit',
            'no_ads',
            'pure_vanilla'
        ]
    },
    {
        id: 49,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            'nonprofit',
            'no_ads',
            'pure_vanilla'
        ]
    },
    {
        id: 50,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            'nonprofit',
            'no_ads',
            'pure_vanilla'
        ]
    },
    {
        id: 51,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            'nonprofit',
            'no_ads',
            'pure_vanilla'
        ]
    },
    {
        id: 52,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            'nonprofit',
            'no_ads',
            'pure_vanilla'
        ]
    },
    {
        id: 53,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            'nonprofit',
            'no_ads',
            'pure_vanilla'
        ]
    },
    {
        id: 54,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            'nonprofit',
            'no_ads',
            'pure_vanilla'
        ]
    },
    {
        id: 55,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            'nonprofit',
            'no_ads',
            'pure_vanilla'
        ]
    },
    {
        id: 56,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            'nonprofit',
            'no_ads',
            'pure_vanilla'
        ]
    },
    {
        id: 57,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            'nonprofit',
            'no_ads',
            'pure_vanilla'
        ]
    },
    {
        id: 58,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            'nonprofit',
            'no_ads',
            'pure_vanilla'
        ]
    },
    {
        id: 59,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            'nonprofit',
            'no_ads',
            'pure_vanilla'
        ]
    },
    {
        id: 60,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            'nonprofit',
            'no_ads',
            'pure_vanilla'
        ]
    },
    {
        id: 61,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            'nonprofit',
            'no_ads',
            'pure_vanilla'
        ]
    },
    {
        id: 62,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            'nonprofit',
            'no_ads',
            'pure_vanilla'
        ]
    },
    {
        id: 63,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            'nonprofit',
            'no_ads',
            'pure_vanilla'
        ]
    },
    {
        id: 64,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            'nonprofit',
            'no_ads',
            'pure_vanilla'
        ]
    }
]

// for displaying as the page that focuses on an individual post
interface PostDatum {
    id: number,
    url: string,
    title: string,
    tags: string[],
    // websites that this site links to & is linked from
    linkedTo: PreviewDatum[],
    linkedFrom: PreviewDatum[]
}

// for populating each post's page...
export const postData:PostDatum[] = [
    
]
