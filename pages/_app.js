import "../styles/global.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function HSL({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <Analytics />
            <SpeedInsights />
        </>
    );
}