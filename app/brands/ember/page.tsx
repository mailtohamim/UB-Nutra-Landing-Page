"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Zap, Flame, Trophy, Target } from "lucide-react";
import productsData from "@/lib/products.json";

export default function EmberPage() {
    const products = productsData.ember;

    return (
        <div className="min-h-screen bg-base-night text-white">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/Ember featured.jpg"
                        alt="EMBER Sports Nutrition"
                        fill
                        className="object-cover opacity-30"
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center space-y-6 px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto mb-8"
                    >
                        <Image
                            src="/EMBER Logo.svg"
                            alt="EMBER"
                            width={240}
                            height={80}
                            className="drop-shadow-[0_0_30px_rgba(255,59,48,0.6)] mx-auto"
                        />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-6xl md:text-7xl font-bold font-[family-name:var(--font-heading)] tracking-tight"
                    >
                        FUEL YOUR AMBITION.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-[family-name:var(--font-body)]"
                    >
                        Precision-engineered isolates and compounds for the elite.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="pt-4"
                    >
                        <Link
                            href="#products"
                            className="inline-block bg-brand-ember text-white px-8 py-4 rounded-full font-semibold hover:shadow-[0_0_30px_rgba(255,59,48,0.6)] luxury-drift"
                        >
                            Explore Products
                        </Link>
                    </motion.div>
                </div>

                {/* Back Button */}
                <Link
                    href="/"
                    className="absolute top-28 left-8 z-20 flex items-center gap-2 text-white/70 hover:text-white luxury-drift"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span className="text-sm font-medium">Back to Home</span>
                </Link>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-zinc-900">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { icon: <Zap className="w-10 h-10" />, title: "Rapid Absorption", desc: "Fast-acting formulas" },
                            { icon: <Flame className="w-10 h-10" />, title: "Maximum Potency", desc: "Highest grade ingredients" },
                            { icon: <Trophy className="w-10 h-10" />, title: "Proven Results", desc: "Backed by athletes" },
                            { icon: <Target className="w-10 h-10" />, title: "Precision Dosing", desc: "Exact measurements" }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center space-y-3"
                            >
                                <div className="text-brand-ember mx-auto flex justify-center">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold">{feature.title}</h3>
                                <p className="text-sm text-gray-400">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Showcase - Horizontal Scroll */}
            <section id="products" className="py-20 bg-base-night">
                <div className="max-w-7xl mx-auto px-8">
                    <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-center mb-12 tracking-tight">
                        Performance Collection
                    </h2>

                    <div className="overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
                        <div className="flex gap-6 w-max">
                            {products.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="snap-center w-80 bg-zinc-900 border border-white/10 rounded-2xl p-8 hover:border-brand-ember luxury-drift"
                                >
                                    {/* Category Badge */}
                                    <span className="inline-block text-xs font-bold text-brand-ember uppercase tracking-wider mb-4 bg-brand-ember/10 px-3 py-1 rounded-full">
                                        {product.category}
                                    </span>

                                    {/* Product Name */}
                                    <h3 className="text-2xl font-bold mb-3">{product.name}</h3>

                                    {/* Size */}
                                    <p className="text-sm text-gray-400 mb-4">{product.size}</p>

                                    {/* Description */}
                                    <p className="text-base text-gray-300 leading-relaxed mb-6">
                                        {product.description}
                                    </p>

                                    {/* Flavors if available */}
                                    {product.flavors && (
                                        <div className="mb-6">
                                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Available Flavors</p>
                                            <div className="flex gap-2">
                                                {product.flavors.map((flavor) => (
                                                    <span key={flavor} className="text-xs bg-white/5 px-3 py-1 rounded-full border border-white/10">
                                                        {flavor}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* CTA */}
                                    <button className="w-full bg-brand-ember text-white py-3 rounded-full font-semibold hover:shadow-[0_0_20px_rgba(255,59,48,0.4)] snap-transition">
                                        Learn More
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-b from-zinc-900 to-base-night">
                <div className="max-w-4xl mx-auto px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-6">
                        Ready to Elevate Your Performance?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Join thousands of athletes who trust EMBER for their nutritional needs.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-white text-base-night px-8 py-4 rounded-full font-semibold hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] luxury-drift"
                    >
                        Contact Our Team
                    </Link>
                </div>
            </section>

            <style jsx>{`
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </div>
    );
}
