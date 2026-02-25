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
  Mail
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
            AI Automation Agency
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-8 leading-[1.1]">
            Turn Your Website Into a <br />
            <span className="text-gradient">24/7 AI Receptionist</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-10 leading-relaxed">
            Stop missing leads after hours. Let AI answer questions, book appointments, and capture customer details automatically even while you sleep.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-linear-to-r from-brand-blue to-brand-purple text-white font-bold text-lg hover:scale-105 transition-transform glow-blue text-center">
              Get Your Free AI Strategy Call
            </a>
            <a href="#how-it-works" className="w-full sm:w-auto px-8 py-4 rounded-full glass text-white font-bold text-lg hover:bg-white/10 transition-all text-center">
              See How It Works
            </a>
          </div>
          
          <p className="text-sm text-white/40 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-blue" />
            Helping Canadian service businesses automate growth with AI.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-16 bg-dark-surface/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col items-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full"
          >
            <div className="aspect-video glass rounded-3xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-brand-blue/5 group-hover:bg-transparent transition-colors duration-500" />
              
              {/* Video Placeholder / Player */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-brand-blue/20 flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1" />
                </div>
              </div>

              {/* Video Overlay Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/60 to-transparent">
                <p className="text-white font-bold text-sm tracking-widest uppercase text-center">Watch Demo: AI Sales Assistant in Action</p>
              </div>

              <img 
                src="https://picsum.photos/seed/sitebetter-demo/1280/720" 
                alt="Demo Video Thumbnail" 
                className="w-full h-full object-cover opacity-40"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-purple/10 blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-blue/10 blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
              The Future of <br />
              <span className="text-gradient">Client Acquisition</span>
            </h2>
            <div className="space-y-6 text-lg text-white/70 leading-relaxed">
              <p>
                SiteBetter is an AI automation agency that transforms ordinary websites into intelligent lead-generation systems. We build smart AI assistants that respond instantly, qualify visitors, answer questions, and convert traffic into real customers — automatically.
              </p>
              <p className="font-semibold text-white">
                This is not just a chatbot. This is a fully automated digital sales system working for you 24/7.
              </p>
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
      icon: <Clock className="w-6 h-6 text-red-400" />,
      title: "Slow Response Times",
      desc: "Visitors leave when nobody responds instantly. In the digital age, speed is everything."
    },
    {
      icon: <PhoneOff className="w-6 h-6 text-red-400" />,
      title: "Unanswered Calls",
      desc: "Phone calls go unanswered during busy hours or after business hours, costing you thousands."
    },
    {
      icon: <UserX className="w-6 h-6 text-red-400" />,
      title: "Lost Leads",
      desc: "Leads are lost outside business hours because your website is static and passive."
    },
    {
      icon: <Users className="w-6 h-6 text-red-400" />,
      title: "Overwhelmed Staff",
      desc: "Your team spends hours answering the same basic questions instead of closing deals."
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Most Businesses Are <br />
            <span className="text-red-400">Losing Leads Every Day</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Traditional websites are passive. They wait for customers to find information. 
            SiteBetter makes your website proactive.
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

        <div className="mt-16 text-center">
          <p className="text-2xl font-display font-semibold text-white/80">
            AI fixes this — <span className="text-brand-blue">instantly.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

const Solution = () => {
  const features = [
    "Instant automated replies",
    "Smart lead qualification",
    "Appointment booking automation",
    "Follow-up automation",
    "CRM & email integration",
    "24/7 availability"
  ];

  return (
    <section id="services" className="py-16 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-brand-blue/20 to-brand-purple/20 blur-3xl -z-10" />
              <div className="glass rounded-3xl p-10 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center">
                    <Zap className="text-brand-blue w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Lightning Fast</h4>
                    <p className="text-xs text-white/40">Sub-second response time</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-emerald-400 w-5 h-5 flex-shrink-0" />
                      <span className="text-white/80">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
              Your AI-Powered <br />
              <span className="text-gradient">Growth Engine</span>
            </h2>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              We don't just add a chat bubble. We architect a complete sales infrastructure that lives on your website, understands your business, and works tirelessly to grow your revenue.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 glass rounded-2xl">
                <h5 className="text-2xl font-bold text-brand-blue mb-1">100%</h5>
                <p className="text-xs text-white/40 uppercase tracking-wider">Automated</p>
              </div>
              <div className="p-4 glass rounded-2xl">
                <h5 className="text-2xl font-bold text-brand-purple mb-1">24/7</h5>
                <p className="text-xs text-white/40 uppercase tracking-wider">Availability</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      title: "Analyze",
      desc: "We study your business, services, and customer questions. We identify what your AI needs to know.",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Train",
      desc: "We build and train your custom AI on your business data, FAQs, and booking processes.",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Integrate",
      desc: "We install the AI on your website and connect it to your calendar and CRM systems.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Optimize",
      desc: "We monitor performance, refine responses, and continuously improve conversion rates.",
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  return (
    <section id="how-it-works" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">How It Works</h2>
          <p className="text-white/60">From setup to optimization, we handle everything. Your AI receptionist can be live in as little as 48 hours.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 -z-10" />
          
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
      name: "Tier 1 - Basic AI Receptionist",
      price: "1099",
      monthly: "199",
      desc: "Perfect for small businesses getting started",
      features: ["AI Chat Assistant", "Lead Capture", "Email Notifications", "Basic Automation"],
      popular: false
    },
    {
      name: "Tier 2 - Website + AI",
      price: "1699",
      monthly: "269",
      desc: "Our most popular complete system",
      features: ["Advanced AI Assistant", "Smart Lead Qualification", "Appointment Booking", "CRM Integration", "Follow-up Automation"],
      popular: true
    },
    {
      name: "Tier 3 - Full Automation",
      price: "2199",
      monthly: "349",
      desc: "Comprehensive automation for scaling businesses",
      features: ["Fully Custom AI Workflows", "Multi-channel Automation", "Advanced Integrations", "Priority Support"],
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
  const reasons = [
    { title: "Modern AI Technology", desc: "We use the latest LLMs and automation frameworks." },
    { title: "Custom Built Systems", desc: "No templates. Every system is built for your specific business." },
    { title: "Ongoing Optimization", desc: "We continuously refine your AI to improve conversion rates." },
    { title: "Scalable Architecture", desc: "Our systems grow with your business, handling any volume." },
    { title: "Human + AI Strategy", desc: "We combine technical expertise with real-world sales strategy." }
  ];

  return (
    <section className="py-16 bg-dark-surface/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Why SiteBetter?</h2>
            <div className="space-y-8">
              {reasons.map((r, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="mt-1">
                    <div className="w-5 h-5 rounded-full border-2 border-brand-blue flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-brand-blue" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{r.title}</h4>
                    <p className="text-white/50 text-sm">{r.desc}</p>
                  </div>
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
              <h3 className="text-2xl font-bold mb-4">Trusted Partner</h3>
              <p className="text-white/60 leading-relaxed">
                We don't just sell software. We partner with you to ensure your AI system actually generates revenue and improves your bottom line.
              </p>
            </div>
          </div>
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Server error:', errorData);
        throw new Error(errorData.error || 'Failed to send message. Please try again later.');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
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
              Ready to <span className="text-gradient">Automate?</span>
            </h2>
            <p className="text-white/60">Fill out the form below and we'll get back to you with a custom AI strategy.</p>
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
                    'Send Details'
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
              Premium AI automation agency helping Canadian service businesses transform their digital presence into automated growth engines.
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
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
