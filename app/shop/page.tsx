
"use client";

import { useState, Suspense } from "react";
import { products } from "@/lib/data";
import ProductGrid from "@/components/ProductGrid";
import { useSearchParams } from "next/navigation";

function ShopContent() {
    return (
        <>
            <div className="bg-swisse-cream py-12 md:py-20 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold text-swisse-charcoal uppercase tracking-tight mb-4">
                    Our Brands
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Explore our specialized brands catering to every aspect of your wellness journey.
                </p>
            </div>

            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Ember Card */}
                    <a href="https://emberstore.vercel.app/" target="_blank" rel="noopener noreferrer" className="group relative h-96 bg-black rounded-2xl overflow-hidden flex flex-col items-center justify-center p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-red-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <img src="/EMBER Logo.svg" alt="Ember" className="w-48 mb-6 text-white" />

                        <p className="text-gray-400 font-medium tracking-wide">Sports & Gym Nutrition</p>
                        <span className="mt-8 px-6 py-2 border border-white/20 text-white rounded-full text-sm font-bold uppercase group-hover:bg-white group-hover:text-black transition-all">Visit Store</span>
                    </a>

                    {/* CellNova Card */}
                    <div className="relative h-96 bg-[#FAF5FF] rounded-2xl overflow-hidden flex flex-col items-center justify-center p-8 border border-purple-100">
                        <span className="absolute top-4 right-4 bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full uppercase">Coming Soon</span>
                        <img src="/cellnova logo v2.svg" alt="CellNova" className="h-16 mb-6" />
                        <h2 className="text-purple-900 text-xl font-bold uppercase tracking-wide mb-2 text-center">Wellness Supplement Brand</h2>
                        <p className="text-purple-700/70 text-center text-sm">Supplements to fight cancer and other cell related diseases.</p>
                    </div>

                    {/* Eknova Card */}
                    <div className="relative h-96 bg-[#F0FDF4] rounded-2xl overflow-hidden flex flex-col items-center justify-center p-8 border border-green-50">
                        <span className="absolute top-4 right-4 bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase">Coming Soon</span>
                        <img src="/eknova logo v2.svg" alt="Eknova" className="h-16 mb-6" />
                        <h2 className="text-green-900 text-xl font-bold uppercase tracking-wide mb-2 text-center">Nutrition Supplement Brand</h2>
                        <p className="text-green-600/70 text-center text-sm">Wide range of supplements.</p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default function ShopPage() {
    return (
        <div className="bg-white min-h-screen">
            <Suspense fallback={<div className="p-20 text-center">Loading Shop...</div>}>
                <ShopContent />
            </Suspense>
        </div>
    )
}
