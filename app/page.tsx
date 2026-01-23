"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, ShieldCheck, Award, Users, Sparkles, Leaf, Zap, Factory, ChevronRight, CheckCircle, Mail, Phone, MapPin, Building2, FlaskConical, Settings, Package } from "lucide-react";

export default function Home() {
  const [typewriterText, setTypewriterText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Excellence", "Innovation", "Quality", "Trust"];
  const fullText = words[wordIndex];

  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Parallax setup
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Typewriter effect
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypewriterText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 2000);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [wordIndex]);

  const coreValues = [
    { icon: <ShieldCheck className="w-12 h-12" />, title: "Respect & Smile" },
    { icon: <Award className="w-12 h-12" />, title: "Health & Safety" },
    { icon: <Users className="w-12 h-12" />, title: "Trust & Integrity" },
    { icon: <Leaf className="w-12 h-12" />, title: "Sustainability" },
    { icon: <Sparkles className="w-12 h-12" />, title: "Teamwork" },
    { icon: <Zap className="w-12 h-12" />, title: "Empowerment" }
  ];

  const stats = [
    { number: "70,000", label: "Sq. Ft. Facility", suffix: "", icon: <Building2 className="w-10 h-10" /> },
    { number: "250", label: "Formulations", suffix: "+", icon: <FlaskConical className="w-10 h-10" /> },
    { number: "3", label: "Production Lines", suffix: "", icon: <Settings className="w-10 h-10" /> },
    { number: "5,000", label: "Min. Order Qty", suffix: "", icon: <Package className="w-10 h-10" /> }
  ];

  const process = [
    { step: "01", title: "Consultation", desc: "We understand your vision and requirements" },
    { step: "02", title: "Formulation", desc: "Our R&D team creates the perfect blend" },
    { step: "03", title: "Production", desc: "Manufacturing in our state-of-the-art facility" },
    { step: "04", title: "Delivery", desc: "Quality-checked products ready to market" }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Cinematic Hero with Parallax */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
        {/* Parallax Background */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 z-0"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/UB Hero Video.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent z-10" />

        {/* Hero Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-20 h-full flex items-center"
        >
          <div className="max-w-3xl pl-8 md:pl-20 space-y-8 pr-8">
            {/* Headline with Typewriter */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl tracking-tight leading-none font-[family-name:var(--font-heading)] font-extrabold text-text-primary"
            >
              Nutraceutical
              <br />
              <span className="text-brand-ub inline-block min-h-[1.1em]">
                {typewriterText}
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl leading-relaxed text-text-secondary max-w-2xl font-medium"
            >
              We bridge the gap between rigorous pharma-grade standards and the agility of the modern wellness market. <span className="font-bold text-text-primary">70,000 sq. ft.</span> of FDA-registered manufacturing excellence.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link
                href="/capabilities"
                className="bg-brand-ub text-white px-8 py-5 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(211,47,47,0.5)] luxury-drift inline-flex items-center justify-center gap-2"
              >
                Explore Capabilities <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                href="#brands"
                className="border-2 border-text-primary backdrop-blur-sm bg-white/50 text-text-primary px-8 py-5 rounded-full font-bold text-lg hover:bg-white luxury-drift inline-flex items-center justify-center"
              >
                View Brands
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4 text-white">
                  {stat.icon}
                </div>
                <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-sm md:text-base font-semibold text-white uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Brands - Redesigned Grid */}
      <section id="brands" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold font-[family-name:var(--font-heading)] text-center text-text-primary mb-12 md:mb-16 tracking-tight"
          >
            Our Brands
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* EMBER */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
            >
              <Link
                href="/brands/ember"
                className="group block relative h-[500px] bg-gradient-to-br from-zinc-900 to-black rounded-3xl overflow-hidden hover:shadow-2xl luxury-drift"
              >
                <div className="absolute inset-0 opacity-30">
                  <Image src="/Ember featured.jpg" alt="EMBER" fill className="object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-8 text-white">
                  <div className="mb-6">
                    <Image src="/EMBER Logo.svg" alt="EMBER" width={160} height={60} />
                  </div>

                  <p className="text-gray-300 mb-6">Precision-engineered for athletes and fitness enthusiasts.</p>
                  <div className="flex items-center gap-2 text-brand-ember font-bold group-hover:gap-4 luxury-drift">
                    Explore Products <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* EKNOVA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Link
                href="/brands/eknova"
                className="group block relative h-[500px] bg-gradient-to-br from-green-50 to-green-100 rounded-3xl overflow-hidden hover:shadow-2xl luxury-drift"
              >
                <div className="absolute inset-0 opacity-40">
                  <Image src="/brooke-lark-W9OKrxBqiZA-unsplash.jpg" alt="EKNOVA" fill className="object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-green-900 via-transparent to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-8 text-green-900">
                  <div className="mb-6">
                    <Image src="/Eknova logo v2 white.svg" alt="EKNOVA" width={160} height={60} />
                  </div>

                  <p className="text-white mb-6">Nature-powered solutions backed by science.</p>
                  <div className="flex items-center gap-2 text-brand-eknova font-bold group-hover:gap-4 luxury-drift">
                    Explore Products <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* CELLNOVA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/brands/cellnova"
                className="group block relative h-[500px] bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl overflow-hidden hover:shadow-2xl luxury-drift"
              >
                <div className="absolute inset-0 opacity-40">
                  <Image src="/mediensturmer-L3ZuYMvyaBo-unsplash.jpg" alt="CELLNOVA" fill className="object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-8 text-blue-900">
                  <div className="mb-6">
                    <Image src="/Cellnova Logo v2 white.svg" alt="CELLNOVA" width={160} height={60} />
                  </div>

                  <p className="text-white mb-6">Advanced formulations targeting aging at the source.</p>
                  <div className="flex items-center gap-2 text-brand-cellnova font-bold group-hover:gap-4 luxury-drift">
                    Explore Products <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 bg-base-mist">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold font-[family-name:var(--font-heading)] text-center text-text-primary mb-12 md:mb-16 tracking-tight"
          >
            How We Work
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center md:text-left"
              >
                <div className="text-6xl md:text-8xl font-extrabold text-brand-ub/10 mb-4">{item.step}</div>
                <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3">{item.title}</h3>
                <p className="text-text-secondary">{item.desc}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-4 text-brand-ub">
                    <ChevronRight className="w-8 h-8" />
                  </div>
                )}
                {/* Mobile Arrow */}
                {index < process.length - 1 && (
                  <div className="md:hidden flex justify-center py-4 text-brand-ub/20">
                    <ChevronRight className="w-6 h-6 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold font-[family-name:var(--font-heading)] text-text-primary mb-6 tracking-tight"
          >
            Our Mission
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl leading-relaxed text-text-secondary font-medium"
          >
            To empower global health by delivering innovative, sustainable, and customized nutraceutical solutions that drive excellence and foster partnership.
          </motion.p>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-16 md:py-20 bg-base-mist">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold font-[family-name:var(--font-heading)] text-text-primary mb-10 md:mb-16 text-center tracking-tight">
            Core Values
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center gap-3 p-4 hover:bg-white rounded-xl luxury-drift"
              >
                <div className="text-brand-ub">
                  {value.icon}
                </div>
                <h3 className="text-sm font-bold text-text-primary uppercase tracking-wide">
                  {value.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gradient-to-b from-base-night to-zinc-900 text-white">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold font-[family-name:var(--font-heading)] mb-6 tracking-tight">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-300">
              Ready to bring your vision to life? Get in touch with our team.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20"
          >
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              setIsSubmitting(true);
              // Simulate form submission
              setTimeout(() => {
                setSubmitStatus("success");
                setIsSubmitting(false);
                setFormData({ name: "", email: "", phone: "", message: "" });
                setTimeout(() => setSubmitStatus("idle"), 5000);
              }, 1500);
            }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:border-brand-ub transition-colors font-medium"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:border-brand-ub transition-colors font-medium"
                  required
                />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:border-brand-ub transition-colors font-medium"
              />
              <textarea
                rows={5}
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:border-brand-ub transition-colors font-medium resize-none"
                required
              />
              {submitStatus === "success" && (
                <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 text-green-300 text-center font-semibold">
                  ✓ Message sent successfully! We'll get back to you soon.
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-ub text-white px-8 py-5 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(211,47,47,0.5)] luxury-drift disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20">
              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6 text-brand-ub flex-shrink-0" />
                <div>
                  <div className="font-bold mb-1">Phone</div>
                  <div className="text-sm text-gray-300">+880-2-41054005-10</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-6 h-6 text-brand-ub flex-shrink-0" />
                <div>
                  <div className="font-bold mb-1">Email</div>
                  <div className="text-sm text-gray-300">info@ub-nutra.com</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-brand-ub flex-shrink-0" />
                <div>
                  <div className="font-bold mb-1">Location</div>
                  <div className="text-sm text-gray-300">Dhaka, Bangladesh</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
