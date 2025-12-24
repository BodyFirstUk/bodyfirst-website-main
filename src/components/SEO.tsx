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
    title = 'Hampton Hill Physiotherapy | Pain Relief & Injury Care',
    description = 'Trusted physiotherapy clinic in Hampton Hill. Specialising in pain relief, sports injuries & rehabilitation. HCPC registered therapists. Insurance accepted. Call 0203 818 1238.',
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
        updateMetaTag('og:image:alt', 'Body First UK - Your Local Physio in Hampton Hill for Pain Relief & Rehabilitation', true);
        updateMetaTag('og:locale', 'en_GB', true);
        updateMetaTag('og:site_name', 'Body First UK', true);

        // Twitter Card Tags
        updateMetaTag('twitter:card', 'summary_large_image');
        updateMetaTag('twitter:url', currentUrl);
        updateMetaTag('twitter:title', title);
        updateMetaTag('twitter:description', description);
        updateMetaTag('twitter:image', ogImage);
        updateMetaTag('twitter:image:alt', 'Body First UK - Your Local Physio in Hampton Hill for Pain Relief & Rehabilitation');
        updateMetaTag('twitter:site', '@bodyfirstuk');

        // Theme Color
        updateMetaTag('theme-color', '#0d9488');

        // Add JSON-LD Schema only on homepage
        if (location.pathname === '/') {
            let script = document.querySelector('script[type="application/ld+json"]');

            if (!script) {
                script = document.createElement('script');
                script.setAttribute('type', 'application/ld+json');
                document.head.appendChild(script);
            }

            const schemaData = {
                "@context": "https://schema.org",
                "@type": "MedicalBusiness",
                "name": "Body First UK",
                "alternateName": "BODY FIRST UK - Physio & Wellbeing Clinic",
                "url": baseUrl,
                "logo": `${baseUrl}/images/logo.png`,
                "image": ogImage,
                "description": "Expert physiotherapy and wellness clinic in Hampton Hill, London, offering comprehensive treatment for musculoskeletal conditions, sports injuries, chronic pain, and rehabilitation.",
                "telephone": "+442038181238",
                "email": "info@bodyfirst.uk",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "38 High Street, Hampton Hill",
                    "addressLocality": "Hampton",
                    "addressRegion": "London",
                    "postalCode": "TW12 1PD",
                    "addressCountry": "GB"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "51.4256928",
                    "longitude": "-0.3568561"
                },
                "areaServed": {
                    "@type": "City",
                    "name": "Hampton Hill"
                },
                "openingHoursSpecification": [
                    {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                        "opens": "09:00",
                        "closes": "20:00"
                    },
                    {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": "Sunday",
                        "opens": "11:00",
                        "closes": "20:00"
                    }
                ],
                "priceRange": "££",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "200",
                    "bestRating": "5",
                    "worstRating": "1"
                },
                "sameAs": [
                    "https://www.facebook.com/share/17pz212NhW/",
                    "https://www.instagram.com/bodyfirstuk",
                    "https://twitter.com/bodyfirstuk",
                    "https://www.google.com/maps/place/BODY+FIRST+UK+-+Physio+%26+Wellbeing+Clinic/@51.4256928,-0.3568561,17z"
                ],
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Physiotherapy Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "MedicalTherapy",
                                "name": "Physiotherapy",
                                "description": "Expert assessment and treatment for musculoskeletal conditions, pain relief, and injury rehabilitation"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "MedicalTherapy",
                                "name": "Sports Massage",
                                "description": "Deep tissue massage for recovery, flexibility, and performance enhancement"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "MedicalTherapy",
                                "name": "Shockwave Therapy",
                                "description": "Non-invasive treatment for chronic injuries and pain management"
                            }
                        }
                    ]
                }
            };

            script.textContent = JSON.stringify(schemaData);
        }
    }, [title, description, canonical, ogImage, ogType, noindex, location.pathname, currentUrl]);

    return null;
};

export default SEO;
