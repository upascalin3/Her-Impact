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

  // Mock story data - in a real app, this would come from an API
  const story: ArticleData = {
    id: params.id,
    title: "My Journey: From Fear to AI Pioneer",
    content: `
      <p>I never thought I'd become a tech leader. Growing up, I was always the quiet one in the back of the classroom, afraid to raise my hand even when I knew the answer. The idea of leading a research team seemed impossible to me.</p>

      <h2>The Day Everything Changed</h2>
      <p>It was my third year of medical school when I had my first panic attack. I was sitting in a lecture about AI applications in healthcare, surrounded by confident male classmates who seemed to understand everything instantly. I felt like an impostor, like I didn't belong there.</p>

      <p>But something clicked that day. As the professor explained how AI could revolutionize patient care, I realized something: I wasn't just interested in medicine—I was fascinated by the technology that could make it better. The fear I felt wasn't about not belonging; it was about stepping into something completely new.</p>

      <h2>Learning to Code at 25</h2>
      <p>I started learning to code in my spare time, hiding my laptop under my medical textbooks. My classmates thought I was crazy—why would a future doctor need to know programming? But I couldn't shake the feeling that this was where I was meant to be.</p>

      <p>Those first months were brutal. I spent countless nights staring at error messages, feeling stupid and inadequate. But every small breakthrough—every program that finally ran—felt like a victory. I was learning to think differently, to solve problems in ways I never imagined.</p>

      <h2>The Impostor Syndrome Battle</h2>
      <p>Even after switching to computer science, the fear didn't disappear. I was constantly comparing myself to my classmates who had been coding since high school. I felt like I was always playing catch-up, like I was somehow less qualified because my journey was different.</p>

      <p>It took me years to realize that my medical background wasn't a disadvantage—it was my superpower. While others were focused on the technical aspects, I understood the human side of healthcare. I could see problems that others missed because I had been in those hospital rooms, talking to patients, understanding their fears and frustrations.</p>

      <h2>Building My First AI System</h2>
      <p>My breakthrough came during my PhD research. I was working on an AI system for medical diagnosis, but something felt wrong. The system was technically sound, but it felt cold, clinical. It could identify diseases but couldn't understand the emotional impact on patients.</p>

      <p>That's when I had my "aha" moment. What if AI could not just diagnose, but also empathize? What if it could understand not just the medical data, but the human experience behind it?</p>

      <p>I spent months developing what I called "empathetic AI"—a system that could analyze not just medical symptoms, but emotional indicators, patient communication patterns, and contextual factors. It was revolutionary, but more importantly, it felt right.</p>

      <h2>The Challenges of Being Different</h2>
      <p>Being a woman in AI research wasn't easy. I was often the only woman in the room, and I faced constant doubts about my abilities. There were times when my ideas were dismissed or attributed to male colleagues. There were moments when I questioned whether I belonged in this field at all.</p>

      <p>But I learned to use these experiences as fuel. Every time someone underestimated me, I worked harder. Every time my ideas were overlooked, I found new ways to make them heard. I realized that my unique perspective—my combination of medical knowledge and technical skills—was exactly what the field needed.</p>

      <h2>Leading with Empathy</h2>
      <p>Today, I lead a research team of 15 brilliant minds, and I've learned that the best leaders are those who understand both technology and humanity. My team isn't just building AI systems; we're creating technology that serves people, that understands their needs, their fears, their hopes.</p>

      <p>When I interview new team members, I don't just look at their technical skills. I look for empathy, for the ability to understand the human impact of what we're building. Because the most powerful technology isn't just smart—it's wise, compassionate, and truly human-centered.</p>

      <h2>My Message to Other Women</h2>
      <p>If you're reading this and feeling like you don't belong in tech, I want you to know: your unique perspective is exactly what this field needs. Don't let anyone tell you that your background is a disadvantage. The challenges you've faced, the experiences you've had—they're not obstacles, they're superpowers.</p>

      <p>It's okay to be afraid. It's okay to feel like an impostor. But don't let those feelings stop you from pursuing what you're passionate about. The world needs more women in tech, not just because it's the right thing to do, but because we bring something essential to the table: the ability to see technology through a human lens.</p>

      <p>My journey from a scared medical student to an AI research director wasn't easy, but it was worth every moment of doubt, every late night of coding, every time I had to prove myself. Because now I get to build technology that truly serves humanity—and that's the greatest privilege of all.</p>
    `,
    author: "Dr. Sarah Chen",
    authorBio: "Former medical student who discovered her passion for technology during a difficult period in her life. Now leads AI research focused on empathetic healthcare solutions.",
    authorImage: "/file.svg",
    date: "March 30, 2024",
    readTime: "8 min read",
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
            {/* Category removed - stories are personal narratives */}
            
            <h1 className="section-title text-4xl md:text-5xl mb-6 leading-tight">
              {story.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 mb-8 text-white/60">
              <div className="flex items-center gap-2">
                <User size={16} />
                {story.author}
              </div>
              <div className="flex items-center gap-2">
                <CalendarIcon size={16} />
                {story.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                {story.readTime}
              </div>
              <div className="flex items-center gap-2">
                <Eye size={16} />
                {story.views.toLocaleString()} views
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {story.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story image removed - focusing on personal narratives */}

      {/* Article Content */}
      <section className="bg-[#070b16] py-20">
        <div className="container-page">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
              {/* Main Content */}
              <div className="xl:col-span-3">
                <div 
                  className="prose prose-lg prose-invert max-w-none prose-headings:text-white prose-p:text-white/90 prose-strong:text-white prose-ul:text-white/90 prose-li:text-white/90"
                  dangerouslySetInnerHTML={{ __html: story.content }}
                />
              </div>

              {/* Enhanced Sidebar - Now Wider */}
              <div className="xl:col-span-2">
                <div className="sticky top-24 space-y-6">
                  {/* Enhanced Author Card */}
                  <div className="card-glow p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        <Image 
                          src={story.authorImage || "/file.svg"} 
                          alt={story.author} 
                          width={64} 
                          height={64} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="subheading text-xl mb-1">{story.author}</h3>
                        <p className="text-sm text-white/60 mb-2">Author & Researcher</p>
                        <div className="flex items-center gap-2 text-xs text-white/50">
                          <CalendarIcon size={12} />
                          <span>Published {story.date}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-white/80 mb-6 leading-relaxed">{story.authorBio}</p>
                    <div className="flex gap-3">
                      <button className="flex-1 btn btn-primary btn-glow bg-white text-[#0b3d91] text-sm">
                        Follow Author
                      </button>
                      <button className="btn btn-outline text-sm">
                        <MessageSquare size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Enhanced Social Actions */}
                  <div className="card-glow p-8">
                    <h3 className="subheading text-xl mb-6">Share this story</h3>
                    <div className="space-y-4">
                      <button
                        onClick={handleLike}
                        className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-200 ${
                          isLiked 
                            ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                            : 'bg-white/5 text-white/80 hover:bg-white/10 border border-white/10'
                        }`}
                      >
                        <Heart size={20} className={isLiked ? 'fill-current' : ''} />
                        <span className="font-medium">
                          {isLiked ? 'Liked' : 'Like'} ({likes.toLocaleString()})
                        </span>
                      </button>
                      
                      <div className="relative">
                        <button
                          onClick={() => setShowShareMenu(!showShareMenu)}
                          className="w-full flex items-center gap-4 p-4 rounded-xl bg-white/5 text-white/80 hover:bg-white/10 transition-all duration-200 border border-white/10"
                        >
                          <Share2 size={20} />
                          <span className="font-medium">Share</span>
                        </button>
                        
                        {showShareMenu && (
                          <div className="absolute top-full left-0 right-0 mt-3 bg-[rgba(6,10,22,0.98)] backdrop-blur-xl border border-white/20 rounded-xl p-4 space-y-2 shadow-2xl">
                            <button onClick={() => handleShare('twitter')} className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                              <Twitter size={18} />
                              <span>Share on Twitter</span>
                            </button>
                            <button onClick={() => handleShare('linkedin')} className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                              <Linkedin size={18} />
                              <span>Share on LinkedIn</span>
                            </button>
                            <button onClick={() => handleShare('facebook')} className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                              <Facebook size={18} />
                              <span>Share on Facebook</span>
                            </button>
                            <button onClick={() => handleShare('email')} className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                              <Mail size={18} />
                              <span>Share via Email</span>
                            </button>
                            <button onClick={() => handleShare('copy')} className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                              <Copy size={18} />
                              <span>Copy Link</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Article Stats */}
                  <div className="card-glow p-8">
                    <h3 className="subheading text-xl mb-6">Story Performance</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                        <div className="flex items-center gap-3">
                          <Eye size={18} className="text-blue-400" />
                          <span className="text-white/80">Views</span>
                        </div>
                        <span className="text-white font-semibold">{story.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                        <div className="flex items-center gap-3">
                          <Heart size={18} className="text-red-400" />
                          <span className="text-white/80">Likes</span>
                        </div>
                        <span className="text-white font-semibold">{likes.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                        <div className="flex items-center gap-3">
                          <MessageSquare size={18} className="text-green-400" />
                          <span className="text-white/80">Comments</span>
                        </div>
                        <span className="text-white font-semibold">{comments.length}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                        <div className="flex items-center gap-3">
                          <Clock size={18} className="text-purple-400" />
                          <span className="text-white/80">Read Time</span>
                        </div>
                        <span className="text-white font-semibold">{story.readTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Related Articles */}
                  <div className="card-glow p-8">
                    <h3 className="subheading text-xl mb-6">Related Stories</h3>
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                        <h4 className="text-white font-medium mb-2">Women Leading AI Innovation</h4>
                        <p className="text-sm text-white/60">5 min read</p>
                      </div>
                      <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                        <h4 className="text-white font-medium mb-2">Breaking Barriers in Tech</h4>
                        <p className="text-sm text-white/60">7 min read</p>
                      </div>
                      <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                        <h4 className="text-white font-medium mb-2">The Future of Healthcare AI</h4>
                        <p className="text-sm text-white/60">6 min read</p>
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
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title text-3xl mb-8">Story Comments ({comments.length})</h2>
            
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
