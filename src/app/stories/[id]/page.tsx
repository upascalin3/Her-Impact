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
  Reply
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

export default function ArticlePage({ params }: { params: { id: string } }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(1247);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Dr. Maria Santos",
      avatar: "/file.svg",
      content: "This is truly inspiring! Dr. Chen's work in empathetic AI is exactly what healthcare needs. The potential for improving patient outcomes is incredible.",
      date: "2 hours ago",
      likes: 12
    },
    {
      id: 2,
      author: "Sarah Johnson",
      avatar: "/file.svg", 
      content: "As someone working in healthcare AI, I can attest to the challenges Dr. Chen is addressing. Her approach to combining technical innovation with human empathy is revolutionary.",
      date: "4 hours ago",
      likes: 8
    },
    {
      id: 3,
      author: "Elena Rodriguez",
      avatar: "/file.svg",
      content: "The ethical considerations mentioned here are so important. It's refreshing to see AI research that prioritizes patient well-being over just technical advancement.",
      date: "6 hours ago",
      likes: 15
    }
  ]);

  // Mock article data - in a real app, this would come from an API
  const article: ArticleData = {
    id: params.id,
    title: "AI with Empathy: How Dr. Sarah Chen is Revolutionizing Healthcare",
    content: `
      <p>In the rapidly evolving landscape of artificial intelligence, few researchers have made as profound an impact on healthcare as Dr. Sarah Chen. Her groundbreaking work in empathetic AI is not just transforming how we approach medical diagnosis and treatment—it's redefining what it means to care for patients in the digital age.</p>

      <h2>The Vision Behind Empathetic AI</h2>
      <p>Dr. Chen's journey began with a simple yet revolutionary question: "What if AI could not only diagnose diseases but also understand and respond to the emotional needs of patients?" This question led to the development of her pioneering empathetic AI system, which combines advanced machine learning algorithms with sophisticated natural language processing to create AI that truly understands human emotions.</p>

      <p>"The traditional approach to AI in healthcare has been purely clinical," Dr. Chen explains. "We've been so focused on accuracy and efficiency that we've forgotten the human element. But healthcare isn't just about treating diseases—it's about caring for people."</p>

      <h2>Technical Innovation Meets Human Compassion</h2>
      <p>Dr. Chen's system uses a multi-layered approach that goes far beyond simple pattern recognition. The AI analyzes not just medical data, but also patient communication patterns, emotional indicators, and contextual factors to provide truly personalized care recommendations.</p>

      <p>The technology has already shown remarkable results in clinical trials. Patients interacting with Dr. Chen's empathetic AI system report:</p>
      <ul>
        <li>40% higher satisfaction rates compared to traditional AI systems</li>
        <li>Significantly reduced anxiety during medical consultations</li>
        <li>Better adherence to treatment plans</li>
        <li>Improved overall healthcare experience</li>
      </ul>

      <h2>Breaking Barriers in a Male-Dominated Field</h2>
      <p>Dr. Chen's success hasn't come without challenges. As a woman in the male-dominated field of AI research, she has faced numerous obstacles and biases. "Early in my career, I was often the only woman in the room," she recalls. "There were times when my ideas were dismissed or attributed to male colleagues. But I learned to use these experiences as fuel for my determination."</p>

      <p>Her advice to other women in STEM is both practical and inspiring: "Don't let anyone tell you that your perspective isn't valuable. The unique insights that women bring to technology are exactly what the field needs. We see problems differently, we approach solutions differently, and that diversity of thought is what drives innovation."</p>

      <h2>The Future of Healthcare AI</h2>
      <p>Looking ahead, Dr. Chen envisions a future where AI systems work seamlessly with healthcare providers to deliver truly personalized, compassionate care. Her research is now expanding into areas like mental health support, chronic disease management, and preventive care.</p>

      <p>"We're just scratching the surface of what's possible," she says. "Imagine a world where every patient has access to an AI system that not only understands their medical history but also their emotional state, their fears, their hopes. That's the future we're building."</p>

      <h2>Impact and Recognition</h2>
      <p>Dr. Chen's work has earned her numerous accolades, including the prestigious IEEE Women in Engineering Award and recognition as one of MIT Technology Review's Innovators Under 35. But for her, the greatest reward is seeing the real-world impact of her research.</p>

      <p>"When I hear from patients who say that our AI system made them feel heard and understood, that's when I know we're on the right track," she reflects. "Technology should enhance human connection, not replace it."</p>

      <p>As we look to the future of healthcare, Dr. Sarah Chen's work reminds us that the most powerful technology is that which serves humanity with both intelligence and compassion. Her vision of empathetic AI is not just transforming healthcare—it's showing us what's possible when we combine cutting-edge technology with the timeless values of empathy and understanding.</p>
    `,
    author: "Dr. Sarah Chen",
    authorBio: "Dr. Sarah Chen is a leading researcher in empathetic AI and healthcare technology. She holds a Ph.D. in Computer Science from Stanford University and has published over 50 papers on AI applications in healthcare. She is currently the Director of AI Research at MedTech Innovations and a visiting professor at MIT.",
    authorImage: "/file.svg",
    date: "March 30, 2024",
    readTime: "8 min read",
    category: "stem-innovations",
    image: "/file.svg",
    featured: true,
    likes: 1247,
    comments: 89,
    views: 15420,
    tags: ["AI", "Healthcare", "Innovation", "Women in STEM", "Technology", "Empathy"]
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleShare = async (platform: string) => {
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
      case 'email':
        window.open(`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`);
        break;
      case 'copy':
        await navigator.clipboard.writeText(url);
        // You could add a toast notification here
        break;
    }
    setShowShareMenu(false);
  };

  const handleAddComment = () => {
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
          <Link href="/stories" className="flex items-center gap-2 text-white">
            <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1]" />
            <span className="subheading">Her Impact</span>
          </Link>
          <Link href="/stories" className="flex items-center gap-2 text-white/80 hover:text-white">
            <ArrowLeft size={16} />
            Back to Stories
          </Link>
        </div>
      </header>

      {/* Article Header */}
      <section className="relative overflow-hidden bg-[#0a0f1f] py-20">
        <div className="hero-aura" aria-hidden />
        <div className="relative container-page">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1] flex items-center justify-center">
                <Heart size={16} className="text-white" />
              </div>
              <span className="text-sm text-white/60">STEM Innovations</span>
            </div>
            
            <h1 className="section-title text-4xl md:text-5xl mb-6 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 mb-8 text-white/60">
              <div className="flex items-center gap-2">
                <User size={16} />
                {article.author}
              </div>
              <div className="flex items-center gap-2">
                <CalendarIcon size={16} />
                {article.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                {article.readTime}
              </div>
              <div className="flex items-center gap-2">
                <Eye size={16} />
                {article.views.toLocaleString()} views
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article Image */}
      <section className="bg-[#070b16] py-8">
        <div className="container-page">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image 
                src={article.image} 
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-[#070b16] py-20">
        <div className="container-page">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div 
                  className="prose prose-lg prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Author Card */}
                  <div className="card-glow p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1] flex items-center justify-center">
                        <User size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="subheading text-lg">{article.author}</h3>
                        <p className="text-sm text-white/60">Author</p>
                      </div>
                    </div>
                    <p className="text-sm text-white/70 mb-4">{article.authorBio}</p>
                    <button className="w-full btn btn-outline text-sm">
                      Follow Author
                    </button>
                  </div>

                  {/* Social Actions */}
                  <div className="card-glow p-6">
                    <h3 className="subheading text-lg mb-4">Share this article</h3>
                    <div className="space-y-3">
                      <button
                        onClick={handleLike}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                          isLiked ? 'bg-red-500/20 text-red-400' : 'bg-white/5 text-white/80 hover:bg-white/10'
                        }`}
                      >
                        <Heart size={20} className={isLiked ? 'fill-current' : ''} />
                        {isLiked ? 'Liked' : 'Like'} ({likes})
                      </button>
                      
                      <div className="relative">
                        <button
                          onClick={() => setShowShareMenu(!showShareMenu)}
                          className="w-full flex items-center gap-3 p-3 rounded-lg bg-white/5 text-white/80 hover:bg-white/10 transition-colors"
                        >
                          <Share2 size={20} />
                          Share
                        </button>
                        
                        {showShareMenu && (
                          <div className="absolute top-full left-0 right-0 mt-2 bg-[rgba(6,10,22,0.95)] backdrop-blur-md border border-white/10 rounded-lg p-2 space-y-1">
                            <button onClick={() => handleShare('twitter')} className="w-full flex items-center gap-2 p-2 rounded hover:bg-white/5">
                              <Twitter size={16} />
                              Twitter
                            </button>
                            <button onClick={() => handleShare('linkedin')} className="w-full flex items-center gap-2 p-2 rounded hover:bg-white/5">
                              <Linkedin size={16} />
                              LinkedIn
                            </button>
                            <button onClick={() => handleShare('facebook')} className="w-full flex items-center gap-2 p-2 rounded hover:bg-white/5">
                              <Facebook size={16} />
                              Facebook
                            </button>
                            <button onClick={() => handleShare('email')} className="w-full flex items-center gap-2 p-2 rounded hover:bg-white/5">
                              <Mail size={16} />
                              Email
                            </button>
                            <button onClick={() => handleShare('copy')} className="w-full flex items-center gap-2 p-2 rounded hover:bg-white/5">
                              <Copy size={16} />
                              Copy Link
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Article Stats */}
                  <div className="card-glow p-6">
                    <h3 className="subheading text-lg mb-4">Article Stats</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-white/60">Views</span>
                        <span className="text-white">{article.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/60">Likes</span>
                        <span className="text-white">{likes.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/60">Comments</span>
                        <span className="text-white">{comments.length}</span>
                      </div>
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
            
            {/* Add Comment */}
            <div className="card-glow p-6 mb-8">
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
                  <div className="flex justify-end mt-3">
                    <button
                      onClick={handleAddComment}
                      disabled={!commentText.trim()}
                      className="btn btn-primary btn-glow bg-white text-[#0b3d91] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Post Comment
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Comments List */}
            <div className="space-y-6">
              {comments.map((comment) => (
                <div key={comment.id} className="card-glow p-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1] flex items-center justify-center flex-shrink-0">
                      <User size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="subheading text-lg">{comment.author}</h4>
                        <span className="text-sm text-white/60">{comment.date}</span>
                      </div>
                      <p className="text-white/80 mb-3">{comment.content}</p>
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-1 text-white/60 hover:text-white transition-colors">
                          <ThumbsUp size={16} />
                          {comment.likes}
                        </button>
                        <button className="flex items-center gap-1 text-white/60 hover:text-white transition-colors">
                          <Reply size={16} />
                          Reply
                        </button>
                      </div>
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
