"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Dna, Shield, Sparkles, Activity } from "lucide-react";
import productsData from "@/lib/products.json";

export default function CellnovaPage() {
    const products = productsData.cellnova;

    return (
        <div className="min-h-screen bg-white text-text-primary">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-white">
                {/* Animated DNA Background */}
                <div className="absolute inset-0 z-0 opacity-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            className="w-96 h-96"
                        >
                            <Dna className="w-full h-full text-brand-cellnova" />
                        </motion.div>
                    </div>
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
                            src="/Cellnova Logo v2.svg"
                            alt="CELLNOVA"
                            width={240}
                            height={80}
                            className="mx-auto"
                        />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-6xl md:text-7xl font-bold font-[family-name:var(--font-heading)] text-blue-900 tracking-tight"
                    >
                        THE ARCHITECT OF YOUTH.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl md:text-2xl text-blue-700 max-w-2xl mx-auto font-[family-name:var(--font-body)]"
                    >
                        Targeting aging at the molecular source.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="pt-4"
                    >
                        <Link
                            href="#products"
                            className="inline-block bg-brand-cellnova text-white px-8 py-4 rounded-full font-semibold hover:shadow-[0_0_30px_rgba(0,122,255,0.4)] luxury-drift"
                        >
                            Discover Longevity Science
                        </Link>
                    </motion.div>
                </div>

                {/* Back Button */}
                <Link
                    href="/"
                    className="absolute top-28 left-8 z-20 flex items-center gap-2 text-blue-900/70 hover:text-blue-900 luxury-drift"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span className="text-sm font-medium">Back to Home</span>
                </Link>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-blue-50/30">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { icon: <Dna className="w-10 h-10" />, title: "Cellular Focus", desc: "At the molecular level" },
                            { icon: <Shield className="w-10 h-10" />, title: "Protective", desc: "Antioxidant defense" },
                            { icon: <Sparkles className="w-10 h-10" />, title: "Youth Extension", desc: "Combat aging markers" },
                            { icon: <Activity className="w-10 h-10" />, title: "NAD+ Support", desc: "Energy metabolism" }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center space-y-3"
                            >
                                <div className="text-brand-cellnova mx-auto flex justify-center">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold text-blue-900">{feature.title}</h3>
                                <p className="text-sm text-blue-700">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Showcase - Floating Glass Cards */}
            <section id="products" className="py-20 bg-gradient-to-b from-white to-blue-50/20">
                <div className="max-w-7xl mx-auto px-8">
                    <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-center mb-12 tracking-tight text-blue-900">
                        Longevity Collection
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="backdrop-blur-xl bg-white/60 border border-blue-100 rounded-2xl p-6 hover:bg-white/80 hover:border-blue-200 luxury-drift shadow-lg hover:shadow-xl"
                            >
                                {/* Icon Header */}
                                <div className="w-full h-24 mb-6 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center">
                                    <div className="w-12 h-12 bg-brand-cellnova/10 rounded-full flex items-center justify-center">
                                        <Dna className="w-6 h-6 text-brand-cellnova" />
                                    </div>
                                </div>

                                {/* Category Badge */}
                                <span className="inline-block text-xs font-bold text-brand-cellnova uppercase tracking-wider mb-3 bg-blue-50 px-3 py-1 rounded-full">
                                    {product.category}
                                </span>

                                {/* Product Name */}
                                <h3 className="text-xl font-bold text-blue-900 mb-2">{product.name}</h3>

                                {/* Dosage */}
                                <p className="text-sm text-blue-600 mb-4 font-medium">{product.dosage}</p>

                                {/* Description */}
                                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                                    {product.description}
                                </p>

                                {/* CTA */}
                                <button className="w-full bg-brand-cellnova text-white py-3 rounded-full font-semibold hover:shadow-[0_0_20px_rgba(0,122,255,0.3)] snap-transition">
                                    Learn More
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Science Section */}
            <section className="py-20 bg-blue-900 text-white">
                <div className="max-w-4xl mx-auto px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-6">
                        The Science of Longevity
                    </h2>
                    <p className="text-xl text-blue-200 mb-8 leading-relaxed">
                        Our formulations are based on cutting-edge research into cellular aging, mitochondrial function, and epigenetic regulation. Each compound is selected for its scientifically validated impact on healthspan extension.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] luxury-drift"
                    >
                        Consult Our Scientists
                    </Link>
                </div>
            </section>
        </div>
    );
}
