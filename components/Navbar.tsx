
"use client";

import Link from "next/link";
import { Search, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm transition-all duration-300 supports-[backdrop-filter]:bg-white/60">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-swisse-charcoal p-2">
                            <Menu size={24} />
                        </button>
                    </div>

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center justify-center md:justify-start flex-1 md:flex-none">
                        <Link href="/" className="block hover:opacity-90 transition-opacity">
                            <img src="/UB Main Logo.svg" alt="UB Nutraceuticals" className="h-12 w-auto" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8 items-center justify-center flex-1">
                        {["Shop", "About Us", "Capabilities", "Contact"].map((item) => (
                            <Link
                                key={item}
                                href={item === "Shop" ? "/shop" : item === "About Us" ? "/about" : `/${item.toLowerCase().replace(' ', '-')}`}
                                className="text-sm font-bold uppercase tracking-wide text-swisse-charcoal hover:text-ub-red transition-colors"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* Icons */}
                    <div className="hidden md:flex items-center space-x-6 text-swisse-charcoal">
                        <button className="hover:text-ub-red transition-colors"><Search size={22} /></button>
                        <button className="hover:text-ub-red transition-colors"><User size={22} /></button>
                    </div>



                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {["Shop", "About Us", "Capabilities", "Contact"].map((item) => (
                                <Link
                                    key={item}
                                    href={item === "Shop" ? "/shop" : item === "About Us" ? "/about" : `/${item.toLowerCase().replace(' ', '-')}`}
                                    className="block px-3 py-4 text-base font-bold uppercase text-swisse-charcoal hover:bg-gray-50 hover:text-ub-red"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
