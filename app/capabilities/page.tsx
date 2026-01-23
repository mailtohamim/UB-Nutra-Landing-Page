"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Factory, Shield, Award, Zap, Package, Beaker } from "lucide-react";

export default function CapabilitiesPage() {
    const [selectedFormat, setSelectedFormat] = useState<"gummy" | "softgel" | "powder">("gummy");

    const formats = {
        gummy: {
            title: "Gummies",
            description: "Pectin & Gelatin bases. Fun, flavorful, and easy to consume.",
            features: ["Pectin (Vegan) or Gelatin", "Custom shapes & colors", "Great taste profiles", "High bioavailability"],
            icon: <Package className="w-16 h-16" />
        },
        softgel: {
            title: "Softgels",
            description: "Vegan & Fish Oil options. Premium encapsulation technology.",
            features: ["Vegan or traditional gelatin", "Oil & powder fills", "Precise dosing", "Easy swallowing"],
            icon: <Beaker className="w-16 h-16" />
        },
        powder: {
            title: "Powders",
            description: "Sachets & Jars. Maximum flexibility and potency.",
            features: ["Single-serve sachets", "Bulk jars available", "Instant or blended", "Custom formulations"],
            icon: <Zap className="w-16 h-16" />
        }
    };

    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Hero */}
            <section className="py-20 bg-gradient-to-b from-base-mist to-white">
                <div className="max-w-7xl mx-auto px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-6 tracking-tight"
                    >
                        Manufacturing Excellence
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-text-secondary max-w-3xl mx-auto"
                    >
                        From concept to market-ready product, we deliver pharmaceutical-grade nutraceuticals with unmatched speed and quality.
                    </motion.p>
                </div>
            </section>

            {/* Feature Stack 1: The Factory */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="inline-block bg-brand-ub/10 p-4 rounded-2xl">
                                <Factory className="w-12 h-12 text-brand-ub" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-text-primary tracking-tight">
                                70,000 Sq. Ft. of Excellence.
                            </h2>
                            <p className="text-lg text-text-secondary leading-relaxed">
                                Located in Bhaluka, our facility is engineered to ISO 9001 and GMP standards. We operate three distinct production lines to prevent cross-contamination between herbal, chemical, and probiotic products.
                            </p>
                            <div className="grid grid-cols-2 gap-4 pt-4">
                                {[
                                    { icon: <Shield />, label: "ISO 9001 Certified" },
                                    { icon: <Award />, label: "GMP Compliant" },
                                    { icon: <Zap />, label: "FDA Registered" },
                                    { icon: <Package />, label: "3 Production Lines" }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="text-brand-ub">{item.icon}</div>
                                        <span className="text-sm font-semibold">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Visual */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/bergstrand-consultancy-Mmkj20LCtDA-unsplash.jpg"
                                alt="Manufacturing Facility"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Feature Stack 2: Private Label/White Label */}
            <section className="py-20 bg-base-mist">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Visual - Order reversed on desktop */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative h-96 rounded-2xl overflow-hidden shadow-2xl lg:order-1"
                        >
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source src="/capping machine closeup.mp4" type="video/mp4" />
                            </video>
                        </motion.div>

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6 lg:order-2"
                        >
                            <div className="inline-block bg-brand-ub/10 p-4 rounded-2xl">
                                <Package className="w-12 h-12 text-brand-ub" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-text-primary tracking-tight">
                                Launch in Weeks, Not Months.
                            </h2>
                            <p className="text-lg text-text-secondary leading-relaxed">
                                Leverage our library of 250+ market-ready formulations. Choose your format: Gummy, Softgel, or Sachet. We handle the R&D, you handle the marketing.
                            </p>
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-lg mb-4">What We Provide:</h3>
                                <ul className="space-y-2 text-text-secondary">
                                    <li className="flex items-start gap-2">
                                        <span className="text-brand-ub mt-1">✓</span>
                                        <span>Pre-validated formulations ready to scale</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-brand-ub mt-1">✓</span>
                                        <span>Custom label design and packaging support</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-brand-ub mt-1">✓</span>
                                        <span>Regulatory compliance documentation</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-brand-ub mt-1">✓</span>
                                        <span>MOQ as low as 5,000 units</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Interactive Format Slider */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-8">
                    <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-center text-text-primary mb-12 tracking-tight">
                        Choose Your Format
                    </h2>

                    {/* Format Selector */}
                    <div className="flex justify-center gap-4 mb-12">
                        {(Object.keys(formats) as Array<keyof typeof formats>).map((format) => (
                            <button
                                key={format}
                                onClick={() => setSelectedFormat(format)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all ${selectedFormat === format
                                    ? 'bg-brand-ub text-white shadow-[0_0_20px_rgba(211,47,47,0.3)]'
                                    : 'bg-gray-100 text-text-secondary hover:bg-gray-200'
                                    }`}
                            >
                                {formats[format].title}
                            </button>
                        ))}
                    </div>

                    {/* Format Display */}
                    <motion.div
                        key={selectedFormat}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="max-w-4xl mx-auto bg-gradient-to-br from-base-mist to-white rounded-3xl p-12 shadow-xl"
                    >
                        <div className="text-center space-y-6">
                            <div className="mx-auto w-20 h-20 bg-brand-ub/10 rounded-full flex items-center justify-center text-brand-ub">
                                {formats[selectedFormat].icon}
                            </div>
                            <h3 className="text-3xl font-bold font-[family-name:var(--font-heading)]">
                                {formats[selectedFormat].title}
                            </h3>
                            <p className="text-xl text-text-secondary">
                                {formats[selectedFormat].description}
                            </p>
                            <div className="grid grid-cols-2 gap-4 pt-6">
                                {formats[selectedFormat].features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-2 justify-center">
                                        <span className="text-brand-ub">•</span>
                                        <span className="text-sm font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-b from-base-night to-zinc-900 text-white">
                <div className="max-w-4xl mx-auto px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-6">
                        Ready to Bring Your Product to Life?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Let's discuss your manufacturing needs and create something extraordinary together.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-white text-base-night px-8 py-4 rounded-full font-semibold hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] luxury-drift"
                    >
                        Request a Quote
                    </Link>
                </div>
            </section>
        </div>
    );
}
