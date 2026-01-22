
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import CertificationCarousel from "@/components/CertificationCarousel";
import QuizSection from "@/components/QuizSection";
import { products, categories, values } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Award, FlaskConical, Globe } from "lucide-react";

export default function Home() {
  const featuredProducts = products.slice(0, 3); // Top 3 products for spotlight

  return (
    <div className="flex flex-col w-full">
      <Hero />

      {/* Categories Section ("We've Got You Covered") */}
      <section className="py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-swisse-charcoal uppercase mb-12 tracking-tight">
            We've Got You Covered
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className={`${cat.color} aspect-[4/5] md:aspect-square flex flex-col items-center justify-center p-6 text-center transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl group rounded-xl`}
              >
                {cat.icon && <img src={cat.icon} alt="" className="h-16 w-16 mb-4 text-white drop-shadow-md" style={{ filter: 'brightness(0) invert(1)' }} />}
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase drop-shadow-md">
                  {cat.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Brands Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-swisse-charcoal uppercase mb-12 tracking-tight">
            Our Brands
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Ember Card */}
            <a href="https://emberstore.vercel.app/" target="_blank" rel="noopener noreferrer" className="group relative h-80 bg-black rounded-xl overflow-hidden flex flex-col items-center justify-center p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-red-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <img src="/EMBER Logo.svg" alt="Ember" className="w-32 mb-4 text-white" />

              <p className="text-gray-400 font-medium tracking-wide text-sm">Sports & Gym Nutrition</p>
              <span className="mt-6 px-4 py-1.5 border border-white/20 text-white rounded-full text-xs font-bold uppercase group-hover:bg-white group-hover:text-black transition-all">Visit Store</span>
            </a>

            {/* CellNova Card */}
            <div className="relative h-80 bg-[#FAF5FF] rounded-xl overflow-hidden flex flex-col items-center justify-center p-6 border border-purple-100 transition-all duration-300 hover:shadow-lg">
              <span className="absolute top-3 right-3 bg-purple-100 text-purple-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Coming Soon</span>
              <img src="/cellnova logo v2.svg" alt="CellNova" className="h-12 mb-4" />
              <h2 className="text-purple-900 text-lg font-bold uppercase tracking-wide mb-1 text-center">Wellness Supplement Brand</h2>
              <p className="text-purple-700/70 text-center text-xs">Supplements to fight cancer and other cell related diseases.</p>
            </div>

            {/* Eknova Card - Updated */}
            <div className="relative h-80 bg-[#F0FDF4] rounded-xl overflow-hidden flex flex-col items-center justify-center p-6 border border-green-50 transition-all duration-300 hover:shadow-lg">
              <span className="absolute top-3 right-3 bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Coming Soon</span>
              <img src="/eknova logo v2.svg" alt="Eknova" className="h-12 mb-4" />
              <h2 className="text-green-900 text-lg font-bold uppercase tracking-wide mb-1 text-center">Nutrition Supplement Brand</h2>
              <p className="text-green-600/70 text-center text-xs">Wide range of supplements.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Wellness Quiz Section */}
      <QuizSection />

      {/* Why UB Nutraceuticals Section */}
      <section className="py-20 bg-[#F9F7F2] text-center">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-swisse-charcoal uppercase mb-6 tracking-tight">
            WHY UB NUTRACEUTICALS?
          </h2>
          <p className="max-w-4xl mx-auto text-lg text-gray-600 mb-16 leading-relaxed font-medium">
            UB Nutraceuticals is your trusted partner for whatever life throws at you. For over 19 years, we've been developing premium formulas, backed by science and traditional evidence, to help you navigate your wellness journey.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">

            <div className="flex flex-col items-center gap-4 group">
              <ShieldCheck size={64} strokeWidth={1.5} className="text-swisse-charcoal mb-2 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-lg uppercase leading-tight max-w-[180px]">Bangladesh's Trusted Manufacturer</h3>
              <p className="text-sm text-gray-600 px-4">Premium quality manufacturing</p>
            </div>

            <div className="flex flex-col items-center gap-4 group">
              <Globe size={64} strokeWidth={1.5} className="text-swisse-charcoal mb-2 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-lg uppercase leading-tight max-w-[180px]">Globally Sourced Ingredients</h3>
              <p className="text-sm text-gray-600 px-4">Sourcing only the best materials worldwide</p>
            </div>

            <div className="flex flex-col items-center gap-4 group">
              <Award size={64} strokeWidth={1.5} className="text-swisse-charcoal mb-2 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-lg uppercase leading-tight max-w-[180px]">Certified Excellence</h3>
              <p className="text-sm text-gray-600 px-4">GMP, FDA, and Halal Certified Facility</p>
            </div>

            <div className="flex flex-col items-center gap-4 group">
              <FlaskConical size={64} strokeWidth={1.5} className="text-swisse-charcoal mb-2 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-lg uppercase leading-tight max-w-[180px]">Backed by Science</h3>
              <p className="text-sm text-gray-600 px-4">Formulations driven by research & innovation</p>
            </div>

          </div>

          <div className="mt-16">
            <CertificationCarousel />
          </div>

          <p className="mt-20 text-xs text-gray-400 font-medium tracking-wide">
            *UB Nutraceuticals is a premier contract manufacturer dedicated to global health standards.
          </p>
        </div>
      </section>

      {/* Certification Carousel */}


      {/* Wellness Hub */}
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-swisse-charcoal uppercase mb-12 tracking-tight">
            Research & Innovation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { topic: "Bioavailability", slug: "bioavailability", img: "/jason-briscoe-KTrov7eujms-unsplash.jpg" },
              { topic: "Liposomal Technology", slug: "liposomal-technology", img: "/thlt-lcx-vSC8Qpi6bZ8-unsplash.jpg" },
              { topic: "Probiotics", slug: "probiotics", img: "/brooke-lark-W9OKrxBqiZA-unsplash.jpg" }
            ].map(({ topic, slug, img }) => (
              <Link key={topic} href={`/innovation/${slug}`} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer block">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img
                    src={img}
                    alt={topic}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <span className="text-xs font-bold text-ub-red uppercase tracking-wider mb-3 block">Science</span>
                  <h3 className="text-xl font-bold text-swisse-charcoal mb-4 group-hover:text-ub-red transition-colors">{topic}: The Future of Wellness</h3>
                  <div className="inline-flex items-center text-sm font-bold uppercase text-gray-400 group-hover:text-ub-red transition-colors">
                    Read Article <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </Link>
            ))
            }
          </div>
        </div>
      </section>
    </div>
  );
}
