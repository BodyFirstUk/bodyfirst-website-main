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
    }, [pathname]);

    return null;
};

export default ScrollToTop;
