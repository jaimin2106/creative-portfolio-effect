import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you! We\'ll be in touch shortly.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const contactInfo = [
    { label: 'Email', value: 'hello@example.com' },
    { label: 'Phone', value: '+1 (555) 123-4567' },
    { label: 'Location', value: 'San Francisco, CA' },
  ];

  return (
    <Layout>
      <main className="min-h-screen py-40 px-6 relative overflow-hidden bg-black">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-white/8 via-white/4 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-tl from-white/6 via-white/3 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/10 to-black"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <div className="mb-8">
              <span className="inline-block px-8 py-4 rounded-full border border-white/20 text-white/80 text-sm font-medium tracking-widest uppercase backdrop-blur-sm bg-white/5">
                Get In Touch
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-12 font-playfair leading-tight tracking-tight">
              Let's Create
              <span className="block mt-2 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                Together
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Transform your vision into reality with our expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2 text-lg font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-white/40 h-14 text-lg backdrop-blur-md"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white mb-2 text-lg font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-white/40 h-14 text-lg backdrop-blur-md"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-white mb-2 text-lg font-medium">
                    Company
                  </label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-white/40 h-14 text-lg backdrop-blur-md"
                    placeholder="Your company (optional)"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2 text-lg font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-white/40 text-lg backdrop-blur-md resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full py-6 bg-white text-black hover:bg-gray-100 rounded-full font-semibold text-xl transition-all duration-500 shadow-2xl hover:shadow-white/30 hover:scale-[1.02] transform"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12"
            >
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-10">
                <h2 className="text-3xl font-bold text-white mb-8 font-playfair">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="border-l-2 border-white/20 pl-6">
                      <p className="text-gray-400 text-sm mb-1">{info.label}</p>
                      <p className="text-white text-xl font-medium">{info.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-10">
                <h2 className="text-3xl font-bold text-white mb-6 font-playfair">
                  Social Media
                </h2>
                <div className="space-y-4">
                  {['Twitter', 'LinkedIn', 'GitHub', 'Instagram'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="block text-white/70 hover:text-white text-lg transition-colors duration-300 group"
                    >
                      <span className="group-hover:translate-x-2 inline-block transition-transform duration-300">
                        {social} →
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-10">
                <h2 className="text-3xl font-bold text-white mb-4 font-playfair">
                  Office Hours
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Monday - Friday<br />
                  9:00 AM - 6:00 PM PST
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Contact;
