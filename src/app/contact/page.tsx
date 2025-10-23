"use client";
import { useState } from "react";
import React from "react";
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle, 
  Users, 
  Heart, 
  Star, 
  CheckCircle, 
  AlertCircle,
  Globe,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Facebook,
  Github,
  ExternalLink,
  Sparkles,
  Zap,
  Target,
  BookOpen,
  Award,
  Lightbulb,
  TrendingUp
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "general"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const categories = [
    { id: "general", name: "General Inquiry", icon: MessageCircle },
    { id: "story", name: "Share Your Story", icon: BookOpen },
    { id: "opportunity", name: "Submit Opportunity", icon: Target },
    { id: "partnership", name: "Partnership", icon: Users },
    { id: "technical", name: "Technical Support", icon: Lightbulb },
    { id: "feedback", name: "Feedback", icon: Heart }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        category: "general"
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/company/her-impact", color: "text-blue-400" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/herimpact", color: "text-blue-300" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/herimpact", color: "text-pink-400" },
    { name: "YouTube", icon: Youtube, url: "https://youtube.com/herimpact", color: "text-red-400" },
    { name: "Facebook", icon: Facebook, url: "https://facebook.com/herimpact", color: "text-blue-500" },
    { name: "GitHub", icon: Github, url: "https://github.com/her-impact", color: "text-gray-400" }
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us an email and we'll respond within 24 hours",
      contact: "hello@herimpact.com",
      action: "mailto:hello@herimpact.com"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Community",
      description: "Join our active WhatsApp community for instant support",
      contact: "2,500+ members",
      action: "https://chat.whatsapp.com/your-group-link"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team during business hours",
      contact: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come visit our headquarters in San Francisco",
      contact: "123 Tech Street, SF, CA",
      action: "https://maps.google.com"
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      email: "sarah@herimpact.com",
      bio: "Passionate about empowering women in STEM",
      avatar: "/file.svg"
    },
    {
      name: "Dr. Maria Rodriguez",
      role: "Head of Community",
      email: "maria@herimpact.com",
      bio: "Building inclusive communities for women in tech",
      avatar: "/file.svg"
    },
    {
      name: "Alex Chen",
      role: "Technical Director",
      email: "alex@herimpact.com",
      bio: "Leading our platform development and innovation",
      avatar: "/file.svg"
    }
  ];

  return (
    <main className="min-h-screen bg-[#0a0f1f] text-white">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-[rgba(6,10,22,0.6)] backdrop-blur-md border-b border-white/10">
        <div className="container-page h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white">
            <img src="/logo.svg" alt="Her Impact Logo" className="w-6 h-6" />
            <span className="subheading">Her Impact</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-white/80">
            <Link href="/" className="hover:text-white flex items-center gap-2">
              <ArrowLeft size={16} />
              Home
            </Link>
            <Link href="/articles" className="hover:text-white flex items-center gap-2">
              <BookOpen size={16} />
              Articles
            </Link>
            <Link href="/stories" className="hover:text-white flex items-center gap-2">
              <BookOpen size={16} />
              Stories
            </Link>
            <Link href="/community" className="hover:text-white flex items-center gap-2">
              <Users size={16} />
              Community
            </Link>
            <Link href="/opportunities" className="hover:text-white flex items-center gap-2">
              <Target size={16} />
              Opportunities
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0a0f1f] via-[#070b16] to-[#0a0f1f]">
        <div className="container-page">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#79a1ff] to-[#f48fb1] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MessageCircle size={16} />
              Get in Touch
            </div>
            <h1 className="section-title text-5xl md:text-6xl mb-6">
              Let's Connect & Collaborate
            </h1>
            <p className="body-text text-xl text-[#c9d4ff] max-w-3xl mx-auto mb-8">
              Have a question, want to share your story, or interested in partnering with us? We'd love to hear from you!
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className="glass rounded-xl p-6 text-center hover:bg-white/5 transition-colors group"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <method.icon size={24} className="text-white" />
                </div>
                <h3 className="subheading text-xl mb-2">{method.title}</h3>
                <p className="body-text text-white/70 mb-3">{method.description}</p>
                <div className="text-[#79a1ff] font-medium">{method.contact}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-[#070b16]">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass rounded-2xl p-8">
              <div className="mb-8">
                <h2 className="section-title text-3xl mb-4">Send us a Message</h2>
                <p className="body-text text-white/70">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full h-12 rounded-lg px-4 bg-white/5 border border-white/10 outline-none text-white placeholder:text-white/60 focus:border-[#79a1ff] transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full h-12 rounded-lg px-4 bg-white/5 border border-white/10 outline-none text-white placeholder:text-white/60 focus:border-[#79a1ff] transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-white/80 mb-2">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full h-12 rounded-lg px-4 bg-white/5 border border-white/10 outline-none text-white focus:border-[#79a1ff] transition-colors"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id} className="bg-[#0a0f1f]">
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full h-12 rounded-lg px-4 bg-white/5 border border-white/10 outline-none text-white placeholder:text-white/60 focus:border-[#79a1ff] transition-colors"
                    placeholder="Brief subject line"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full rounded-lg px-4 py-3 bg-white/5 border border-white/10 outline-none text-white placeholder:text-white/60 focus:border-[#79a1ff] transition-colors resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="flex items-center gap-2 text-green-400 bg-green-400/10 p-3 rounded-lg">
                    <CheckCircle size={20} />
                    <span>Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg">
                    <AlertCircle size={20} />
                    <span>Something went wrong. Please try again.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn btn-primary btn-glow bg-gradient-to-r from-[#79a1ff] to-[#f48fb1] text-white flex items-center justify-center gap-2 h-12 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="glass rounded-2xl p-8">
                <h3 className="subheading text-2xl mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1] flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Email</h4>
                      <p className="text-white/70 mb-2">hello@herimpact.com</p>
                      <p className="text-sm text-white/60">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1] flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Phone</h4>
                      <p className="text-white/70 mb-2">+1 (555) 123-4567</p>
                      <p className="text-sm text-white/60">Mon-Fri, 9AM-6PM PST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1] flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Address</h4>
                      <p className="text-white/70 mb-2">123 Tech Street<br />San Francisco, CA 94105</p>
                      <p className="text-sm text-white/60">United States</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1] flex items-center justify-center flex-shrink-0">
                      <Clock size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Business Hours</h4>
                      <p className="text-white/70 mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-sm text-white/60">Saturday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="glass rounded-2xl p-8">
                <h3 className="subheading text-2xl mb-6">Follow Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                    >
                      <social.icon size={20} className={social.color} />
                      <span className="text-white/80 group-hover:text-white">{social.name}</span>
                      <ExternalLink size={14} className="text-white/40 ml-auto" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#0a0f1f]">
        <div className="container-page">
          <div className="text-center mb-16">
            <h2 className="section-title text-4xl mb-6">Meet Our Team</h2>
            <p className="body-text text-lg text-[#c9d4ff] max-w-2xl mx-auto">
              Get to know the passionate individuals behind Her Impact who are dedicated to empowering women in STEM.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center group hover:bg-white/5 transition-colors">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <h3 className="subheading text-xl mb-2">{member.name}</h3>
                <p className="text-[#79a1ff] font-medium mb-3">{member.role}</p>
                <p className="body-text text-white/70 mb-4">{member.bio}</p>
                <a 
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                >
                  <Mail size={16} />
                  {member.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#070b16]">
        <div className="container-page">
          <div className="text-center mb-16">
            <h2 className="section-title text-4xl mb-6">Frequently Asked Questions</h2>
            <p className="body-text text-lg text-[#c9d4ff] max-w-2xl mx-auto">
              Find answers to common questions about our platform and services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How can I submit my story to be featured?",
                answer: "You can submit your story through our contact form by selecting 'Share Your Story' as the category, or email us directly at stories@herimpact.com with your story details."
              },
              {
                question: "Do you offer mentorship programs?",
                answer: "Yes! We have several mentorship programs available. Check our opportunities page for current mentorship openings, or join our WhatsApp community to connect with mentors directly."
              },
              {
                question: "How can I partner with Her Impact?",
                answer: "We're always looking for partners who share our mission. Contact us through the partnership category in our contact form, and we'll schedule a call to discuss collaboration opportunities."
              },
              {
                question: "Is there a cost to join the community?",
                answer: "No, joining our community is completely free! All our resources, events, and networking opportunities are available at no cost to support women in STEM."
              },
              {
                question: "How often do you publish new content?",
                answer: "We publish new stories, opportunities, and resources weekly. Subscribe to our newsletter or follow us on social media to stay updated with the latest content."
              }
            ].map((faq, index) => (
              <div key={index} className="glass rounded-xl p-6">
                <h3 className="subheading text-xl mb-3">{faq.question}</h3>
                <p className="body-text text-white/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0a0f1f] via-[#070b16] to-[#0a0f1f]">
        <div className="container-page text-center">
          <div className="glass glow-ring rounded-2xl p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles size={32} className="text-[#79a1ff]" />
              <h2 className="section-title text-4xl">Ready to Make an Impact?</h2>
            </div>
            <p className="body-text text-xl text-[#c9d4ff] mb-8 max-w-2xl mx-auto">
              Join thousands of women in STEM who are already part of our community. Together, we can create a more inclusive and empowering future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/community" className="btn btn-primary btn-glow bg-gradient-to-r from-[#79a1ff] to-[#f48fb1] text-white flex items-center gap-2 text-lg px-8 py-4">
                <Users size={20} />
                Join Community
              </Link>
              <Link href="/opportunities" className="btn btn-primary btn-glow bg-white/10 text-white flex items-center gap-2 text-lg px-8 py-4">
                <Target size={20} />
                Explore Opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

