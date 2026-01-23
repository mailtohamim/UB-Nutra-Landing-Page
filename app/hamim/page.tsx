"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Download, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HamimCard() {
    const contact = {
        name: "Hamim Mubtasim",
        role: "Assistant Business Development Manager",
        company: "UB Nutraceuticals Ltd.",
        email: "hamim@ub-nutra.com",
        phone: "+880 1711 444 313",
        address: "Beacon Business Centre, 9/B/2, Toyenbee Circular Road, Motijheel, Dhaka.",
    };

    const generateVCard = () => {
        const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Mubtasim;Hamim;;;
FN:${contact.name}
TITLE:${contact.role}
ORG:${contact.company}
TEL;TYPE=CELL:${contact.phone.replace(/\s/g, "")}
EMAIL:${contact.email}
ADR;TYPE=WORK:;;${contact.address.replace(/,/g, "\\,")};;;;
END:VCARD`;

        const blob = new Blob([vCardData], { type: "text/vcard" });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Hamim_Mubtasim.vcf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 relative">
                {/* Header / Banner */}
                <div className="h-32 bg-ub-red relative">
                    <div className="absolute inset-0 opacity-10 pattern-grid-lg"></div>
                    {/* Logo Watermark */}
                    <div className="absolute top-4 right-4 opacity-20">
                        <Image src="/UB Logo.svg" alt="UB" width={60} height={60} className="invert brightness-0" />
                    </div>
                </div>

                {/* Profile Content */}
                <div className="px-6 pb-8 -mt-16 relative z-10">
                    {/* Avatar / Initials */}
                    <div className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-lg bg-white flex items-center justify-center overflow-hidden relative">
                        <Image
                            src="/Hamim DP.jpg"
                            alt="Hamim Mubtasim"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="text-center mt-4">
                        <h1 className="text-2xl font-bold text-swisse-charcoal font-[family-name:var(--font-heading)]">{contact.name}</h1>
                        <p className="text-ub-red font-medium text-sm mt-1">{contact.role}</p>
                        <p className="text-gray-500 text-xs uppercase tracking-wider mt-1">{contact.company}</p>
                    </div>

                    {/* Actions */}
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <button
                            onClick={generateVCard}
                            className="flex items-center justify-center gap-2 bg-white border-2 border-ub-red text-ub-red py-3 rounded-xl font-bold hover:bg-red-50 transition-colors shadow-md active:scale-95"
                        >
                            <Download size={18} />
                            Save Contact
                        </button>
                        <button
                            onClick={() => {
                                if (navigator.share) {
                                    navigator.share({
                                        title: contact.name,
                                        text: `Contact info for ${contact.name}`,
                                        url: window.location.href
                                    });
                                } else {
                                    alert("Sharing not supported on this device.");
                                }
                            }}
                            className="flex items-center justify-center gap-2 bg-gray-100 text-swisse-charcoal py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors active:scale-95"
                        >
                            <Share2 size={18} />
                            Share
                        </button>
                    </div>

                    {/* Info List */}
                    <div className="mt-8 space-y-4">
                        <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-xl transition-colors group">
                            <div className="w-10 h-10 rounded-full bg-red-50 text-ub-red flex items-center justify-center group-hover:bg-ub-red group-hover:text-white transition-colors">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase">Mobile</p>
                                <p className="text-swisse-charcoal font-medium">{contact.phone}</p>
                            </div>
                        </a>

                        <a href={`mailto:${contact.email}`} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-xl transition-colors group">
                            <div className="w-10 h-10 rounded-full bg-red-50 text-ub-red flex items-center justify-center group-hover:bg-ub-red group-hover:text-white transition-colors">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase">Email</p>
                                <p className="text-swisse-charcoal font-medium">{contact.email}</p>
                            </div>
                        </a>

                        <div className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-xl transition-colors group">
                            <div className="w-10 h-10 rounded-full bg-red-50 text-ub-red flex items-center justify-center group-hover:bg-ub-red group-hover:text-white transition-colors shrink-0">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase">Address</p>
                                <p className="text-swisse-charcoal font-medium text-sm leading-relaxed">
                                    {contact.address}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer Logo */}
                    <div className="mt-8 pt-8 border-t border-gray-100 flex justify-center opacity-50">
                        <Image src="/UB Main Logo.svg" alt="UB" width={120} height={40} />
                    </div>

                </div>
            </div>
        </div>
    );
}
