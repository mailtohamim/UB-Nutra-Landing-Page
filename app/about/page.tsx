
import { Users, Building2, FlaskConical, Globe } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero */}
            <section className="bg-swisse-cream py-20 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold text-swisse-charcoal uppercase tracking-tight mb-6">
                    About UB Nutraceuticals
                </h1>
                <p className="text-xl md:text-2xl font-medium text-gray-600 max-w-3xl mx-auto italic">
                    "To deliver innovative, sustainable, and customized solutions for your wellness journey."
                </p>
            </section>

            {/* Main Content */}
            <section className="py-20 px-4 md:px-8 max-w-[1440px] mx-auto">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/2">
                        <div className="bg-gray-200 rounded-2xl overflow-hidden aspect-video relative shadow-xl">
                            <img src="/arno-senoner-oLS6IxceVNs-unsplash.jpg" alt="Manufacturing" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-3xl font-bold text-swisse-charcoal uppercase leading-tight">Reliable Manufacturing Partner</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            UB Nutraceuticals is a reliable finished good manufacturer with over 19+ years of pharmaceutical background.
                            We are dedicated to producing high-quality nutraceuticals that meet global standards.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Our commitment to quality is backed by our state-of-the-art facilities and a team of experts driving innovation in health and wellness.
                            We prioritize safety, efficacy, and sustainability in every product we create.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-ub-red text-white">
                <div className="max-w-[1440px] mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { value: "19+", label: "Years Experience", icon: Users },
                        { value: "33,000", label: "Sq Ft Facility", icon: Building2 },
                        { value: "3", label: "Branch Manufacturers", icon: Globe },
                        { value: "1", label: "R&D Institute", icon: FlaskConical },
                    ].map((stat) => (
                        <div key={stat.label} className="flex flex-col items-center group">
                            <stat.icon size={40} className="mb-4 opacity-80 group-hover:scale-110 transition-transform" />
                            <div className="text-4xl md:text-5xl font-black mb-2">{stat.value}</div>
                            <div className="text-sm md:text-base font-bold uppercase tracking-wider opacity-90">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Values */}
            <section className="py-20 px-4 max-w-[1440px] mx-auto text-center">
                <h2 className="text-3xl font-bold text-swisse-charcoal uppercase mb-12">Our Core Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {["Respect", "Health & Safety", "Integrity", "Sustainability"].map((val) => (
                        <div key={val} className="p-8 border border-gray-100 bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                            <h3 className="text-xl font-bold text-ub-red uppercase mb-4">{val}</h3>
                            <p className="text-gray-500 text-sm">
                                Dedicated to upholding {val.toLowerCase()} in every aspect of our business operations.
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
