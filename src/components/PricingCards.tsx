import { siteContent } from '../data/content';
import Card from './Card';
import HeadingScrollAnimation from './HeadingScrollAnimation';

const PricingCards = () => {
    // Group prices by category
    const groupedPrices = siteContent.prices.reduce((acc, item) => {
        const category = item.category || 'Other Services';
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(item);
        return acc;
    }, {} as Record<string, typeof siteContent.prices>);

    return (
        <div className="space-y-24">
            {Object.entries(groupedPrices).map(([category, items]) => (
                <div key={category}>
                    <div className="flex items-center gap-6 mb-12">
                        <HeadingScrollAnimation
                            as="h3"
                            className="text-3xl font-black text-slate-900 shrink-0 tracking-tight"
                            variant="fade-up"
                        >
                            {category}
                        </HeadingScrollAnimation>
                        <div className="h-px bg-slate-200 w-full rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {items.map((item, index) => (
                            <Card
                                key={index}
                                delay={index * 0.05}
                                className="flex flex-col justify-between h-full p-8 bg-white border border-slate-200 shadow-sm hover:border-teal-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-4 transition-all duration-300 rounded-[2rem] group"
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <h4 className="text-xl font-black text-slate-900 leading-tight group-hover:text-teal-600 transition-colors">{item.service}</h4>
                                    </div>
                                    <div className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-bold bg-slate-50 text-slate-500 mb-8 border border-slate-100 group-hover:bg-teal-50 group-hover:text-teal-700 group-hover:border-teal-100 transition-colors">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {item.duration}
                                    </div>
                                </div>

                                <div className="mt-auto pt-8 flex items-center justify-between border-t border-slate-50">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-black mb-1">Session Fee</span>
                                        <span className="text-3xl font-black text-slate-900 leading-none group-hover:text-teal-600 transition-colors">{item.price}</span>
                                    </div>
                                    <a
                                        href="https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center bg-slate-900 text-white font-black py-3 px-5 rounded-2xl hover:bg-teal-600 transition-all duration-300 text-sm shadow-lg shadow-slate-900/10 group-hover:shadow-teal-600/20"
                                    >
                                        Book
                                        <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PricingCards;
