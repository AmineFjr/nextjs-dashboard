import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import React from "react";

export const metadata: Metadata = {
    title: {
        template: '%s | Dashboard',
        default: 'Dashboard',
    },
    description: 'The official Next.js Learn Dashboard built with App Router.',
    metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
   children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body className={`${inter.className} initialised`}>
                {children}
                <Analytics />
                <SpeedInsights />
        </body>
        </html>
    );
}