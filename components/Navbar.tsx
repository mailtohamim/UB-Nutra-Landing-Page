"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isBrandsOpen, setIsBrandsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const brands = [
        {
            name: "EMBER",
            logo: "/EMBER Logo Dark.svg",
            tagline: "High-Performance Sports Nutrition",
            href: "/brands/ember",
            color: "brand-ember"
        },
        {
            name: "EKNOVA",
            logo: "/Eknova logo v2.svg",
            tagline: "Holistic Wellness & Standardized Herbals",
            href: "/brands/eknova",
            color: "brand-eknova"
        },
        {
            name: "CELLNOVA",
            logo: "/cellnova logo.svg",
            tagline: "Advanced Cellular Longevity & Anti-Aging",
            href: "/brands/cellnova",
            color: "brand-cellnova"
        }
    ];

    return (
        <>
            <nav
                className={`fixed w-full h-20 px-4 md:px-8 flex items-center justify-between z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-glass-surface backdrop-blur-xl border-b border-glass-border shadow-lg'
                    : 'bg-transparent'
                    }`}
            >
                {/* Logo */}
                <Link href="/" className="flex-shrink-0 hover:opacity-80 luxury-drift">
                    <Image
                        src="/UB Main Logo.svg"
                        alt="UB Nutraceuticals"
                        width={90}
                        height={60}
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    <Link
                        href="/"
                        className="text-sm font-medium font-[family-name:var(--font-heading)] text-text-primary hover:text-brand-ub luxury-drift"
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className="text-sm font-medium font-[family-name:var(--font-heading)] text-text-primary hover:text-brand-ub luxury-drift"
                    >
                        About
                    </Link>

                    {/* Our Brands Mega Menu Trigger */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsBrandsOpen(true)}
                        onMouseLeave={() => setIsBrandsOpen(false)}
                    >
                        <button className="flex items-center gap-1 text-sm font-medium font-[family-name:var(--font-heading)] text-text-primary hover:text-brand-ub luxury-drift">
                            Our Brands
                            <ChevronDown className={`w-4 h-4 transition-transform ${isBrandsOpen ? 'rotate-180' : ''}`} />
                        </button>
                    </div>

                    <Link
                        href="/capabilities"
                        className="text-sm font-medium font-[family-name:var(--font-heading)] text-text-primary hover:text-brand-ub luxury-drift"
                    >
                        CDMO Services
                    </Link>
                    <Link
                        href="/shop"
                        className="text-sm font-medium font-[family-name:var(--font-heading)] text-text-primary hover:text-brand-ub luxury-drift"
                    >
                        Product Library
                    </Link>
                </div>

                {/* Request Quote Button */}
                <div className="hidden lg:block">
                    <Link
                        href="/contact"
                        className="bg-brand-ub text-white rounded-full px-6 py-2 text-sm font-semibold hover:shadow-[0_0_20px_rgba(211,47,47,0.4)] snap-transition"
                    >
                        Request Quote
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-text-primary"
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                >
                    {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mega Menu - Our Brands */}
            <AnimatePresence>
                {isBrandsOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-20 left-0 right-0 z-40 bg-glass-surface backdrop-blur-xl border-b border-glass-border shadow-2xl"
                        onMouseEnter={() => setIsBrandsOpen(true)}
                        onMouseLeave={() => setIsBrandsOpen(false)}
                    >
                        <div className="max-w-7xl mx-auto px-8 py-12">
                            <div className="grid grid-cols-3 gap-8">
                                {brands.map((brand) => (
                                    <Link
                                        key={brand.name}
                                        href={brand.href}
                                        className="group flex flex-col items-center text-center p-6 rounded-2xl hover:bg-white/50 luxury-drift"
                                    >
                                        <div className="mb-4 h-16 flex items-center justify-center">
                                            <Image
                                                src={brand.logo}
                                                alt={brand.name}
                                                width={140}
                                                height={50}
                                                className="object-contain group-hover:scale-110 luxury-drift"
                                            />
                                        </div>
                                        <p className={`text-sm text-text-secondary font-[family-name:var(--font-body)] mt-2`}>
                                            {brand.tagline}
                                        </p>
                                        <span className={`text-${brand.color} text-xs font-semibold mt-3 group-hover:underline`}>
                                            Explore →
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", damping: 30 }}
                        className="fixed inset-0 z-40 bg-white lg:hidden"
                    >
                        <div className="flex flex-col p-8 pt-24 space-y-6">
                            <Link href="/" className="text-lg font-semibold" onClick={() => setIsMobileOpen(false)}>Home</Link>
                            <Link href="/about" className="text-lg font-semibold" onClick={() => setIsMobileOpen(false)}>About</Link>
                            <div className="space-y-3 pl-4">
                                {brands.map((brand) => (
                                    <Link
                                        key={brand.name}
                                        href={brand.href}
                                        className="block text-base text-text-secondary"
                                        onClick={() => setIsMobileOpen(false)}
                                    >
                                        {brand.name}
                                    </Link>
                                ))}
                            </div>
                            <Link href="/capabilities" className="text-lg font-semibold" onClick={() => setIsMobileOpen(false)}>CDMO Services</Link>
                            <Link href="/shop" className="text-lg font-semibold" onClick={() => setIsMobileOpen(false)}>Product Library</Link>
                            <Link
                                href="/contact"
                                className="bg-brand-ub text-white rounded-full px-6 py-3 text-center font-semibold mt-6"
                                onClick={() => setIsMobileOpen(false)}
                            >
                                Request Quote
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
