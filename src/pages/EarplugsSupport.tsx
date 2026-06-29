import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Play, CheckCircle2 } from 'lucide-react';

const EarplugsSupport = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePlay = () => {
    const video = videoRef.current as any;
    if (video) {
      if (video.requestFullscreen) {
        video.requestFullscreen().catch((err: any) => {
          console.log(`Error attempting to enable full-screen mode: ${err.message}`);
        });
      } else if (video.webkitEnterFullscreen) {
        // iOS Safari specific for video elements
        video.webkitEnterFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      }
    }
  };

  const steps = [
    {
      title: "Find Your Fit",
      desc: "Select the ear tip size that best seals your ear canal. We recommend starting with the Medium size already attached. If it feels loose, try Large; if it causes pressure, try Small or Extra Small.",
      step: "01"
    },
    {
      title: "Check L/R Markings",
      desc: "Ensure you have the correct earplug for each ear. Look for the subtle L (Left) and R (Right) indicators on the inner side of the earplug body.",
      step: "02"
    },
    {
      title: "Insert & Rotate",
      desc: "Gently insert the earplug into your ear canal. Once inserted, rotate it slightly backwards to lock the acoustic seal into the most comfortable and effective position.",
      step: "03"
    },
    {
      title: "Switch Noise Cancellation",
      desc: (
        <div className="space-y-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Transparent Mode: rotating the notch to{" "}
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block align-text-bottom mx-1">
                <circle cx="10" cy="10" r="8" stroke="black" strokeWidth="2" />
              </svg>
            </li>
            <li>
              Experience Mode: rotating the notch to{" "}
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block align-text-bottom mx-1">
                <path d="M10 2 A 8 8 0 0 1 10 18 Z" fill="black" />
                <circle cx="10" cy="10" r="8" stroke="black" strokeWidth="2" />
              </svg>
            </li>
            <li>
              Quiet Mode: rotating the notch to{" "}
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block align-text-bottom mx-1">
                <circle cx="10" cy="10" r="8" fill="black" />
              </svg>
            </li>
          </ul>
        </div>
      ),
      step: "04"
    }
  ];

  return (
    <main className="pt-32 pb-24 bg-white min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Area */}
        <div className="text-center max-w-5xl mx-auto mb-16 md:mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6"
          >
            How to Get the Perfect Fit
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-black/60 leading-relaxed max-w-2xl mx-auto"
          >
            Follow these simple steps to achieve maximum noise reduction, optimal sound quality, and all-day comfort.
          </motion.p>
        </div>

        {/* Main Content: Video & Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Video Guide (Sticky on Desktop) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <div className="w-full aspect-[4/5] md:aspect-square bg-black rounded-[40px] overflow-hidden relative shadow-sm border border-black/5">
              <video 
                ref={videoRef}
                src="/使用步骤.mp4"
                className="w-full h-full object-contain"
                muted
                playsInline
                controls
                onPlay={handlePlay}
              />
            </div>
          </motion.div>

          {/* Right: Steps & Tips */}
          <div className="space-y-12 lg:py-8">
            {steps.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-16 md:pl-20"
              >
                <span className="absolute left-0 top-0 text-4xl md:text-5xl font-black text-black/10 leading-none">
                  {item.step}
                </span>
                <div className="space-y-3 pt-1">
                  <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
                  <div className="text-base text-black/60 leading-relaxed">{item.desc}</div>
                </div>
              </motion.div>
            ))}

            {/* Pro Tips Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 p-8 bg-black/5 rounded-3xl"
            >
              <h4 className="flex items-center gap-2 font-bold text-lg mb-6">
                <CheckCircle2 size={20} className="text-emerald-600" />
                Pro Tips for the Best Seal
              </h4>
              <ul className="space-y-4 text-sm text-black/70">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2 shrink-0" />
                  <p className="leading-relaxed">If you hear your own voice echoing loudly (occlusion effect), try switching to a slightly smaller ear tip.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2 shrink-0" />
                  <p className="leading-relaxed">Pulling your ear slightly up and back during insertion can help straighten your ear canal for a deeper, more secure fit.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2 shrink-0" />
                  <p className="leading-relaxed">Clean your ear tips regularly with a damp cloth or mild soap to maintain optimal grip and hygiene.</p>
                </li>
              </ul>
            </motion.div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default EarplugsSupport;
