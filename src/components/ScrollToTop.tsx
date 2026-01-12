import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        // Force scroll to top immediately on route change
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant',
        });
        // Fallback for some browsers or if documentElement isn't the scroller
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant',
        });

        // Send pageview to Google Analytics (gtag) for SPA route changes
        try {
            const GA_ID = 'G-0H6C329NMN';
            const w = window as any;
            if (w && typeof w.gtag === 'function') {
                w.gtag('config', GA_ID, { page_path: pathname });
            }
        } catch (e) {
            // ignore if gtag is not available
        }
    }, [pathname]);

    return null;
};

export default ScrollToTop;
