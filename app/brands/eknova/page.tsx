"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Leaf, Heart, Sparkles, Sun } from "lucide-react";
import productsData from "@/lib/products.json";

export default function EknovaPage() {
    const products = productsData.eknova;

    return (
        <div className="min-h-screen bg-[#FAFAF9] text-text-primary">
            {/* Hero Section with Parallax */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                {/* Parallax Background */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/brooke-lark-W9OKrxBqiZA-unsplash.jpg"
                        alt="EKNOVA Natural Wellness"
                        fill
                        className="object-cover blur-sm"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/80" />
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
                            src="/Eknova logo v2.svg"
                            alt="EKNOVA"
                            width={240}
                            height={80}
                            className="mx-auto"
                        />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-6xl md:text-7xl font-bold font-[family-name:var(--font-heading)] text-green-900 tracking-tight"
                    >
                        NATURE, ENGINEERED.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl md:text-2xl text-green-800 max-w-2xl mx-auto font-[family-name:var(--font-body)]"
                    >
                        Ancient wisdom, validated by modern chromatography.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="pt-4"
                    >
                        <Link
                            href="#products"
                            className="inline-block bg-brand-eknova text-white px-8 py-4 rounded-full font-semibold hover:shadow-[0_0_30px_rgba(52,199,89,0.4)] luxury-drift"
                        >
                            Explore Botanicals
                        </Link>
                    </motion.div>
                </div>

                {/* Back Button */}
                <Link
                    href="/"
                    className="absolute top-28 left-8 z-20 flex items-center gap-2 text-green-900/70 hover:text-green-900 luxury-drift"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span className="text-sm font-medium">Back to Home</span>
                </Link>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-green-50/50">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { icon: <Leaf className="w-10 h-10" />, title: "Organic Sourcing", desc: "Pure plant extracts" },
                            { icon: <Heart className="w-10 h-10" />, title: "Holistic Wellness", desc: "Mind-body balance" },
                            { icon: <Sparkles className="w-10 h-10" />, title: "Standardized", desc: "Consistent potency" },
                            { icon: <Sun className="w-10 h-10" />, title: "Sustainable", desc: "Earth-friendly practices" }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center space-y-3"
                            >
                                <div className="text-brand-eknova mx-auto flex justify-center">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold text-green-900">{feature.title}</h3>
                                <p className="text-sm text-green-700">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Grid */}
            <section id="products" className="py-20 bg-[#FAFAF9]">
                <div className="max-w-7xl mx-auto px-8">
                    <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-center mb-12 tracking-tight text-green-900">
                        Botanical Collection
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl luxury-drift overflow-hidden"
                            >
                                {/* Organic Blob Background */}
                                <div className="w-full h-32 mb-6 bg-gradient-to-br from-green-100 to-green-50 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] flex items-center justify-center">
                                    <div className="w-16 h-16 bg-brand-eknova/20 rounded-full flex items-center justify-center">
                                        <Leaf className="w-8 h-8 text-brand-eknova" />
                                    </div>
                                </div>

                                {/* Category Badge */}
                                <span className="inline-block text-xs font-bold text-brand-eknova uppercase tracking-wider mb-3 bg-green-50 px-3 py-1 rounded-full">
                                    {product.category}
                                </span>

                                {/* Product Name */}
                                <h3 className="text-xl font-bold text-green-900 mb-2">{product.name}</h3>

                                {/* Dosage */}
                                <p className="text-sm text-green-600 mb-4 font-medium">{product.dosage}</p>

                                {/* Description */}
                                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                                    {product.description}
                                </p>

                                {/* CTA */}
                                <button className="w-full bg-brand-eknova text-white py-3 rounded-full font-semibold hover:shadow-[0_0_20px_rgba(52,199,89,0.3)] snap-transition">
                                    Learn More
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-b from-green-50 to-white">
                <div className="max-w-4xl mx-auto px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-green-900 mb-6">
                        Embrace Nature's Power
                    </h2>
                    <p className="text-xl text-green-700 mb-8">
                        Discover how our standardized herbal extracts can support your wellness journey.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-brand-eknova text-white px-8 py-4 rounded-full font-semibold hover:shadow-[0_0_30px_rgba(52,199,89,0.4)] luxury-drift"
                    >
                        Get Started
                    </Link>
                </div>
            </section>
        </div>
    );
}
