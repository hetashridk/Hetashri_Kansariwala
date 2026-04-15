import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name.trim()) { toast.error("Please enter your name."); return; }
    if (!email.trim()) { toast.error("Please enter your email address."); return; }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) { toast.error("Please enter a valid email address."); return; }
    if (!message.trim()) { toast.error("Please enter your message."); return; }

    try {
      setIsSending(true);
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          message,
          subject: `Portfolio - Message from ${name}`,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setIsSending(false);
      toast.success("Message sent! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setIsSending(false);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "hetashrikansariwala@gmail.com",
      href: "mailto:hetashrikansariwala@gmail.com",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Surat, Gujarat, India",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/hetashridk", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/hetashrikansariwala/", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://x.com/Hetashridk?t=FeNYWVDxnr4xvrOogvdG_g&s=09", label: "Twitter" },
  ];

  return (
    <section id="contact" ref={ref} className="py-24 px-4"
      style={{
        background: `
          radial-gradient(ellipse 60% 50% at 10% 80%, hsl(168 35% 95% / 0.7) 0%, transparent 55%),
          radial-gradient(ellipse 50% 40% at 90% 20%, hsl(338 35% 96% / 0.6) 0%, transparent 50%),
          hsl(42 35% 96%)
        `,
      }}
    >
      <div className="container mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary/80 tracking-widest uppercase mb-3">
            Let's connect
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Get in Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
          <div className="section-underline mt-5" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div
              className="bg-white rounded-2xl p-8 border border-border/60"
              style={{ boxShadow: '0 4px 24px -4px rgba(100,120,150,0.08)' }}
            >
              <h3 className="text-xl font-bold mb-6 text-foreground/85">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-1.5">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="rounded-xl border-border bg-slate-50/50 focus:bg-white focus:border-primary/40 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-1.5">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="rounded-xl border-border bg-slate-50/50 focus:bg-white focus:border-primary/40 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-1.5">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or idea..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="rounded-xl border-border bg-slate-50/50 focus:bg-white focus:border-primary/40 transition-colors resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  disabled={isSending}
                >
                  {isSending ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : "Send Message"}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Contact info */}
            <div
              className="bg-white rounded-2xl p-6 border border-border/60"
              style={{ boxShadow: '0 2px 16px -4px rgba(100,120,150,0.07)' }}
            >
              <h3 className="font-bold text-foreground/85 mb-5">Contact Info</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                    transition={{ delay: 0.35 + index * 0.1 }}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-primary/5 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-primary/8 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all flex-shrink-0">
                      <info.icon size={16} />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-foreground/80">{info.title}</p>
                      <p className="text-muted-foreground text-xs mt-0.5 break-all">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div
              className="bg-white rounded-2xl p-6 border border-border/60"
              style={{ boxShadow: '0 2px 16px -4px rgba(100,120,150,0.07)' }}
            >
              <h3 className="font-bold text-foreground/85 mb-5">Find me on</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.5 + index * 0.08 }}
                    className="w-11 h-11 rounded-xl bg-slate-50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div
              className="bg-gradient-to-br from-primary/8 to-secondary/8 rounded-2xl p-6 border border-primary/15"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                <span className="font-semibold text-primary text-sm">Available Now</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Open to freelance projects, full-time roles, and exciting collaborations.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
