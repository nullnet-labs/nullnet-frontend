
interface TagItem {
    name: string,
    type: string
};

// for displaying on the post-previews browser
export interface PreviewDatum {
    id: number,
    thumb: string,
    url: string,
    title: string
    tags: TagItem[]
}

// 42 unique entries
export const previews: PreviewDatum[] = [
    {
        id: 1,
        thumb: "/dev/thumbs/nickhz.live_cyber.jpg",
        url: "https://nickhz.live/cyber",
        title: "Cyber Workbench",
        tags: [
            {
                name: "personal_homepage",
                type: "General"
            },
            {
                name: "noncommercial",
                type: "Ads / Commercial Status"
            },
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "updated_2026",
                type: "General"
            },
            {
                name: "pure_vanilla",
                type: "Web Development Tech"
            },
            {
                name: "cyberpunk",
                type: "General"
            },
            {
                name: "experimental",
                type: "General"
            }
        ]
    },
    {
        id: 2,
        thumb: "/dev/thumbs/ytoo.org.jpg",
        url: "https://ytoo.org",
        title: "Ytoo!",
        tags: [
            {
                name: "retro",
                type: "General"
            },
            {
                name: "noncommercial",
                type: "Ads / Commercial Status"
            },
            {
                name: "fake_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "search_engine",
                type: "General"
            },
            {
                name: "link_hub",
                type: "General"
            },
            {
                name: "has_guestbook",
                type: "General"
            },
            {
                name: "updated_2024",
                type: "General"
            },
            {
                name: "83x31_button",
                type: "General"
            },
            {
                name: "pure_vanilla",
                type: "Web Development Tech"
            },
            {
                name: "minimal_javascript",
                type: "General"
            }
        ]
    },
    {
        id: 3,
        thumb: "/dev/thumbs/www.cameronsworld.net.jpg",
        url: "https://www.cameronsworld.net",
        title: "Cameron's World",
        tags: [
            {
                name: "noncommercial",
                type: "Ads / Commercial Status"
            },
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "retro",
                type: "General"
            },
            {
                name: "gif_graphics",
                type: "General"
            },
            {
                name: "link_hub",
                type: "General"
            },
            {
                name: "donation_link",
                type: "General"
            },
            {
                name: "vanilla",
                type: "Web Development Tech"
            },
            {
                name: "fake_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "experimental",
                type: "General"
            }
        ]
    },
    {
        id: 4,
        thumb: "/dev/thumbs/web.archive.org.jpg",
        url: "https://web.archive.org",
        title: "Wayback Machine",
        tags: [
            {
                name: "nonprofit",
                type: "General"
            },
            {
                name: "public_service",
                type: "General"
            },
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "search_engine",
                type: "General"
            },
            {
                name: "archive",
                type: "General"
            },
            {
                name: "updated_2026",
                type: "General"
            }
        ]
    },
    {
        id: 5,
        thumb: "/dev/thumbs/virtualself.co.jpg",
        url: "https://virtualself.co",
        title: "Virtual Self",
        tags: [
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "cyberpunk",
                type: "General"
            },
            {
                name: "webgl",
                type: "Web Development Tech"
            },
            {
                name: "music_artist",
                type: "General"
            },
            {
                name: "experimental",
                type: "General"
            }
        ]
    },
    {
        id: 6,
        thumb: "/dev/thumbs/everskies.com.jpg",
        url: "https://everskies.com",
        title: "Everskies - Everskies",
        tags: [
            {
                name: "gif_graphics",
                type: "General"
            },
            {
                name: "user_generated_content",
                type: "General"
            },
            {
                name: "pixel_art",
                type: "General"
            },
            {
                name: "community",
                type: "General"
            }
        ]
    },
    {
        id: 7,
        thumb: "/dev/thumbs/forum.melonland.net.jpg",
        url: "https://forum.melonland.net",
        title: "Melonland Forum - Home!",
        tags: [
            {
                name: "noncommercial",
                type: "Ads / Commercial Status"
            },
            {
                name: "fake_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "retro",
                type: "General"
            },
            {
                name: "gif_graphics",
                type: "General"
            },
            {
                name: "community",
                type: "General"
            },
            {
                name: "user_generated_content",
                type: "General"
            },
            {
                name: "updated_2026",
                type: "General"
            },
            {
                name: "web_forum",
                type: "General"
            },
            {
                name: "indie_web",
                type: "General"
            },
            {
                name: "php",
                type: "Web Development Tech"
            }
        ]
    },
    {
        id: 8,
        thumb: "/dev/thumbs/oyaswmi.net.jpg",
        url: "https://oyaswmi.net",
        title: "World Wide Website",
        tags: [
            {
                name: "noncommercial",
                type: "Ads / Commercial Status"
            },
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "personal_homepage",
                type: "General"
            },
            {
                name: "fansite",
                type: "General"
            },
            {
                name: "serial_experiments_lain",
                type: "General"
            },
            {
                name: "autoplay_audio",
                type: "General"
            },
            {
                name: "webgl",
                type: "Web Development Tech"
            },
            {
                name: "anime_inspired",
                type: "General"
            },
            {
                name: "cyberpunk",
                type: "General"
            },
            {
                name: "experimental",
                type: "General"
            }
        ]
    },
    {
        id: 9,
        thumb: "/dev/thumbs/www.girlsgogames.com.jpg",
        url: "https://www.girlsgogames.com",
        title: "Girls games - Play free online games for girls at girlsgogames.com",
        tags: [
            {
                name: "updated_2026",
                type: "General"
            },
            {
                name: "browser_games",
                type: "General"
            },
            {
                name: "game_database",
                type: "General"
            }
        ]
    },
    {
        id: 10,
        thumb: "/dev/thumbs/lain.angelic-trust.net_wired.html.jpg",
        url: "https://lain.angelic-trust.net/wired.html",
        title: "LAIN - SERIAL EXPERIMENT - OMNIPRESENCE",
        tags: [
            {
                name: "noncommercial",
                type: "Ads / Commercial Status"
            },
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "retro",
                type: "General"
            },
            {
                name: "frameset_site",
                type: "General"
            },
            {
                name: "gif_graphics",
                type: "General"
            },
            {
                name: "fansite",
                type: "General"
            },
            {
                name: "serial_experiments_lain",
                type: "General"
            },
            {
                name: "anime_inspired",
                type: "General"
            },
            {
                name: "cyberpunk",
                type: "General"
            },
            {
                name: "abandoned",
                type: "General"
            },
            {
                name: "experimental",
                type: "General"
            },
            {
                name: "php",
                type: "Web Development Tech"
            }
        ]
    },
    {
        id: 11,
        thumb: "/dev/thumbs/www.mercurialworld.com.jpg",
        url: "https://www.mercurialworld.com",
        title: "Home | Mercurial World",
        tags: [
            {
                name: "fake_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "retro",
                type: "General"
            },
            {
                name: "music_artist",
                type: "General"
            },
            {
                name: "gif_graphics",
                type: "General"
            },
            {
                name: "autoplay_audio",
                type: "General"
            },
            {
                name: "experimental",
                type: "General"
            }
        ]
    },
    {
        id: 12,
        thumb: "/dev/thumbs/psxdatacenter.com.jpg",
        url: "https://psxdatacenter.com",
        title: "The Playstation Datacenter - PS1, PS2 & PSP games database with covers, cheats, screens, etc.",
        tags: [
            {
                name: "frameset_site",
                type: "General"
            },
            {
                name: "retro",
                type: "General"
            },
            {
                name: "retro_gaming",
                type: "General"
            },
            {
                name: "game_database",
                type: "General"
            },
            {
                name: "updated_2025",
                type: "General"
            },
            {
                name: "archive",
                type: "General"
            }
        ]
    },
    {
        id: 13,
        thumb: "/dev/thumbs/espy.world.jpg",
        url: "https://espy.world",
        title: "▷ ESPY.WORLD ◁",
        tags: [
            {
                name: "noncommercial",
                type: "Ads / Commercial Status"
            },
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "personal_homepage",
                type: "General"
            },
            {
                name: "gif_graphics",
                type: "General"
            },
            {
                name: "vanilla",
                type: "Web Development Tech"
            }
        ]
    },
    {
        id: 14,
        thumb: "/dev/thumbs/activetheory.net.jpg",
        url: "https://activetheory.net",
        title: "Active Theory - Creative Digital Experiences",
        tags: [
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "webgl",
                type: "Web Development Tech"
            },
            {
                name: "experimental",
                type: "General"
            }
        ]
    },
    {
        id: 15,
        thumb: "/dev/thumbs/corru.observer.jpg",
        url: "https://corru.observer",
        title: "corru.observer",
        tags: [
            {
                name: "noncommercial",
                type: "Ads / Commercial Status"
            },
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "gif_graphics",
                type: "General"
            },
            {
                name: "pixel_art",
                type: "General"
            },
            {
                name: "vanilla",
                type: "Web Development Tech"
            }
        ]
    },
    {
        id: 16,
        thumb: "/dev/thumbs/classic.systemspace.network.jpg",
        url: "https://classic.systemspace.network",
        title: "TSUKI",
        tags: [
            {
                name: "noncommercial",
                type: "Ads / Commercial Status"
            },
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "gif_graphics",
                type: "General"
            },
            {
                name: "vanilla",
                type: "Web Development Tech"
            },
            {
                name: "cyberpunk",
                type: "General"
            },
            {
                name: "anime_inspired",
                type: "General"
            },
            {
                name: "serial_experiments_lain",
                type: "General"
            },
            {
                name: "archived",
                type: "General"
            }
        ]
    },
    {
        id: 17,
        thumb: "/dev/thumbs/eieio.games.jpg",
        url: "https://eieio.games",
        title: "eieio.games",
        tags: [
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "browser_games",
                type: "General"
            },
            {
                name: "nextjs",
                type: "Web Development Tech"
            }
        ]
    },
    {
        id: 18,
        thumb: "/dev/thumbs/neocities.org.jpg",
        url: "https://neocities.org",
        title: "Neocities: Create your own free website!",
        tags: [
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "link_hub",
                type: "General"
            },
            {
                name: "user_generated_content",
                type: "General"
            },
            {
                name: "community",
                type: "General"
            }
        ]
    },
    {
        id: 19,
        thumb: "/dev/thumbs/nekoweb.org.jpg",
        url: "https://nekoweb.org",
        title: "nekoweb",
        tags: [
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "link_hub",
                type: "General"
            },
            {
                name: "user_generated_content",
                type: "General"
            },
            {
                name: "community",
                type: "General"
            }
        ]
    },
    {
        id: 20,
        thumb: "/dev/thumbs/www.tubcat.com.jpg",
        url: "https://www.tubcat.com",
        title: "THE WWW FAN WEB PAGE FOR TUBCAT THE FATTEST KITTY EVA :D!!!!!!!!!!!!!!!!!!!!!!",
        tags: [
            {
                name: "noncommercial",
                type: "Ads / Commercial Status"
            },
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "abandoned",
                type: "General"
            },
            {
                name: "the_www_fan_web_page_for_tubcat_the_fattest_kitty_eva!!!!!!!!!!!!!!!!!!!!!!",
                type: "General"
            }
        ]
    },
    {
        id: 21,
        thumb: "/dev/thumbs/brisray.com_web_webring-list.htm.jpg",
        url: "https://brisray.com/web/webring-list.htm",
        title: "A Webring List",
        tags: [
            {
                name: "noncommercial",
                type: "Ads / Commercial Status"
            },
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "link_hub",
                type: "General"
            },
            {
                name: "public_service",
                type: "General"
            },
            {
                name: "archive",
                type: "General"
            },
            {
                name: "vanilla",
                type: "Web Development Tech"
            }
        ]
    },
    {
        id: 22,
        thumb: "/dev/thumbs/newgrounds.com.jpg",
        url: "https://newgrounds.com",
        title: "Newgrounds.com — Everything, By Everyone",
        tags: [
            {
                name: "user_generated_content",
                type: "General"
            },
            {
                name: "updated_2026",
                type: "General"
            },
            {
                name: "browser_games",
                type: "General"
            },
            {
                name: "web_portal",
                type: "General"
            },
            {
                name: "community",
                type: "General"
            }
        ]
    },
    {
        id: 23,
        thumb: "/dev/thumbs/web.badges.world.jpg",
        url: "https://web.badges.world",
        title: "web-badges-world",
        tags: [
            {
                name: "noncommercial",
                type: "Ads / Commercial Status"
            },
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "retro",
                type: "General"
            },
            {
                name: "vanilla",
                type: "Web Development Tech"
            },
            {
                name: "gif_graphics",
                type: "General"
            }
        ]
    },
    {
        id: 24,
        thumb: "/dev/thumbs/frutigeraeroarchive.org.jpg",
        url: "https://frutigeraeroarchive.org",
        title: "Frutiger Aero Archive",
        tags: [
            {
                name: "noncommercial",
                type: "Ads / Commercial Status"
            },
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "retro",
                type: "General"
            },
            {
                name: "jquery",
                type: "Web Development Tech"
            },
            {
                name: "browser_games",
                type: "General"
            },
            {
                name: "donation_link",
                type: "General"
            },
            {
                name: "links_hub",
                type: "General"
            },
            {
                name: "88x31_button",
                type: "General"
            }
        ]
    },
    {
        id: 25,
        thumb: "/dev/thumbs/www.art.yale.edu.jpg",
        url: "https://www.art.yale.edu",
        title: "Home - Yale School of Art",
        tags: [
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "user_generated_content",
                type: "General"
            },
            {
                name: "vanilla",
                type: "Web Development Tech"
            },
            {
                name: "experimental",
                type: "General"
            }
        ]
    },
    {
        id: 26,
        thumb: "/dev/thumbs/www.arngren.net.jpg",
        url: "https://www.arngren.net",
        title: "ATV, drone, elbil, elsykkel, rc helikopter, ATV, robot, elatv",
        tags: [
            {
                name: "retro",
                type: "General"
            },
            {
                name: "experimental",
                type: "General"
            },
            {
                name: "storefront",
                type: "General"
            }
        ]
    },
    {
        id: 27,
        thumb: "/dev/thumbs/www.angels-heaven.org_english_default_en.htm.jpg",
        url: "https://www.angels-heaven.org/english/default_en.htm",
        title: "EN - TALKS WITH TEACHINGS FROM MY COSMIC FRIENDS - universe-people.org",
        tags: [
            {
                name: "retro",
                type: "General"
            },
            {
                name: "gif_graphics",
                type: "General"
            },
            {
                name: "frameset_site",
                type: "General"
            },
            {
                name: "experimental",
                type: "General"
            }
        ]
    },
    {
        id: 28,
        thumb: "/dev/thumbs/cheapycore.com.jpg",
        url: "https://cheapycore.com",
        title: "CHEAPCORE",
        tags: [
            {
                name: "noncommercial",
                type: "Ads / Commercial Status"
            },
            {
                name: "fake_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "astro_web_framework",
                type: "Web Development Tech"
            }
        ]
    },
    {
        id: 29,
        thumb: "/dev/thumbs/webamp.org.jpg",
        url: "https://webamp.org",
        title: "Webamp · Winamp 2 in your browser",
        tags: [
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "retro",
                type: "General"
            }
        ]
    },
    {
        id: 30,
        thumb: "/dev/thumbs/modarchive.org.jpg",
        url: "https://modarchive.org",
        title: "The Mod Archive v4.0b - A distinctive collection of modules",
        tags: [
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "donation_link",
                type: "General"
            },
            {
                name: "retro",
                type: "General"
            },
            {
                name: "community",
                type: "General"
            },
            {
                name: "user_generated_content",
                type: "General"
            },
            {
                name: "vanilla",
                type: "Web Development Tech"
            }
        ]
    },
    {
        id: 31,
        thumb: "/dev/thumbs/trace.moe.jpg",
        url: "https://trace.moe",
        title: "Anime Scene Search Engine - trace.moe",
        tags: [
            {
                name: "search_engine",
                type: "General"
            },
            {
                name: "donation_link",
                type: "General"
            },
            {
                name: "nextjs",
                type: "Web Development Tech"
            }
        ]
    },
    {
        id: 32,
        thumb: "/dev/thumbs/bryantcodes.art.jpg",
        url: "https://bryantcodes.art",
        title: "bryantcodes.art",
        tags: [
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "personal_homepage",
                type: "General"
            },
            {
                name: "experimental",
                type: "General"
            },
            {
                name: "nextjs",
                type: "Web Development Tech"
            }
        ]
    },
    {
        id: 33,
        thumb: "/dev/thumbs/www.oldavista.com.jpg",
        url: "https://www.oldavista.com",
        title: "Old'aVista: Home",
        tags: [
            {
                name: "retro",
                type: "General"
            },
            {
                name: "noncommercial",
                type: "Ads / Commercial Status"
            },
            {
                name: "fake_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "search_engine",
                type: "General"
            },
            {
                name: "link_hub",
                type: "General"
            },
            {
                name: "pure_vanilla",
                type: "Web Development Tech"
            },
            {
                name: "minimal_javascript",
                type: "General"
            }
        ]
    },
    {
        id: 34,
        thumb: "/dev/thumbs/vapor95.com.jpg",
        url: "https://vapor95.com",
        title: "Vapor95.com | Vaporwave & Aesthetic Clothing",
        tags: [
            {
                name: "storefront",
                type: "General"
            },
            {
                name: "shopify",
                type: "Web Development Tech"
            }
        ]
    },
    {
        id: 35,
        thumb: "/dev/thumbs/oldschool.runescape.com.jpg",
        url: "https://oldschool.runescape.com",
        title: "Old School RuneScape - Play Old School RS",
        tags: [
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "retro",
                type: "General"
            },
            {
                name: "athena_web_framework",
                type: "Web Development Tech"
            },
            {
                name: "community",
                type: "General"
            },
            {
                name: "retro_gaming",
                type: "General"
            }
        ]
    },
    {
        id: 36,
        thumb: "/dev/thumbs/onlinesequencer.net.jpg",
        url: "https://onlinesequencer.net",
        title: "Online Sequencer",
        tags: [
            {
                name: "user_generated_content",
                type: "General"
            },
            {
                name: "jquery",
                type: "Web Development Tech"
            }
        ]
    },
    {
        id: 37,
        thumb: "/dev/thumbs/safebooru.donmai.us.jpg",
        url: "https://safebooru.donmai.us",
        title: "Danbooru: Anime Image Board",
        tags: [
            {
                name: "anime_inspired",
                type: "General"
            },
            {
                name: "user_generated_content",
                type: "General"
            }
        ]
    },
    {
        id: 38,
        thumb: "/dev/thumbs/crxw.net.jpg",
        url: "https://crxw.net",
        title: "crxw's special place",
        tags: [
            {
                name: "personal_homepage",
                type: "General"
            },
            {
                name: "music_artist",
                type: "General"
            },
            {
                name: "anime_inspired",
                type: "General"
            },
            {
                name: "gif_graphics",
                type: "General"
            },
            {
                name: "retro",
                type: "General"
            },
            {
                name: "fake_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "vanilla",
                type: "Web Development Tech"
            }
        ]
    },
    {
        id: 39,
        thumb: "/dev/thumbs/archive.sudomemo.net.jpg",
        url: "https://archive.sudomemo.net",
        title: "Flipnote Archive",
        tags: [
            {
                name: "archive",
                type: "General"
            },
            {
                name: "donation_link",
                type: "General"
            }
        ]
    },
    {
        id: 40,
        thumb: "/dev/thumbs/cnvmp3.com.jpg",
        url: "https://cnvmp3.com",
        title: "Youtube to MP3 Converter (Ad-free)",
        tags: [
            {
                name: "noncommercial",
                type: "Ads / Commercial Status"
            },
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "donation_link",
                type: "General"
            }
        ]
    },
    {
        id: 41,
        thumb: "/dev/thumbs/forum.agoraroad.com.jpg",
        url: "https://forum.agoraroad.com",
        title: "Agora Road's Macintosh Cafe",
        tags: [
            {
                name: "noncommercial",
                type: "Ads / Commercial Status"
            },
            {
                name: "fake_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "retro",
                type: "General"
            },
            {
                name: "gif_graphics",
                type: "General"
            },
            {
                name: "community",
                type: "General"
            },
            {
                name: "user_generated_content",
                type: "General"
            },
            {
                name: "updated_2026",
                type: "General"
            },
            {
                name: "web_forum",
                type: "General"
            },
            {
                name: "indie_web",
                type: "General"
            },
            {
                name: "php",
                type: "Web Development Tech"
            }
        ]
    },
    {
        id: 42,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            {
                name: "nonprofit",
                type: "General"
            },
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "pure_vanilla",
                type: "Web Development Tech"
            }
        ]
    },
    {
        id: 43,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            {
                name: "nonprofit",
                type: "General"
            },
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "pure_vanilla",
                type: "Web Development Tech"
            }
        ]
    },
    {
        id: 44,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            {
                name: "nonprofit",
                type: "General"
            },
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "pure_vanilla",
                type: "Web Development Tech"
            }
        ]
    },
    {
        id: 45,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            {
                name: "nonprofit",
                type: "General"
            },
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "pure_vanilla",
                type: "Web Development Tech"
            }
        ]
    },
    {
        id: 46,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            {
                name: "nonprofit",
                type: "General"
            },
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "pure_vanilla",
                type: "Web Development Tech"
            }
        ]
    },
    {
        id: 47,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            {
                name: "nonprofit",
                type: "General"
            },
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "pure_vanilla",
                type: "Web Development Tech"
            }
        ]
    },
    {
        id: 48,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            {
                name: "nonprofit",
                type: "General"
            },
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "pure_vanilla",
                type: "Web Development Tech"
            }
        ]
    },
    {
        id: 49,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            {
                name: "nonprofit",
                type: "General"
            },
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "pure_vanilla",
                type: "Web Development Tech"
            }
        ]
    },
    {
        id: 50,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            {
                name: "nonprofit",
                type: "General"
            },
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "pure_vanilla",
                type: "Web Development Tech"
            }
        ]
    },
    {
        id: 51,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            {
                name: "nonprofit",
                type: "General"
            },
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "pure_vanilla",
                type: "Web Development Tech"
            }
        ]
    },
    {
        id: 52,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            {
                name: "nonprofit",
                type: "General"
            },
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "pure_vanilla",
                type: "Web Development Tech"
            }
        ]
    },
    {
        id: 53,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            {
                name: "nonprofit",
                type: "General"
            },
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "pure_vanilla",
                type: "Web Development Tech"
            }
        ]
    },
    {
        id: 54,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            {
                name: "nonprofit",
                type: "General"
            },
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "pure_vanilla",
                type: "Web Development Tech"
            }
        ]
    },
    {
        id: 55,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            {
                name: "nonprofit",
                type: "General"
            },
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "pure_vanilla",
                type: "Web Development Tech"
            }
        ]
    },
    {
        id: 56,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            {
                name: "nonprofit",
                type: "General"
            },
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "pure_vanilla",
                type: "Web Development Tech"
            }
        ]
    },
    {
        id: 57,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            {
                name: "nonprofit",
                type: "General"
            },
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "pure_vanilla",
                type: "Web Development Tech"
            }
        ]
    },
    {
        id: 58,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            {
                name: "nonprofit",
                type: "General"
            },
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "pure_vanilla",
                type: "Web Development Tech"
            }
        ]
    },
    {
        id: 59,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            {
                name: "nonprofit",
                type: "General"
            },
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "pure_vanilla",
                type: "Web Development Tech"
            }
        ]
    },
    {
        id: 60,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            {
                name: "nonprofit",
                type: "General"
            },
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "pure_vanilla",
                type: "Web Development Tech"
            }
        ]
    },
    {
        id: 61,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            {
                name: "nonprofit",
                type: "General"
            },
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "pure_vanilla",
                type: "Web Development Tech"
            }
        ]
    },
    {
        id: 62,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            {
                name: "nonprofit",
                type: "General"
            },
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "pure_vanilla",
                type: "Web Development Tech"
            }
        ]
    },
    {
        id: 63,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            {
                name: "nonprofit",
                type: "General"
            },
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "pure_vanilla",
                type: "Web Development Tech"
            }
        ]
    },
    {
        id: 64,
        thumb: "/dev/thumbs/example.com.jpg",
        url: "https://example.com",
        title: "Example Domain",
        tags: [
            {
                name: "nonprofit",
                type: "General"
            },
            {
                name: "no_ads",
                type: "Ads / Commercial Status"
            },
            {
                name: "pure_vanilla",
                type: "Web Development Tech"
            }
        ]
    }
];

// for displaying as the page that focuses on an individual post
interface PostDatum {
    id: number,
    image: string,
    url: string,
    title: string,
    tags: string[],
    // websites that this site links to & is linked from
    linkedTo: PreviewDatum[],
    linkedFrom: PreviewDatum[]
}

// for populating each post's page...
// map used for O(1) post data retrieval by id, to mock a database PK index
export const postData: Map<number, PostDatum> = new Map();
for (const preview of previews) {
    postData.set(
        preview.id,
        {
            id: preview.id,
            // each thumb is "/dev/thumbs/[mysite].jpg" while each image is just "/dev/[mysite].png"
            // similar strategy in production? just remember to shard similarly across renders!
            image: preview.thumb.replace(
                /^\/dev\/thumbs\/(.+)\.jpg$/,
                '/dev/$1.png'
            ),
            url: preview.url,
            title: preview.title,
            tags: preview.tags,
            linkedTo: [],
            linkedFrom: []
        }
    );
}

// ytoo links to & from melonland, and it links to neocities & nekoweb
postData.get(2)?.linkedTo.push(previews[6]);
postData.get(2)?.linkedTo.push(previews[17]);
postData.get(2)?.linkedTo.push(previews[18]);
postData.get(2)?.linkedFrom.push(previews[6]);

postData.get(7)?.linkedTo.push(previews[1]);
postData.get(7)?.linkedFrom.push(previews[1]);
postData.get(18)?.linkedFrom.push(previews[1]);
postData.get(19)?.linkedFrom.push(previews[1]);
