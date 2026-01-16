"use client";

import { motion } from "framer-motion";

const certifications = [
    { src: "/FDA.svg", alt: "FDA Registered" },
    { src: "/GMP.svg", alt: "GMP Certified" },
    { src: "/Halal.svg", alt: "Halal Certified" },
    { src: "/LEED.svg", alt: "LEED Certified" },
    { src: "/ESG.svg", alt: "ESG Compliant" },
    { src: "/ISO22000.svg", alt: "ISO 22000 Certified" },
    { src: "/HACCP.svg", alt: "HACCP Certified" },
];

export default function CertificationCarousel() {
    return (
        <section className="py-12 bg-[#F9F7F2] overflow-hidden">
            <div className="relative flex w-full overflow-hidden mask-linear-fade">
                {/* Gradient Masks for smooth fade edges - matched to bg color */}
                <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#F9F7F2] to-transparent pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#F9F7F2] to-transparent pointer-events-none"></div>

                <motion.div
                    className="flex items-center gap-12 sm:gap-16 md:gap-20 px-8"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        duration: 60, // Slower speed
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    style={{ width: "max-content" }}
                >
                    {/* Double the list to create seamless loop */}
                    {[...certifications, ...certifications].map((cert, index) => (
                        <div key={`${cert.alt}-${index}`} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 cursor-default">
                            <img
                                src={cert.src}
                                alt={cert.alt}
                                className="h-14 w-auto object-contain max-w-[120px]"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
