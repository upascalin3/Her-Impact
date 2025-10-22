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

export default function ArticlePage() {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(189);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Dr. Anna Kim",
      avatar: "/file.svg",
      content: "This collaboration has been instrumental in advancing ethical AI research. The diverse perspectives brought together here are exactly what the field needs.",
      date: "3 hours ago",
      likes: 7
    },
    {
      id: 2,
      author: "Sarah Chen",
      avatar: "/file.svg", 
      content: "Being part of this initiative has opened my eyes to the importance of inclusive AI development. The research outcomes speak for themselves.",
      date: "5 hours ago",
      likes: 11
    }
  ]);

  const article = {
    id: "women-in-ai-research-collaboration",
    title: "Women in AI Research Collaboration",
    content: `
      <p>A collaborative research initiative advancing AI ethics and inclusion, bringing together brilliant minds from around the world to shape the future of artificial intelligence.</p>

      <h2>The Vision</h2>
      <p>Founded by Dr. Sarah Chen in 2021, this initiative addresses a critical gap in AI research: the need for diverse perspectives in developing ethical artificial intelligence systems. The collaboration brings together women researchers from 25+ countries to tackle some of the most pressing challenges in AI ethics.</p>

      <h2>Research Focus Areas</h2>
      <p>Our collaborative research spans several key areas:</p>
      <ul>
        <li><strong>Bias Detection and Mitigation:</strong> Developing algorithms to identify and reduce bias in AI systems</li>
        <li><strong>Ethical AI Frameworks:</strong> Creating guidelines for responsible AI development</li>
        <li><strong>Inclusive Design:</strong> Ensuring AI systems work for diverse populations</li>
        <li><strong>Transparency and Explainability:</strong> Making AI decisions more understandable</li>
      </ul>

      <h2>Global Impact</h2>
      <p>Since its inception, the collaboration has published over 50 research papers in top-tier conferences and journals. The work has influenced AI policy in 15+ countries and has been cited by major tech companies in their AI ethics guidelines.</p>

      <h2>Success Stories</h2>
      <p>Dr. Maria Santos from Brazil developed a breakthrough algorithm for detecting gender bias in hiring AI systems. Her work is now being implemented by Fortune 500 companies worldwide.</p>

      <p>Dr. Priya Sharma from India created a framework for ethical AI in healthcare that has been adopted by medical institutions across three continents.</p>

      <h2>Getting Involved</h2>
      <p>We welcome researchers, practitioners, and students who are passionate about ethical AI. Whether you're an established researcher or just starting your journey in AI, there's a place for you in our collaboration.</p>
    `,
    author: "Dr. Sarah Chen",
    authorBio: "Dr. Sarah Chen is a leading AI ethics researcher and founder of the Women in AI Research Collaboration. She has published over 100 papers on AI ethics and is a recognized expert in the field.",
    authorImage: "/file.svg",
    date: "March 24, 2024",
    readTime: "7 min read",
    category: "community-collaboration",
    image: "/file.svg",
    featured: false,
    likes: 189,
    comments: 32,
    views: 15600,
    tags: ["AI Ethics", "Collaboration", "Research", "Women in STEM"]
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
              A collaborative research initiative advancing AI ethics and inclusion.
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
                        <p className="text-sm text-white/60">AI Ethics Researcher</p>
                      </div>
                    </div>
                    <p className="text-white/70 text-sm">{article.authorBio}</p>
                  </div>

                  {/* Related Articles */}
                  <div className="card-glow p-6">
                    <h3 className="font-semibold text-white mb-4">Related Projects</h3>
                    <div className="space-y-4">
                      <Link href="/stories/global-stem-mentorship-network" className="block group">
                        <div className="flex items-start gap-3">
                          <div className="w-12 h-12 bg-gradient-to-tr from-[#f48fb1]/40 to-[#79a1ff]/30 rounded-lg flex items-center justify-center">
                            <Users2 size={20} className="text-white/70" />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-white group-hover:text-white/90 transition-colors">
                              Global STEM Mentorship Network
                            </h4>
                            <p className="text-xs text-white/60 mt-1">Connecting professionals worldwide</p>
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

