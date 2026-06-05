import type { Metadata } from "next";
import "./globals.css";

import TopNav from "@/components/top-nav";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
    title: {
        template: '%s | The Null Network',
        default: 'The Null Network'
    },
    icons: {
        icon: '/nullnet-icon.png'
    },
    description: 'The Nullnet outer Web discovery platform.'
}

export default function RootLayout({children}:Readonly<{children: React.ReactNode;}>) {
    return (
        <html
            lang="en"
            className={`h-full`}
        >
            <body>
                <TopNav />
                {children}
                <SiteFooter />
            </body>
        </html>
    );
}
