"use client";
import React, { useState } from "react";
import { 
  ArrowLeft, 
  Calendar as CalendarIcon,
  User,
  Clock,
  Eye,
  Heart,
  MessageSquare,
  Share2,
  BookOpen,
  Tag,
  TrendingUp,
  Star,
  MessageSquare as MessageSquareIcon,
  Grid3X3,
  History
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorImage: string;
  authorPosition: string;
  authorBio: string;
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

export default function ArticlePage({ params }: { params: { id: string } }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [showComments, setShowComments] = useState(false);

  // Mock article data - in a real app, this would be fetched based on params.id
  const article: Article = {
    id: params.id,
    title: "AI with Empathy: How Dr. Sarah Chen is Revolutionizing Healthcare",
    excerpt: "Dr. Sarah Chen's groundbreaking work in empathetic AI is transforming how we approach medical diagnosis and treatment, redefining what it means to care for patients in the digital age.",
    content: `
# The Future of Healthcare is Here

Dr. Sarah Chen's journey into the world of artificial intelligence began with a simple question: "How can we make technology more human?" This question has led to one of the most revolutionary developments in healthcare technology.

## Breaking Barriers in AI

Traditional AI systems, while powerful, often lack the emotional intelligence that makes human healthcare providers so effective. Dr. Chen recognized this gap and set out to bridge it through her innovative approach to empathetic AI.

### Key Innovations

- **Emotional Recognition**: Advanced algorithms that can detect subtle emotional cues in patient interactions
- **Personalized Care Plans**: AI systems that adapt to individual patient needs and preferences
- **Predictive Analytics**: Technology that can anticipate patient concerns before they arise

## Impact on Patient Care

The results have been nothing short of transformative. Patients report feeling more understood and supported, while healthcare providers can focus on what they do best - providing compassionate care.

> "This technology doesn't replace human connection; it enhances it," says Dr. Chen. "We're creating a future where technology and empathy work hand in hand."

## Looking Forward

As we look to the future, Dr. Chen's work represents just the beginning of what's possible when we combine cutting-edge technology with deep human understanding. The implications extend far beyond healthcare, touching every aspect of how we interact with technology.

The next generation of AI won't just be smart - it will be wise, compassionate, and truly human-centered.
    `,
    author: "Dr. Sarah Chen",
    authorImage: "/file.svg",
    authorPosition: "AI Research Director",
    authorBio: "Dr. Sarah Chen is a leading researcher in artificial intelligence and healthcare technology, with over 15 years of experience in developing empathetic AI systems.",
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
  };

  const categories = [
    { id: "impact-stories", name: "Impact Stories", icon: Heart },
    { id: "stem-innovations", name: "STEM Innovations", icon: TrendingUp },
    { id: "career-empowerment", name: "Career & Empowerment", icon: TrendingUp },
    { id: "education-learning", name: "Education & Learning", icon: BookOpen },
    { id: "community-collaboration", name: "Community & Collaboration", icon: Grid3X3 },
    { id: "research-insights", name: "Research & Insights", icon: Tag },
    { id: "voices-perspectives", name: "Voices & Perspectives", icon: MessageSquareIcon },
    { id: "events-opportunities", name: "Events & Opportunities", icon: CalendarIcon },
    { id: "womens-history", name: "Women's History", icon: History }
  ];

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const formatContent = (text: string) => {
    return text
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-white mb-6">$1</h1>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-semibold text-white mb-4 mt-8">$1</h2>')
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold text-white mb-3 mt-6">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-white">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic text-white/90">$1</em>')
      .replace(/`(.*?)`/g, '<code class="bg-white/10 px-2 py-1 rounded text-sm font-mono text-white">$1</code>')
      .replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-[#79a1ff] pl-4 py-2 my-4 text-white/80 italic">$1</blockquote>')
      .replace(/^- (.*$)/gim, '<li class="ml-4 text-white/90">$1</li>')
      .replace(/\n\n/g, '</p><p class="text-white/90 leading-relaxed mb-4">')
      .replace(/^/, '<p class="text-white/90 leading-relaxed mb-4">')
      .replace(/$/, '</p>');
  };

  return (
    <main className="min-h-screen bg-[#0a0f1f] text-white">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-[rgba(6,10,22,0.6)] backdrop-blur-md border-b border-white/10">
        <div className="container-page h-16 flex items-center justify-between">
          <Link href="/articles" className="flex items-center gap-2 text-white">
            <img src="/logo.svg" alt="Her Impact Logo" className="w-6 h-6" />
            <span className="subheading">Her Impact</span>
          </Link>
          <Link href="/articles" className="flex items-center gap-2 text-white/80 hover:text-white">
            <ArrowLeft size={16} />
            Back to Articles
          </Link>
        </div>
      </header>

      {/* Article Content */}
      <article className="container-page py-8">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1] flex items-center justify-center">
                <article.categoryIcon size={16} className="text-white" />
              </div>
              <span className="text-sm text-white/60">
                {categories.find(c => c.id === article.category)?.name}
              </span>
              {article.featured && (
                <span className="px-3 py-1 bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1] rounded-full text-xs font-medium text-white">
                  Featured
                </span>
              )}
            </div>

            <h1 className="section-title text-4xl md:text-5xl mb-6 leading-tight">
              {article.title}
            </h1>

            <p className="text-lg text-white/70 mb-6 max-w-3xl">
              {article.excerpt}
            </p>

            <div className="flex items-center gap-6 text-sm text-white/60 mb-6">
              <span className="flex items-center gap-2">
                <User size={16} />
                {article.author}
              </span>
              <span className="flex items-center gap-2">
                <CalendarIcon size={16} />
                {article.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} />
                {article.readTime}
              </span>
              <span className="flex items-center gap-2">
                <Eye size={16} />
                {article.views.toLocaleString()} views
              </span>
            </div>

            {/* Author Info */}
            <div className="p-6 bg-white/5 rounded-xl mb-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image 
                    src={article.authorImage} 
                    alt={article.author} 
                    width={64} 
                    height={64} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-1">{article.author}</h3>
                  <p className="text-sm text-[#79a1ff] mb-2">{article.authorPosition}</p>
                  <p className="text-sm text-white/70">{article.authorBio}</p>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/70">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg prose-invert max-w-none prose-headings:text-white prose-p:text-white/90 prose-strong:text-white prose-blockquote:text-white/80 prose-li:text-white/90">
            <div dangerouslySetInnerHTML={{ __html: formatContent(article.content) }} />
          </div>

          {/* Article Actions */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/10">
            <div className="flex items-center gap-6">
              <button 
                onClick={handleLike}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isLiked 
                    ? 'bg-red-500/20 text-red-400' 
                    : 'bg-white/10 hover:bg-white/20 text-white/70 hover:text-white'
                }`}
              >
                <Heart size={16} className={isLiked ? 'fill-current' : ''} />
                <span>{article.likes + likeCount}</span>
              </button>
              
              <button 
                onClick={() => setShowComments(!showComments)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors"
              >
                <MessageSquare size={16} />
                <span>{article.comments}</span>
              </button>
              
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors">
                <Share2 size={16} />
                Share
              </button>
            </div>

            <Link 
              href={`/articles?category=${article.category}`}
              className="btn btn-outline flex items-center gap-2"
            >
              <BookOpen size={16} />
              More {categories.find(c => c.id === article.category)?.name}
            </Link>
          </div>

          {/* Comments Section */}
          {showComments && (
            <div className="mt-8 p-6 bg-white/5 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-4">Comments</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1] flex items-center justify-center">
                      <User size={16} className="text-white" />
                    </div>
                    <span className="font-medium text-white">Sarah M.</span>
                    <span className="text-sm text-white/60">2 hours ago</span>
                  </div>
                  <p className="text-white/80">This is such an inspiring article! Dr. Chen's work is truly revolutionary.</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1] flex items-center justify-center">
                      <User size={16} className="text-white" />
                    </div>
                    <span className="font-medium text-white">Maria L.</span>
                    <span className="text-sm text-white/60">5 hours ago</span>
                  </div>
                  <p className="text-white/80">The future of healthcare looks bright with innovations like this!</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </article>
    </main>
  );
}
