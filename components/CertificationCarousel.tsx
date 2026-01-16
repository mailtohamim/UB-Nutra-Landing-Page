"use client";

import { motion } from "framer-motion";
import { Leaf, Globe, ShieldCheck, Award, FileCheck, ClipboardCheck, CheckCircle, Trees } from "lucide-react";

const certifications = [
    // Existing Images (Assuming these exist in public as established)
    { type: "image", src: "/FDA.svg", alt: "FDA Registered", id: "fda" },
    { type: "image", src: "/GMP.svg", alt: "GMP Certified", id: "gmp" },
    { type: "image", src: "/Halal.svg", alt: "Halal Certified", id: "halal" },

    // Generated Badges for missing logos
    { type: "badge", icon: Leaf, text: "LEED", subtext: "Certified", id: "leed" },
    { type: "badge", icon: Trees, text: "ESG", subtext: "Standards", id: "esg" },
    { type: "badge", icon: ShieldCheck, text: "FSSC", subtext: "22000", id: "fssc" },
    { type: "badge", icon: Award, text: "ISO", subtext: "9001", id: "iso9001" },
    { type: "badge", icon: Globe, text: "ISO", subtext: "22000", id: "iso22000" },
    { type: "badge", icon: ClipboardCheck, text: "HACCP", subtext: "Certified", id: "haccp" },
    { type: "badge", icon: CheckCircle, text: "IFS", subtext: "Food", id: "ifs" },
];

export default function CertificationCarousel() {
    return (
        <section className="py-12 bg-white border-t border-gray-100 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest">
                    Trusted by Global Standards
                </p>
            </div>

            <div className="relative flex w-full overflow-hidden mask-linear-fade">
                {/* Gradient Masks for smooth fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

                <motion.div
                    className="flex items-center gap-12 sm:gap-16 md:gap-20 px-8"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        duration: 35, // Slow speed as requested
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    style={{ width: "max-content" }}
                >
                    {/* Double the list to create seamless loop */}
                    {[...certifications, ...certifications].map((cert, index) => (
                        <div key={`${cert.id}-${index}`} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 cursor-default">
                            {cert.type === "image" ? (
                                <img
                                    src={cert.src}
                                    alt={cert.alt}
                                    className="h-14 w-auto object-contain max-w-[120px]"
                                />
                            ) : (
                                <div className="flex items-center gap-3 py-2 px-4 rounded-full border border-gray-100 bg-gray-50/50 min-w-[140px] justify-center group">
                                    {cert.icon && <cert.icon size={24} strokeWidth={1.5} className="text-gray-400 group-hover:text-ub-red transition-colors" />}
                                    <div className="flex flex-col leading-none text-left">
                                        <span className="text-sm font-black text-gray-700 uppercase">{cert.text}</span>
                                        {cert.subtext && <span className="text-[10px] font-bold text-gray-400 tracking-wider">{cert.subtext}</span>}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
