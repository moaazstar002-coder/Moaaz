import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiEnvelope, 
  HiPhone, 
  HiPaperAirplane, 
  HiCheckCircle, 
  HiClipboardDocument, 
  HiClipboardDocumentCheck,
  HiSparkles 
} from 'react-icons/hi2';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { useSoundFeedback } from '../hooks/useSoundFeedback';

function Contact({ id }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const { playClick, playSuccess } = useSoundFeedback();

  const emailAddress = 'moaazstar002@gmail.com';
  const phoneNumber = '+20 12892577489';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    playClick();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    playClick();
    setIsSubmitting(true);

    // Simulate snappy network call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      playSuccess();
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 900);
  };

  return (
    <section id={id} className="relative py-24 px-5 sm:px-8 max-w-6xl mx-auto">
      {/* Toast Notification for Clipboard Copy */}
      <AnimatePresence>
        {copied && (
          <motion.div
            className="fixed top-8 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-full bg-indigo-600 text-white text-xs sm:text-sm font-semibold shadow-2xl flex items-center gap-2 border border-indigo-400/30"
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
          >
            <HiClipboardDocumentCheck className="w-5 h-5 text-cyan-300" />
            <span>Email copied to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <HiSparkles className="w-4 h-4" />
          <span>Start a Conversation</span>
        </motion.div>
        <motion.h2
          className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Let's Build Something <span className="text-gradient">Extraordinary</span>
        </motion.h2>
        <motion.p
          className="text-slate-400 text-sm sm:text-base mt-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Have a project in mind, want to discuss software engineering, or explore collaboration? My inbox is always open.
        </motion.p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        
        {/* Left Column: Direct Info & Quick Cards */}
        <motion.div
          className="lg:col-span-2 space-y-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Email Quick Card with Copy */}
          <div className="p-5 rounded-2xl bg-[#0e121e]/70 border border-white/[0.08] backdrop-blur-xl hover:border-indigo-500/40 transition-colors flex items-center justify-between group">
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:scale-110 transition-transform">
                <HiEnvelope className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Direct Email</p>
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-sm font-semibold text-white hover:text-indigo-300 transition-colors"
                >
                  {emailAddress}
                </a>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors"
              title="Copy Email"
              aria-label="Copy email to clipboard"
            >
              {copied ? (
                <HiClipboardDocumentCheck className="w-4 h-4 text-emerald-400" />
              ) : (
                <HiClipboardDocument className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Phone Quick Card */}
          <div className="p-5 rounded-2xl bg-[#0e121e]/70 border border-white/[0.08] backdrop-blur-xl hover:border-cyan-500/40 transition-colors flex items-center gap-3.5 group">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
              <HiPhone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Phone & WhatsApp</p>
              <a
                href={`tel:${phoneNumber}`}
                className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors"
              >
                {phoneNumber}
              </a>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="p-5 rounded-2xl bg-[#0e121e]/70 border border-white/[0.08] backdrop-blur-xl">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
              Social Ecosystem
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/moaaz-hussain-4a4586337/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-[#0077b5]/20 hover:border-[#0077b5]/50 text-slate-300 hover:text-white flex items-center justify-center gap-2 transition-all font-medium text-xs group"
              >
                <SiLinkedin className="w-4 h-4 text-[#0077b5] group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/moaazstar002-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-purple-600/20 hover:border-purple-500/50 text-slate-300 hover:text-white flex items-center justify-center gap-2 transition-all font-medium text-xs group"
              >
                <SiGithub className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          className="lg:col-span-3 rounded-3xl bg-[#0e121e]/70 border border-white/[0.08] p-6 sm:p-8 backdrop-blur-xl relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-xl font-bold text-white mb-2">Send a Direct Message</h3>
          <p className="text-slate-400 text-xs sm:text-sm mb-6">
            Fill out the form below and I'll respond within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Sarah Connor"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#07080e]/80 border border-white/[0.08] focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white placeholder-slate-500 text-sm outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#07080e]/80 border border-white/[0.08] focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white placeholder-slate-500 text-sm outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project, ideas, or timeline..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-[#07080e]/80 border border-white/[0.08] focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-white placeholder-slate-500 text-sm outline-none transition-all resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting || submitted}
              className={`w-full py-3.5 px-6 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-lg ${
                submitted
                  ? 'bg-emerald-600 text-white shadow-emerald-500/25'
                  : 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5'
              }`}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : submitted ? (
                <>
                  <HiCheckCircle className="w-5 h-5 text-white" />
                  <span>Message Sent Successfully!</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <HiPaperAirplane className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;
