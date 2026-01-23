"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Building2, Globe, FlaskConical, Award, Users, History, CheckCircle2, Factory, Leaf } from "lucide-react";

export default function AboutPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const heroY = useTransform(scrollYProgress, [0, 0.5], ["0%", "30%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

    const stats = [
        { value: "19+", label: "Years of Excellence", icon: <History className="w-8 h-8" /> },
        { value: "68,000", label: "Sq. Ft. Facility", icon: <Factory className="w-8 h-8" /> },
        { value: "35+", label: "Global Partners", icon: <Globe className="w-8 h-8" /> },
        { value: "250+", label: "Formulations", icon: <FlaskConical className="w-8 h-8" /> },
    ];

    const certifications = [
        { name: "FDA Registered", icon: "/FDA.svg" },
        { name: "GMP Certified", icon: "/GMP.svg" },
        { name: "ISO 22000", icon: "/ISO22000.svg" },
        { name: "HACCP", icon: "/HACCP.svg" },
        { name: "Halal Certified", icon: "/Halal.svg" },
    ];

    const timeline = [
        { year: "2005", title: "Foundation", desc: "Started as a small pharmaceutical packing unit." },
        { year: "2010", title: "Expansion", desc: "Expanded into full-scale nutraceutical manufacturing." },
        { year: "2015", title: "Global Reach", desc: "Started exporting to Southeast Asian markets." },
        { year: "2020", title: "Innovation Hub", desc: "Launched state-of-the-art R&D facility." },
        { year: "2024", title: "Sustainability", desc: "Achieved 100% eco-friendly packaging solutions." },
    ];

    return (
        <div ref={containerRef} className="bg-white min-h-screen">

            {/* Cinematic Hero */}
            <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
                <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover scale-105"
                    >
                        <source src="/capping machine closeup.mp4" type="video/mp4" />
                    </video>
                </motion.div>

                <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-4xl md:text-7xl font-extrabold text-white mb-6 uppercase tracking-tight drop-shadow-lg font-[family-name:var(--font-heading)]"
                    >
                        Pioneering Wellness
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-xl md:text-3xl text-gray-100 font-light max-w-3xl mx-auto leading-relaxed drop-shadow-md"
                    >
                        "Driven by science, grounded in quality. We manufacture the future of health."
                    </motion.p>
                </div>
            </section>

            {/* Main Content - The Story */}
            <section className="py-24 px-4 md:px-8 max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold text-swisse-charcoal uppercase leading-tight font-[family-name:var(--font-heading)]">
                            More Than Just Manufacturers
                        </h2>
                        <div className="bg-ub-red h-1.5 w-24 rounded-full" />
                        <p className="text-gray-600 text-lg leading-relaxed font-medium">
                            UB Nutraceuticals stands at the intersection of traditional wisdom and modern science. With over <span className="text-ub-red font-bold">19 years</span> of dedicated experience, we have evolved from a local facility to a global manufacturing powerhouse.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed font-medium">
                            Our 68,000 sq. ft. facility is not just a factory; it's a hub of innovation where pharmacists, biochemists, and engineers collaborate to create supplements that truly make a difference. We don't just follow standards—we set them.
                        </p>

                        <div className="grid grid-cols-2 gap-6 pt-4">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="text-ub-red" />
                                <span className="font-bold text-swisse-charcoal">Pharma-Grade Quality</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="text-ub-red" />
                                <span className="font-bold text-swisse-charcoal">Sustainable Sourcing</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="text-ub-red" />
                                <span className="font-bold text-swisse-charcoal">End-to-End R&D</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="text-ub-red" />
                                <span className="font-bold text-swisse-charcoal">Custom Formulations</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute top-0 -left-4 w-full h-full bg-gray-100 rounded-3xl transform -rotate-2 -z-10" />
                        <div className="absolute bottom-0 -right-4 w-full h-full bg-ub-red/10 rounded-3xl transform rotate-2 -z-10" />
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
                            <Image
                                src="/UB hero.jpg"
                                alt="UB Facility"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="text-sm font-bold uppercase tracking-widest mb-1 opacity-80">Location</p>
                                <p className="text-2xl font-bold">Dhaka, Bangladesh</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Impact Stats */}
            <section className="py-20 bg-swisse-charcoal text-white relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute top-0 right-0 p-12 opacity-5">
                    <FlaskConical size={400} />
                </div>

                <div className="max-w-[1440px] mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x divide-gray-700">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-center px-4"
                            >
                                <div className="flex justify-center mb-4 text-ub-red">
                                    {stat.icon}
                                </div>
                                <div className="text-4xl md:text-6xl font-black mb-2 font-[family-name:var(--font-heading)]">{stat.value}</div>
                                <div className="text-sm md:text-base font-bold uppercase tracking-wider text-gray-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-extrabold text-swisse-charcoal uppercase mb-4 font-[family-name:var(--font-heading)]">Certified Excellence</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-12">We maintain the highest global standards for safety, quality, and efficacy.</p>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
                        {certifications.map((cert, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="w-24 md:w-32 h-24 md:h-32 relative grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                            >
                                <Image src={cert.icon} alt={cert.name} fill className="object-contain" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Journey */}
            <section className="py-24 px-4 bg-white relative">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-extrabold text-swisse-charcoal uppercase mb-16 text-center font-[family-name:var(--font-heading)]">Our Journey</h2>

                    <div className="relative border-l-4 border-gray-100 ml-4 md:ml-1/2 space-y-12">
                        {timeline.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={`relative pl-8 md:pl-0 flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}
                            >
                                <div className="absolute left-[-10px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 bg-ub-red rounded-full ring-4 ring-white shadow-lg" />

                                <div className="w-full md:w-1/2 md:px-12 mb-4 md:mb-0">
                                    <div className={`bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-left ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                        <span className="text-4xl font-black text-gray-200 block mb-2">{item.year}</span>
                                        <h3 className="text-xl font-bold text-swisse-charcoal mb-2">{item.title}</h3>
                                        <p className="text-gray-600 font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership / Team (Simplified) */}
            <section className="py-20 bg-ub-red text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-extrabold uppercase mb-8 font-[family-name:var(--font-heading)]">Driven By Experts</h2>
                    <p className="text-xl md:text-2xl leading-relaxed opacity-90 mb-12">
                        "Our strength lies in our people. From the lab to the production floor, every member of the UB family is dedicated to the art and science of wellness."
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
                        <div className="flex items-center justify-center gap-3">
                            <FlaskConical className="w-8 h-8 opacity-80" />
                            <span className="font-bold text-lg">Expert Formulators</span>
                        </div>
                        <div className="flex items-center justify-center gap-3">
                            <Users className="w-8 h-8 opacity-80" />
                            <span className="font-bold text-lg">Dedicated Support</span>
                        </div>
                        <div className="flex items-center justify-center gap-3">
                            <Leaf className="w-8 h-8 opacity-80" />
                            <span className="font-bold text-lg">Green Practitioners</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
