"use client";
import { useState } from "react";
import React from "react";
import { 
  ArrowLeft, 
  Users, 
  MessageCircle, 
  ExternalLink, 
  Heart, 
  Globe, 
  Award, 
  Calendar,
  MapPin,
  Users2,
  BookOpen,
  Lightbulb,
  Target,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Link as LinkIcon,
  Share2,
  Copy,
  Sparkles,
  Zap,
  X
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CommunityPage() {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);
  const [showSuggestModal, setShowSuggestModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const organizationsPerPage = 6;

  // Suggest/Share community forms state
  const [suggestForm, setSuggestForm] = useState({
    name: "",
    website: "",
    description: "",
    contactName: "",
    contactEmail: "",
    location: "",
    focusAreas: "",
    logoUrl: ""
  });

  const [shareForm, setShareForm] = useState({
    title: "",
    link: "",
    description: "",
    organizer: "",
    contactEmail: "",
    location: "",
    date: ""
  });

  const [submitStatus, setSubmitStatus] = useState<{ suggest?: "idle" | "success" | "error"; share?: "idle" | "success" | "error" }>({ suggest: "idle", share: "idle" });

  const organizations = [
    {
      id: "heritech",
      name: "HeriTech",
      description: "Empowering women in technology through mentorship, networking, and career development programs.",
      website: "https://herintech.org",
      focus: ["Technology", "Mentorship", "Career Development"],
      members: "15,000+",
      founded: "2018",
      logo: "/file.svg",
      featured: true
    },
    {
      id: "women-who-code",
      name: "Women Who Code",
      description: "A global community dedicated to inspiring women to excel in technology careers.",
      website: "https://www.womenwhocode.com",
      focus: ["Coding", "Networking", "Leadership"],
      members: "200,000+",
      founded: "2011",
      logo: "/file.svg",
      featured: true
    },
    {
      id: "girls-who-code",
      name: "Girls Who Code",
      description: "Building the world's largest pipeline of future female engineers.",
      website: "https://girlswhocode.com",
      focus: ["Education", "Youth", "STEM"],
      members: "500,000+",
      founded: "2012",
      logo: "/file.svg",
      featured: false
    },
    {
      id: "anita-borg",
      name: "AnitaB.org",
      description: "Advancing women in computing and technology through conferences and programs.",
      website: "https://anitab.org",
      focus: ["Computing", "Research", "Academic"],
      members: "50,000+",
      founded: "1997",
      logo: "/file.svg",
      featured: false
    },
    {
      id: "tech-ladies",
      name: "Tech Ladies",
      description: "A community for women in tech to connect, learn, and grow together.",
      website: "https://www.hiretechladies.com",
      focus: ["Networking", "Jobs", "Community"],
      members: "25,000+",
      founded: "2015",
      logo: "/file.svg",
      featured: false
    },
    {
      id: "women-techmakers",
      name: "Women Techmakers",
      description: "Google's program providing visibility, community, and resources for women in technology.",
      website: "https://www.womentechmakers.com",
      focus: ["Google", "Events", "Resources"],
      members: "100,000+",
      founded: "2012",
      logo: "/file.svg",
      featured: true
    }
  ];

  // Pagination logic
  const totalPages = Math.ceil(organizations.length / organizationsPerPage);
  const startIndex = (currentPage - 1) * organizationsPerPage;
  const endIndex = startIndex + organizationsPerPage;
  const paginatedOrganizations = organizations.slice(startIndex, endIndex);

  const handleCopyLink = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedLink(url);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  const handleShare = async (org: any) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${org.name} - Empowering Women in Tech`,
          text: org.description,
          url: org.website,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      handleCopyLink(org.website);
    }
  };

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
            <Link href="/opportunities" className="hover:text-white flex items-center gap-2">
              <Target size={16} />
              Opportunities
            </Link>
            <Link href="/contact" className="pill flex items-center gap-2">
              <Mail size={16} />
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0a0f1f] via-[#070b16] to-[#0a0f1f]">
        <div className="container-page">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#79a1ff] to-[#f48fb1] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users size={16} />
              Join Our Community
            </div>
            <h1 className="section-title text-5xl md:text-6xl mb-6">
              Connect, Learn & Grow Together
            </h1>
            <p className="body-text text-xl text-[#c9d4ff] max-w-3xl mx-auto mb-8">
              Join thousands of women in STEM who are building the future, sharing knowledge, and supporting each other's journeys.
            </p>
          </div>

          {/* WhatsApp Group CTA */}
          <div className="glass glow-ring rounded-2xl p-8 mb-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageCircle size={32} className="text-green-400" />
              <h2 className="section-title text-3xl">Join Our WhatsApp Community</h2>
            </div>
            <p className="body-text text-lg text-[#c9d4ff] mb-6 max-w-2xl mx-auto">
              Get instant updates, share opportunities, ask questions, and connect with fellow women in STEM in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://chat.whatsapp.com/your-group-link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-glow bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 text-lg px-8 py-4"
              >
                <MessageCircle size={24} />
                Join WhatsApp Group
                <ExternalLink size={20} />
              </a>
              <div className="flex items-center gap-2 text-white/60">
                <Users size={16} />
                <span>2,500+ active members</span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center gap-2 text-white/80">
                <CheckCircle size={16} className="text-green-400" />
                <span>Daily opportunities</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-white/80">
                <CheckCircle size={16} className="text-green-400" />
                <span>Expert mentorship</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-white/80">
                <CheckCircle size={16} className="text-green-400" />
                <span>24/7 support</span>
              </div>
            </div>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="glass rounded-xl p-6 text-center">
              <Users size={32} className="text-[#79a1ff] mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">15,000+</div>
              <div className="text-white/60">Active Members</div>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <MessageCircle size={32} className="text-[#f48fb1] mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-white/60">Daily Discussions</div>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <Award size={32} className="text-yellow-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">200+</div>
              <div className="text-white/60">Success Stories</div>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <Globe size={32} className="text-green-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">45+</div>
              <div className="text-white/60">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizations Section */}
      <section className="py-20 bg-[#070b16]">
        <div className="container-page">
          <div className="text-center mb-16">
            <h2 className="section-title text-4xl mb-6">Partner Organizations</h2>
            <p className="body-text text-lg text-[#c9d4ff] max-w-2xl mx-auto">
              Connect with leading organizations that are dedicated to advancing women in STEM fields.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedOrganizations.map((org, i) => (
              <div key={org.id} className="card-glow p-6 reveal group interactive-hover">
                {org.featured && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1] text-white text-xs px-2 py-1 rounded-full pulse-glow">
                    <Star size={12} className="inline mr-1" />
                    Featured
                  </div>
                )}
                
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1] flex items-center justify-center flex-shrink-0">
                    <Image 
                      src={org.logo} 
                      alt={org.name}
                      width={32}
                      height={32}
                      className="text-white"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="subheading text-xl mb-2 group-hover:text-white/90 transition-colors">
                      {org.name}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-white/60 mb-2">
                      <div className="flex items-center gap-1">
                        <Users size={14} />
                        {org.members}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        Since {org.founded}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="body-text text-white/70 mb-4 line-clamp-3">
                  {org.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {org.focus.map((tag, index) => (
                    <span key={index} className="pill text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <a
                    href={org.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-glow bg-white text-[#0b3d91] flex items-center gap-2 hover:scale-105 transition-transform"
                  >
                    <ExternalLink size={16} />
                    Visit Website
                  </a>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleShare(org)}
                      className="p-2 rounded-lg bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      <Share2 size={16} />
                    </button>
                    <button
                      onClick={() => handleCopyLink(org.website)}
                      className="p-2 rounded-lg bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      {copiedLink === org.website ? (
                        <CheckCircle size={16} className="text-green-400" />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowLeft size={16} />
              </button>
              
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-2 rounded-lg transition-colors ${
                      currentPage === page
                        ? 'bg-white text-[#0b3d91]'
                        : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          )}

          <div className="text-center mt-12">
            <p className="text-white/60 mb-6">
              Know of an organization that should be featured here?
            </p>
            <button 
              onClick={() => setShowSuggestModal(true)}
              className="btn btn-primary btn-glow bg-gradient-to-r from-[#79a1ff] to-[#f48fb1] text-white flex items-center gap-2"
            >
              <Sparkles size={18} />
              Suggest Organization
            </button>
          </div>
        </div>
      </section>

      {/* Suggest/Share a Community */}
      <section className="py-20 bg-[#0a0f1f]">
        <div className="container-page">
          <div className="text-center mb-12">
            <div className="pill w-max mx-auto mb-3">Get Involved</div>
            <h2 className="section-title text-4xl">Suggest or Share a Community</h2>
            <p className="body-text text-lg text-[#c9d4ff] max-w-3xl mx-auto mt-4">
              Know a great community we should feature, or managing one yourself? Use the forms below
              to suggest a community or share yours with the Her Impact audience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Suggest a Community */}
            <div className="card-glow p-6">
              <h3 className="subheading text-2xl mb-4">Suggest a Community</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const required = [suggestForm.name, suggestForm.website, suggestForm.description, suggestForm.contactEmail];
                  if (required.some((v) => !v || v.trim() === "")) {
                    setSubmitStatus((s) => ({ ...s, suggest: "error" }));
                    return;
                  }
                  setSubmitStatus((s) => ({ ...s, suggest: "success" }));
                  setSuggestForm({ name: "", website: "", description: "", contactName: "", contactEmail: "", location: "", focusAreas: "", logoUrl: "" });
                }}
                aria-label="Suggest a community form"
              >
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label htmlFor="s-name" className="block text-sm text-white/70 mb-1">Community Name *</label>
                    <input id="s-name" required value={suggestForm.name} onChange={(e) => setSuggestForm({ ...suggestForm, name: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" placeholder="e.g., Women Who Code Kigali" />
                  </div>
                  <div>
                    <label htmlFor="s-website" className="block text-sm text-white/70 mb-1">Website or Link *</label>
                    <input id="s-website" type="url" required value={suggestForm.website} onChange={(e) => setSuggestForm({ ...suggestForm, website: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" placeholder="https://..." />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="s-contact-name" className="block text-sm text-white/70 mb-1">Contact Name</label>
                      <input id="s-contact-name" value={suggestForm.contactName} onChange={(e) => setSuggestForm({ ...suggestForm, contactName: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="s-contact-email" className="block text-sm text-white/70 mb-1">Contact Email *</label>
                      <input id="s-contact-email" type="email" required value={suggestForm.contactEmail} onChange={(e) => setSuggestForm({ ...suggestForm, contactEmail: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" placeholder="you@example.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="s-location" className="block text-sm text-white/70 mb-1">Location</label>
                      <input id="s-location" value={suggestForm.location} onChange={(e) => setSuggestForm({ ...suggestForm, location: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" placeholder="City, Country or Online" />
                    </div>
                    <div>
                      <label htmlFor="s-focus" className="block text-sm text-white/70 mb-1">Focus Areas</label>
                      <input id="s-focus" value={suggestForm.focusAreas} onChange={(e) => setSuggestForm({ ...suggestForm, focusAreas: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" placeholder="e.g., Mentorship, AI, Scholarships" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="s-logo" className="block text-sm text-white/70 mb-1">Logo URL</label>
                    <input id="s-logo" value={suggestForm.logoUrl} onChange={(e) => setSuggestForm({ ...suggestForm, logoUrl: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" placeholder="https://.../logo.png" />
                  </div>
                  <div>
                    <label htmlFor="s-desc" className="block text-sm text-white/70 mb-1">Description *</label>
                    <textarea id="s-desc" required rows={5} value={suggestForm.description} onChange={(e) => setSuggestForm({ ...suggestForm, description: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" placeholder="Tell us about this community..." />
                  </div>
                  {submitStatus.suggest === "success" && (
                    <div className="text-green-400 text-sm">Thank you! Your suggestion has been received.</div>
                  )}
                  {submitStatus.suggest === "error" && (
                    <div className="text-red-400 text-sm">Please fill in all required fields.</div>
                  )}
                  <div className="flex items-center justify-end">
                    <button type="submit" className="btn btn-primary btn-glow bg-white text-[#0b3d91] flex items-center gap-2">
                      <Sparkles size={16} />
                      Submit Suggestion
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Share Your Community */}
            <div className="card-glow p-6">
              <h3 className="subheading text-2xl mb-4">Share Your Community</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const required = [shareForm.title, shareForm.link, shareForm.description, shareForm.contactEmail];
                  if (required.some((v) => !v || v.trim() === "")) {
                    setSubmitStatus((s) => ({ ...s, share: "error" }));
                    return;
                  }
                  setSubmitStatus((s) => ({ ...s, share: "success" }));
                  setShareForm({ title: "", link: "", description: "", organizer: "", contactEmail: "", location: "", date: "" });
                }}
                aria-label="Share your community form"
              >
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label htmlFor="c-title" className="block text-sm text-white/70 mb-1">Community Name *</label>
                    <input id="c-title" required value={shareForm.title} onChange={(e) => setShareForm({ ...shareForm, title: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" placeholder="Your community name" />
                  </div>
                  <div>
                    <label htmlFor="c-link" className="block text-sm text-white/70 mb-1">Website or Link *</label>
                    <input id="c-link" type="url" required value={shareForm.link} onChange={(e) => setShareForm({ ...shareForm, link: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" placeholder="https://..." />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="c-organizer" className="block text-sm text-white/70 mb-1">Organizer</label>
                      <input id="c-organizer" value={shareForm.organizer} onChange={(e) => setShareForm({ ...shareForm, organizer: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" placeholder="Organization/Individual" />
                    </div>
                    <div>
                      <label htmlFor="c-email" className="block text-sm text-white/70 mb-1">Contact Email *</label>
                      <input id="c-email" type="email" required value={shareForm.contactEmail} onChange={(e) => setShareForm({ ...shareForm, contactEmail: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" placeholder="you@example.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="c-location" className="block text-sm text-white/70 mb-1">Location</label>
                      <input id="c-location" value={shareForm.location} onChange={(e) => setShareForm({ ...shareForm, location: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" placeholder="City, Country or Online" />
                    </div>
                    <div>
                      <label htmlFor="c-date" className="block text-sm text-white/70 mb-1">Upcoming Event Date</label>
                      <input id="c-date" type="date" value={shareForm.date} onChange={(e) => setShareForm({ ...shareForm, date: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="c-desc" className="block text-sm text-white/70 mb-1">Description *</label>
                    <textarea id="c-desc" required rows={5} value={shareForm.description} onChange={(e) => setShareForm({ ...shareForm, description: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" placeholder="Tell people about your community, what you do, and how to join." />
                  </div>
                  {submitStatus.share === "success" && (
                    <div className="text-green-400 text-sm">Thank you! Your community has been submitted.</div>
                  )}
                  {submitStatus.share === "error" && (
                    <div className="text-red-400 text-sm">Please fill in all required fields.</div>
                  )}
                  <div className="flex items-center justify-end">
                    <button type="submit" className="btn btn-primary btn-glow bg-white text-[#0b3d91] flex items-center gap-2">
                      <Share2 size={16} />
                      Share Community
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-20 bg-[#0a0f1f]">
        <div className="container-page">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-4xl text-center mb-12">Community Guidelines</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Heart size={24} className="text-red-400" />
                  <h3 className="subheading text-xl">Be Respectful</h3>
                </div>
                <p className="body-text text-white/70">
                  Treat all members with kindness and respect. We're here to support each other's growth and success.
                </p>
              </div>

              <div className="glass rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb size={24} className="text-yellow-400" />
                  <h3 className="subheading text-xl">Share Knowledge</h3>
                </div>
                <p className="body-text text-white/70">
                  Share your experiences, insights, and resources. Your knowledge can help someone else succeed.
                </p>
              </div>

              <div className="glass rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target size={24} className="text-blue-400" />
                  <h3 className="subheading text-xl">Stay On Topic</h3>
                </div>
                <p className="body-text text-white/70">
                  Keep discussions relevant to STEM, career development, and professional growth.
                </p>
              </div>

              <div className="glass rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users2 size={24} className="text-green-400" />
                  <h3 className="subheading text-xl">Build Connections</h3>
                </div>
                <p className="body-text text-white/70">
                  Network, mentor, and collaborate. Strong communities are built on meaningful relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suggest Community Modal */}
      {showSuggestModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-[#0a0f1f] border border-white/10 rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="subheading text-2xl">Suggest a Community</h3>
              <button 
                onClick={() => setShowSuggestModal(false)}
                className="p-2 rounded-lg bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const required = [suggestForm.name, suggestForm.website, suggestForm.description, suggestForm.contactEmail];
                if (required.some((v) => !v || v.trim() === "")) {
                  setSubmitStatus((s) => ({ ...s, suggest: "error" }));
                  return;
                }
                setSubmitStatus((s) => ({ ...s, suggest: "success" }));
                setSuggestForm({ name: "", website: "", description: "", contactName: "", contactEmail: "", location: "", focusAreas: "", logoUrl: "" });
                setTimeout(() => setShowSuggestModal(false), 2000);
              }}
              aria-label="Suggest a community form"
            >
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="s-name" className="block text-sm text-white/70 mb-1">Community Name *</label>
                  <input id="s-name" required value={suggestForm.name} onChange={(e) => setSuggestForm({ ...suggestForm, name: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" placeholder="e.g., Women Who Code Kigali" />
                </div>
                <div>
                  <label htmlFor="s-website" className="block text-sm text-white/70 mb-1">Website or Link *</label>
                  <input id="s-website" type="url" required value={suggestForm.website} onChange={(e) => setSuggestForm({ ...suggestForm, website: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" placeholder="https://..." />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="s-contact-name" className="block text-sm text-white/70 mb-1">Contact Name</label>
                    <input id="s-contact-name" value={suggestForm.contactName} onChange={(e) => setSuggestForm({ ...suggestForm, contactName: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="s-contact-email" className="block text-sm text-white/70 mb-1">Contact Email *</label>
                    <input id="s-contact-email" type="email" required value={suggestForm.contactEmail} onChange={(e) => setSuggestForm({ ...suggestForm, contactEmail: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" placeholder="you@example.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="s-location" className="block text-sm text-white/70 mb-1">Location</label>
                    <input id="s-location" value={suggestForm.location} onChange={(e) => setSuggestForm({ ...suggestForm, location: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" placeholder="City, Country or Online" />
                  </div>
                  <div>
                    <label htmlFor="s-focus" className="block text-sm text-white/70 mb-1">Focus Areas</label>
                    <input id="s-focus" value={suggestForm.focusAreas} onChange={(e) => setSuggestForm({ ...suggestForm, focusAreas: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" placeholder="e.g., Mentorship, AI, Scholarships" />
                  </div>
                </div>
                <div>
                  <label htmlFor="s-logo" className="block text-sm text-white/70 mb-1">Logo URL</label>
                  <input id="s-logo" value={suggestForm.logoUrl} onChange={(e) => setSuggestForm({ ...suggestForm, logoUrl: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" placeholder="https://.../logo.png" />
                </div>
                <div>
                  <label htmlFor="s-desc" className="block text-sm text-white/70 mb-1">Description *</label>
                  <textarea id="s-desc" required rows={5} value={suggestForm.description} onChange={(e) => setSuggestForm({ ...suggestForm, description: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" placeholder="Tell us about this community..." />
                </div>
                {submitStatus.suggest === "success" && (
                  <div className="text-green-400 text-sm">Thank you! Your suggestion has been received.</div>
                )}
                {submitStatus.suggest === "error" && (
                  <div className="text-red-400 text-sm">Please fill in all required fields.</div>
                )}
                <div className="flex items-center justify-end gap-3">
                  <button type="button" onClick={() => setShowSuggestModal(false)} className="px-6 py-3 rounded-lg bg-white/5 text-white/80 hover:bg-white/10 transition-colors">
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary btn-glow bg-white text-[#0b3d91] flex items-center gap-2">
                    <Sparkles size={16} />
                    Submit Suggestion
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Share Community Modal */}
      {showShareModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-[#0a0f1f] border border-white/10 rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="subheading text-2xl">Share Your Community</h3>
              <button 
                onClick={() => setShowShareModal(false)}
                className="p-2 rounded-lg bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const required = [shareForm.title, shareForm.link, shareForm.description, shareForm.contactEmail];
                if (required.some((v) => !v || v.trim() === "")) {
                  setSubmitStatus((s) => ({ ...s, share: "error" }));
                  return;
                }
                setSubmitStatus((s) => ({ ...s, share: "success" }));
                setShareForm({ title: "", link: "", description: "", organizer: "", contactEmail: "", location: "", date: "" });
                setTimeout(() => setShowShareModal(false), 2000);
              }}
              aria-label="Share your community form"
            >
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="c-title" className="block text-sm text-white/70 mb-1">Community Name *</label>
                  <input id="c-title" required value={shareForm.title} onChange={(e) => setShareForm({ ...shareForm, title: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" placeholder="Your community name" />
                </div>
                <div>
                  <label htmlFor="c-link" className="block text-sm text-white/70 mb-1">Website or Link *</label>
                  <input id="c-link" type="url" required value={shareForm.link} onChange={(e) => setShareForm({ ...shareForm, link: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" placeholder="https://..." />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="c-organizer" className="block text-sm text-white/70 mb-1">Organizer</label>
                    <input id="c-organizer" value={shareForm.organizer} onChange={(e) => setShareForm({ ...shareForm, organizer: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" placeholder="Organization/Individual" />
                  </div>
                  <div>
                    <label htmlFor="c-email" className="block text-sm text-white/70 mb-1">Contact Email *</label>
                    <input id="c-email" type="email" required value={shareForm.contactEmail} onChange={(e) => setShareForm({ ...shareForm, contactEmail: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" placeholder="you@example.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="c-location" className="block text-sm text-white/70 mb-1">Location</label>
                    <input id="c-location" value={shareForm.location} onChange={(e) => setShareForm({ ...shareForm, location: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" placeholder="City, Country or Online" />
                  </div>
                  <div>
                    <label htmlFor="c-date" className="block text-sm text-white/70 mb-1">Upcoming Event Date</label>
                    <input id="c-date" type="date" value={shareForm.date} onChange={(e) => setShareForm({ ...shareForm, date: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" />
                  </div>
                </div>
                <div>
                  <label htmlFor="c-desc" className="block text-sm text-white/70 mb-1">Description *</label>
                  <textarea id="c-desc" required rows={5} value={shareForm.description} onChange={(e) => setShareForm({ ...shareForm, description: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" placeholder="Tell people about your community, what you do, and how to join." />
                </div>
                {submitStatus.share === "success" && (
                  <div className="text-green-400 text-sm">Thank you! Your community has been submitted.</div>
                )}
                {submitStatus.share === "error" && (
                  <div className="text-red-400 text-sm">Please fill in all required fields.</div>
                )}
                <div className="flex items-center justify-end gap-3">
                  <button type="button" onClick={() => setShowShareModal(false)} className="px-6 py-3 rounded-lg bg-white/5 text-white/80 hover:bg-white/10 transition-colors">
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary btn-glow bg-white text-[#0b3d91] flex items-center gap-2">
                    <Share2 size={16} />
                    Share Community
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
