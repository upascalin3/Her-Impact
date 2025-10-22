"use client";
import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { 
  Search, 
  Filter, 
  SortAsc, 
  BookOpen, 
  Calendar as CalendarIcon,
  User,
  Clock,
  Eye,
  Heart,
  MessageSquare,
  Share2,
  PenTool,
  Grid3X3,
  TrendingUp,
  Star,
  Tag
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
  category: string;
  categoryIcon: any;
  image: string;
  featured: boolean;
  likes: number;
  comments: number;
  views: number;
  tags: string[];
}

export default function ArticlesPage() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  // Handle URL parameters for category filtering
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  // Mock articles data
  const articles: Article[] = [
    {
      id: "ai-empathy-healthcare",
      title: "AI with Empathy: How Dr. Sarah Chen is Revolutionizing Healthcare",
      excerpt: "Dr. Sarah Chen's groundbreaking work in empathetic AI is transforming how we approach medical diagnosis and treatment, redefining what it means to care for patients in the digital age.",
      author: "Dr. Sarah Chen",
      authorImage: "/file.svg",
      date: "March 30, 2024",
      readTime: "8 min read",
      category: "stem-innovations",
      categoryIcon: TrendingUp,
      image: "/file.svg",
      featured: true,
      likes: 1247,
      comments: 89,
      views: 15420,
      tags: ["AI", "Healthcare", "Innovation", "Women in STEM"]
    },
    {
      id: "woman-behind-code",
      title: "The Woman Behind the Code: Breaking Barriers in Software Engineering",
      excerpt: "Meet the trailblazing women who are reshaping the software engineering landscape and inspiring the next generation of female developers.",
      author: "Maria Rodriguez",
      authorImage: "/file.svg",
      date: "March 28, 2024",
      readTime: "6 min read",
      category: "career-empowerment",
      categoryIcon: TrendingUp,
      image: "/file.svg",
      featured: true,
      likes: 892,
      comments: 67,
      views: 12300,
      tags: ["Software Engineering", "Career", "Women in Tech", "Programming"]
    },
    {
      id: "refugee-robotics-pioneer",
      title: "From Refugee to Robotics Pioneer: A Journey of Resilience",
      excerpt: "The inspiring story of how one woman's journey from refugee to robotics pioneer is changing the face of technology and inspiring others along the way.",
      author: "Amina Hassan",
      authorImage: "/file.svg",
      date: "March 25, 2024",
      readTime: "7 min read",
      category: "impact-stories",
      categoryIcon: Heart,
      image: "/file.svg",
      featured: false,
      likes: 1567,
      comments: 124,
      views: 18900,
      tags: ["Robotics", "Resilience", "Immigration", "Technology"]
    },
    {
      id: "next-frontier-robotics",
      title: "The Next Frontier in Robotics: Women Leading the Charge",
      excerpt: "Exploring how women are at the forefront of robotics innovation, from humanoid robots to autonomous systems that will shape our future.",
      author: "Dr. Elena Petrov",
      authorImage: "/file.svg",
      date: "March 22, 2024",
      readTime: "9 min read",
      category: "stem-innovations",
      categoryIcon: TrendingUp,
      image: "/file.svg",
      featured: false,
      likes: 743,
      comments: 45,
      views: 11200,
      tags: ["Robotics", "Innovation", "Future Tech", "AI"]
    },
    {
      id: "hidden-figures-nasa",
      title: "The Hidden Figures of NASA: Celebrating Women in Space Science",
      excerpt: "A tribute to the remarkable women who have contributed to NASA's missions and continue to inspire future generations of space scientists.",
      author: "Dr. Katherine Johnson",
      authorImage: "/file.svg",
      date: "March 20, 2024",
      readTime: "10 min read",
      category: "womens-history",
      categoryIcon: Star,
      image: "/file.svg",
      featured: true,
      likes: 2103,
      comments: 156,
      views: 25600,
      tags: ["NASA", "Space Science", "History", "Women in STEM"]
    },
    {
      id: "african-women-science",
      title: "African Women Who Shaped Science: A Legacy of Excellence",
      excerpt: "Celebrating the contributions of African women scientists throughout history and their lasting impact on scientific discovery and innovation.",
      author: "Dr. Wangari Maathai",
      authorImage: "/file.svg",
      date: "March 18, 2024",
      readTime: "8 min read",
      category: "womens-history",
      categoryIcon: Star,
      image: "/file.svg",
      featured: false,
      likes: 1345,
      comments: 98,
      views: 18700,
      tags: ["African Women", "Science History", "Diversity", "Innovation"]
    },
    {
      id: "community-mentorship-program",
      title: "Building Bridges: How Community Mentorship Programs Are Changing Lives",
      excerpt: "Exploring the impact of community-driven mentorship programs in STEM and how they're creating lasting change for women in technology.",
      author: "Dr. Lisa Thompson",
      authorImage: "/file.svg",
      date: "March 15, 2024",
      readTime: "6 min read",
      category: "community-collaboration",
      categoryIcon: Grid3X3,
      image: "/file.svg",
      featured: false,
      likes: 892,
      comments: 67,
      views: 12300,
      tags: ["Mentorship", "Community", "STEM Education", "Collaboration"]
    },
    {
      id: "quantum-computing-research",
      title: "Quantum Computing Breakthrough: Women Leading the Revolution",
      excerpt: "A deep dive into the latest quantum computing research and the women scientists who are pushing the boundaries of what's possible.",
      author: "Dr. Maria Santos",
      authorImage: "/file.svg",
      date: "March 12, 2024",
      readTime: "9 min read",
      category: "research-insights",
      categoryIcon: Tag,
      image: "/file.svg",
      featured: true,
      likes: 1567,
      comments: 124,
      views: 18900,
      tags: ["Quantum Computing", "Research", "Innovation", "Technology"]
    },
    {
      id: "women-perspective-tech",
      title: "A Woman's Perspective: Navigating the Tech Industry",
      excerpt: "Personal insights and experiences from women who have carved their path in the technology industry, sharing lessons learned and advice for newcomers.",
      author: "Sarah Johnson",
      authorImage: "/file.svg",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "voices-perspectives",
      categoryIcon: MessageSquare,
      image: "/file.svg",
      featured: false,
      likes: 743,
      comments: 45,
      views: 11200,
      tags: ["Personal Story", "Tech Industry", "Career Advice", "Perspective"]
    },
    {
      id: "stem-conference-2024",
      title: "STEM Conference 2024: Opportunities and Networking for Women",
      excerpt: "Everything you need to know about the upcoming STEM conference, featuring networking opportunities, workshops, and career development sessions.",
      author: "Conference Team",
      authorImage: "/file.svg",
      date: "March 8, 2024",
      readTime: "5 min read",
      category: "events-opportunities",
      categoryIcon: CalendarIcon,
      image: "/file.svg",
      featured: false,
      likes: 456,
      comments: 23,
      views: 8900,
      tags: ["Conference", "Networking", "Career Development", "STEM Events"]
    },
    {
      id: "online-learning-platforms",
      title: "Best Online Learning Platforms for Women in STEM",
      excerpt: "A comprehensive guide to the top online learning platforms that are helping women advance their careers in STEM fields.",
      author: "Dr. Emily Chen",
      authorImage: "/file.svg",
      date: "March 5, 2024",
      readTime: "8 min read",
      category: "education-learning",
      categoryIcon: BookOpen,
      image: "/file.svg",
      featured: true,
      likes: 1123,
      comments: 89,
      views: 15600,
      tags: ["Online Learning", "Education", "STEM Skills", "Career Development"]
    },
    // Additional Impact Stories
    {
      id: "climate-scientist-journey",
      title: "From Lab to Global Impact: Dr. Aisha's Climate Research Journey",
      excerpt: "How one climate scientist's research is influencing global environmental policies and inspiring the next generation of environmental scientists.",
      author: "Dr. Aisha Patel",
      authorImage: "/file.svg",
      date: "March 3, 2024",
      readTime: "7 min read",
      category: "impact-stories",
      categoryIcon: Heart,
      image: "/file.svg",
      featured: false,
      likes: 987,
      comments: 76,
      views: 13400,
      tags: ["Climate Science", "Environmental Impact", "Research", "Global Change"]
    },
    {
      id: "tech-startup-founder",
      title: "Breaking Barriers: How I Built a Tech Startup in Silicon Valley",
      excerpt: "The inspiring journey of a female tech entrepreneur who overcame challenges to build a successful startup in the competitive Silicon Valley ecosystem.",
      author: "Jessica Martinez",
      authorImage: "/file.svg",
      date: "March 1, 2024",
      readTime: "9 min read",
      category: "impact-stories",
      categoryIcon: Heart,
      image: "/file.svg",
      featured: true,
      likes: 1456,
      comments: 112,
      views: 17800,
      tags: ["Entrepreneurship", "Startup", "Silicon Valley", "Success Story"]
    },
    // Additional STEM Innovations
    {
      id: "biotech-breakthrough",
      title: "Revolutionary Biotech: Women Leading Medical Breakthroughs",
      excerpt: "Exploring the latest biotechnological innovations led by women scientists that are transforming healthcare and medical treatments.",
      author: "Dr. Rachel Kim",
      authorImage: "/file.svg",
      date: "February 28, 2024",
      readTime: "8 min read",
      category: "stem-innovations",
      categoryIcon: TrendingUp,
      image: "/file.svg",
      featured: false,
      likes: 743,
      comments: 54,
      views: 11200,
      tags: ["Biotechnology", "Medical Innovation", "Healthcare", "Research"]
    },
    {
      id: "space-technology-advances",
      title: "Space Technology Advances: Women Engineers at NASA",
      excerpt: "Meet the women engineers who are pushing the boundaries of space technology and making interplanetary exploration possible.",
      author: "Dr. Samantha Lee",
      authorImage: "/file.svg",
      date: "February 25, 2024",
      readTime: "10 min read",
      category: "stem-innovations",
      categoryIcon: TrendingUp,
      image: "/file.svg",
      featured: true,
      likes: 1890,
      comments: 145,
      views: 22300,
      tags: ["Space Technology", "NASA", "Engineering", "Innovation"]
    },
    // Additional Career & Empowerment
    {
      id: "leadership-skills-women",
      title: "Developing Leadership Skills: A Guide for Women in Tech",
      excerpt: "Practical advice and strategies for women looking to develop leadership skills and advance their careers in technology.",
      author: "Dr. Patricia Williams",
      authorImage: "/file.svg",
      date: "February 22, 2024",
      readTime: "6 min read",
      category: "career-empowerment",
      categoryIcon: TrendingUp,
      image: "/file.svg",
      featured: false,
      likes: 654,
      comments: 43,
      views: 9800,
      tags: ["Leadership", "Career Development", "Women in Tech", "Professional Growth"]
    },
    {
      id: "negotiation-salary-women",
      title: "Salary Negotiation: Strategies for Women in STEM",
      excerpt: "Essential tips and techniques for women in STEM fields to negotiate better salaries and advance their financial goals.",
      author: "Sarah Thompson",
      authorImage: "/file.svg",
      date: "February 20, 2024",
      readTime: "5 min read",
      category: "career-empowerment",
      categoryIcon: TrendingUp,
      image: "/file.svg",
      featured: false,
      likes: 892,
      comments: 67,
      views: 12300,
      tags: ["Salary Negotiation", "Career Advice", "Financial Empowerment", "Professional Skills"]
    },
    // Additional Education & Learning
    {
      id: "coding-bootcamp-guide",
      title: "Choosing the Right Coding Bootcamp: A Complete Guide",
      excerpt: "Everything you need to know about selecting the best coding bootcamp to jumpstart your career in technology.",
      author: "Dr. Maria Rodriguez",
      authorImage: "/file.svg",
      date: "February 18, 2024",
      readTime: "7 min read",
      category: "education-learning",
      categoryIcon: BookOpen,
      image: "/file.svg",
      featured: false,
      likes: 567,
      comments: 34,
      views: 8900,
      tags: ["Coding Bootcamp", "Programming Education", "Career Change", "Learning"]
    },
    {
      id: "data-science-certification",
      title: "Data Science Certifications: Which One is Right for You?",
      excerpt: "A comprehensive comparison of data science certifications to help you choose the best path for your career goals.",
      author: "Dr. Jennifer Liu",
      authorImage: "/file.svg",
      date: "February 15, 2024",
      readTime: "8 min read",
      category: "education-learning",
      categoryIcon: BookOpen,
      image: "/file.svg",
      featured: true,
      likes: 1234,
      comments: 89,
      views: 15600,
      tags: ["Data Science", "Certification", "Career Development", "Skills"]
    },
    // Additional Community & Collaboration
    {
      id: "women-tech-networks",
      title: "Building Strong Networks: Women in Tech Communities",
      excerpt: "How to build and maintain professional networks in the tech industry, with a focus on women's support groups and communities.",
      author: "Dr. Lisa Chen",
      authorImage: "/file.svg",
      date: "February 12, 2024",
      readTime: "6 min read",
      category: "community-collaboration",
      categoryIcon: Grid3X3,
      image: "/file.svg",
      featured: false,
      likes: 789,
      comments: 56,
      views: 11200,
      tags: ["Networking", "Women in Tech", "Community", "Professional Development"]
    },
    {
      id: "open-source-contributions",
      title: "Contributing to Open Source: A Beginner's Guide for Women",
      excerpt: "Learn how to get started with open source contributions and make a meaningful impact in the developer community.",
      author: "Alexandra Park",
      authorImage: "/file.svg",
      date: "February 10, 2024",
      readTime: "9 min read",
      category: "community-collaboration",
      categoryIcon: Grid3X3,
      image: "/file.svg",
      featured: true,
      likes: 1456,
      comments: 98,
      views: 16700,
      tags: ["Open Source", "Programming", "Community", "Contributing"]
    },
    // Additional Research & Insights
    {
      id: "ai-ethics-research",
      title: "AI Ethics Research: Ensuring Fair and Responsible Technology",
      excerpt: "Exploring the critical role of women researchers in developing ethical AI systems and ensuring technology serves all of humanity.",
      author: "Dr. Fatima Al-Zahra",
      authorImage: "/file.svg",
      date: "February 8, 2024",
      readTime: "11 min read",
      category: "research-insights",
      categoryIcon: Tag,
      image: "/file.svg",
      featured: false,
      likes: 987,
      comments: 76,
      views: 13400,
      tags: ["AI Ethics", "Research", "Responsible AI", "Technology Ethics"]
    },
    {
      id: "renewable-energy-research",
      title: "Renewable Energy Research: Women Leading the Green Revolution",
      excerpt: "Highlighting the groundbreaking research by women scientists in renewable energy technologies and their impact on climate change.",
      author: "Dr. Elena Vasquez",
      authorImage: "/file.svg",
      date: "February 5, 2024",
      readTime: "10 min read",
      category: "research-insights",
      categoryIcon: Tag,
      image: "/file.svg",
      featured: true,
      likes: 1678,
      comments: 123,
      views: 19800,
      tags: ["Renewable Energy", "Climate Research", "Green Technology", "Sustainability"]
    },
    // Additional Voices & Perspectives
    {
      id: "work-life-balance-tech",
      title: "Work-Life Balance in Tech: A Personal Journey",
      excerpt: "A personal account of navigating work-life balance in the fast-paced tech industry and finding sustainable career practices.",
      author: "Michelle Johnson",
      authorImage: "/file.svg",
      date: "February 3, 2024",
      readTime: "7 min read",
      category: "voices-perspectives",
      categoryIcon: MessageSquare,
      image: "/file.svg",
      featured: false,
      likes: 654,
      comments: 45,
      views: 9800,
      tags: ["Work-Life Balance", "Personal Story", "Career Advice", "Wellness"]
    },
    {
      id: "imposter-syndrome-tech",
      title: "Overcoming Imposter Syndrome in Tech: My Story",
      excerpt: "A candid discussion about imposter syndrome in the tech industry and practical strategies for building confidence and self-worth.",
      author: "Dr. Priya Sharma",
      authorImage: "/file.svg",
      date: "February 1, 2024",
      readTime: "8 min read",
      category: "voices-perspectives",
      categoryIcon: MessageSquare,
      image: "/file.svg",
      featured: true,
      likes: 1890,
      comments: 156,
      views: 22300,
      tags: ["Imposter Syndrome", "Mental Health", "Career Confidence", "Personal Growth"]
    },
    // Additional Events & Opportunities
    {
      id: "women-tech-summit-2024",
      title: "Women in Tech Summit 2024: Registration Now Open",
      excerpt: "Join us for the biggest women in tech summit of the year, featuring keynote speakers, workshops, and networking opportunities.",
      author: "Summit Organizers",
      authorImage: "/file.svg",
      date: "January 30, 2024",
      readTime: "4 min read",
      category: "events-opportunities",
      categoryIcon: CalendarIcon,
      image: "/file.svg",
      featured: false,
      likes: 456,
      comments: 23,
      views: 8900,
      tags: ["Tech Summit", "Networking", "Professional Development", "Women in Tech"]
    },
    {
      id: "scholarship-opportunities",
      title: "STEM Scholarships for Women: 2024 Opportunities",
      excerpt: "A comprehensive list of scholarship opportunities available for women pursuing careers in STEM fields.",
      author: "Scholarship Committee",
      authorImage: "/file.svg",
      date: "January 28, 2024",
      readTime: "6 min read",
      category: "events-opportunities",
      categoryIcon: CalendarIcon,
      image: "/file.svg",
      featured: true,
      likes: 1234,
      comments: 89,
      views: 15600,
      tags: ["Scholarships", "Education Funding", "STEM Education", "Opportunities"]
    },
    // Additional Women's History
    {
      id: "ada-lovelace-legacy",
      title: "Ada Lovelace: The First Computer Programmer's Lasting Legacy",
      excerpt: "Celebrating the life and contributions of Ada Lovelace, the world's first computer programmer, and her impact on modern computing.",
      author: "Dr. Margaret Wilson",
      authorImage: "/file.svg",
      date: "January 25, 2024",
      readTime: "9 min read",
      category: "womens-history",
      categoryIcon: Star,
      image: "/file.svg",
      featured: false,
      likes: 1456,
      comments: 98,
      views: 16700,
      tags: ["Ada Lovelace", "Computer History", "Programming", "Women in Computing"]
    },
    {
      id: "marie-curie-influence",
      title: "Marie Curie's Influence on Modern Science and Women in STEM",
      excerpt: "Examining how Marie Curie's groundbreaking work continues to inspire women in science and shape modern scientific research.",
      author: "Dr. Isabella Martinez",
      authorImage: "/file.svg",
      date: "January 22, 2024",
      readTime: "10 min read",
      category: "womens-history",
      categoryIcon: Star,
      image: "/file.svg",
      featured: true,
      likes: 2103,
      comments: 156,
      views: 25600,
      tags: ["Marie Curie", "Science History", "Women in Science", "Nobel Prize"]
    }
  ];

  const categories = [
    { id: "all", name: "All Articles", icon: Grid3X3, color: "from-[#79a1ff] to-[#f48fb1]" },
    { id: "impact-stories", name: "Impact Stories", icon: Heart, color: "from-[#ff6b6b] to-[#feca57]" },
    { id: "stem-innovations", name: "STEM Innovations", icon: TrendingUp, color: "from-[#48cae4] to-[#023e8a]" },
    { id: "career-empowerment", name: "Career & Empowerment", icon: TrendingUp, color: "from-[#06ffa5] to-[#3d5a80]" },
    { id: "education-learning", name: "Education & Learning", icon: BookOpen, color: "from-[#f72585] to-[#b5179e]" },
    { id: "community-collaboration", name: "Community & Collaboration", icon: Grid3X3, color: "from-[#7209b7] to-[#560bad]" },
    { id: "research-insights", name: "Research & Insights", icon: Tag, color: "from-[#f77f00] to-[#fcbf49]" },
    { id: "voices-perspectives", name: "Voices & Perspectives", icon: MessageSquare, color: "from-[#e63946] to-[#f1faee]" },
    { id: "events-opportunities", name: "Events & Opportunities", icon: CalendarIcon, color: "from-[#2a9d8f] to-[#264653]" },
    { id: "womens-history", name: "Women's History", icon: Star, color: "from-[#ffd60a] to-[#ffc300]" }
  ];

  const filteredArticles = useMemo(() => {
    let filtered = articles;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }

    // Sort articles
    switch (sortBy) {
      case "newest":
        filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case "oldest":
        filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case "most-liked":
        filtered.sort((a, b) => b.likes - a.likes);
        break;
      case "most-viewed":
        filtered.sort((a, b) => b.views - a.views);
        break;
      case "most-commented":
        filtered.sort((a, b) => b.comments - a.comments);
        break;
    }

    return filtered;
  }, [articles, searchTerm, selectedCategory, sortBy]);

  // Pagination logic
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const paginatedArticles = filteredArticles.slice(startIndex, endIndex);

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <main className="min-h-screen bg-[#0a0f1f] text-white">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-[rgba(6,10,22,0.6)] backdrop-blur-md border-b border-white/10">
        <div className="container-page h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white">
            <img src="/logo.svg" alt="Her Impact Logo" className="w-6 h-6" />
            <span className="subheading">Her Impact</span>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-white/80 hover:text-white">
            <BookOpen size={16} />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0a0f1f] py-20">
        <div className="hero-aura" aria-hidden />
        <div className="relative container-page">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1] flex items-center justify-center">
                <BookOpen size={16} className="text-white" />
              </div>
              <span className="text-sm text-white/60">All Articles</span>
            </div>
            
            <h1 className="section-title text-4xl md:text-5xl mb-6 leading-tight">
              Discover <span className="gradient-text">Inspiring Stories</span>
            </h1>
            
            <p className="body-text text-lg text-[#c9d4ff] mb-8 max-w-2xl mx-auto">
              Explore our collection of articles celebrating women in STEM, featuring stories of innovation, empowerment, and groundbreaking achievements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/articles/write" className="btn btn-primary btn-glow bg-white text-[#0b3d91] flex items-center gap-2">
                <PenTool size={18} />
                Write Article
              </Link>
              <Link href="/stories" className="btn btn-outline flex items-center gap-2">
                <BookOpen size={18} />
                Read Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions - Category Buttons */}
      <section className="bg-[#070b16] py-8 border-b border-white/10">
        <div className="container-page">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="subheading text-xl">Quick Actions</h2>
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="btn btn-outline flex items-center gap-2"
              >
                <Filter size={16} />
                {showFilters ? 'Hide' : 'Show'} Filters
              </button>
            </div>
            
            {/* Category Quick Actions */}
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-tr ' + category.color + ' text-white scale-105'
                      : 'bg-white/5 hover:bg-white/10 text-white/70 hover:text-white'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    selectedCategory === category.id 
                      ? 'bg-white/20' 
                      : 'bg-gradient-to-tr ' + category.color
                  }`}>
                    <category.icon size={16} className="text-white" />
                  </div>
                  <span className="text-xs font-medium text-center leading-tight">
                    {category.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Filters Section */}
      {showFilters && (
        <section className="bg-[#0a0f1f] py-8 border-b border-white/10">
          <div className="container-page">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Search */}
                <div className="relative">
                  <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" />
                  <input
                    type="text"
                    placeholder="Search articles, authors, tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-white/30"
                  />
                </div>

                {/* Category Filter */}
                <div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id} className="bg-[#0a0f1f]">
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort */}
                <div>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30"
                  >
                    <option value="newest" className="bg-[#0a0f1f]">Newest First</option>
                    <option value="oldest" className="bg-[#0a0f1f]">Oldest First</option>
                    <option value="most-liked" className="bg-[#0a0f1f]">Most Liked</option>
                    <option value="most-viewed" className="bg-[#0a0f1f]">Most Viewed</option>
                    <option value="most-commented" className="bg-[#0a0f1f]">Most Commented</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="bg-[#070b16] py-20">
        <div className="container-page">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="section-title text-3xl">
                {selectedCategory === "all" ? "All Articles" : categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <span className="text-white/60">
                {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} • Page {currentPage} of {totalPages}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedArticles.map((article, index) => (
                <article key={article.id} className="card-glow rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300">
                  {/* Article Image */}
                  <div className="relative h-48 bg-gradient-to-tr from-[#f48fb1]/40 to-[#79a1ff]/30">
                    {article.featured && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1] rounded-full text-xs font-medium text-white">
                        Featured
                      </div>
                    )}
                    <div className="absolute top-4 right-4 flex items-center gap-2 text-white/80 text-sm">
                      <Eye size={16} />
                      {article.views.toLocaleString()}
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1] flex items-center justify-center">
                        <article.categoryIcon size={14} className="text-white" />
                      </div>
                      <span className="text-sm text-white/60 capitalize">
                        {categories.find(c => c.id === article.category)?.name}
                      </span>
                    </div>

                    <h3 className="subheading text-xl mb-3 line-clamp-2 group-hover:text-white/90 transition-colors">
                      {article.title}
                    </h3>

                    <p className="body-text text-white/70 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1] flex items-center justify-center">
                        <User size={16} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-white">{article.author}</p>
                        <div className="flex items-center gap-3 text-xs text-white/60">
                          <span className="flex items-center gap-1">
                            <CalendarIcon size={12} />
                            {article.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={12} />
                            {article.readTime}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/70">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-white/60">
                        <button className="flex items-center gap-1 hover:text-white transition-colors">
                          <Heart size={16} />
                          <span className="text-sm">{article.likes}</span>
                        </button>
                        <button className="flex items-center gap-1 hover:text-white transition-colors">
                          <MessageSquare size={16} />
                          <span className="text-sm">{article.comments}</span>
                        </button>
                        <button className="flex items-center gap-1 hover:text-white transition-colors">
                          <Share2 size={16} />
                        </button>
                      </div>
                      <Link 
                        href={`/articles/${article.id}`}
                        className="btn btn-primary btn-glow bg-white text-[#0b3d91] text-sm"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-20">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <Search size={32} className="text-white/40" />
                </div>
                <h3 className="subheading text-xl mb-2">No articles found</h3>
                <p className="text-white/60 mb-6">Try adjusting your search or filter criteria</p>
                <button 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                  }}
                  className="btn btn-outline"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {filteredArticles.length > 0 && totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 mt-12">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="btn btn-outline flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <SortAsc size={16} className="rotate-90" />
                  Previous
                </button>

                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                    // Show first 3 pages, last 3 pages, current page, and pages around current
                    const shouldShow = 
                      page <= 3 || 
                      page > totalPages - 3 || 
                      Math.abs(page - currentPage) <= 1;
                    
                    if (!shouldShow) {
                      // Show ellipsis for gaps
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
                  <SortAsc size={16} className="-rotate-90" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
