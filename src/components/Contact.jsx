import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  Instagram, 
  Copy, 
  Check, 
  Sparkles,
  Phone,
  MapPin,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    sound.playClick();
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.length < 2) {
      errs.name = 'Please provide your full name (minimum 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim() || formData.subject.length < 3) {
      errs.subject = 'Please provide a subject line.';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please enter a message of at least 10 characters.';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sound.playClick();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        `[Portfolio] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\n${formData.message}`
      )}`;

      window.location.href = mailtoUrl;
      setSubmitted(true);
      sound.playChime();
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-[#070607]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151014] border border-white/10 text-xs font-mono text-[#B9B1B5] uppercase tracking-wider mb-2.5"
          >
            <Mail size={12} className="text-[#FF1744]" />
            <span>Direct Correspondence</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white mb-2"
          >
            LET'S BUILD <span className="text-[#FF1744]">SOMETHING MEANINGFUL.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#B9B1B5] max-w-2xl text-xs sm:text-sm font-sans leading-relaxed"
          >
            I'm always open to discussing new opportunities, high-impact software engineering roles, and innovative technology collaborations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Channels & Verified Links (5 Cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl bg-[#151014] border border-white/10 shadow-md">
              <span className="text-[10px] font-mono text-[#B9B1B5] uppercase tracking-wider block mb-1">
                Primary Email
              </span>
              <h3 className="text-sm font-mono text-white mb-4 break-all font-semibold">
                {personalInfo.email}
              </h3>
              
              <button
                onClick={copyEmail}
                className="w-full py-2.5 px-4 rounded-xl font-mono text-xs font-semibold bg-[#070607] border border-white/10 hover:border-[#FF1744]/50 text-white flex items-center justify-center gap-2 transition-colors"
              >
                {copiedEmail ? (
                  <>
                    <Check size={14} className="text-[#FF1744]" />
                    <span className="text-[#FF1744]">Email Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} className="text-[#B9B1B5]" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Channels List */}
            <div className="p-6 rounded-2xl bg-[#151014] border border-white/10 space-y-3.5 shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#FF1744]">
                  <Phone size={14} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#B9B1B5] uppercase">Telephone</div>
                  <a href={`tel:${personalInfo.phone}`} className="text-xs font-mono text-white hover:text-[#FF1744] transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#FF1744]">
                  <MapPin size={14} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#B9B1B5] uppercase">Location</div>
                  <div className="text-xs font-mono text-white">{personalInfo.location}</div>
                </div>
              </div>
            </div>

            {/* Social Network Grid */}
            <div className="p-6 rounded-2xl bg-[#151014] border border-white/10 shadow-md">
              <span className="text-[10px] font-mono text-[#B9B1B5] uppercase tracking-wider block mb-3">
                Verified Online Profiles
              </span>

              <div className="grid grid-cols-3 gap-2.5">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="p-3 rounded-xl bg-[#070607] border border-white/10 hover:border-[#FF1744]/40 flex flex-col items-center justify-center gap-1.5 text-center group transition-colors"
                >
                  <Github size={18} className="text-[#B9B1B5] group-hover:text-white transition-colors" />
                  <span className="text-[11px] font-mono text-slate-300">GitHub</span>
                </a>

                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="p-3 rounded-xl bg-[#070607] border border-white/10 hover:border-[#FF1744]/40 flex flex-col items-center justify-center gap-1.5 text-center group transition-colors"
                >
                  <Linkedin size={18} className="text-[#B9B1B5] group-hover:text-white transition-colors" />
                  <span className="text-[11px] font-mono text-slate-300">LinkedIn</span>
                </a>

                <a
                  href={personalInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="p-3 rounded-xl bg-[#070607] border border-white/10 hover:border-[#FF1744]/40 flex flex-col items-center justify-center gap-1.5 text-center group transition-colors"
                >
                  <Instagram size={18} className="text-[#B9B1B5] group-hover:text-white transition-colors" />
                  <span className="text-[11px] font-mono text-slate-300">Instagram</span>
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Interactive Contact Form (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-[#151014] border border-white/10 shadow-md">
              <h3 className="text-base font-bold font-display text-white mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-[#B9B1B5] mb-6">
                Fill out the form below to initiate correspondence directly via your email client.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-[11px] font-mono text-[#B9B1B5] uppercase mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#070607] border border-white/10 focus:border-[#FF1744] text-white text-xs outline-none transition-colors"
                    />
                    {errors.name && <p className="text-[#FF1744] text-[10px] mt-1 font-mono">{errors.name}</p>}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-[11px] font-mono text-[#B9B1B5] uppercase mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#070607] border border-white/10 focus:border-[#FF1744] text-white text-xs outline-none transition-colors"
                    />
                    {errors.email && <p className="text-[#FF1744] text-[10px] mt-1 font-mono">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-[11px] font-mono text-[#B9B1B5] uppercase mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="2027 Full-Time Software Engineering Opportunity"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#070607] border border-white/10 focus:border-[#FF1744] text-white text-xs outline-none transition-colors"
                  />
                  {errors.subject && <p className="text-[#FF1744] text-[10px] mt-1 font-mono">{errors.subject}</p>}
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-[11px] font-mono text-[#B9B1B5] uppercase mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Deepthi, we came across your work on the Traffic Digital Twin and would love to connect..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#070607] border border-white/10 focus:border-[#FF1744] text-white text-xs outline-none transition-colors resize-none"
                  />
                  {errors.message && <p className="text-[#FF1744] text-[10px] mt-1 font-mono">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-mono text-xs font-bold bg-[#FF1744] hover:bg-[#D50032] text-white flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <Send size={14} />
                  <span>Send Message via Email</span>
                </button>

                {submitted && (
                  <div className="p-3 rounded-xl bg-[#070607] border border-[#FF1744]/40 text-xs font-mono text-[#FF1744] flex items-center gap-2">
                    <CheckCircle2 size={15} />
                    <span>Inquiry prepared! Your default mail client has been opened.</span>
                  </div>
                )}

              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
