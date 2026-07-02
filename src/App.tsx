/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Ear, 
  Music, 
  Check,
  ChevronRight, 
  Menu, 
  X, 
  Volume2, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  Instagram,
  Twitter,
  Facebook,
  Maximize,
  RotateCw,
  Play,
  Mail,
  Plus,
  Minus,
  Sliders,
  Smile,
  Activity
} from 'lucide-react';

import EarplugsTech from './pages/EarplugsTech.tsx';
import EarplugsSupport from './pages/EarplugsSupport.tsx';
import HearingAidsTech from './pages/HearingAidsTech.tsx';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Earplugs', href: '/#music-earplugs' },
    { name: 'Hearing Aids', href: '/#hearing-aids' },
    { name: 'Support', href: '/support' },
    { name: 'Our Story', href: '/#story' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/" className={`text-2xl font-bold tracking-tighter ${isScrolled ? 'text-black' : 'text-black'}`}>
            shejeison
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className="text-sm font-medium text-black/60 hover:text-black transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-t border-black/5 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-black/80 hover:text-black"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Abstract Shapes */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50 animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-black text-white rounded-full">
            Welcome to shejeison
          </span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-12 leading-[1.1]">
            Experience this world <br />
            <span className="text-emerald-600 italic serif">better</span> with shejeison.
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#music-earplugs" 
              className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-black/90 transition-all flex items-center justify-center gap-2 group"
            >
              Earplugs
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#hearing-aids" 
              className="w-full sm:w-auto px-8 py-4 bg-white border border-black/10 text-black rounded-full font-medium hover:bg-black/5 transition-all"
            >
              Hearing Aids
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProductSection = ({ id, title, subtitle = null, description = null, tagline = null, features, image, reverse = false, accentColor = "emerald", supportLink = "", supportText = "", techLink = "" }) => {
  const colorMap = {
    emerald: "text-emerald-600 bg-emerald-50",
    blue: "text-blue-600 bg-blue-50",
  };

  // Extract text from title if it's a React element
  const altText = typeof title === 'string' ? title : 'Product Image';

  return (
    <section id={id} className="py-24 md:py-40 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-20 md:gap-32`}>
          <motion.div 
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:flex-[2] w-full"
          >
            <div className="relative aspect-[4/3] md:aspect-square rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                src={image} 
                alt={altText} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:flex-[3] space-y-8"
          >
            <div>
              {subtitle && (
                <span className={`inline-block px-3 py-1 rounded-lg text-sm font-bold mb-4 ${colorMap[accentColor]}`}>
                  {subtitle}
                </span>
              )}
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                {title}
              </h2>
              {tagline && (
                <div className="hidden md:inline-block border-2 border-black px-6 py-2 rounded-xl mb-6">
                  <span className="text-2xl md:text-3xl font-medium tracking-wide uppercase">
                    {tagline}
                  </span>
                </div>
              )}
              {description && (
                <p className="text-lg text-black/60 leading-relaxed">
                  {description}
                </p>
              )}
            </div>

            {features && features.length > 0 && (
              <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 gap-10">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    {feature.icon && (
                      <div className={`mt-1 p-1 rounded-md ${colorMap[accentColor]}`}>
                        {feature.icon}
                      </div>
                    )}
                    <div>
                      <h4 className="font-semibold text-black">{feature.name}</h4>
                      <p className="text-sm text-black/50">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-col md:flex-row flex-wrap items-start md:items-center gap-4">
              {techLink ? (
                <Link to={techLink} className="order-2 md:order-1 px-6 py-3 md:px-8 md:py-4 border-2 border-black text-black rounded-full font-bold hover:bg-black hover:text-white transition-all flex items-center gap-2">
                  Learn Detail
                  <ChevronRight size={18} />
                </Link>
              ) : (
                <button className="order-2 md:order-1 px-6 py-3 md:px-8 md:py-4 border-2 border-black text-black rounded-full font-bold hover:bg-black hover:text-white transition-all flex items-center gap-2">
                  Learn Detail
                  <ChevronRight size={18} />
                </button>
              )}
              {supportLink && (
                <Link to={supportLink} className="order-1 md:order-2 px-6 py-3 md:px-8 md:py-4 border-2 border-black text-black rounded-full font-bold hover:bg-black hover:text-white transition-all flex items-center gap-2">
                  {supportText || "Customer Support"}
                  <ArrowRight size={18} />
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const HowToUseSection = () => {
  const steps = [
    {
      icon: <Maximize size={24} />,
      title: "Find Your Fit",
      description: "Select the ear tip size that best seals your ear canal for optimal comfort and noise isolation."
    },
    {
      icon: <Ear size={24} />,
      title: "Check L/R Markings",
      description: "Ensure you have the correct earplug for each ear by checking the L (Left) and R (Right) indicators."
    },
    {
      icon: <RotateCw size={24} />,
      title: "Insert & Rotate",
      description: "Gently insert the earplug and rotate it slightly to lock it into the most comfortable and effective noise-canceling position."
    }
  ];

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Get the Perfect Fit</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">Follow these simple steps to achieve maximum noise reduction and all-day comfort.</p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Vertical Steps */}
          <div className="space-y-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex items-start gap-6 group"
              >
                <div className="shrink-0 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  {step.icon}
                </div>
                <div>
                  <div className="text-xl font-bold mb-2 flex items-center gap-3">
                    <span className="text-emerald-500 text-sm font-mono">0{index + 1}</span>
                    {step.title}
                  </div>
                  <p className="text-white/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative aspect-[4/3] md:aspect-video rounded-3xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center group cursor-pointer"
          >
            {/* Subtle gradient/glow effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-blue-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Play Button */}
            <div className="relative z-10 w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
              <Play className="text-white ml-1" size={32} fill="currentColor" />
            </div>

            {/* Placeholder Text */}
            <div className="absolute bottom-6 left-0 right-0 text-center z-10">
              <span className="text-sm font-medium tracking-widest uppercase text-white/40">Video Coming Soon</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StorySection = () => {
  return (
    <section id="story" className="py-24 bg-stone-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl text-black/70 leading-relaxed italic serif">
            "At shejeison, we don’t just build devices—we build bridges to the sounds of life. We believe everyone should be able to experience life’s symphony in their own way, easily and joyfully—from the whispers of a loved one to the cheers and laughter at a live event."
          </p>
          <div className="mt-12 flex justify-center">
            <div className="w-16 h-1 bg-emerald-600 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-white border-t border-black/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-md space-y-6">
            <h3 className="text-2xl font-bold tracking-tighter">shejeison</h3>
            <p className="text-sm text-black/50 leading-relaxed">
              Experience this world better with shejeison.
            </p>
          </div>
          
          <div className="flex gap-16 md:gap-24">
            <div>
              <h4 className="font-bold mb-6">Products</h4>
              <ul className="space-y-4 text-black/50 text-sm">
                <li><Link to="/#music-earplugs" className="hover:text-black transition-colors">Earplugs</Link></li>
                <li><Link to="/#hearing-aids" className="hover:text-black transition-colors">Hearing Aids</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Support</h4>
              <ul className="space-y-4 text-black/50 text-sm">
                <li><Link to="/support#support-contact" className="hover:text-black transition-colors">Contact Us</Link></li>
                <li><Link to="/support" className="hover:text-black transition-colors">FAQ</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-black/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-black/40 uppercase tracking-widest font-medium">
          <p>© 2026 shejeison. All rights reserved.</p>
          <p>Designed for the better experience.</p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

const Home = () => {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
      setTimeout(() => window.scrollTo(0, 0), 50);
    }
  }, []);

  return (
    <main>
      <Hero />

      <ProductSection 
        id="music-earplugs"
        title={<>SHEJEISON S1 <br /> Adjustable Ear Plugs</>}
        tagline="HUSH, ON CALL"
        description=""
        accentColor="blue"
        image="/earplugs.jpg"
        supportLink="/earplugs-support"
        supportText="Watch Usage Video"
        techLink="/earplugs-tech"
        features={[
          { name: "Adjustable Noise Reduction", desc: "3-level adjustable noise reduction (18, 22 & 27 dB) adapts to any scene: casual conversation at parties, live music events, or quiet focus while commuting and reading.", icon: <Check size={18} /> },
          { name: "Clear & High Fidelity Sound", desc: "Filters unwanted noise while preserving crystal-clear, high-fidelity music, delivering safe hearing protection for live performances.", icon: <Check size={18} /> },
          { name: "Customized Comfort", desc: "Includes 4 sizes of soft silicone tips (XS/S/M/L) for a pressure-free, personalized fit that lasts all day.", icon: <Check size={18} /> },
          { name: "Secure Fit", desc: "Ergonomic shaped design stays securely in place during dancing, concerts, and all daily activities.", icon: <Check size={18} /> },
        ]}
      />

      <ProductSection 
        id="hearing-aids"
        title={<>SHEJEISON <br /> Smart hearing aids</>}
        tagline="CLEAR, ON AWARE"
        accentColor="emerald"
        reverse={true}
        image="/hearingaids/hearingaids(grey).jpg"
        supportLink="/support"
        supportText="Customer Support"
        techLink="/hearing-aids-tech"
        features={[
          { name: "Intelligent AI Noise Cancellation", desc: "Automatically detects and suppresses background noise, significantly enhancing speech clarity in all daily environments.", icon: <Check size={18} /> },
          { name: "16-Channel Digital Chip", desc: "Features high-precision audio processing for rich, natural sound with ultra-low distortion and authentic audio reproduction.", icon: <Check size={18} /> },
          { name: "Fast Charging & Long Battery Life", desc: "A quick charge delivers all-day usage, keeping you connected and engaged from morning till evening.", icon: <Check size={18} /> },
          { name: "Four Hearing Modes & Five-Level Volume Control", desc: "Effortlessly switch between dedicated hearing modes and fine-tune 5-level volume to adapt seamlessly to any surrounding.", icon: <Check size={18} /> },
        ]}
      />

      <StorySection />
    </main>
  );
};

const Support = () => {
  const [openEarplugIndex, setOpenEarplugIndex] = useState<number | null>(null);
  const [openHearingAidIndex, setOpenHearingAidIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
      setTimeout(() => window.scrollTo(0, 0), 50);
    }
  }, []);

  const earplugFaqs = [
    {
      question: "How to wear earplugs correctly for the best experience?",
      answer: (
        <div className="space-y-4">
          <p>Follow these simple steps to achieve maximum noise reduction, optimal sound quality, and all-day comfort:</p>
          <ul className="list-decimal pl-5 space-y-2">
            <li><strong>Find Your Fit:</strong> Select the ear tip size that best seals your ear canal. We recommend starting with the Medium size. If it feels loose, try Large; if it causes pressure, try Small or Extra Small.</li>
            <li><strong>Check L/R Markings:</strong> Ensure you have the correct earplug for each ear. Look for the subtle L (Left) and R (Right) indicators on the inner side of the earplug body.</li>
            <li><strong>Insert & Rotate:</strong> Gently insert the earplug into your ear canal. Once inserted, rotate it slightly backwards to lock the acoustic seal into the most comfortable and effective position.</li>
          </ul>
          <Link to="/earplugs-support" className="inline-block text-sm font-bold text-black underline hover:text-black/70 transition-colors">
            Check guide video
          </Link>
        </div>
      )
    },
    {
      question: "How to switch noise cancellation modes?",
      answer: (
        <div className="space-y-4">
          <p>Change mode by rotating the notch until it clicks:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Transparent Mode:</strong> rotating the notch to{" "}
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block align-text-bottom mx-1">
                <circle cx="10" cy="10" r="8" stroke="black" strokeWidth="2" />
              </svg>
            </li>
            <li>
              <strong>Experience Mode:</strong> rotating the notch to{" "}
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block align-text-bottom mx-1">
                <path d="M10 2 A 8 8 0 0 1 10 18 Z" fill="black" />
                <circle cx="10" cy="10" r="8" stroke="black" strokeWidth="2" />
              </svg>
            </li>
            <li>
              <strong>Quiet Mode:</strong> rotating the notch to{" "}
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block align-text-bottom mx-1">
                <circle cx="10" cy="10" r="8" fill="black" />
              </svg>
            </li>
          </ul>
          <p className="text-sm text-black/60 italic">Tip: You can choose the right mode before wearing the earplugs after familiar with each mode.</p>
        </div>
      )
    },
    {
      question: "How do I clean my earplugs?",
      answer: "Wipe the exterior of the earplugs with a soft, dry cloth. The silicone ear tips can be removed and washed with mild soap and warm water. Ensure the tips are completely dry before reattaching them to the earplugs."
    },
    {
      question: "Is there a warranty?",
      answer: "Yes, all shejeison products come with a life-time support that covers any manufacturing defects. If you experience any issues, please contact our support team."
    },
    {
      question: "What is NRR (Noise Reduction Rating)?",
      answer: "NRR (Noise Reduction Rating) is a standard measurement used to determine the effectiveness of hearing protection devices. The higher the NRR number, the greater the potential for noise reduction. For example, an NRR of 27 means the earplugs can reduce noise levels by up to 27 decibels when worn correctly."
    }
  ];

  const hearingAidFaqs = [
    {
      question: "Why do I hear a whistling sound?",
      answer: "This is usually caused by a loose fit. Please ensure you are using the correct size earplug and that the hearing aid is inserted securely into your ear canal. A proper seal will eliminate whistling."
    },
    {
      question: "What should I do if there is no sound or the sound is fuzzy?",
      answer: (
        <div className="space-y-2">
          <p>1. Ensure the device is charged. Place it correctly in the charging case.</p>
          <p>2. Check if the sound receiver or microphone is blocked and clean them if necessary.</p>
          <p>3. Increase the volume level.</p>
          <p>4. Try different modes to find the one best suited for your environment.</p>
          <p>5. Adjust the earplug position or try a different size for a better fit.</p>
        </div>
      )
    },
    {
      question: "What if the earplugs are too big or too small?",
      answer: "Your package includes 4 different sizes of earplugs. We recommend trying each size to find the most comfortable and secure fit for your ear canal."
    },
    {
      question: "Why won't the hearing aids charge in the case?",
      answer: (
        <div className="space-y-2">
          <p>1. Ensure the hearing aids are making proper contact with the charging pins in the case.</p>
          <p>2. Clean the charging pins on the hearing aids and the charging slots in the case, then re-insert the devices.</p>
          <p>3. Ensure the charging case itself has power; plug in the charging cable if necessary.</p>
        </div>
      )
    },
    {
      question: "Will the hearing aids fall out easily?",
      answer: "Not at all. When worn correctly, they provide a secure and stable fit that stays in place even during movement. They are designed for both stability and all-day comfort."
    }
  ];

  return (
    <main className="min-h-screen font-sans">
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-white text-center px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">Support Center</h1>
          <div className="text-lg md:text-xl text-black/60 max-w-2xl mx-auto space-y-1">
            <p>Need help? Email <a href="mailto:shejeison@outlook.com" className="text-black font-bold underline">shejeison@outlook.com</a></p>
            <p className="text-base">We'll respond within 24 hours.</p>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="support-contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black text-white rounded-[40px] p-12 md:p-16 text-center flex flex-col items-center shadow-2xl"
          >
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
              <Mail size={32} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Warranty and Support</h2>
            <p className="text-lg text-white/60 max-w-xl mb-10 leading-relaxed">
              Need to activate lifetime warranty or resolve any issues with shejeison product?
              <br />
              <br />
              Please contact our after-sales team.
            </p>
            <a 
              href="mailto:shejeison@outlook.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-emerald-500 hover:text-white transition-colors duration-300 group"
            >
              <Mail size={20} />
              shejeison@outlook.com
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform ml-1" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Earplugs Column */}
            <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm">
              <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">Earplugs</h3>
              <div className="space-y-4">
                {earplugFaqs.map((faq, index) => {
                  const isOpen = openEarplugIndex === index;
                  return (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white border border-black/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <button
                        onClick={() => setOpenEarplugIndex(isOpen ? null : index)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-stone-50 transition-colors duration-200"
                      >
                        <span className="font-semibold text-lg pr-8">{faq.question}</span>
                        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-black text-white' : 'bg-black/5 text-black'}`}>
                          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                        </div>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="p-6 pt-0 text-black/60 leading-relaxed border-t border-black/5 bg-stone-50/50">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Hearing Aids Column */}
            <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm">
              <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">Hearing Aids</h3>
              <div className="space-y-4">
                {hearingAidFaqs.map((faq, index) => {
                  const isOpen = openHearingAidIndex === index;
                  return (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white border border-black/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <button
                        onClick={() => setOpenHearingAidIndex(isOpen ? null : index)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-stone-50 transition-colors duration-200"
                      >
                        <span className="font-semibold text-lg pr-8">{faq.question}</span>
                        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-black text-white' : 'bg-black/5 text-black'}`}>
                          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                        </div>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="p-6 pt-0 text-black/60 leading-relaxed border-t border-black/5 bg-stone-50/50">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

const ScrollManager = () => {
  const { pathname, hash, key } = useLocation();
  const isInitialLoad = React.useRef(true);

  // 1. 禁用浏览器默认的滚动恢复逻辑
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // 如果是初始加载且带有 hash，清除 hash 并回到顶部
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  // 2. 每次路由变化时，执行我们自己的滚动逻辑
  useEffect(() => {
    if (isInitialLoad.current) {
      // 初始加载强制回到顶部
      window.scrollTo(0, 0);
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        isInitialLoad.current = false;
      }, 50);
      return;
    }

    if (hash) {
      // 如果有锚点（比如 #music-earplugs），滚动到对应区块
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
    } else {
      // 强制瞬间回到顶部
      window.scrollTo(0, 0);
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }, 50);
    }
  }, [pathname, hash, key]);

  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollManager />
      <div className="min-h-screen bg-white font-sans text-black selection:bg-emerald-100 selection:text-emerald-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/support" element={<Support />} />
          <Route path="/earplugs-tech" element={<EarplugsTech />} />
          <Route path="/earplugs-support" element={<EarplugsSupport />} />
          <Route path="/hearing-aids-tech" element={<HearingAidsTech />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
