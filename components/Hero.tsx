
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TypewriterText from "./TypewriterText";

export default function Hero() {
    return (
        <section className="relative w-full min-h-[600px] flex items-center">
            {/* Full Width Background Image */}
            <div className="absolute inset-0 overflow-hidden">
                <img
                    src="/Hero Image.jpg"
                    alt="Hero Background"
                    className="w-full h-full object-cover"
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Left-Aligned Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 lg:px-24 w-full">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1] mb-6">
                        Absolute Quality <br />
                        <TypewriterText
                            words={["Nutraceuticals", "Life", "Health", "Wellness", "Happiness"]}
                            className="text-ub-red"
                        />
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 font-medium mb-8">
                        Innovative, sustainable & customized solutions for your wellness journey.
                    </p>
                    <Link href="/shop" className="inline-flex items-center justify-center px-8 py-4 text-white bg-ub-red rounded-full font-bold uppercase tracking-wide hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Explore Products
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
