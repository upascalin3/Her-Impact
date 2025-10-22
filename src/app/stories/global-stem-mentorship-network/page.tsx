"use client";
import { useState } from "react";
import { 
  ArrowLeft, 
  Heart, 
  MessageSquare, 
  Share2, 
  Copy, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Mail,
  BookOpen,
  Calendar as CalendarIcon,
  User,
  Clock,
  Eye,
  ThumbsUp,
  Reply,
  Users2
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ArticleData {
  id: string;
  title: string;
  content: string;
  author: string;
  authorBio: string;
  authorImage: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured: boolean;
  likes: number;
  comments: number;
  views: number;
  tags: string[];
}

export default function ArticlePage() {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(234);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Dr. Maria Santos",
      avatar: "/file.svg",
      content: "This mentorship network has been a game-changer for my career. The connections I've made through this program have opened doors I never thought possible.",
      date: "2 hours ago",
      likes: 8
    },
    {
      id: 2,
      author: "Sarah Johnson",
      avatar: "/file.svg", 
      content: "As a mentor in this program, I've seen firsthand how powerful these connections can be. The impact on mentees' confidence and career trajectories is remarkable.",
      date: "4 hours ago",
      likes: 12
    },
    {
      id: 3,
      author: "Elena Rodriguez",
      avatar: "/file.svg",
      content: "The global reach of this network is incredible. I've been able to connect with women in STEM from every continent, sharing experiences and supporting each other's growth.",
      date: "6 hours ago",
      likes: 15
    }
  ]);

  const article: ArticleData = {
    id: "global-stem-mentorship-network",
    title: "Global STEM Mentorship Network",
    content: `
      <p>Connecting experienced professionals with emerging talent across the globe, the Global STEM Mentorship Network represents a revolutionary approach to professional development in science, technology, engineering, and mathematics.</p>

      <h2>Building Bridges Across Continents</h2>
      <p>Founded by Dr. Elena Rodriguez in 2020, the Global STEM Mentorship Network has grown from a small initiative to a worldwide community of over 10,000 women in STEM fields. The network operates on a simple yet powerful principle: experienced professionals sharing their knowledge, insights, and networks with emerging talent.</p>

      <p>"When I started my career in robotics, I often felt isolated as one of the few women in my field," Dr. Rodriguez explains. "I wanted to create a platform where women could support each other, regardless of geographical boundaries or career stages."</p>

      <h2>How the Network Works</h2>
      <p>The network uses a sophisticated matching algorithm that pairs mentors and mentees based on:</p>
      <ul>
        <li>Professional expertise and specializations</li>
        <li>Career goals and aspirations</li>
        <li>Geographic preferences and time zones</li>
        <li>Communication styles and mentoring preferences</li>
        <li>Industry experience and background</li>
      </ul>

      <h2>Success Stories</h2>
      <p>Since its inception, the network has facilitated over 5,000 successful mentor-mentee relationships. The results speak for themselves:</p>
      <ul>
        <li>85% of mentees report significant career advancement within 12 months</li>
        <li>92% of participants feel more confident in their professional abilities</li>
        <li>78% of mentees have successfully transitioned to leadership roles</li>
        <li>94% of mentors report personal satisfaction and professional growth</li>
      </ul>

      <h2>Global Impact</h2>
      <p>The network spans across 50+ countries, with active chapters in major cities worldwide. From Silicon Valley to Bangalore, from London to São Paulo, women in STEM are connecting, learning, and growing together.</p>

      <p>"The diversity of perspectives in our network is our greatest strength," says Dr. Rodriguez. "When a software engineer in Nairobi connects with a data scientist in Stockholm, both benefit from the exchange of ideas and experiences."</p>

      <h2>Getting Involved</h2>
      <p>Whether you're an experienced professional looking to give back or an emerging talent seeking guidance, the Global STEM Mentorship Network welcomes you. The application process is straightforward, and the network provides comprehensive training for both mentors and mentees.</p>

      <p>Join thousands of women who are transforming the landscape of STEM through the power of mentorship and connection.</p>
    `,
    author: "Dr. Elena Rodriguez",
    authorBio: "Dr. Elena Rodriguez is a robotics engineer and founder of the Global STEM Mentorship Network. With over 15 years of experience in AI and robotics, she has dedicated her career to advancing women in STEM fields.",
    authorImage: "/file.svg",
    date: "March 28, 2024",
    readTime: "5 min read",
    category: "community-collaboration",
    image: "/file.svg",
    featured: false,
    likes: 234,
    comments: 45,
    views: 18900,
    tags: ["Mentorship", "Global Network", "STEM", "Professional Development"]
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = article.title;
    
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
      case 'mail':
        window.open(`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`);
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        break;
    }
    setShowShareMenu(false);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim()) {
      const newComment = {
        id: comments.length + 1,
        author: "You",
        avatar: "/file.svg",
        content: commentText,
        date: "Just now",
        likes: 0
      };
      setComments([newComment, ...comments]);
      setCommentText("");
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
          <Link href="/categories/community-collaboration" className="flex items-center gap-2 text-white/80 hover:text-white">
            <ArrowLeft size={16} />
            Back to Community & Collaboration
          </Link>
        </div>
      </header>

      {/* Article Header */}
      <section className="bg-[#0a0f1f] py-20">
        <div className="container-page">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1] flex items-center justify-center">
                <Users2 size={16} className="text-white" />
              </div>
              <span className="text-sm text-white/60">Community Project</span>
            </div>
            
            <h1 className="section-title text-4xl md:text-5xl mb-6 leading-tight">
              {article.title}
            </h1>
            
            <p className="body-text text-lg text-[#c9d4ff] mb-8">
              Connecting experienced professionals with emerging talent across the globe.
            </p>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1] flex items-center justify-center">
                  <User size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">{article.author}</p>
                  <p className="text-sm text-white/60">{article.authorBio}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-white/60">
                <span className="flex items-center gap-1">
                  <CalendarIcon size={16} />
                  {article.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={16} />
                  {article.readTime}
                </span>
                <span className="flex items-center gap-1">
                  <Eye size={16} />
                  {article.views.toLocaleString()} views
                </span>
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

            {/* Article Actions */}
            <div className="flex items-center gap-4">
              <button 
                onClick={handleLike}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isLiked 
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Heart size={18} className={isLiked ? 'fill-current' : ''} />
                <span>{likes}</span>
              </button>
              
              <button className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white/70 hover:bg-white/20 hover:text-white rounded-lg transition-colors">
                <MessageSquare size={18} />
                <span>{article.comments}</span>
              </button>
              
              <div className="relative">
                <button 
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white/70 hover:bg-white/20 hover:text-white rounded-lg transition-colors"
                >
                  <Share2 size={18} />
                  Share
                </button>
                
                {showShareMenu && (
                  <div className="absolute top-full left-0 mt-2 bg-[#070b16] border border-white/10 rounded-lg p-2 shadow-xl z-10">
                    <button onClick={() => handleShare('twitter')} className="flex items-center gap-2 w-full px-3 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded transition-colors">
                      <Twitter size={16} />
                      Twitter
                    </button>
                    <button onClick={() => handleShare('linkedin')} className="flex items-center gap-2 w-full px-3 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded transition-colors">
                      <Linkedin size={16} />
                      LinkedIn
                    </button>
                    <button onClick={() => handleShare('facebook')} className="flex items-center gap-2 w-full px-3 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded transition-colors">
                      <Facebook size={16} />
                      Facebook
                    </button>
                    <button onClick={() => handleShare('mail')} className="flex items-center gap-2 w-full px-3 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded transition-colors">
                      <Mail size={16} />
                      Email
                    </button>
                    <button onClick={() => handleShare('copy')} className="flex items-center gap-2 w-full px-3 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded transition-colors">
                      <Copy size={16} />
                      Copy Link
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Image */}
      <section className="bg-[#070b16] py-8">
        <div className="container-page">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 bg-gradient-to-tr from-[#f48fb1]/40 to-[#79a1ff]/30 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Users2 size={64} className="text-white/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-[#070b16] py-20">
        <div className="container-page">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
              {/* Main Content */}
              <div className="xl:col-span-3">
                <div 
                  className="prose prose-lg prose-invert max-w-none prose-headings:text-white prose-p:text-white/90 prose-strong:text-white prose-ul:text-white/90 prose-li:text-white/90"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>

              {/* Sidebar */}
              <div className="xl:col-span-2">
                <div className="sticky top-24 space-y-6">
                  {/* Author Card */}
                  <div className="card-glow p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1] flex items-center justify-center">
                        <User size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{article.author}</h3>
                        <p className="text-sm text-white/60">Network Founder</p>
                      </div>
                    </div>
                    <p className="text-white/70 text-sm">{article.authorBio}</p>
                  </div>

                  {/* Related Articles */}
                  <div className="card-glow p-6">
                    <h3 className="font-semibold text-white mb-4">Related Projects</h3>
                    <div className="space-y-4">
                      <Link href="/stories/women-in-ai-research-collaboration" className="block group">
                        <div className="flex items-start gap-3">
                          <div className="w-12 h-12 bg-gradient-to-tr from-[#f48fb1]/40 to-[#79a1ff]/30 rounded-lg flex items-center justify-center">
                            <Users2 size={20} className="text-white/70" />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-white group-hover:text-white/90 transition-colors">
                              Women in AI Research Collaboration
                            </h4>
                            <p className="text-xs text-white/60 mt-1">A collaborative research initiative</p>
                          </div>
                        </div>
                      </Link>
                      
                      <Link href="/stories/stem-education-outreach-program" className="block group">
                        <div className="flex items-start gap-3">
                          <div className="w-12 h-12 bg-gradient-to-tr from-[#f48fb1]/40 to-[#79a1ff]/30 rounded-lg flex items-center justify-center">
                            <Users2 size={20} className="text-white/70" />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-white group-hover:text-white/90 transition-colors">
                              STEM Education Outreach Program
                            </h4>
                            <p className="text-xs text-white/60 mt-1">Bringing STEM education to underserved communities</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="bg-[#0a0f1f] py-20">
        <div className="container-page">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-3xl mb-8">Comments ({comments.length})</h2>
            
            {/* Comment Form */}
            <form onSubmit={handleCommentSubmit} className="mb-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1] flex items-center justify-center flex-shrink-0">
                  <User size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <textarea
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Share your thoughts..."
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-white/30 resize-none"
                    rows={3}
                  />
                  <div className="flex justify-end mt-2">
                    <button 
                      type="submit"
                      disabled={!commentText.trim()}
                      className="btn btn-primary btn-glow bg-white text-[#0b3d91] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Post Comment
                    </button>
                  </div>
                </div>
              </div>
            </form>

            {/* Comments List */}
            <div className="space-y-6">
              {comments.map((comment) => (
                <div key={comment.id} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1] flex items-center justify-center flex-shrink-0">
                    <User size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-white">{comment.author}</span>
                      <span className="text-sm text-white/60">{comment.date}</span>
                    </div>
                    <p className="text-white/90 mb-2">{comment.content}</p>
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-1 text-white/60 hover:text-white transition-colors">
                        <ThumbsUp size={16} />
                        <span className="text-sm">{comment.likes}</span>
                      </button>
                      <button className="flex items-center gap-1 text-white/60 hover:text-white transition-colors">
                        <Reply size={16} />
                        <span className="text-sm">Reply</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
