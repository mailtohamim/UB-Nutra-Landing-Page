
"use client";

import { MapPin, Phone, Mail, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Add logic here to send data
    };

    return (
        <div className="bg-white min-h-screen">
            <section className="bg-swisse-cream py-20 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold text-swisse-charcoal uppercase tracking-tight mb-4">
                    Contact Us
                </h1>
                <p className="text-xl font-medium text-gray-600">
                    We'd love to hear from you.
                </p>
            </section>

            <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold text-swisse-charcoal uppercase mb-6">Get In Touch</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                Whether you have a question about our products, manufacturing capabilities, or just want to say hello, our team is ready to answer all your questions.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-4 bg-ub-red text-white rounded-full shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-swisse-charcoal uppercase mb-1 text-lg">Head Office</h3>
                                        <p className="text-gray-600 text-lg">Beacon Business Centre, 9/B/2,<br />Toyenbee Circular Road,<br />Motijheel, Dhaka.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-4 bg-ub-red text-white rounded-full shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-swisse-charcoal uppercase mb-1 text-lg">Phone</h3>
                                        <p className="text-gray-600 text-lg">+880-2-41054005</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-4 bg-ub-red text-white rounded-full shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-swisse-charcoal uppercase mb-1 text-lg">Email</h3>
                                        <p className="text-gray-600 text-lg">support@ub-nutra.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-gray-200 w-full h-80 rounded-2xl overflow-hidden relative shadow-inner">
                            <img src="/bergstrand-consultancy-Mmkj20LCtDA-unsplash.jpg" alt="Map" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
                        {submitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-20">
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle size={40} />
                                </div>
                                <h3 className="text-3xl font-bold text-swisse-charcoal mb-4">Thank You!</h3>
                                <p className="text-gray-600 text-lg">Your message has been received. <br />We will get back to you shortly.</p>
                                <button onClick={() => setSubmitted(false)} className="mt-8 text-ub-red font-bold underline uppercase tracking-wide">Send another message</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <h2 className="text-3xl font-bold text-swisse-charcoal uppercase mb-8">Send a Message</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-sm font-bold text-gray-500 uppercase tracking-wide">First Name</label>
                                        <input id="firstName" type="text" className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-ub-red focus:bg-white transition-colors" placeholder="John" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-sm font-bold text-gray-500 uppercase tracking-wide">Last Name</label>
                                        <input id="lastName" type="text" className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-ub-red focus:bg-white transition-colors" placeholder="Doe" required />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold text-gray-500 uppercase tracking-wide">Email Address</label>
                                    <input id="email" type="email" className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-ub-red focus:bg-white transition-colors" placeholder="john@example.com" required />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-bold text-gray-500 uppercase tracking-wide">Message</label>
                                    <textarea id="message" rows={6} className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-ub-red focus:bg-white transition-colors" placeholder="How can we help you?" required></textarea>
                                </div>

                                <button type="submit" className="w-full py-4 bg-ub-red text-white font-bold text-lg uppercase tracking-wider rounded-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 mt-4">
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
