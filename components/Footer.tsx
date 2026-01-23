"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, Twitter, Linkedin, Mail, MapPin } from "lucide-react";

export default function Footer() {
    const pathname = usePathname();

    // Determine footer background color based on current path
    const getFooterColor = () => {
        if (pathname?.includes('/brands/ember')) return 'bg-[#FF3B30]'; // Ember Red
        if (pathname?.includes('/brands/eknova')) return 'bg-[#34C759]'; // EkNova Green
        if (pathname?.includes('/brands/cellnova')) return 'bg-[#007AFF]'; // CellNova Blue
        return 'bg-[#D32F2F]'; // UB Red (Default)
    };

    return (
        <footer className={`${getFooterColor()} text-white pt-16 pb-8 transition-colors duration-300`}>
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Column 1: Shop */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Shop</h4>
                        <ul className="space-y-4 text-white">
                            <li><Link href="/shop?category=Beauty" className="hover:text-white/80 transition-colors">Beauty</Link></li>
                            <li><Link href="/shop?category=Immunity" className="hover:text-white/80 transition-colors">Immunity</Link></li>
                            <li><Link href="/shop?category=Gut Health" className="hover:text-white/80 transition-colors">Gut Health</Link></li>
                            <li><Link href="/shop?category=Lifestyle" className="hover:text-white/80 transition-colors">Lifestyle</Link></li>
                            <li><Link href="/shop" className="hover:text-white/80 transition-colors">All Products</Link></li>
                        </ul>
                    </div>

                    {/* Column 2: About UB */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">About UB</h4>
                        <ul className="space-y-4 text-white">
                            <li><Link href="/about" className="hover:text-white/80 transition-colors">Our Story</Link></li>
                            <li><Link href="/about" className="hover:text-white/80 transition-colors">Our Values</Link></li>
                            <li><Link href="/capabilities" className="hover:text-white/80 transition-colors">Manufacturing</Link></li>
                            <li><Link href="/capabilities" className="hover:text-white/80 transition-colors">R&D</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact/Address */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Contact</h4>
                        <ul className="space-y-4 text-white text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-white shrink-0" />
                                <span>Beacon Business Centre, 9/B/2,<br />Toyenbee Circular Road,<br />Motijheel, Dhaka.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-white shrink-0" />
                                <span>support@ub-nutra.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Stay In The Loop</h4>
                        <p className="text-white mb-4 text-sm">Subscribe to receive updates, access to exclusive deals, and more.</p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="bg-white border border-white text-black placeholder:text-gray-500 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                                required
                            />
                            <button className="bg-black text-white font-bold uppercase tracking-wider py-3 px-6 rounded-full hover:bg-white hover:text-black transition-colors border border-black hover:border-white">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white text-sm">© {new Date().getFullYear()} UB Nutraceuticals Ltd. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-white hover:text-white/80 transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="text-white hover:text-white/80 transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="text-white hover:text-white/80 transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="text-white hover:text-white/80 transition-colors"><Linkedin size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
