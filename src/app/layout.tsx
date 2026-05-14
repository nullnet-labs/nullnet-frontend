import type { Metadata } from "next";
import "./globals.css";

import TopNav from "@/components/top-nav";

export const metadata: Metadata = {
    title: {
        template: '%s | Project Nullnet',
        default: 'Project Nullnet'
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
            </body>
        </html>
    );
}
