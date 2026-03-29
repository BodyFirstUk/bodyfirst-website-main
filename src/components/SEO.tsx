import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    ogImage?: string;
    ogType?: string;
    noindex?: boolean;
}

const SEO = ({
    title = 'Expert Physiotherapy London | Body First UK Clinic',
    description = 'Expert physiotherapy & wellness clinic in Hampton Hill, London. Sports massage, dry needling, shockwave therapy & more. HCPC & CSP registered. Insurance accepted. From £65. Book online today.',
    canonical,
    ogImage = 'https://bodyfirst.uk/images/social-share-1200x630.png',
    ogType = 'website',
    noindex = false,
}: SEOProps) => {
    const location = useLocation();
    const baseUrl = 'https://bodyfirst.uk';
    const currentUrl = canonical || `${baseUrl}${location.pathname}`;

    useEffect(() => {
        // Update title
        document.title = title;

        // Update or create meta tags
        const updateMetaTag = (name: string, content: string, isProperty = false) => {
            const attribute = isProperty ? 'property' : 'name';
            let element = document.querySelector(`meta[${attribute}="${name}"]`);

            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attribute, name);
                document.head.appendChild(element);
            }

            element.setAttribute('content', content);
        };

        // Update or create link tags
        const updateLinkTag = (rel: string, href: string) => {
            let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;

            if (!element) {
                element = document.createElement('link');
                element.setAttribute('rel', rel);
                document.head.appendChild(element);
            }

            element.href = href;
        };

        // Primary Meta Tags
        updateMetaTag('description', description);
        updateMetaTag('robots', noindex ? 'noindex,nofollow' : 'index,follow');
        updateLinkTag('canonical', currentUrl);

        // Open Graph Tags
        updateMetaTag('og:type', ogType, true);
        updateMetaTag('og:url', currentUrl, true);
        updateMetaTag('og:title', title, true);
        updateMetaTag('og:description', description, true);
        updateMetaTag('og:image', ogImage, true);
        updateMetaTag('og:image:width', '1200', true);
        updateMetaTag('og:image:height', '630', true);
        updateMetaTag('og:image:alt', 'Body First UK - Expert Physiotherapy & Wellness Clinic in Hampton Hill, London', true);
        updateMetaTag('og:locale', 'en_GB', true);
        updateMetaTag('og:site_name', 'Body First UK', true);

        // Twitter Card Tags
        updateMetaTag('twitter:card', 'summary_large_image');
        updateMetaTag('twitter:url', currentUrl);
        updateMetaTag('twitter:title', title);
        updateMetaTag('twitter:description', description);
        updateMetaTag('twitter:image', ogImage);
        updateMetaTag('twitter:image:alt', 'Body First UK - Expert Physiotherapy & Wellness Clinic in Hampton Hill, London');
        updateMetaTag('twitter:site', '@bodyfirstuk');

        // Theme Color
        updateMetaTag('theme-color', '#0d9488');

        // --- Structured Data (JSON-LD) ---
        // Remove any previously injected schema scripts by this component
        document.querySelectorAll('script[data-seo-component]').forEach(el => el.remove());

        const injectSchema = (data: object) => {
            const script = document.createElement('script');
            script.setAttribute('type', 'application/ld+json');
            script.setAttribute('data-seo-component', 'true');
            script.textContent = JSON.stringify(data);
            document.head.appendChild(script);
        };

        // Homepage schemas are handled statically in index.html (Physiotherapy, FAQPage, BreadcrumbList)
        // Only inject schemas dynamically for inner pages
        if (location.pathname !== '/') {

            // --- BreadcrumbList (all inner pages) ---
            const breadcrumbMap: Record<string, { name: string; url: string }[]> = {
                '/services': [
                    { name: 'Home', url: baseUrl },
                    { name: 'Services', url: `${baseUrl}/services` }
                ],
                '/what-we-treat': [
                    { name: 'Home', url: baseUrl },
                    { name: 'What We Treat', url: `${baseUrl}/what-we-treat` }
                ],
                '/about': [
                    { name: 'Home', url: baseUrl },
                    { name: 'About Us', url: `${baseUrl}/about` }
                ],
                '/prices': [
                    { name: 'Home', url: baseUrl },
                    { name: 'Pricing & Insurance', url: `${baseUrl}/prices` }
                ],
                '/contact': [
                    { name: 'Home', url: baseUrl },
                    { name: 'Contact', url: `${baseUrl}/contact` }
                ],
                '/why-us': [
                    { name: 'Home', url: baseUrl },
                    { name: 'Why Us', url: `${baseUrl}/why-us` }
                ],
            };

            // Match exact path or auto-generate crumbs for sub-pages
            const pathSegments = location.pathname.split('/').filter(Boolean);
            let crumbs = breadcrumbMap[location.pathname];

            if (!crumbs && pathSegments.length >= 2) {
                const parentPath = `/${pathSegments[0]}`;
                const parentCrumbs = breadcrumbMap[parentPath];
                if (parentCrumbs) {
                    crumbs = [
                        ...parentCrumbs,
                        {
                            name: pathSegments[pathSegments.length - 1]
                                .split('-')
                                .map(w => w.charAt(0).toUpperCase() + w.slice(1))
                                .join(' '),
                            url: currentUrl
                        }
                    ];
                }
            }

            if (crumbs && crumbs.length > 0) {
                injectSchema({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": crumbs.map((crumb, index) => ({
                        "@type": "ListItem",
                        "position": index + 1,
                        "name": crumb.name,
                        "item": crumb.url
                    }))
                });
            }

            // --- Service page schema for /services/* ---
            if (location.pathname.startsWith('/services/')) {
                const serviceName = pathSegments[pathSegments.length - 1]
                    .split('-')
                    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
                    .join(' ');

                injectSchema({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": serviceName,
                    "provider": {
                        "@type": "Physiotherapy",
                        "name": "Body First UK",
                        "url": baseUrl
                    },
                    "areaServed": {
                        "@type": "City",
                        "name": "London"
                    },
                    "url": currentUrl
                });
            }
        }

    }, [title, description, canonical, ogImage, ogType, noindex, location.pathname, currentUrl]);

    return null;
};

export default SEO;