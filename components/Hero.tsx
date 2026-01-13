
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full min-h-[600px] flex flex-col md:flex-row">
            {/* Left Content */}
            <div className="w-full md:w-1/2 bg-swisse-cream flex items-center justify-center p-8 md:p-16 lg:p-24 order-2 md:order-1">
                <div className="max-w-xl space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-swisse-charcoal uppercase leading-[1]">
                        Absolute Quality <br />
                        <span className="text-ub-red">Nutraceuticals</span>.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 font-medium max-w-md">
                        Innovative, sustainable & customized solutions for your wellness journey.
                    </p>
                    <div className="pt-4">
                        <Link href="/shop" className="inline-flex items-center justify-center px-8 py-4 text-white bg-swisse-charcoal rounded-full font-bold uppercase tracking-wide hover:bg-ub-red transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Explore Products
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 bg-gray-200 relative min-h-[400px] md:min-h-auto overflow-hidden group order-1 md:order-2">
                <div className="absolute inset-0 bg-stone-100 flex items-center justify-center">
                    <img
                        src="/jason-briscoe-GrdJp16CPk8-unsplash.jpg"
                        alt="Healthy Lifestyle"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                </div>
            </div>
        </section>
    );
}
