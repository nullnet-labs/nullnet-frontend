import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: {
        // this template can be seen in action in ./dashboard/invoices/page.tsx
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
            <body>{children}</body>
        </html>
    );
}
