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
  Copy,
  Users,
  Target,
  Mail
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AllStoriesPage() {
  // Category filtering removed - all stories are now personal narratives
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);
  const storiesPerPage = 6;
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [likedStories, setLikedStories] = useState<Set<string>>(new Set());
  const [storyLikes, setStoryLikes] = useState<Record<string, number>>({});
  const [showShareMenu, setShowShareMenu] = useState<string | null>(null);
  const [submissionForm, setSubmissionForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    author: "",
    bio: "",
    tags: "",
    email: "",
    authorImage: ""
  });
  const [isUploadingAuthorImage, setIsUploadingAuthorImage] = useState(false);

  // Categories removed - stories are now uncategorized personal narratives

  const stories = [
    {
      id: "my-journey-from-fear-to-ai-pioneer",
      title: "My Journey: From Fear to AI Pioneer",
      excerpt: "I never thought I'd become a tech leader. Here's how I overcame imposter syndrome and built confidence in a male-dominated field.",
      author: "Dr. Sarah Chen",
      authorBio: "Former medical student who discovered her passion for technology during a difficult period in her life. Now leads AI research focused on empathetic healthcare solutions.",
      authorImage: "/file.svg",
      date: "March 30, 2024",
      readTime: "8 min read",
      featured: true,
      likes: 1247,
      comments: 89,
      views: 15420,
      tags: ["Personal Journey", "Overcoming Fear", "AI"],
      experience: "Overcoming imposter syndrome in tech",
      challenge: "Feeling inadequate in male-dominated spaces",
      outcome: "Built a successful AI research team"
    },
    {
      id: "from-refugee-camp-to-robotics-lab",
      title: "From Refugee Camp to Robotics Lab",
      excerpt: "My family fled war when I was 12. Today, I lead robotics research that helps other displaced people. This is my story of resilience.",
      author: "Elena Rodriguez",
      authorBio: "Refugee turned robotics engineer, passionate about using technology to help displaced communities. Currently leading humanitarian robotics projects.",
      authorImage: "/file.svg",
      date: "March 28, 2024",
      readTime: "12 min read",
      featured: false,
      likes: 892,
      comments: 67,
      views: 12840,
      tags: ["Resilience", "Refugee Experience", "Robotics"],
      experience: "Rebuilding life after displacement",
      challenge: "Language barriers and cultural adaptation",
      outcome: "Leading humanitarian robotics projects"
    },
    {
      id: "the-day-i-became-first-latina-astronaut",
      title: "The Day I Became the First Latina Astronaut",
      excerpt: "Growing up in a small town, I never imagined I'd go to space. Here's how I defied expectations and reached for the stars.",
      author: "Captain Maria Rodriguez",
      authorBio: "First Latina to command a space mission, breaking barriers in aerospace. Currently inspiring the next generation of astronauts.",
      authorImage: "/file.svg",
      date: "March 25, 2024",
      readTime: "10 min read",
      featured: true,
      likes: 1156,
      comments: 94,
      views: 18920,
      tags: ["Space", "Breaking Barriers", "Leadership"],
      experience: "Making history in space exploration",
      challenge: "Proving myself in a field with no role models",
      outcome: "Inspiring the next generation of astronauts"
    },
    {
      id: "coding-change-rural-india",
      title: "Coding for Change in Rural India",
      excerpt: "How one programmer is using technology to bridge the digital divide in her community.",
      author: "Priya Sharma",
      authorBio: "Computer science graduate who returned to her village to bridge the digital divide. Created a thriving tech community in rural areas.",
      authorImage: "/file.svg",
      date: "March 22, 2024",
      readTime: "7 min read",
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
      authorBio: "Software engineer who learned the hard way about salary negotiation and now helps other women. Currently earning 40% more and helping others.",
      authorImage: "/file.svg",
      date: "March 20, 2024",
      readTime: "15 min read",
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
      authorBio: "Experienced researcher who openly shares her struggles with imposter syndrome. Developed strategies to manage self-doubt and now helps others.",
      authorImage: "/file.svg",
      date: "March 18, 2024",
      readTime: "9 min read",
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
      authorBio: "ML researcher who found her place in tech through embracing her unique background. Realized her unique perspective was valuable.",
      authorImage: "/file.svg",
      date: "March 15, 2024",
      readTime: "20 min read",
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
      authorBio: "Developer inspired by her grandmother's late-in-life coding journey. Inspired to pursue computer science by an unexpected teacher.",
      authorImage: "/file.svg",
      date: "March 12, 2024",
      readTime: "11 min read",
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
      authorBio: "Quantum researcher whose biggest failure became her greatest success. Discovered revolutionary quantum algorithms through embracing failure.",
      authorImage: "/file.svg",
      date: "March 10, 2024",
      readTime: "14 min read",
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
      readTime: "13 min read",
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
      featured: false,
      likes: 389,
      comments: 28,
      views: 5670,
      tags: ["Leadership", "Conference", "Networking"]
    }
  ];

  const filteredStories = stories.filter(story => {
    const matchesSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (story.authorBio || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesSearch;
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

  // Pagination logic
  const totalPages = Math.ceil(sortedStories.length / storiesPerPage);
  const startIndex = (currentPage - 1) * storiesPerPage;
  const endIndex = startIndex + storiesPerPage;
  const paginatedStories = sortedStories.slice(startIndex, endIndex);

  // Reset to first page when search or sort changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, sortBy]);

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

  const handleAuthorImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploadingAuthorImage(true);
    try {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setSubmissionForm(prev => ({ ...prev, authorImage: result }));
        setIsUploadingAuthorImage(false);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Error uploading author image:', error);
      setIsUploadingAuthorImage(false);
    }
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
      bio: "",
      tags: "",
      email: "",
      authorImage: ""
    });
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
            <Link href="/community" className="hover:text-white flex items-center gap-2">
              <Users size={16} />
              Community
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
      <section className="relative overflow-hidden bg-[#0a0f1f] py-20">
        <div className="hero-aura" aria-hidden />
        <div className="relative container-page">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1]">
              <BookOpen size={24} className="text-white" />
            </div>
            <div>
              <div className="pill w-max">All Stories</div>
              <h1 className="section-title text-4xl md:text-5xl mt-4">Discover Inspiring Stories</h1>
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

            {/* Category filter removed - stories are personal narratives */}

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
              Personal Stories
            </h2>
            <div className="flex items-center gap-4">
              <div className="text-white/60">
                {filteredStories.length} {filteredStories.length === 1 ? 'story' : 'stories'} found
                {totalPages > 1 && (
                  <span className="ml-2">
                    (Page {currentPage} of {totalPages})
                  </span>
                )}
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
            {paginatedStories.map((story, i) => (
              <article key={story.id} className="card-glow p-6 reveal group interactive-hover relative">
                {story.featured && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1] text-white text-xs px-2 py-1 rounded-full pulse-glow">
                    <Star size={12} className="inline mr-1" />
                    Featured
                  </div>
                )}

                {/* Author Info Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image 
                      src={story.authorImage || "/file.svg"} 
                      alt={story.author} 
                      width={48} 
                      height={48} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="subheading text-lg mb-1">{story.author}</h3>
                    <p className="text-sm text-white/60 mb-2 line-clamp-2">{story.authorBio}</p>
                    <div className="flex items-center gap-2 text-xs text-white/50">
                      <CalendarIcon size={12} />
                      {story.date}
                    </div>
                  </div>
                </div>

                <h3 className="subheading text-xl mb-3 group-hover:text-white/90 transition-colors line-clamp-2">
                  {story.title}
                </h3>
                <p className="body-text text-white/70 mb-4 line-clamp-3">
                  {story.excerpt}
                </p>

                {/* Brief Experience Info */}
                {story.experience && (
                  <div className="mb-4 p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#79a1ff] mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <p className="text-xs text-white/50 mb-1 font-medium">Key Experience:</p>
                        <p className="text-sm text-white/80 line-clamp-2">{story.experience}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center gap-4 text-sm text-white/60">
                    <button 
                      onClick={() => handleLike(story.id)}
                      className="flex items-center gap-1 hover:text-[#79a1ff] transition-colors"
                    >
                      <Heart 
                        size={14} 
                        className={storyLikes[story.id] ? "fill-[#79a1ff] text-[#79a1ff]" : ""} 
                      />
                      <span>{(story.likes + (storyLikes[story.id] || 0)).toLocaleString()}</span>
                    </button>
                    <div className="flex items-center gap-1">
                      <MessageSquare size={14} />
                      <span>{story.comments}</span>
                    </div>
                    <button 
                      onClick={() => {
                        const url = `${window.location.origin}/stories/${story.id}`;
                        navigator.clipboard.writeText(url);
                        // You could add a toast notification here
                      }}
                      className="flex items-center gap-1 hover:text-[#79a1ff] transition-colors"
                    >
                      <Share2 size={14} />
                    <span>Share</span>
                    </button>
                  </div>
                  <Link 
                    href={`/stories/${story.id}`}
                    className="btn btn-primary btn-glow bg-white text-[#0b3d91] flex items-center gap-2 hover:scale-105 transition-transform text-sm px-4 py-2"
                  >
                    <BookOpen size={16} />
                    Read More
                  </Link>
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

          {/* Pagination */}
          {filteredStories.length > 0 && totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-12">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="btn btn-outline flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowLeft size={16} />
                Previous
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  const shouldShow = 
                    page <= 3 || 
                    page > totalPages - 3 || 
                    Math.abs(page - currentPage) <= 1;
                  
                  if (!shouldShow) {
                    if (page === 4 && currentPage > 5) {
                      return <span key={page} className="text-white/40">...</span>;
                    }
                    if (page === totalPages - 3 && currentPage < totalPages - 4) {
                      return <span key={page} className="text-white/40">...</span>;
                    }
                    return null;
                  }

                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                        currentPage === page
                          ? 'bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1] text-white'
                          : 'bg-white/10 hover:bg-white/20 text-white/70 hover:text-white'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="btn btn-outline flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
                <ArrowLeft size={16} className="rotate-180" />
              </button>
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

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Your Bio *</label>
                <textarea
                  required
                  value={submissionForm.bio}
                  onChange={(e) => setSubmissionForm(prev => ({ ...prev, bio: e.target.value }))}
                  className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-white/30 resize-none"
                  rows={3}
                  placeholder="Tell us about yourself - your background, current role, and what makes your story unique..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Author Image (optional)</label>
                <div className="mb-3">
                  <label className="block text-xs text-white/60 mb-1">
                    Or enter image URL:
                  </label>
                  <input
                    type="url"
                    value={submissionForm.authorImage}
                    onChange={(e) => setSubmissionForm(prev => ({ ...prev, authorImage: e.target.value }))}
                    placeholder="https://example.com/your-photo.jpg"
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-white/30"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/60 mb-1">
                    Or upload from computer:
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAuthorImageUpload}
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-[#79a1ff] file:text-white hover:file:bg-[#79a1ff]/80"
                    disabled={isUploadingAuthorImage}
                  />
                  {isUploadingAuthorImage && (
                    <p className="text-sm text-white/60 mt-2">Uploading author image...</p>
                  )}
                </div>
                {submissionForm.authorImage && (
                  <div className="mt-3">
                    <label className="block text-xs text-white/60 mb-1">
                      Preview:
                    </label>
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/20">
                      <Image 
                        src={submissionForm.authorImage} 
                        alt="Author preview" 
                        width={80} 
                        height={80} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Tags (optional)</label>
                <input
                  type="text"
                  value={submissionForm.tags}
                  onChange={(e) => setSubmissionForm(prev => ({ ...prev, tags: e.target.value }))}
                  className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-white/30"
                  placeholder="AI, Innovation, Leadership (comma separated)"
                />
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
