import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  RotateCcw, 
  Truck, 
  Check,
  ChevronRight,
  ShieldCheck,
  Headphones,
  Play
} from 'lucide-react';
import { Link } from 'react-router-dom';

const HearingAidsTech = () => {
  const [selectedColor, setSelectedColor] = useState('Beige');
  const [isExpanded, setIsExpanded] = useState(false);

  const colors = [
    { name: 'Beige', class: 'bg-[#f2c89b]', image: '/hearingaids/助听器肤色主图.jpg' },
    { name: 'Black', class: 'bg-black', image: '/hearingaids/hearingaids(grey).jpg' },
  ];

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-black/40 mb-8 font-bold">
          <Link to="/" className="hover:text-black transition-colors">Home</Link>
          <ChevronRight size={10} />
          <Link to="/#hearing-aids" className="hover:text-black transition-colors">Hearing Aids</Link>
          <ChevronRight size={10} />
          <span className="text-black">Shejeison H1</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Product Image */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative aspect-square bg-[#F3F3F3] rounded-3xl overflow-hidden flex items-center justify-center p-12">
              <motion.img 
                key={selectedColor}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                src={colors.find(c => c.name === selectedColor)?.image || "/hearingaids/hearingaids(grey).jpg"} 
                alt={`Shejeison H1 - ${selectedColor}`} 
                className="w-full h-full object-contain mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
            </div>
            
          </div>

          {/* Right Column: Product Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h1 className="text-5xl font-bold tracking-tight mb-2">Smart Hearing Aids</h1>
              <p className="text-xl text-black/60 font-medium mb-4">Shejeison H1</p>

              <p className="text-3xl font-bold mb-8">$199.99</p>
              <div className="space-y-4 mb-8">
                <p className="text-sm font-bold uppercase tracking-widest text-black/40">Color: <span className="text-black">{selectedColor}</span></p>
                <div className="flex gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${selectedColor === color.name ? 'border-black p-0.5' : 'border-transparent'}`}
                    >
                      <div className={`w-full h-full rounded-full ${color.class}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex mb-8">
                <a 
                  href={selectedColor === 'Black' ? "https://www.amazon.com/Moderate-Rechargeable-Amplifiers-Cancelling-Adjustment/dp/B0F9YZQW2P/ref=sr_1_81?crid=3T6IH5IIPCF78&dib=eyJ2IjoiMSJ9.NGAtjO0q1mGkHPCWtPd395DjtD7lFfq0zrJAr0HQ4VLCw1rtnvrVvbDbfzy9qyGdTFQr0X9-4OOAof_d2XrBL32INUJct2UKHySkDSbP5rKu6ukr-YiP2EGiWufYSnvMKBQn-rqlyK9PXX3zQ8b5BntIpAWV3gq_G7rSLBK3x3KA1TEVZ3THx4I9W-0j9QLK1G8HFc9JqfB2Oyl31XaCTmbYEGtoE7eTUyhnEsS4tjRJP_EBA_Dr30w4lNcWy7twqh4ZzJzL1ipCQ47Y9AL23kSAMZAtDT81KJYeEynEDCU.6brFLkjH-yaISsg0gKNIZIJqbwxIPczoOUvS9E8pMog&dib_tag=se&keywords=hearing%2Baids&qid=1774931993&sprefix=hearing%2Baid%2Caps%2C316&sr=8-81&xpid=rcJT4KZeloAG3&th=1" : "https://www.amazon.com/Moderate-Rechargeable-Amplifiers-Cancelling-Adjustment/dp/B0F9Z1BZFC/ref=sr_1_81?crid=3T6IH5IIPCF78&dib=eyJ2IjoiMSJ9.NGAtjO0q1mGkHPCWtPd395DjtD7lFfq0zrJAr0HQ4VLCw1rtnvrVvbDbfzy9qyGdTFQr0X9-4OOAof_d2XrBL32INUJct2UKHySkDSbP5rKu6ukr-YiP2EGiWufYSnvMKBQn-rqlyK9PXX3zQ8b5BntIpAWV3gq_G7rSLBK3x3KA1TEVZ3THx4I9W-0j9QLK1G8HFc9JqfB2Oyl31XaCTmbYEGtoE7eTUyhnEsS4tjRJP_EBA_Dr30w4lNcWy7twqh4ZzJzL1ipCQ47Y9AL23kSAMZAtDT81KJYeEynEDCU.6brFLkjH-yaISsg0gKNIZIJqbwxIPczoOUvS9E8pMog&dib_tag=se&keywords=hearing%2Baids&qid=1774931993&sprefix=hearing%2Baid%2Caps%2C316&sr=8-81&xpid=rcJT4KZeloAG3&th=1"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-black text-white rounded-full font-bold py-4 hover:bg-black/90 transition-all uppercase tracking-widest text-sm text-center block"
                >
                  Check on Amazon
                </a>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-6 py-6 border-t border-black/5">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={20} className="text-black/40" />
                  <span className="text-[10px] font-bold uppercase leading-tight">Hassle-Free<br />Warranty</span>
                </div>
                <div className="flex items-center gap-3">
                  <RotateCcw size={20} className="text-black/40" />
                  <span className="text-[10px] font-bold uppercase leading-tight">30-Day Money-Back<br />Guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <Headphones size={20} className="text-black/40" />
                  <span className="text-[10px] font-bold uppercase leading-tight">Lifetime Customer<br />Support</span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck size={20} className="text-black/40" />
                  <span className="text-[10px] font-bold uppercase leading-tight">Fast, Free<br />shipping</span>
                </div>
              </div>

              {/* Product Description */}
              <div className="space-y-6 pt-8 border-t border-black/5">
                <p className="text-sm text-black/70 leading-relaxed">
                  Experience crystal-clear sound with our AI Algorithm and DSP Chip for Smarter Acoustic Processing. The Shejeison H1 provides precise amplification and intelligent noise reduction for all-day confidence.
                </p>
                
                <div className="relative">
                  <ul className={`space-y-6 transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-[1000px]' : 'max-h-[280px]'}`}>
                    {[
                      { title: "Intelligent AI Noise Cancellation", desc: "Powered by an advanced 16-channel digital chip for 0.01s instant noise reduction. Delivers clear, amplified sound ideal for mild to moderate hearing loss." },
                      { title: "Four Hearing Modes & Five-level Volume", desc: "Choose from 4 environment modes and 5 volume levels (23-35dB). Smart memory automatically saves your preferences for your next use." },
                      { title: "Fast Charging & Long Battery Life", desc: "Enjoy 15 hours of continuous hearing from a quick 1.5-hour charge. The portable charging case extends total battery life up to 60 hours." },
                      { title: "Lightweight & Comfortable to Wear", desc: "Compact, secure-fit design that stays comfortably in place. Features automatic on/off and clear L/R markings for effortless operation." }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check size={18} className="text-black mt-0.5 flex-shrink-0" />
                        <div className="text-sm leading-relaxed">
                          <p className="font-bold mb-1">{item.title}</p>
                          <p className="text-black/50">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  
                  {!isExpanded && (
                    <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                  )}
                </div>

                <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center gap-2 mx-auto text-sm font-bold text-black/60 hover:text-black transition-colors pt-2"
                >
                  {isExpanded ? 'Show less' : 'Show more'}
                  <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                    <ChevronRight size={16} className="rotate-90" />
                  </motion.div>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Product Details Images */}
        <section className="py-20 mt-16">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Designed for Your Life</h2>
              <p className="text-black/40 font-medium uppercase tracking-widest text-xs">Every detail crafted for your comfort, clarity, and confidence.</p>
            </div>
            <div className="flex flex-col gap-4 items-center">
              {[1, 2, 3, 4, 5, 10, 11, 12, 13, 14].map((num) => (
                <img 
                  key={num}
                  src={`/hearingaids/画板 ${num}.jpg`}
                  alt={`Shejeison H1 Detail ${num}`}
                  className="w-full max-w-4xl h-auto rounded-xl shadow-sm"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Warranty & Support Section - Seamless Integration */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Risk-Free Experience</h2>
              <p className="text-black/40 font-medium uppercase tracking-widest text-xs">Our Commitment to Your Satisfaction</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8">
              {[
                { icon: ShieldCheck, text: "Hassle-Free Warranty" },
                { icon: RotateCcw, text: "30-Day Money-Back Guarantee" },
                { icon: Headphones, text: "Lifetime Customer Support" },
                { icon: Truck, text: "Fast, Free shipping" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center group cursor-default">
                  <div className="w-16 h-16 rounded-full bg-black/[0.02] border border-black/5 flex items-center justify-center mb-8 group-hover:bg-black group-hover:text-white transition-all duration-500">
                    <item.icon className="w-6 h-6 stroke-[1.25]" />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black transition-colors duration-500 max-w-[140px] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HearingAidsTech;
