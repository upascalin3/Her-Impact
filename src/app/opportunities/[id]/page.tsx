"use client";
import { useState, use } from "react";
import React from "react";
import { 
  ArrowLeft, 
  Calendar,
  MapPin,
  Clock,
  Award,
  Users,
  ExternalLink,
  Share2,
  Copy,
  CheckCircle,
  Star,
  Globe,
  Mail,
  Phone,
  Link as LinkIcon,
  BookOpen,
  GraduationCap,
  Briefcase,
  Lightbulb,
  Target,
  Heart,
  TrendingUp,
  MessageSquare,
  ThumbsUp,
  Twitter,
  Linkedin,
  Facebook,
  Sparkles,
  Zap,
  ArrowRight,
  Check,
  AlertCircle,
  Info
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function OpportunityDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [applied, setApplied] = useState(false);

  // Mock data - in a real app, this would be fetched based on the ID
  const opportunity = {
    id: id,
    title: "Google Women Techmakers Scholarship 2024",
    type: "scholarship",
    category: "scholarships",
    organization: "Google",
    description: "The Google Women Techmakers Scholarship program provides financial support to women pursuing computer science degrees. This scholarship is designed to encourage women to excel in computing and technology and become active role models and leaders in the field.",
    fullDescription: `
      <p>The Google Women Techmakers Scholarship is a prestigious program that recognizes and supports women who are making significant contributions to the field of computer science. This scholarship is part of Google's commitment to increasing diversity in technology and empowering women to pursue careers in computing.</p>
      
      <h3>What You'll Receive:</h3>
      <ul>
        <li><strong>Financial Support:</strong> $10,000 scholarship to cover tuition, books, and other educational expenses</li>
        <li><strong>Mentorship:</strong> Access to Google engineers and industry professionals for career guidance</li>
        <li><strong>Networking:</strong> Invitation to exclusive Google events and Women Techmakers conferences</li>
        <li><strong>Career Development:</strong> Resume review, interview preparation, and job placement assistance</li>
        <li><strong>Community:</strong> Connect with a global network of women in technology</li>
      </ul>

      <h3>Program Highlights:</h3>
      <p>This scholarship is more than just financial aid – it's an investment in your future. Recipients become part of the Google Women Techmakers community, gaining access to exclusive resources, mentorship opportunities, and a supportive network of women who are passionate about technology.</p>

      <h3>Success Stories:</h3>
      <p>Previous scholarship recipients have gone on to work at top tech companies, start their own businesses, and become leaders in the field. Many have credited the program with providing not just financial support, but the confidence and network needed to succeed in technology.</p>
    `,
    deadline: "2024-06-15",
    location: "Global",
    duration: "1 Year",
    value: "$10,000",
    requirements: [
      "Currently enrolled in a computer science, computer engineering, or related technical field",
      "Demonstrate academic excellence with a minimum 3.0 GPA",
      "Show leadership potential and commitment to diversity in technology",
      "Be a woman currently enrolled in an accredited university",
      "Submit a personal statement and two letters of recommendation"
    ],
    benefits: [
      "Full scholarship covering tuition and educational expenses",
      "Mentorship from Google engineers",
      "Access to exclusive Google events and workshops",
      "Career development and job placement assistance",
      "Lifetime membership in the Women Techmakers community"
    ],
    applicationProcess: [
      "Complete the online application form",
      "Submit academic transcripts",
      "Write a personal statement (500-1000 words)",
      "Provide two letters of recommendation",
      "Submit a resume highlighting relevant experience",
      "Optional: Submit a portfolio of technical projects"
    ],
    image: "/file.svg",
    featured: true,
    applications: 2500,
    spots: 50,
    website: "https://www.womentechmakers.com/scholarship",
    contactEmail: "scholarships@google.com",
    contactPhone: "+1-650-253-0000"
  };

  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const title = opportunity.title;
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
        break;
    }
    setShowShareMenu(false);
  };

  const handleApply = () => {
    // In a real app, this would redirect to the application form
    window.open(opportunity.website, '_blank');
    setApplied(true);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'scholarship': return Award;
      case 'camp': return Lightbulb;
      case 'internship': return Briefcase;
      case 'course': return BookOpen;
      case 'conference': return Calendar;
      case 'program': return GraduationCap;
      case 'fellowship': return Star;
      default: return Target;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'scholarship': return 'from-green-500 to-emerald-500';
      case 'camp': return 'from-blue-500 to-cyan-500';
      case 'internship': return 'from-purple-500 to-violet-500';
      case 'course': return 'from-orange-500 to-red-500';
      case 'conference': return 'from-pink-500 to-rose-500';
      case 'program': return 'from-indigo-500 to-blue-500';
      case 'fellowship': return 'from-yellow-500 to-amber-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  const isDeadlineNear = () => {
    const deadline = new Date(opportunity.deadline);
    const now = new Date();
    const daysUntilDeadline = Math.ceil((deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    return daysUntilDeadline <= 30 && daysUntilDeadline > 0;
  };

  const isDeadlinePassed = () => {
    const deadline = new Date(opportunity.deadline);
    const now = new Date();
    return deadline < now;
  };

  return (
    <main className="min-h-screen bg-[#0a0f1f] text-white">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-[rgba(6,10,22,0.6)] backdrop-blur-md border-b border-white/10">
        <div className="container-page py-4">
          <div className="flex items-center justify-between">
            <Link href="/opportunities" className="flex items-center gap-2 text-white/80 hover:text-white">
              <ArrowLeft size={20} />
              Back to Opportunities
            </Link>
            <div className="flex items-center gap-4">
              <div className="relative">
                <button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="btn btn-primary btn-glow bg-white/10 text-white flex items-center gap-2"
                >
                  <Share2 size={18} />
                  Share
                </button>
                {showShareMenu && (
                  <div className="absolute top-full right-0 mt-2 bg-[rgba(6,10,22,0.95)] backdrop-blur-md border border-white/10 rounded-lg p-2 space-y-1 z-50">
                    <button onClick={() => handleShare('twitter')} className="w-full flex items-center gap-2 p-2 rounded hover:bg-white/5 text-left">
                      <Twitter size={14} />
                      Twitter
                    </button>
                    <button onClick={() => handleShare('linkedin')} className="w-full flex items-center gap-2 p-2 rounded hover:bg-white/5 text-left">
                      <Linkedin size={14} />
                      LinkedIn
                    </button>
                    <button onClick={() => handleShare('facebook')} className="w-full flex items-center gap-2 p-2 rounded hover:bg-white/5 text-left">
                      <Facebook size={14} />
                      Facebook
                    </button>
                    <button onClick={() => handleShare('copy')} className="w-full flex items-center gap-2 p-2 rounded hover:bg-white/5 text-left">
                      {copiedLink ? (
                        <CheckCircle size={14} className="text-green-400" />
                      ) : (
                        <Copy size={14} />
                      )}
                      Copy Link
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0a0f1f] via-[#070b16] to-[#0a0f1f]">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-tr ${getTypeColor(opportunity.type)} flex items-center justify-center`}>
                  {React.createElement(getTypeIcon(opportunity.type), { size: 24, className: "text-white" })}
                </div>
                <div>
                  <div className="text-sm text-white/60 mb-1">{opportunity.organization}</div>
                  <div className="text-lg font-medium text-white capitalize">{opportunity.type}</div>
                </div>
                {opportunity.featured && (
                  <div className="bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1] text-white text-xs px-3 py-1 rounded-full pulse-glow">
                    <Star size={12} className="inline mr-1" />
                    Featured
                  </div>
                )}
              </div>

              <h1 className="section-title text-4xl md:text-5xl mb-6">{opportunity.title}</h1>
              <p className="body-text text-xl text-[#c9d4ff] mb-8">{opportunity.description}</p>

              {/* Key Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="glass rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar size={20} className="text-[#79a1ff]" />
                    <span className="font-medium">Application Deadline</span>
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {new Date(opportunity.deadline).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  {isDeadlineNear() && !isDeadlinePassed() && (
                    <div className="text-orange-400 text-sm mt-2 flex items-center gap-1">
                      <AlertCircle size={14} />
                      Deadline approaching!
                    </div>
                  )}
                  {isDeadlinePassed() && (
                    <div className="text-red-400 text-sm mt-2 flex items-center gap-1">
                      <AlertCircle size={14} />
                      Application deadline has passed
                    </div>
                  )}
                </div>

                <div className="glass rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Award size={20} className="text-[#f48fb1]" />
                    <span className="font-medium">Scholarship Value</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{opportunity.value}</div>
                  <div className="text-white/60 text-sm">Per recipient</div>
                </div>

                <div className="glass rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin size={20} className="text-green-400" />
                    <span className="font-medium">Location</span>
                  </div>
                  <div className="text-xl font-bold text-white">{opportunity.location}</div>
                  <div className="text-white/60 text-sm">Global opportunity</div>
                </div>

                <div className="glass rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock size={20} className="text-yellow-400" />
                    <span className="font-medium">Duration</span>
                  </div>
                  <div className="text-xl font-bold text-white">{opportunity.duration}</div>
                  <div className="text-white/60 text-sm">Program length</div>
                </div>
              </div>

              {/* Apply Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleApply}
                  disabled={isDeadlinePassed()}
                  className={`btn btn-primary btn-glow flex items-center gap-2 text-lg px-8 py-4 ${
                    isDeadlinePassed() 
                      ? 'bg-gray-500 cursor-not-allowed' 
                      : applied 
                        ? 'bg-green-500 hover:bg-green-600' 
                        : 'bg-gradient-to-r from-[#79a1ff] to-[#f48fb1] hover:scale-105'
                  }`}
                >
                  {applied ? (
                    <>
                      <CheckCircle size={20} />
                      Application Submitted
                    </>
                  ) : isDeadlinePassed() ? (
                    <>
                      <AlertCircle size={20} />
                      Deadline Passed
                    </>
                  ) : (
                    <>
                      <ExternalLink size={20} />
                      Apply Now
                    </>
                  )}
                </button>
                <button className="btn btn-primary btn-glow bg-white/10 text-white flex items-center gap-2">
                  <Heart size={20} />
                  Save Opportunity
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="glass rounded-xl p-6">
                <h3 className="subheading text-xl mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Applications</span>
                    <span className="font-bold text-white">{opportunity.applications.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Available Spots</span>
                    <span className="font-bold text-white">{opportunity.spots}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Success Rate</span>
                    <span className="font-bold text-white">{((opportunity.spots / opportunity.applications) * 100).toFixed(1)}%</span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="glass rounded-xl p-6">
                <h3 className="subheading text-xl mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <a href={`mailto:${opportunity.contactEmail}`} className="flex items-center gap-3 text-white/80 hover:text-white">
                    <Mail size={16} />
                    {opportunity.contactEmail}
                  </a>
                  <a href={`tel:${opportunity.contactPhone}`} className="flex items-center gap-3 text-white/80 hover:text-white">
                    <Phone size={16} />
                    {opportunity.contactPhone}
                  </a>
                  <a href={opportunity.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-white">
                    <LinkIcon size={16} />
                    Official Website
                  </a>
                </div>
              </div>

              {/* Requirements Preview */}
              <div className="glass rounded-xl p-6">
                <h3 className="subheading text-xl mb-4">Key Requirements</h3>
                <ul className="space-y-2">
                  {opportunity.requirements.slice(0, 3).map((req, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-white/70">
                      <Check size={14} className="text-green-400 mt-1 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                  {opportunity.requirements.length > 3 && (
                    <li className="text-sm text-white/60">
                      +{opportunity.requirements.length - 3} more requirements
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-20 bg-[#070b16]">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="section-title text-3xl mb-8">About This Opportunity</h2>
              <div className="prose" dangerouslySetInnerHTML={{ __html: opportunity.fullDescription }} />

              <div className="mt-12">
                <h3 className="subheading text-2xl mb-6">What You'll Receive</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {opportunity.benefits.map((benefit, index) => (
                    <div key={index} className="glass rounded-lg p-4 flex items-start gap-3">
                      <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-white/80">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12">
                <h3 className="subheading text-2xl mb-6">Application Process</h3>
                <div className="space-y-4">
                  {opportunity.applicationProcess.map((step, index) => (
                    <div key={index} className="glass rounded-lg p-4 flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-white/80">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Requirements */}
              <div className="glass rounded-xl p-6">
                <h3 className="subheading text-xl mb-4">Full Requirements</h3>
                <ul className="space-y-3">
                  {opportunity.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-white/70">
                      <Check size={14} className="text-green-400 mt-1 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Opportunities */}
              <div className="glass rounded-xl p-6">
                <h3 className="subheading text-xl mb-4">Related Opportunities</h3>
                <div className="space-y-3">
                  <a href="#" className="block p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="font-medium text-white">Microsoft Women in Tech Scholarship</div>
                    <div className="text-sm text-white/60">Deadline: July 15, 2024</div>
                  </a>
                  <a href="#" className="block p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="font-medium text-white">Apple Women in Technology Program</div>
                    <div className="text-sm text-white/60">Deadline: August 1, 2024</div>
                  </a>
                  <a href="#" className="block p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="font-medium text-white">Amazon Women in Engineering</div>
                    <div className="text-sm text-white/60">Deadline: September 10, 2024</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
