"use client";
import { useState } from "react";
import React from "react";
import { 
  ArrowLeft, 
  Filter, 
  Search, 
  Calendar,
  MapPin,
  Users,
  Clock,
  ExternalLink,
  BookOpen,
  GraduationCap,
  Briefcase,
  Lightbulb,
  Award,
  Star,
  CheckCircle,
  ArrowRight,
  Share2,
  Copy,
  Sparkles,
  Zap,
  Target,
  Globe,
  Heart,
  TrendingUp,
  ChevronDown,
  Plus,
  Eye,
  MessageSquare,
  ThumbsUp,
  Twitter,
  Linkedin,
  Facebook,
  Mail,
  X
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function OpportunitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("latest");
  const [showShareMenu, setShowShareMenu] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const opportunitiesPerPage = 9;

  // Submit opportunity form state
  const [submitForm, setSubmitForm] = useState({
    title: "",
    organization: "",
    description: "",
    category: "",
    type: "",
    deadline: "",
    location: "",
    duration: "",
    value: "",
    requirements: "",
    contactEmail: "",
    website: ""
  });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const categories = [
    { id: "all", name: "All Opportunities", icon: Target },
    { id: "camps", name: "Camps & Workshops", icon: Lightbulb },
    { id: "universities", name: "Universities & Programs", icon: GraduationCap },
    { id: "jobs", name: "Jobs & Internships", icon: Briefcase },
    { id: "lessons", name: "Lessons & Courses", icon: BookOpen },
    { id: "scholarships", name: "Scholarships", icon: Award },
    { id: "events", name: "Events & Conferences", icon: Calendar }
  ];

  const opportunities = [
    {
      id: "google-women-techmakers-scholarship",
      title: "Google Women Techmakers Scholarship 2024",
      type: "scholarship",
      category: "scholarships",
      organization: "Google",
      description: "Full scholarship for women pursuing computer science, computer engineering, or related technical fields.",
      deadline: "2024-06-15",
      location: "Global",
      duration: "1 Year",
      value: "$10,000",
      requirements: ["Women in STEM", "Undergraduate/Graduate", "3.0+ GPA"],
      image: "/file.svg",
      featured: true,
      applications: 2500,
      spots: 50
    },
    {
      id: "mit-women-in-ai-summer-program",
      title: "MIT Women in AI Summer Program",
      type: "camp",
      category: "camps",
      organization: "MIT",
      description: "Intensive 6-week program focusing on artificial intelligence, machine learning, and robotics for high school girls.",
      deadline: "2024-04-30",
      location: "Cambridge, MA",
      duration: "6 Weeks",
      value: "Free",
      requirements: ["High School Girls", "Interest in AI", "Basic Programming"],
      image: "/file.svg",
      featured: true,
      applications: 1200,
      spots: 30
    },
    {
      id: "stanford-cs-women-mentorship",
      title: "Stanford CS Women Mentorship Program",
      type: "program",
      category: "universities",
      organization: "Stanford University",
      description: "Year-long mentorship program connecting undergraduate women in computer science with industry professionals.",
      deadline: "2024-05-20",
      location: "Stanford, CA",
      duration: "1 Year",
      value: "Free",
      requirements: ["Stanford CS Student", "Sophomore+", "Commitment to Program"],
      image: "/file.svg",
      featured: false,
      applications: 800,
      spots: 100
    },
    {
      id: "microsoft-women-in-tech-internship",
      title: "Microsoft Women in Tech Internship Program",
      type: "internship",
      category: "jobs",
      organization: "Microsoft",
      description: "12-week paid internship program for women in technology with mentorship and career development opportunities.",
      deadline: "2024-03-15",
      location: "Seattle, WA",
      duration: "12 Weeks",
      value: "$7,000/month",
      requirements: ["CS/Engineering Student", "Junior/Senior", "Portfolio Required"],
      image: "/file.svg",
      featured: true,
      applications: 5000,
      spots: 200
    },
    {
      id: "coursera-women-in-data-science",
      title: "Coursera Women in Data Science Specialization",
      type: "course",
      category: "lessons",
      organization: "Coursera",
      description: "Comprehensive online specialization covering data science fundamentals, machine learning, and visualization.",
      deadline: "Ongoing",
      location: "Online",
      duration: "6 Months",
      value: "$39/month",
      requirements: ["Basic Math", "Computer Access", "Self-Paced Learning"],
      image: "/file.svg",
      featured: false,
      applications: 15000,
      spots: "Unlimited"
    },
    {
      id: "grace-hopper-celebration-2024",
      title: "Grace Hopper Celebration 2024",
      type: "conference",
      category: "events",
      organization: "AnitaB.org",
      description: "World's largest gathering of women technologists featuring keynotes, workshops, and career fair.",
      deadline: "2024-07-01",
      location: "Orlando, FL",
      duration: "3 Days",
      value: "$500-800",
      requirements: ["Women in Tech", "Registration Required", "Travel Arrangements"],
      image: "/file.svg",
      featured: true,
      applications: 25000,
      spots: 20000
    },
    {
      id: "harvard-women-in-stem-research",
      title: "Harvard Women in STEM Research Fellowship",
      type: "fellowship",
      category: "universities",
      organization: "Harvard University",
      description: "Research fellowship for women pursuing advanced degrees in STEM fields with full funding and mentorship.",
      deadline: "2024-08-15",
      location: "Cambridge, MA",
      duration: "2 Years",
      value: "$50,000/year",
      requirements: ["PhD Student", "Research Proposal", "Academic Excellence"],
      image: "/file.svg",
      featured: false,
      applications: 3000,
      spots: 25
    },
    {
      id: "udacity-women-in-ai-nanodegree",
      title: "Udacity Women in AI Nanodegree",
      type: "course",
      category: "lessons",
      organization: "Udacity",
      description: "Advanced nanodegree program in artificial intelligence with industry mentorship and career support.",
      deadline: "Ongoing",
      location: "Online",
      duration: "4 Months",
      value: "$399/month",
      requirements: ["Python Knowledge", "Math Background", "Time Commitment"],
      image: "/file.svg",
      featured: false,
      applications: 8000,
      spots: "Unlimited"
    },
    {
      id: "tesla-women-in-engineering",
      title: "Tesla Women in Engineering Program",
      type: "program",
      category: "jobs",
      organization: "Tesla",
      description: "Leadership development program for women engineers with rotation through different engineering teams.",
      deadline: "2024-06-30",
      location: "Fremont, CA",
      duration: "18 Months",
      value: "$120,000/year",
      requirements: ["Engineering Degree", "2+ Years Experience", "Leadership Potential"],
      image: "/file.svg",
      featured: true,
      applications: 1500,
      spots: 15
    },
    {
      id: "nasa-women-in-aerospace",
      title: "NASA Women in Aerospace Internship",
      type: "internship",
      category: "jobs",
      organization: "NASA",
      description: "Summer internship program for women pursuing aerospace engineering and related fields.",
      deadline: "2024-02-28",
      location: "Multiple Locations",
      duration: "10 Weeks",
      value: "$6,000",
      requirements: ["Aerospace/Engineering Student", "US Citizen", "3.0+ GPA"],
      image: "/file.svg",
      featured: false,
      applications: 4000,
      spots: 150
    },
    {
      id: "berkeley-women-in-cs-bootcamp",
      title: "UC Berkeley Women in CS Bootcamp",
      type: "camp",
      category: "camps",
      organization: "UC Berkeley",
      description: "Intensive 12-week coding bootcamp designed specifically for women transitioning into tech careers.",
      deadline: "2024-05-15",
      location: "Berkeley, CA",
      duration: "12 Weeks",
      value: "$15,000",
      requirements: ["No Prior Experience Required", "Full-Time Commitment", "Interview Process"],
      image: "/file.svg",
      featured: false,
      applications: 2000,
      spots: 40
    },
    {
      id: "aws-women-in-cloud",
      title: "AWS Women in Cloud Certification Program",
      type: "course",
      category: "lessons",
      organization: "Amazon Web Services",
      description: "Free certification program for women to learn cloud computing and AWS technologies.",
      deadline: "Ongoing",
      location: "Online",
      duration: "3 Months",
      value: "Free",
      requirements: ["Basic IT Knowledge", "Self-Paced Learning", "Exam Registration"],
      image: "/file.svg",
      featured: true,
      applications: 12000,
      spots: "Unlimited"
    }
  ];

  // Pagination logic
  const totalPages = Math.ceil(opportunities.length / opportunitiesPerPage);
  const startIndex = (currentPage - 1) * opportunitiesPerPage;
  const endIndex = startIndex + opportunitiesPerPage;

  const filteredOpportunities = opportunities.filter(opp => {
    const matchesCategory = selectedCategory === "all" || opp.category === selectedCategory;
    const matchesSearch = opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opp.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opp.organization.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedOpportunities = [...filteredOpportunities].sort((a, b) => {
    if (sortBy === "latest") {
      return new Date(b.deadline).getTime() - new Date(a.deadline).getTime();
    } else if (sortBy === "popular") {
      return b.applications - a.applications;
    } else if (sortBy === "deadline") {
      return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
    }
    return 0;
  });

  const paginatedOpportunities = sortedOpportunities.slice(startIndex, endIndex);

  const handleShare = (opportunityId: string, platform: string) => {
    const opportunity = opportunities.find(o => o.id === opportunityId);
    if (!opportunity) return;
    
    const url = `${window.location.origin}/opportunities/${opportunityId}`;
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
        setCopiedLink(opportunityId);
        setTimeout(() => setCopiedLink(null), 2000);
        break;
    }
    setShowShareMenu(null);
  };

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.icon : Target;
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
              <Target size={16} />
              Discover Opportunities
            </div>
            <h1 className="section-title text-5xl md:text-6xl mb-6">
              Your Next Opportunity Awaits
            </h1>
            <p className="body-text text-xl text-[#c9d4ff] max-w-3xl mx-auto mb-8">
              Explore scholarships, internships, camps, courses, and career opportunities designed specifically for women in STEM.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="glass rounded-xl p-6 text-center">
              <Target size={32} className="text-[#79a1ff] mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-white/60">Active Opportunities</div>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <Users size={32} className="text-[#f48fb1] mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">25,000+</div>
              <div className="text-white/60">Applications</div>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <Award size={32} className="text-yellow-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">$2M+</div>
              <div className="text-white/60">Total Value</div>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <Globe size={32} className="text-green-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-white/60">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-[#070b16]">
        <div className="container-page">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-white text-[#0b3d91]'
                      : 'bg-white/5 text-white/80 hover:bg-white/10'
                  }`}
                >
                  <category.icon size={16} />
                  {category.name}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search opportunities..."
                  className="w-64 h-12 rounded-full px-5 pl-12 bg-white/5 border border-white/10 outline-none text-white placeholder:text-white/60"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60" />
              </div>
              <div className="relative">
                <select
                  className="appearance-none bg-white/5 border border-white/10 rounded-full px-4 py-3 pr-8 text-white focus:outline-none focus:border-white/30"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="latest" className="bg-[#0a0f1f]">Latest</option>
                  <option value="popular" className="bg-[#0a0f1f]">Most Popular</option>
                  <option value="deadline" className="bg-[#0a0f1f]">Deadline</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Grid */}
      <section className="py-20 bg-[#0a0f1f]">
        <div className="container-page">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-title text-3xl">
              {selectedCategory === "all" ? "All Opportunities" : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <div className="text-white/60">
              {filteredOpportunities.length} {filteredOpportunities.length === 1 ? 'opportunity' : 'opportunities'} found
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedOpportunities.map((opportunity, i) => (
              <div key={opportunity.id} className="card-glow p-6 reveal group interactive-hover">
                {opportunity.featured && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1] text-white text-xs px-2 py-1 rounded-full pulse-glow">
                    <Star size={12} className="inline mr-1" />
                    Featured
                  </div>
                )}
                
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${getTypeColor(opportunity.type)} flex items-center justify-center flex-shrink-0`}>
                    {React.createElement(getCategoryIcon(opportunity.category), { size: 20, className: "text-white" })}
                  </div>
                  <div className="flex-1">
                    <h3 className="subheading text-xl mb-2 group-hover:text-white/90 transition-colors">
                      {opportunity.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-white/60 mb-2">
                      <span className="font-medium">{opportunity.organization}</span>
                      <span>•</span>
                      <span className="capitalize">{opportunity.type}</span>
                    </div>
                  </div>
                </div>

                <p className="body-text text-white/70 mb-4 line-clamp-3">
                  {opportunity.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-white/60">
                    <Calendar size={14} />
                    <span>{new Date(opportunity.deadline).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60">
                    <MapPin size={14} />
                    <span>{opportunity.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60">
                    <Clock size={14} />
                    <span>{opportunity.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60">
                    <Award size={14} />
                    <span>{opportunity.value}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm text-white/60">
                    <div className="flex items-center gap-1">
                      <Users size={14} />
                      {typeof opportunity.applications === 'number' ? opportunity.applications.toLocaleString() : opportunity.applications}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <button
                        onClick={() => setShowShareMenu(showShareMenu === opportunity.id ? null : opportunity.id)}
                        className="p-2 rounded-lg bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-colors"
                      >
                        <Share2 size={16} />
                      </button>
                      {showShareMenu === opportunity.id && (
                        <div className="absolute top-full right-0 mt-2 bg-[rgba(6,10,22,0.95)] backdrop-blur-md border border-white/10 rounded-lg p-2 space-y-1 z-50">
                          <button onClick={() => handleShare(opportunity.id, 'twitter')} className="w-full flex items-center gap-2 p-2 rounded hover:bg-white/5 text-left">
                            <Twitter size={14} />
                            Twitter
                          </button>
                          <button onClick={() => handleShare(opportunity.id, 'linkedin')} className="w-full flex items-center gap-2 p-2 rounded hover:bg-white/5 text-left">
                            <Linkedin size={14} />
                            LinkedIn
                          </button>
                          <button onClick={() => handleShare(opportunity.id, 'facebook')} className="w-full flex items-center gap-2 p-2 rounded hover:bg-white/5 text-left">
                            <Facebook size={14} />
                            Facebook
                          </button>
                          <button onClick={() => handleShare(opportunity.id, 'copy')} className="w-full flex items-center gap-2 p-2 rounded hover:bg-white/5 text-left">
                            {copiedLink === opportunity.id ? (
                              <CheckCircle size={14} className="text-green-400" />
                            ) : (
                              <Copy size={14} />
                            )}
                            Copy Link
                          </button>
                        </div>
                      )}
                    </div>
                    <Link 
                      href={`/opportunities/${opportunity.id}`}
                      className="btn btn-primary btn-glow bg-white text-[#0b3d91] flex items-center gap-2 hover:scale-105 transition-transform"
                    >
                      <ExternalLink size={16} />
                      View Details
                    </Link>
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

          {filteredOpportunities.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-white/60" />
              </div>
              <h3 className="subheading text-xl mb-2">No opportunities found</h3>
              <p className="text-white/60">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Submit Opportunity Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-[#0a0f1f] border border-white/10 rounded-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="subheading text-2xl">Submit an Opportunity</h3>
              <button 
                onClick={() => setShowSubmitModal(false)}
                className="p-2 rounded-lg bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const required = [submitForm.title, submitForm.organization, submitForm.description, submitForm.category, submitForm.type, submitForm.contactEmail];
                if (required.some((v) => !v || v.trim() === "")) {
                  setSubmitStatus("error");
                  return;
                }
                setSubmitStatus("success");
                setSubmitForm({ title: "", organization: "", description: "", category: "", type: "", deadline: "", location: "", duration: "", value: "", requirements: "", contactEmail: "", website: "" });
                setTimeout(() => setShowSubmitModal(false), 2000);
              }}
              aria-label="Submit opportunity form"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="title" className="block text-sm text-white/70 mb-1">Opportunity Title *</label>
                  <input id="title" required value={submitForm.title} onChange={(e) => setSubmitForm({ ...submitForm, title: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" placeholder="e.g., Google Women Techmakers Scholarship" />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm text-white/70 mb-1">Organization *</label>
                  <input id="organization" required value={submitForm.organization} onChange={(e) => setSubmitForm({ ...submitForm, organization: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" placeholder="e.g., Google" />
                </div>
                <div>
                  <label htmlFor="category" className="block text-sm text-white/70 mb-1">Category *</label>
                  <select id="category" required value={submitForm.category} onChange={(e) => setSubmitForm({ ...submitForm, category: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white">
                    <option value="" className="bg-[#0a0f1f]">Select Category</option>
                    <option value="scholarships" className="bg-[#0a0f1f]">Scholarships</option>
                    <option value="camps" className="bg-[#0a0f1f]">Camps & Workshops</option>
                    <option value="universities" className="bg-[#0a0f1f]">Universities & Programs</option>
                    <option value="jobs" className="bg-[#0a0f1f]">Jobs & Internships</option>
                    <option value="lessons" className="bg-[#0a0f1f]">Lessons & Courses</option>
                    <option value="events" className="bg-[#0a0f1f]">Events & Conferences</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="type" className="block text-sm text-white/70 mb-1">Type *</label>
                  <select id="type" required value={submitForm.type} onChange={(e) => setSubmitForm({ ...submitForm, type: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white">
                    <option value="" className="bg-[#0a0f1f]">Select Type</option>
                    <option value="scholarship" className="bg-[#0a0f1f]">Scholarship</option>
                    <option value="internship" className="bg-[#0a0f1f]">Internship</option>
                    <option value="camp" className="bg-[#0a0f1f]">Camp</option>
                    <option value="course" className="bg-[#0a0f1f]">Course</option>
                    <option value="conference" className="bg-[#0a0f1f]">Conference</option>
                    <option value="program" className="bg-[#0a0f1f]">Program</option>
                    <option value="fellowship" className="bg-[#0a0f1f]">Fellowship</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="deadline" className="block text-sm text-white/70 mb-1">Deadline</label>
                  <input id="deadline" type="date" value={submitForm.deadline} onChange={(e) => setSubmitForm({ ...submitForm, deadline: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm text-white/70 mb-1">Location</label>
                  <input id="location" value={submitForm.location} onChange={(e) => setSubmitForm({ ...submitForm, location: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" placeholder="e.g., Online, New York, NY" />
                </div>
                <div>
                  <label htmlFor="duration" className="block text-sm text-white/70 mb-1">Duration</label>
                  <input id="duration" value={submitForm.duration} onChange={(e) => setSubmitForm({ ...submitForm, duration: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" placeholder="e.g., 3 months, 1 year" />
                </div>
                <div>
                  <label htmlFor="value" className="block text-sm text-white/70 mb-1">Value/Compensation</label>
                  <input id="value" value={submitForm.value} onChange={(e) => setSubmitForm({ ...submitForm, value: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" placeholder="e.g., $10,000, Free, $5,000/month" />
                </div>
                <div>
                  <label htmlFor="website" className="block text-sm text-white/70 mb-1">Website/Application Link</label>
                  <input id="website" type="url" value={submitForm.website} onChange={(e) => setSubmitForm({ ...submitForm, website: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" placeholder="https://..." />
                </div>
                <div>
                  <label htmlFor="contactEmail" className="block text-sm text-white/70 mb-1">Contact Email *</label>
                  <input id="contactEmail" type="email" required value={submitForm.contactEmail} onChange={(e) => setSubmitForm({ ...submitForm, contactEmail: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" placeholder="contact@organization.com" />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="description" className="block text-sm text-white/70 mb-1">Description *</label>
                <textarea id="description" required rows={4} value={submitForm.description} onChange={(e) => setSubmitForm({ ...submitForm, description: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" placeholder="Describe the opportunity, what it offers, and who it's for..." />
              </div>
              <div className="mt-4">
                <label htmlFor="requirements" className="block text-sm text-white/70 mb-1">Requirements</label>
                <textarea id="requirements" rows={3} value={submitForm.requirements} onChange={(e) => setSubmitForm({ ...submitForm, requirements: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/50" placeholder="List the requirements, qualifications, or eligibility criteria..." />
              </div>
              {submitStatus === "success" && (
                <div className="text-green-400 text-sm mt-4">Thank you! Your opportunity has been submitted for review.</div>
              )}
              {submitStatus === "error" && (
                <div className="text-red-400 text-sm mt-4">Please fill in all required fields.</div>
              )}
              <div className="flex items-center justify-end gap-3 mt-6">
                <button type="button" onClick={() => setShowSubmitModal(false)} className="px-6 py-3 rounded-lg bg-white/5 text-white/80 hover:bg-white/10 transition-colors">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary btn-glow bg-white text-[#0b3d91] flex items-center gap-2">
                  <Plus size={16} />
                  Submit Opportunity
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
