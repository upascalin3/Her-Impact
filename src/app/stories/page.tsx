"use client";
import { useState } from "react";
import React from "react";
import { 
  ArrowLeft, 
  Filter, 
  Search, 
  Heart, 
  Lightbulb, 
  TrendingUp, 
  GraduationCap, 
  Users2, 
  BookOpenCheck, 
  MessageSquare, 
  Calendar, 
  History,
  BookOpen,
  Calendar as CalendarIcon,
  User,
  Share2,
  ChevronDown,
  Plus,
  Eye,
  ThumbsUp,
  Reply,
  Send,
  X,
  CheckCircle,
  Sparkles,
  Zap,
  Star,
  Twitter,
  Linkedin,
  Facebook,
  Copy
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AllStoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("latest");
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [likedStories, setLikedStories] = useState<Set<string>>(new Set());
  const [storyLikes, setStoryLikes] = useState<Record<string, number>>({});
  const [showShareMenu, setShowShareMenu] = useState<string | null>(null);
  const [submissionForm, setSubmissionForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    author: "",
    category: "",
    tags: "",
    email: ""
  });

  const categories = [
    { id: "all", name: "All Stories", icon: BookOpen },
    { id: "impact-stories", name: "Impact Stories", icon: Heart },
    { id: "stem-innovations", name: "STEM Innovations", icon: Lightbulb },
    { id: "career-empowerment", name: "Career & Empowerment", icon: TrendingUp },
    { id: "education-learning", name: "Education & Learning", icon: GraduationCap },
    { id: "community-collaboration", name: "Community & Collaboration", icon: Users2 },
    { id: "research-insights", name: "Research & Insights", icon: BookOpenCheck },
    { id: "voices-perspectives", name: "Voices & Perspectives", icon: MessageSquare },
    { id: "events-opportunities", name: "Events & Opportunities", icon: Calendar },
    { id: "womens-history", name: "Women's History", icon: History }
  ];

  const stories = [
    {
      id: "ai-empathy-dr-sarah-chen",
      title: "AI with Empathy: How Dr. Sarah Chen is Revolutionizing Healthcare",
      excerpt: "Dr. Sarah Chen's groundbreaking work in empathetic AI is transforming patient care and medical diagnosis.",
      author: "Dr. Sarah Chen",
      date: "March 30, 2024",
      category: "stem-innovations",
      readTime: "8 min read",
      image: "/file.svg",
      featured: true,
      likes: 1247,
      comments: 89,
      views: 15420,
      tags: ["AI", "Healthcare", "Innovation"]
    },
    {
      id: "from-refugee-to-robotics-pioneer",
      title: "From Refugee to Robotics Pioneer: Elena's Journey",
      excerpt: "How one woman's journey from displacement to leading AI research is changing the world.",
      author: "Elena Rodriguez",
      date: "March 28, 2024",
      category: "impact-stories",
      readTime: "12 min read",
      image: "/file.svg",
      featured: false,
      likes: 892,
      comments: 67,
      views: 12840,
      tags: ["Robotics", "Refugee", "Humanitarian"]
    },
    {
      id: "breaking-glass-ceiling-aerospace",
      title: "Breaking the Glass Ceiling in Aerospace",
      excerpt: "Captain Maria Rodriguez becomes the first Latina to lead a major space mission.",
      author: "Captain Maria Rodriguez",
      date: "March 25, 2024",
      category: "impact-stories",
      readTime: "10 min read",
      image: "/file.svg",
      featured: true,
      likes: 1156,
      comments: 94,
      views: 18920,
      tags: ["Aerospace", "Leadership", "Space"]
    },
    {
      id: "coding-change-rural-india",
      title: "Coding for Change in Rural India",
      excerpt: "How one programmer is using technology to bridge the digital divide in her community.",
      author: "Priya Sharma",
      date: "March 22, 2024",
      category: "community-collaboration",
      readTime: "7 min read",
      image: "/file.svg",
      featured: false,
      likes: 634,
      comments: 45,
      views: 8920,
      tags: ["Community", "Technology", "Education"]
    },
    {
      id: "negotiating-first-tech-salary",
      title: "Negotiating Your First Tech Salary: A Complete Guide",
      excerpt: "A comprehensive guide to salary negotiation strategies specifically for women in tech.",
      author: "Sarah Johnson",
      date: "March 20, 2024",
      category: "career-empowerment",
      readTime: "15 min read",
      image: "/file.svg",
      featured: false,
      likes: 743,
      comments: 52,
      views: 11200,
      tags: ["Career", "Salary", "Negotiation"]
    },
    {
      id: "building-personal-brand-stem",
      title: "Building Your Personal Brand in STEM",
      excerpt: "How to establish yourself as a thought leader and advance your career through strategic branding.",
      author: "Dr. Maria Santos",
      date: "March 18, 2024",
      category: "career-empowerment",
      readTime: "9 min read",
      image: "/file.svg",
      featured: false,
      likes: 567,
      comments: 38,
      views: 7560,
      tags: ["Personal Brand", "Career", "Leadership"]
    },
    {
      id: "introduction-machine-learning",
      title: "Introduction to Machine Learning for Beginners",
      excerpt: "A beginner-friendly course covering the fundamentals of machine learning and AI.",
      author: "Dr. Anna Kim",
      date: "March 15, 2024",
      category: "education-learning",
      readTime: "20 min read",
      image: "/file.svg",
      featured: false,
      likes: 445,
      comments: 29,
      views: 6340,
      tags: ["Machine Learning", "Education", "AI"]
    },
    {
      id: "ada-lovelace-first-programmer",
      title: "Ada Lovelace: The First Computer Programmer",
      excerpt: "The remarkable story of Ada Lovelace and her contributions to early computing.",
      author: "Historical Research Team",
      date: "March 12, 2024",
      category: "womens-history",
      readTime: "11 min read",
      image: "/file.svg",
      featured: false,
      likes: 789,
      comments: 56,
      views: 9870,
      tags: ["History", "Programming", "Pioneer"]
    },
    {
      id: "quantum-computing-breakthrough",
      title: "Quantum Computing Breakthrough: Dr. Amara Patel's Discovery",
      excerpt: "New quantum algorithms that could solve complex problems in seconds instead of years.",
      author: "Dr. Amara Patel",
      date: "March 10, 2024",
      category: "stem-innovations",
      readTime: "14 min read",
      image: "/file.svg",
      featured: true,
      likes: 923,
      comments: 71,
      views: 14560,
      tags: ["Quantum Computing", "Innovation", "Research"]
    },
    {
      id: "sustainable-energy-solutions",
      title: "Sustainable Energy Solutions: Dr. Sofia Martinez's Solar Innovation",
      excerpt: "Innovative solar panel technology that increases efficiency by 40% while reducing costs.",
      author: "Dr. Sofia Martinez",
      date: "March 8, 2024",
      category: "stem-innovations",
      readTime: "13 min read",
      image: "/file.svg",
      featured: false,
      likes: 678,
      comments: 43,
      views: 10230,
      tags: ["Sustainability", "Solar", "Energy"]
    },
    {
      id: "mentorship-impact-stem-career",
      title: "Mentorship Impact on STEM Career Success",
      excerpt: "Longitudinal study on how mentorship affects career advancement in STEM.",
      author: "Dr. Priya Sharma",
      date: "March 5, 2024",
      category: "research-insights",
      readTime: "16 min read",
      image: "/file.svg",
      featured: false,
      likes: 512,
      comments: 34,
      views: 7890,
      tags: ["Mentorship", "Research", "Career"]
    },
    {
      id: "women-tech-leadership-summit",
      title: "Women in Tech Leadership Summit 2024: Key Takeaways",
      excerpt: "A three-day conference featuring keynote speakers, workshops, and networking opportunities.",
      author: "Tech Leadership Institute",
      date: "March 3, 2024",
      category: "events-opportunities",
      readTime: "6 min read",
      image: "/file.svg",
      featured: false,
      likes: 389,
      comments: 28,
      views: 5670,
      tags: ["Leadership", "Conference", "Networking"]
    }
  ];

  const filteredStories = stories.filter(story => {
    const matchesCategory = selectedCategory === "all" || story.category === selectedCategory;
    const matchesSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedStories = [...filteredStories].sort((a, b) => {
    if (sortBy === "latest") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortBy === "popular") {
      return b.likes - a.likes;
    } else if (sortBy === "trending") {
      return (b.likes + b.comments) - (a.likes + a.comments);
    }
    return 0;
  });

  const handleLike = (storyId: string) => {
    setLikedStories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(storyId)) {
        newSet.delete(storyId);
        setStoryLikes(prev => ({ ...prev, [storyId]: (prev[storyId] || 0) - 1 }));
      } else {
        newSet.add(storyId);
        setStoryLikes(prev => ({ ...prev, [storyId]: (prev[storyId] || 0) + 1 }));
      }
      return newSet;
    });
  };

  const handleShare = (storyId: string, platform: string) => {
    const story = stories.find(s => s.id === storyId);
    if (!story) return;
    
    const url = `${window.location.origin}/stories/${storyId}`;
    const title = story.title;
    
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
        break;
    }
    setShowShareMenu(null);
  };

  const handleSubmitStory = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    console.log('Story submitted:', submissionForm);
    setShowSubmitForm(false);
    setSubmissionForm({
      title: "",
      excerpt: "",
      content: "",
      author: "",
      category: "",
      tags: "",
      email: ""
    });
  };

  return (
    <main className="min-h-screen bg-[#0a0f1f] text-white">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-[rgba(6,10,22,0.6)] backdrop-blur-md border-b border-white/10">
        <div className="container-page h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white">
            <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1]" />
            <span className="subheading">Her Impact</span>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-white/80 hover:text-white">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0a0f1f] py-20">
        <div className="hero-aura" aria-hidden />
        <div className="relative container-page">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1]">
              <BookOpen size={24} className="text-white" />
            </div>
            <div>
              <div className="pill w-max">All Stories</div>
              <h1 className="section-title text-4xl md:text-5xl">Discover Inspiring Stories</h1>
            </div>
          </div>
          <p className="body-text text-[#c9d4ff] text-lg max-w-3xl mb-8">
            Explore our diverse collection of stories, insights, and experiences from women in STEM. 
            From groundbreaking innovations to personal journeys, discover the impact of women shaping the future.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="bg-[#070b16] py-8">
        <div className="container-page">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" />
              <input
                type="text"
                placeholder="Search stories, authors, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-white/60 focus:outline-none focus:border-white/30"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category.id
                      ? "bg-white text-[#0b3d91]"
                      : "bg-white/5 text-white/80 hover:bg-white/10"
                  }`}
                >
                  <category.icon size={16} />
                  {category.name}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white/5 border border-white/10 rounded-full px-4 py-3 pr-8 text-white focus:outline-none focus:border-white/30"
              >
                <option value="latest" className="bg-[#0a0f1f]">Latest</option>
                <option value="popular" className="bg-[#0a0f1f]">Most Popular</option>
                <option value="trending" className="bg-[#0a0f1f]">Trending</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="bg-[#070b16] py-20">
        <div className="container-page">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-title text-3xl">
              {selectedCategory === "all" ? "All Stories" : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <div className="flex items-center gap-4">
              <div className="text-white/60">
                {filteredStories.length} {filteredStories.length === 1 ? 'story' : 'stories'} found
              </div>
              <button
                onClick={() => setShowSubmitForm(true)}
                className="btn btn-primary btn-glow bg-gradient-to-r from-[#79a1ff] to-[#f48fb1] text-white flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <Plus size={18} />
                Submit Story
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedStories.map((story, i) => (
              <article key={story.id} className="card-glow p-6 reveal group interactive-hover">
                {story.featured && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1] text-white text-xs px-2 py-1 rounded-full pulse-glow">
                    <Star size={12} className="inline mr-1" />
                    Featured
                  </div>
                )}
                <div className="relative h-48 bg-gradient-to-tr from-[#f48fb1]/40 to-[#79a1ff]/30 rounded-xl mb-4 overflow-hidden">
                  <Image 
                    src={story.image} 
                    alt={story.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Floating vector elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-white/20 float-animation"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-white/30 float-animation" style={{animationDelay: '1s'}}></div>
                  <div className="absolute top-1/2 right-2 w-1 h-1 rounded-full bg-white/40 float-animation" style={{animationDelay: '2s'}}></div>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1] flex items-center justify-center">
                    {React.createElement(categories.find(c => c.id === story.category)?.icon || BookOpen, { size: 12, className: "text-white" })}
                  </div>
                  <span className="text-sm text-white/60">
                    {categories.find(c => c.id === story.category)?.name}
                  </span>
                </div>

                <h3 className="subheading text-xl mb-2 group-hover:text-white/90 transition-colors">
                  {story.title}
                </h3>
                <p className="body-text text-white/70 mb-4 line-clamp-3">
                  {story.excerpt}
                </p>

                <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    {story.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <CalendarIcon size={14} />
                    {story.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen size={14} />
                    {story.readTime}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleLike(story.id)}
                      className={`flex items-center gap-1 transition-colors ${
                        likedStories.has(story.id) ? 'text-red-400' : 'text-white/60 hover:text-red-400'
                      }`}
                    >
                      <Heart size={16} className={likedStories.has(story.id) ? 'fill-current' : ''} />
                      {(story.likes + (storyLikes[story.id] || 0)).toLocaleString()}
                    </button>
                    <div className="flex items-center gap-1 text-white/60">
                      <MessageSquare size={16} />
                      {story.comments}
                    </div>
                    <div className="flex items-center gap-1 text-white/60">
                      <Eye size={16} />
                      {story.views.toLocaleString()}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <button
                        onClick={() => setShowShareMenu(showShareMenu === story.id ? null : story.id)}
                        className="p-2 rounded-lg bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-colors"
                      >
                        <Share2 size={16} />
                      </button>
                      {showShareMenu === story.id && (
                        <div className="absolute top-full right-0 mt-2 bg-[rgba(6,10,22,0.95)] backdrop-blur-md border border-white/10 rounded-lg p-2 space-y-1 z-50">
                          <button onClick={() => handleShare(story.id, 'twitter')} className="w-full flex items-center gap-2 p-2 rounded hover:bg-white/5 text-left">
                            <Twitter size={14} />
                            Twitter
                          </button>
                          <button onClick={() => handleShare(story.id, 'linkedin')} className="w-full flex items-center gap-2 p-2 rounded hover:bg-white/5 text-left">
                            <Linkedin size={14} />
                            LinkedIn
                          </button>
                          <button onClick={() => handleShare(story.id, 'facebook')} className="w-full flex items-center gap-2 p-2 rounded hover:bg-white/5 text-left">
                            <Facebook size={14} />
                            Facebook
                          </button>
                          <button onClick={() => handleShare(story.id, 'copy')} className="w-full flex items-center gap-2 p-2 rounded hover:bg-white/5 text-left">
                            <Copy size={14} />
                            Copy Link
                          </button>
                        </div>
                      )}
                    </div>
                    <Link 
                      href={`/stories/${story.id}`}
                      className="btn btn-primary btn-glow bg-white text-[#0b3d91] flex items-center gap-2 hover:scale-105 transition-transform"
                    >
                      <BookOpen size={16} />
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                <Search size={24} className="text-white/60" />
              </div>
              <h3 className="subheading text-xl mb-2">No stories found</h3>
              <p className="text-white/60">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Story Submission Modal */}
      {showSubmitForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0a0f1f] border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <h3 className="section-title text-2xl flex items-center gap-2">
                  <Sparkles size={24} className="text-[#79a1ff]" />
                  Share Your Story
                </h3>
                <button
                  onClick={() => setShowSubmitForm(false)}
                  className="p-2 rounded-lg bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <p className="text-white/70 mt-2">
                Help inspire others by sharing your journey in STEM. Your story could be the spark that ignites someone else's passion.
              </p>
            </div>
            
            <form onSubmit={handleSubmitStory} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={submissionForm.author}
                    onChange={(e) => setSubmissionForm(prev => ({ ...prev, author: e.target.value }))}
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-white/30"
                    placeholder="Dr. Jane Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={submissionForm.email}
                    onChange={(e) => setSubmissionForm(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-white/30"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Story Title *</label>
                <input
                  type="text"
                  required
                  value={submissionForm.title}
                  onChange={(e) => setSubmissionForm(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-white/30"
                  placeholder="How I Broke Barriers in AI Research"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Brief Summary *</label>
                <textarea
                  required
                  value={submissionForm.excerpt}
                  onChange={(e) => setSubmissionForm(prev => ({ ...prev, excerpt: e.target.value }))}
                  className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-white/30 resize-none"
                  rows={3}
                  placeholder="A short description of your story that will appear in the story list..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Full Story *</label>
                <textarea
                  required
                  value={submissionForm.content}
                  onChange={(e) => setSubmissionForm(prev => ({ ...prev, content: e.target.value }))}
                  className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-white/30 resize-none"
                  rows={8}
                  placeholder="Share your complete story here. Include your journey, challenges, achievements, and what you learned along the way..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Category *</label>
                  <select
                    required
                    value={submissionForm.category}
                    onChange={(e) => setSubmissionForm(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30"
                  >
                    <option value="" className="bg-[#0a0f1f]">Select a category</option>
                    {categories.slice(1).map((category) => (
                      <option key={category.id} value={category.id} className="bg-[#0a0f1f]">
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Tags</label>
                  <input
                    type="text"
                    value={submissionForm.tags}
                    onChange={(e) => setSubmissionForm(prev => ({ ...prev, tags: e.target.value }))}
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-white/30"
                    placeholder="AI, Innovation, Leadership (comma separated)"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <CheckCircle size={20} className="text-blue-400" />
                <p className="text-sm text-blue-300">
                  By submitting your story, you agree to our terms and confirm that this is your original work.
                </p>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowSubmitForm(false)}
                  className="px-6 py-3 bg-white/5 text-white/80 rounded-lg hover:bg-white/10 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary btn-glow bg-gradient-to-r from-[#79a1ff] to-[#f48fb1] text-white flex items-center gap-2"
                >
                  <Send size={18} />
                  Submit Story
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
