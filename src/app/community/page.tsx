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
  Zap
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CommunityPage() {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

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
        <div className="container-page py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-white/80 hover:text-white">
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <div className="flex items-center gap-4">
              <button className="btn btn-primary btn-glow bg-gradient-to-r from-[#79a1ff] to-[#f48fb1] text-white flex items-center gap-2">
                <Share2 size={18} />
                Share Community
              </button>
            </div>
          </div>
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
            {organizations.map((org, i) => (
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

          <div className="text-center mt-12">
            <p className="text-white/60 mb-6">
              Know of an organization that should be featured here?
            </p>
            <button className="btn btn-primary btn-glow bg-gradient-to-r from-[#79a1ff] to-[#f48fb1] text-white flex items-center gap-2">
              <Sparkles size={18} />
              Suggest Organization
            </button>
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
    </main>
  );
}
