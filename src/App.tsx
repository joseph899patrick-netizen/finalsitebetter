/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Bot, 
  Zap, 
  Calendar, 
  Users, 
  MessageSquare, 
  BarChart3, 
  ShieldCheck, 
  Globe, 
  ChevronRight,
  Menu,
  X,
  Clock,
  PhoneOff,
  UserX,
  Briefcase,
  Stethoscope,
  Home,
  Building2,
  Cpu,
  Sparkles,
  Instagram,
  Mail,
  Play
} from 'lucide-react';

const Logo = ({ className = "w-12 h-12" }) => (
  <div className={`${className} relative group cursor-pointer`}>
    <div className="absolute inset-0 bg-linear-to-br from-brand-blue to-brand-purple rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
    <div className="relative h-full w-full bg-dark-surface border border-white/10 rounded-xl flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-brand-blue/10 to-brand-purple/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <svg viewBox="0 0 40 40" className="w-2/3 h-2/3 relative z-10">
        <defs>
          <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d2ff" />
            <stop offset="100%" stopColor="#9d50bb" />
          </linearGradient>
        </defs>
        <text 
          x="50%" 
          y="50%" 
          textAnchor="middle" 
          dy=".35em" 
          className="font-display font-black text-[22px]"
          fill="url(#logo-grad)"
          style={{ letterSpacing: '-1px' }}
        >
          SB
        </text>
      </svg>
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-linear-to-r from-brand-blue to-brand-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </div>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Industries', href: '#industries' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-dark-bg/80 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Logo className="w-12 h-12" />
          <span className="text-2xl font-display font-bold tracking-tight group-hover:text-brand-blue transition-colors">SiteBetter</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2.5 rounded-full bg-white text-dark-bg text-sm font-semibold hover:bg-brand-blue hover:text-white transition-all duration-300">
            Book Demo
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-dark-surface border-b border-white/10 p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-white/70"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="w-full py-4 rounded-xl bg-linear-to-r from-brand-blue to-brand-purple text-white font-bold text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Demo
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-grid -z-10 opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/20 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-purple/20 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-brand-blue text-xs font-bold tracking-widest uppercase mb-6">
            Dental AI Automation
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-8 leading-[1.1]">
            AI Receptionist & Website System for Dental Clinics — <br />
            <span className="text-gradient">Capture Every Patient 24/7</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/60 mb-10 leading-relaxed">
            We help dental clinics stop missing calls, automate bookings, and increase monthly appointments — without hiring extra staff.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-linear-to-r from-brand-blue to-brand-purple text-white font-bold text-lg hover:scale-105 transition-transform glow-blue text-center">
              Book an appointment
            </a>
            <a href="#how-it-works" className="w-full sm:w-auto px-8 py-4 rounded-full glass text-white font-bold text-lg hover:bg-white/10 transition-all text-center">
              See How It Works
            </a>
          </div>
          
          {/* Trust Strip */}
          <div className="pt-8 border-t border-white/5 max-w-4xl mx-auto">
            <p className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] mb-6">Trusted by growing dental clinics and service-based businesses</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "24/7 AI Reception",
                "Automated Bookings",
                "Optimized Websites",
                "Ongoing Support"
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-center gap-2 text-sm text-white/60">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const solutions = [
    "High-converting custom website",
    "AI chatbot that answers instantly",
    "Automated appointment booking",
    "Lead capture & follow-up system",
    "SEO optimization",
    "Ongoing support"
  ];

  return (
    <section id="about" className="py-16 bg-dark-surface/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div 
              className="aspect-video glass rounded-3xl overflow-hidden relative group cursor-pointer"
              onClick={() => setIsVideoOpen(true)}
            >
              <div className="absolute inset-0 bg-brand-blue/5 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-brand-blue/20 flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/60 to-transparent">
                <p className="text-white font-bold text-sm tracking-widest uppercase text-center">Watch Demo: AI Receptionist in Action</p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1280&h=720" 
                alt="Dental AI Receptionist Demo" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Video Modal */}
          <AnimatePresence>
            {isVideoOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm"
                onClick={() => setIsVideoOpen(false)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="relative w-full max-w-5xl aspect-video glass rounded-3xl overflow-hidden shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button 
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
                    onClick={() => setIsVideoOpen(false)}
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <video 
                    autoPlay 
                    muted
                    playsInline
                    controls 
                    className="w-full h-full object-contain"
                    src="https://assets.mixkit.co/videos/preview/mixkit-dentist-examining-a-patient-4444-large.mp4"
                  >
                    Your browser does not support the video tag.
                  </video>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Meet SiteBetter — Your <br />
              <span className="text-gradient">24/7 AI Receptionist</span>
            </h2>
            <p className="text-lg text-white/60 leading-relaxed">
              We combine cutting-edge AI with high-converting design to increase bookings and reduce missed opportunities.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {solutions.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Problem = () => {
  const problems = [
    {
      icon: <PhoneOff className="w-6 h-6 text-red-400" />,
      title: "Calls go unanswered",
      desc: "Busy front desks often miss calls during peak hours, leading to lost patient opportunities."
    },
    {
      icon: <Clock className="w-6 h-6 text-red-400" />,
      title: "After-hours inquiries ignored",
      desc: "Patients often search for dental care in the evenings when your clinic is closed."
    },
    {
      icon: <Users className="w-6 h-6 text-red-400" />,
      title: "Receptionists are overloaded",
      desc: "Repetitive questions about pricing and insurance keep your staff from high-value tasks."
    },
    {
      icon: <UserX className="w-6 h-6 text-red-400" />,
      title: "Websites don't convert",
      desc: "Static websites fail to engage visitors, letting potential patients slip away to competitors."
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Stop Losing Patients to <br />
            <span className="text-red-400">Missed Calls</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Most dental clinics lose 20–40% of potential patients because of missed opportunities. Every missed call is lost revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all group"
            >
              <div className="mb-6 p-3 rounded-2xl bg-red-400/10 w-fit group-hover:scale-110 transition-transform">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{p.title}</h3>
              <p className="text-white/50 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Solution = () => {
  const benefits = [
    {
      title: "Never Miss a Patient Call Again",
      desc: "AI responds instantly — even after hours.",
      icon: <PhoneOff className="w-6 h-6 text-brand-blue" />
    },
    {
      title: "Automatic Appointment Booking",
      desc: "Patients can book directly without calling.",
      icon: <Calendar className="w-6 h-6 text-brand-blue" />
    },
    {
      title: "Instant Answers to FAQs",
      desc: "Insurance, pricing, procedures — handled automatically.",
      icon: <MessageSquare className="w-6 h-6 text-brand-blue" />
    },
    {
      title: "More Monthly Appointments",
      desc: "Optimized website + AI = higher conversion rate.",
      icon: <BarChart3 className="w-6 h-6 text-brand-blue" />
    },
    {
      title: "Reduced Receptionist Workload",
      desc: "Your staff focuses on in-clinic tasks, not repetitive calls.",
      icon: <Users className="w-6 h-6 text-brand-blue" />
    }
  ];

  return (
    <section id="services" className="py-16 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">What You Get</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">Outcome-focused solutions designed to grow your dental practice.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl border-white/5 hover:border-brand-blue/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {b.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{b.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      title: "Strategy & Setup",
      desc: "We understand your clinic and build your custom system tailored to your specific needs.",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Launch & Optimization",
      desc: "We install the AI, website, booking system, and tracking tools to ensure everything runs perfectly.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Capture & Grow",
      desc: "You start receiving more appointments — automatically, while we continuously optimize for results.",
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  return (
    <section id="how-it-works" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Simple 3-Step Process</h2>
          <p className="text-white/60">From strategy to growth, we handle the technical heavy lifting.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 -z-10" />
          
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-dark-surface border border-white/10 flex items-center justify-center mx-auto mb-8 group-hover:border-brand-blue transition-colors relative">
                <div className="absolute inset-0 bg-brand-blue/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-brand-blue">{s.icon}</div>
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-linear-to-br from-brand-blue to-brand-purple text-white text-xs font-bold flex items-center justify-center">
                  0{i + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">{s.title}</h3>
              <p className="text-white/50 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries = [
    { name: "Dental Clinics", icon: <Stethoscope /> },
    { name: "Medical Clinics", icon: <ShieldCheck /> },
    { name: "Home Services", icon: <Home /> },
    { name: "Real Estate", icon: <Building2 /> },
    { name: "Local Businesses", icon: <Globe /> },
    { name: "Consultants", icon: <Users /> },
    { name: "Agencies", icon: <Briefcase /> }
  ];

  return (
    <section id="industries" className="py-16 bg-dark-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Industries We Serve</h2>
          <p className="text-white/60 text-lg">If you get leads online — we can automate it.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="px-8 py-6 glass rounded-2xl flex items-center gap-4 group cursor-default"
            >
              <div className="text-brand-blue group-hover:text-brand-purple transition-colors">
                {React.cloneElement(ind.icon as React.ReactElement, { className: 'w-6 h-6' })}
              </div>
              <span className="font-semibold text-white/80">{ind.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Tier 1 - Starter",
      price: "999",
      monthly: "199",
      desc: "Perfect if you already have a website but miss patient inquiries.",
      features: ["AI Chat Assistant", "Lead capture & email notifications", "Automated appointment system", "1 month free support"],
      popular: false
    },
    {
      name: "Tier 2 - Growth",
      price: "1499",
      monthly: "299",
      desc: "Get more patients, bookings, and online visibility.",
      features: ["Full Website + AI Chat Assistant", "Automated lead capture & notifications", "Appointment scheduling automation", "Social proof dashboards", "1 month free support"],
      popular: true
    },
    {
      name: "Tier 3 - Complete System",
      price: "1999",
      monthly: "399",
      desc: "Complete growth system: AI receptionist, automated follow-ups, review management.",
      features: ["Full Website + AI Receptionist", "Multi-channel booking automation", "Automated follow-ups & review management", "Premium support & monthly insights"],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Simple, Transparent Pricing</h2>
          <p className="text-white/60">Premium AI systems at accessible price points.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-3xl border ${p.popular ? 'border-brand-blue bg-brand-blue/5 glow-blue' : 'border-white/10 bg-white/[0.02]'} flex flex-col transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,210,255,0.15)] hover:bg-white/[0.05] group`}
            >
              {p.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-blue text-white text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-2">{p.name}</h3>
              <p className="text-sm text-white/40 mb-8">{p.desc}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold">${p.price}</span>
                <span className="text-white/40 ml-2">setup</span>
                <div className="mt-2 text-brand-blue font-semibold">
                  + ${p.monthly}/month
                </div>
              </div>

              <div className="space-y-4 flex-grow">
                {p.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-3 text-sm text-white/70">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                    {f}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const comparison = [
    { label: "Cost", human: "$2,000–$3,000/month", ai: "$199–$399/month" },
    { label: "Availability", human: "Works limited hours", ai: "Works 24/7" },
    { label: "Reliability", human: "Missed calls possible", ai: "Instant response" },
    { label: "Consistency", human: "Sick days / vacations", ai: "Always available" }
  ];

  return (
    <section className="py-16 bg-dark-surface/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Hiring Receptionist <br /><span className="text-brand-blue">vs AI System</span></h2>
            <div className="space-y-4">
              {comparison.map((row, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-white/5 border border-white/5"
                >
                  <div className="text-xs font-bold text-white/40 uppercase tracking-wider flex items-center">{row.label}</div>
                  <div className="text-sm text-red-400/80">{row.human}</div>
                  <div className="text-sm text-emerald-400 font-bold">{row.ai}</div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-brand-purple/10 blur-[100px] -z-10" />
            <div className="glass rounded-3xl p-12 text-center">
              <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-brand-blue to-brand-purple flex items-center justify-center mx-auto mb-8 glow-purple">
                <ShieldCheck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Real Results</h3>
              <div className="space-y-6 text-left italic text-white/70">
                <p>“We started getting bookings even after closing hours. SiteBetter paid for itself in the first month.” — <span className="text-white font-bold not-italic">Clinic Owner</span></p>
                <p>“Our receptionist workload dropped significantly, and our monthly bookings increased.” — <span className="text-white font-bold not-italic">Practice Manager</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "Will this replace my receptionist?", a: "No. It supports your team and reduces repetitive tasks, allowing them to focus on high-value patient care." },
    { q: "Is it hard to use?", a: "No. We handle the entire setup and ongoing management. You just receive the appointments." },
    { q: "How fast can we launch?", a: "Usually within 7–14 days from our initial strategy call." },
    { q: "What if it doesn't work?", a: "We optimize continuously to ensure results and track every conversion to prove ROI." }
  ];

  return (
    <section className="py-16 bg-dark-bg">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass p-6 rounded-2xl border-white/5">
              <h4 className="font-bold mb-2 text-brand-blue">{faq.q}</h4>
              <p className="text-white/60 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    details: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Simulate a network request
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      console.log('Form data submitted (simulation):', formData);
      setIsSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-brand-blue/10 -z-10" />
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-16 rounded-[40px] border-brand-blue/20 relative"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-blue/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-purple/20 blur-3xl rounded-full" />
          
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Ready to Stop <span className="text-gradient">Missing Patients?</span>
            </h2>
            <p className="text-white/60">Book an appointment</p>
          </div>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="space-y-6 relative z-10"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white/70 ml-1">Full Name</label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-hidden transition-all text-white placeholder:text-white/20"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white/70 ml-1">Email Address</label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-hidden transition-all text-white placeholder:text-white/20"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="details" className="text-sm font-medium text-white/70 ml-1">Project Details</label>
                  <textarea
                    required
                    id="details"
                    name="details"
                    rows={4}
                    placeholder="Tell us about your business and what you'd like to automate..."
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-hidden transition-all text-white placeholder:text-white/20 resize-none"
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  />
                </div>

                {error && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    {error}
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 rounded-2xl bg-linear-to-r from-brand-blue to-brand-purple text-white font-bold text-lg hover:scale-[1.02] transition-transform glow-blue disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                </div>
                <h3 className="text-3xl font-bold">Message Received!</h3>
                <p className="text-white/60 max-w-md mx-auto">
                  Thank you for reaching out. Our team will review your details and contact you within 24 hours to schedule your free strategy call.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-brand-blue font-semibold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Logo className="w-10 h-10" />
              <span className="text-xl font-display font-bold tracking-tight group-hover:text-brand-blue transition-colors">SiteBetter</span>
            </div>
            <p className="text-white/40 max-w-sm mb-6">
              Helping Canadian dental practices automate growth and improve patient care with intelligent AI solutions.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/josephpatrick.1/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-brand-blue hover:scale-110 hover:bg-white/10 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:sitebetter.net@gmail.com" 
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-brand-blue hover:scale-110 hover:bg-white/10 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="font-bold mb-6">Company</h5>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold mb-6">Contact</h5>
            <ul className="space-y-4 text-sm text-white/40">
              <li>Canada</li>
              <li>sitebetter.net@gmail.com</li>
              <li className="pt-4">
                <span className="text-white font-semibold">AI Automation Agency</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/20 uppercase tracking-widest">
          <p>© 2026 SiteBetter. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-blue/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Problem />
        <Solution />
        <HowItWorks />
        <Industries />
        <Pricing />
        <WhyChooseUs />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
