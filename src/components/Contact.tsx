'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, Send, Copy, Check, MessageSquare } from 'lucide-react';

// Inline LinkedIn SVG since lucide-react doesn't export brand icons
const LinkedInIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
import confetti from 'canvas-confetti';

export default function Contact() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  // Copy indicator states
  const [copiedText, setCopiedText] = useState<'phone' | 'email' | null>(null);

  const validateForm = () => {
    const newErrors: typeof errors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!message.trim()) {
      newErrors.message = 'Message is required';
    } else if (message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCopy = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('submitting');

    // Simulate sending email api
    setTimeout(() => {
      setStatus('success');
      // Success Confetti Burst!
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#a855f7', '#06b6d4', '#ffffff']
      });
      setName('');
      setEmail('');
      setMessage('');
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 px-6 z-10 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-white"
          >
            Get In <span className="gradient-text font-black">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="glass-card p-6 rounded-2xl space-y-4"
            >
              <h3 className="text-lg font-bold text-white tracking-wide mb-2">Recruitment Info</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                I am looking for software engineer opportunities starting in 2025. 
                Feel free to call, email, or connect with me via LinkedIn. I respond promptly.
              </p>
            </motion.div>

            {/* Contacts Grid */}
            <div className="space-y-4">
              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass-card p-5 rounded-xl flex items-center justify-between group hover:border-purple-500/20"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-purple-400 group-hover:scale-105 transition-transform">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="block text-xs text-neutral-500 font-semibold tracking-wider uppercase">Call Me</span>
                    <a href="tel:+918333865779" className="text-sm font-semibold text-white hover:text-purple-400 transition-colors">
                      +91 8333865779
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('+918333865779', 'phone')}
                  className="p-2 rounded-lg bg-neutral-950 border border-neutral-900 text-neutral-500 hover:text-white hover:border-neutral-800 transition-all cursor-pointer"
                  title="Copy Phone"
                >
                  {copiedText === 'phone' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass-card p-5 rounded-xl flex items-center justify-between group hover:border-cyan-500/20"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-cyan-400 group-hover:scale-105 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="block text-xs text-neutral-500 font-semibold tracking-wider uppercase">Email Me</span>
                    <a href="mailto:asritaramisetty@gmail.com" className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors break-all">
                      asritaramisetty@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('asritaramisetty@gmail.com', 'email')}
                  className="p-2 rounded-lg bg-neutral-950 border border-neutral-900 text-neutral-500 hover:text-white hover:border-neutral-800 transition-all cursor-pointer"
                  title="Copy Email"
                >
                  {copiedText === 'email' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </motion.div>

              {/* LinkedIn */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="glass-card p-5 rounded-xl flex items-center justify-between group hover:border-blue-500/20"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-blue-400 group-hover:scale-105 transition-transform">
                    <LinkedInIcon size={18} />
                  </div>
                  <div>
                    <span className="block text-xs text-neutral-500 font-semibold tracking-wider uppercase">Connect</span>
                    <a
                      href="https://linkedin.com/in/asrita-ramisetty-291a34409"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                    >
                      linkedin.com/in/asrita-ramisetty
                    </a>
                  </div>
                </div>
                <a
                  href="https://linkedin.com/in/asrita-ramisetty-291a34409"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-neutral-950 border border-neutral-900 text-neutral-500 hover:text-white hover:border-neutral-800 transition-all"
                  title="Visit Profile"
                >
                  <Send size={14} />
                </a>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-2xl relative border border-neutral-800/80"
            >
              {status === 'success' ? (
                <div className="text-center py-12 space-y-4 font-sans">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <MessageSquare size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-neutral-400 text-sm max-w-sm mx-auto">
                    Thank you for reaching out, Asrita. Your message has been received, and she will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white text-xs font-semibold tracking-wide transition-all mt-4 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 font-sans">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-neutral-400 uppercase tracking-widest pl-1">Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      className={`w-full bg-neutral-950/80 border ${
                        errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-neutral-800/80 focus:border-purple-500'
                      } rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:ring-1 ${
                        errors.name ? 'focus:ring-red-500/20' : 'focus:ring-purple-500/20'
                      } transition-all duration-300`}
                    />
                    {errors.name && <span className="text-[10px] text-red-400 pl-1 font-semibold">{errors.name}</span>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-neutral-400 uppercase tracking-widest pl-1">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="yourname@example.com"
                      className={`w-full bg-neutral-950/80 border ${
                        errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-neutral-800/80 focus:border-purple-500'
                      } rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:ring-1 ${
                        errors.email ? 'focus:ring-red-500/20' : 'focus:ring-purple-500/20'
                      } transition-all duration-300`}
                    />
                    {errors.email && <span className="text-[10px] text-red-400 pl-1 font-semibold">{errors.email}</span>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-neutral-400 uppercase tracking-widest pl-1">Message</label>
                    <textarea
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your message here..."
                      className={`w-full bg-neutral-950/80 border ${
                        errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-neutral-800/80 focus:border-purple-500'
                      } rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:ring-1 ${
                        errors.message ? 'focus:ring-red-500/20' : 'focus:ring-purple-500/20'
                      } transition-all duration-300 resize-none`}
                    />
                    {errors.message && <span className="text-[10px] text-red-400 pl-1 font-semibold">{errors.message}</span>}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-semibold text-sm transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.25)] hover:shadow-[0_0_20px_rgba(168,85,247,0.45)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
