
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-swisse-charcoal text-white pt-16 pb-8">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Column 1: Shop */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Shop</h4>
                        <ul className="space-y-4 text-gray-300">
                            <li><Link href="/shop?category=Beauty" className="hover:text-ub-red transition-colors">Beauty</Link></li>
                            <li><Link href="/shop?category=Immunity" className="hover:text-ub-red transition-colors">Immunity</Link></li>
                            <li><Link href="/shop?category=Gut Health" className="hover:text-ub-red transition-colors">Gut Health</Link></li>
                            <li><Link href="/shop?category=Lifestyle" className="hover:text-ub-red transition-colors">Lifestyle</Link></li>
                            <li><Link href="/shop" className="hover:text-ub-red transition-colors">All Products</Link></li>
                        </ul>
                    </div>

                    {/* Column 2: About UB */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">About UB</h4>
                        <ul className="space-y-4 text-gray-300">
                            <li><Link href="/about" className="hover:text-ub-red transition-colors">Our Story</Link></li>
                            <li><Link href="/about" className="hover:text-ub-red transition-colors">Our Values</Link></li>
                            <li><Link href="/capabilities" className="hover:text-ub-red transition-colors">Manufacturing</Link></li>
                            <li><Link href="/capabilities" className="hover:text-ub-red transition-colors">R&D</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact/Address */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Contact</h4>
                        <ul className="space-y-4 text-gray-300 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-ub-red shrink-0" />
                                <span>Beacon Business Centre, 9/B/2,<br />Toyenbee Circular Road,<br />Motijheel, Dhaka.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-ub-red shrink-0" />
                                <span>support@ub-nutra.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Stay In The Loop</h4>
                        <p className="text-gray-300 mb-4 text-sm">Subscribe to receive updates, access to exclusive deals, and more.</p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="bg-white/10 border border-white/20 text-white placeholder:text-gray-400 px-4 py-3 rounded-md focus:outline-none focus:border-ub-red transition-colors"
                                required
                            />
                            <button className="bg-ub-red text-white font-bold uppercase tracking-wider py-3 px-6 rounded-full hover:bg-white hover:text-ub-red transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">© {new Date().getFullYear()} UB Nutraceuticals Ltd. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
