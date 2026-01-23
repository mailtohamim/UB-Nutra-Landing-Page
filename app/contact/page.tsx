"use client";

import Image from "next/image";
import { MapPin, Phone, Mail, CheckCircle } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [inquiryType, setInquiryType] = useState<"cdmo" | "distribution" | "general" | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="bg-white min-h-screen pt-20">
            {/* Hero */}
            <section className="bg-base-mist py-20 text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-heading)] text-text-primary uppercase tracking-tight mb-4"
                >
                    Let's Connect
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-medium text-text-secondary"
                >
                    We're here to answer your questions and discuss opportunities.
                </motion.p>
            </section>

            <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary uppercase mb-6">
                                Get In Touch
                            </h2>
                            <p className="text-text-secondary mb-8 leading-relaxed text-lg">
                                Whether you have a question about our products, manufacturing capabilities, or partnerships, our team is ready to answer all your questions.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-4 bg-brand-ub text-white rounded-full shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-text-primary uppercase mb-1 text-lg">Head Office</h3>
                                        <p className="text-text-secondary text-base">
                                            Beacon Business Centre, 9/B/2,<br />
                                            Toyenbee Circular Road,<br />
                                            Motijheel, Dhaka-1223
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-4 bg-brand-ub text-white rounded-full shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-text-primary uppercase mb-1 text-lg">Phone</h3>
                                        <p className="text-text-secondary text-base">+880-2-41054005-10</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-4 bg-brand-ub text-white rounded-full shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-text-primary uppercase mb-1 text-lg">Email</h3>
                                        <p className="text-text-secondary text-base">info@ub-nutra.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Certifications Bar */}
                        <div className="bg-base-mist p-8 rounded-2xl">
                            <h3 className="text-sm font-bold text-text-primary uppercase mb-6 tracking-wider">Our Certifications</h3>
                            <div className="flex flex-wrap items-center justify-center gap-6 opacity-50 grayscale">
                                <Image src="/FDA.svg" alt="FDA" width={60} height={60} />
                                <Image src="/GMP.svg" alt="GMP" width={60} height={60} />
                                <Image src="/ISO22000.svg" alt="ISO 22000" width={60} height={60} />
                                <Image src="/Halal.svg" alt="Halal" width={60} height={60} />
                                <Image src="/HACCP.svg" alt="HACCP" width={60} height={60} />
                            </div>
                        </div>
                    </div>

                    {/* Decision Tree Form */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
                        {submitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-20">
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle size={40} />
                                </div>
                                <h3 className="text-3xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">Thank You!</h3>
                                <p className="text-text-secondary text-lg">
                                    Your message has been received.<br />We will get back to you shortly.
                                </p>
                                <button
                                    onClick={() => {
                                        setSubmitted(false);
                                        setInquiryType(null);
                                    }}
                                    className="mt-8 text-brand-ub font-bold underline uppercase tracking-wide"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] text-text-primary uppercase mb-8">
                                    Send a Message
                                </h2>

                                {/* Question 1: Inquiry Type */}
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-text-secondary uppercase tracking-wide">
                                        What is your inquiry regarding?
                                    </label>
                                    <div className="space-y-3">
                                        <label className="flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer hover:border-brand-ub transition-colors">
                                            <input
                                                type="radio"
                                                name="inquiryType"
                                                value="cdmo"
                                                checked={inquiryType === "cdmo"}
                                                onChange={(e) => setInquiryType(e.target.value as any)}
                                                className="w-5 h-5 text-brand-ub"
                                                required
                                            />
                                            <span className="font-semibold">Contract Manufacturing (CDMO)</span>
                                        </label>
                                        <label className="flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer hover:border-brand-ub transition-colors">
                                            <input
                                                type="radio"
                                                name="inquiryType"
                                                value="distribution"
                                                checked={inquiryType === "distribution"}
                                                onChange={(e) => setInquiryType(e.target.value as any)}
                                                className="w-5 h-5 text-brand-ub"
                                            />
                                            <span className="font-semibold">Distributing Our Brands</span>
                                        </label>
                                        <label className="flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer hover:border-brand-ub transition-colors">
                                            <input
                                                type="radio"
                                                name="inquiryType"
                                                value="general"
                                                checked={inquiryType === "general"}
                                                onChange={(e) => setInquiryType(e.target.value as any)}
                                                className="w-5 h-5 text-brand-ub"
                                            />
                                            <span className="font-semibold">General / R&D</span>
                                        </label>
                                    </div>
                                </div>

                                {/* Conditional Fields Based on Selection */}
                                {inquiryType && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        className="space-y-6 pt-4"
                                    >
                                        {/* Basic Contact Info */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-text-secondary uppercase tracking-wide">Name</label>
                                                <input
                                                    type="text"
                                                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-ub focus:bg-white transition-colors"
                                                    placeholder="Your Name"
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-text-secondary uppercase tracking-wide">Email</label>
                                                <input
                                                    type="email"
                                                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-ub focus:bg-white transition-colors"
                                                    placeholder="you@example.com"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* CDMO Specific Fields */}
                                        {inquiryType === "cdmo" && (
                                            <>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-text-secondary uppercase tracking-wide">Batch Size</label>
                                                    <select className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-ub focus:bg-white transition-colors">
                                                        <option value="">Select batch size</option>
                                                        <option value="5000-10000">5,000 - 10,000 units</option>
                                                        <option value="10000-50000">10,000 - 50,000 units</option>
                                                        <option value="50000+">50,000+ units</option>
                                                    </select>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-text-secondary uppercase tracking-wide">Format Interest</label>
                                                    <select className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-ub focus:bg-white transition-colors">
                                                        <option value="">Select format</option>
                                                        <option value="gummy">Gummies</option>
                                                        <option value="softgel">Softgels</option>
                                                        <option value="powder">Powder/Sachets</option>
                                                        <option value="tablet">Tablets</option>
                                                        <option value="unsure">Not Sure Yet</option>
                                                    </select>
                                                </div>
                                            </>
                                        )}

                                        {/* Distribution Specific Fields */}
                                        {inquiryType === "distribution" && (
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-text-secondary uppercase tracking-wide">Select Brand</label>
                                                <select className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-ub focus:bg-white transition-colors">
                                                    <option value="">Choose a brand</option>
                                                    <option value="ember">EMBER - Sports Nutrition</option>
                                                    <option value="eknova">EKNOVA - Holistic Wellness</option>
                                                    <option value="cellnova">CELLNOVA - Longevity Science</option>
                                                    <option value="all">All Brands</option>
                                                </select>
                                            </div>
                                        )}

                                        {/* Message Field for All */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-text-secondary uppercase tracking-wide">Message</label>
                                            <textarea
                                                rows={5}
                                                className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-ub focus:bg-white transition-colors"
                                                placeholder="Tell us more about your needs..."
                                                required
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full py-4 bg-brand-ub text-white font-bold text-lg uppercase tracking-wider rounded-full hover:shadow-[0_0_30px_rgba(211,47,47,0.4)] snap-transition mt-4"
                                        >
                                            Send Message
                                        </button>
                                    </motion.div>
                                )}
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
