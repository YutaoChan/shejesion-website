import React, { useState } from 'react';
import { motion } from 'motion/react';
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

const EarplugsTech = () => {
  const [selectedColor, setSelectedColor] = useState('Black');
  const [isExpanded, setIsExpanded] = useState(false);

  const colors = [
    { name: 'Black', class: 'bg-black', image: '/earplugs.jpg' },
    { name: 'Purple', class: 'bg-[#e8b6fa]', image: '/耳塞紫色.jpg' },
  ];

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-black/40 mb-8 font-bold">
          <Link to="/" className="hover:text-black transition-colors">Home</Link>
          <ChevronRight size={10} />
          <Link to="/#music-earplugs" className="hover:text-black transition-colors">Earplugs</Link>
          <ChevronRight size={10} />
          <span className="text-black">Shejeison S1</span>
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
                src={colors.find(c => c.name === selectedColor)?.image || "/earplugs.jpg"} 
                alt={`Shejeison S1 - ${selectedColor}`} 
                className="w-full h-full object-contain mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
            </div>
            
          </div>

          {/* Right Column: Product Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h1 className="text-5xl font-bold tracking-tight mb-2">Adjustable Earplugs</h1>
              <p className="text-2xl text-black/60 mb-4">Shejeison S1</p>

              <p className="text-3xl font-bold mb-8">$33.32</p>
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
                  href={selectedColor === 'Purple' ? "https://www.amazon.com/SHEJEISON-Adjustable-Ear-Plugs-Comfortable/dp/B0GKPQTKMD/ref=sr_1_6?crid=PV4VWO1VQZ04&dib=eyJ2IjoiMSJ9.FZcSlOAt2_euTIc2VpLdB8P3_5nHnJOIQJj7JeYn_6wvkn-UmLyU-yfv_S5SZGbplxZI0WAAo8iOtuLBg2BjmQB_LMPnJ8yvD0XkAZCyYfjttZW5HII4PTAbHCxSlt9MMTgvLHR6uETvEraZABcTlz9OnGR2cZcuvocsHqP3-a3y27LW15CReT7fVBSThxK9ySno0wdzf7pXntDBerVza4YCi5yJGI1soD3_Xic0AUirweNPWTpVEYn5B1qpjsAxOeXbUTiRPiJNIoiTGWCsjN4r5kiVNdWOTG3dVzREINY.GXgpEWnGg4foibsG85PZp3A7FKRsSYQ7WlYCih9vXx4&dib_tag=se&keywords=ear%2Bplug%2Bconcert&qid=1774931662&sprefix=%2Caps%2C588&sr=8-6&th=1" : "https://www.amazon.com/SHEJEISON-Adjustable-Ear-Plugs-Comfortable/dp/B0GKPDVKGD/ref=sr_1_6?crid=PV4VWO1VQZ04&dib=eyJ2IjoiMSJ9.FZcSlOAt2_euTIc2VpLdB8P3_5nHnJOIQJj7JeYn_6wvkn-UmLyU-yfv_S5SZGbplxZI0WAAo8iOtuLBg2BjmQB_LMPnJ8yvD0XkAZCyYfjttZW5HII4PTAbHCxSlt9MMTgvLHR6uETvEraZABcTlz9OnGR2cZcuvocsHqP3-a3y27LW15CReT7fVBSThxK9ySno0wdzf7pXntDBerVza4YCi5yJGI1soD3_Xic0AUirweNPWTpVEYn5B1qpjsAxOeXbUTiRPiJNIoiTGWCsjN4r5kiVNdWOTG3dVzREINY.GXgpEWnGg4foibsG85PZp3A7FKRsSYQ7WlYCih9vXx4&dib_tag=se&keywords=ear%2Bplug%2Bconcert&qid=1774931662&sprefix=%2Caps%2C588&sr=8-6&th=1"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 rounded-full font-bold py-4 transition-all uppercase tracking-widest text-sm text-center block ${selectedColor === 'Purple' ? 'bg-[#e8b6fa] text-white hover:bg-[#e8b6fa]/90' : 'bg-black text-white hover:bg-black/90'}`}
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
                  Experience "quiet without isolation." The Shejeison S1 provides precise control over your sound environment with adjustable noise relief you can count on all day long.
                </p>
                
                <div className="relative">
                  <ul className={`space-y-6 transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-[1000px]' : 'max-h-[280px]'}`}>
                    {[
                      { title: "3 Adjustable Noise Cancelling Modes", desc: "Switch between Silent (27dB), Experience (22dB), and Interactive (18dB). Block intense noise while staying aware of conversations." },
                      { title: "Clear, High-Fidelity Sound", desc: "Acoustically tuned design delivers natural audio. Preserve music clarity and speech intelligibility without the 'plugged ear' feeling." },
                      { title: "4 Sizes for All-Day Comfort", desc: "Includes four pairs of silicone tips (XS, S, M, L) for a custom, pressure-free seal. Ergonomic design ensures comfort for 6+ hours." },
                      { title: "For Work, Travel, Concerts & Focus", desc: "An all-in-one solution for flights, offices, and social gatherings. Reduce distractions while staying connected to your environment." },
                      { title: "Reusable, Portable & Easy Care", desc: "Made from durable, skin-safe silicone that’s washable and reusable. The included carry case makes these ear plugs for noise reduction easy to store and keep clean." }
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

        {/* Product Detail Images Gallery */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
              >
                Experience the Difference
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-black/40 font-medium uppercase tracking-widest text-xs"
              >
                Discover the perfect balance of silence and sound
              </motion.p>
            </div>
            
            <div className="flex flex-col gap-6 items-center">
              {(selectedColor === 'Purple' ? [
                "画板 1.jpg",
                "画板 2.jpg",
                "画板 3.jpg",
                "画板 4.jpg",
                "画板 6.jpg",
                "画板 7.jpg",
                "画板 8.jpg",
                "画板 9.jpg",
                "画板 10.jpg",
                "画板 11.jpg"
              ] : [
                "画板 1.jpg",
                "画板 2.jpg",
                "画板 3-2.jpg",
                "画板 3-3.jpg",
                "画板 3-4.jpg",
                "画板 4.jpg",
                "画板 5.jpg",
                "画板 9.jpg",
                "画板 10.jpg"
              ]).map((img, idx) => (
                <motion.img
                  key={`${selectedColor}-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                  src={`/earplugDetail/${selectedColor === 'Purple' ? '紫色/' : ''}${img}`}
                  alt={`Product Detail ${idx + 1}`}
                  className="w-full h-auto rounded-[32px] shadow-sm"
                  referrerPolicy="no-referrer"
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

export default EarplugsTech;


