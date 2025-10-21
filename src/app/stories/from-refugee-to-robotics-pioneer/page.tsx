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

export default function ArticlePage() {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(892);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Dr. Maria Santos",
      avatar: "/file.svg",
      content: "Elena's story is incredibly inspiring. Her resilience and determination to succeed despite facing such adversity is truly remarkable.",
      date: "3 hours ago",
      likes: 8
    },
    {
      id: 2,
      author: "Sarah Johnson",
      avatar: "/file.svg", 
      content: "This is exactly the kind of story we need to hear more often. Elena's journey shows that with determination, anything is possible.",
      date: "5 hours ago",
      likes: 12
    }
  ]);

  const article = {
    id: "from-refugee-to-robotics-pioneer",
    title: "From Refugee to Robotics Pioneer: Elena's Journey",
    content: `
      <p>Elena Rodriguez's journey from a refugee camp to becoming a leading robotics researcher is a testament to the power of determination, resilience, and the transformative impact of education. Her story is not just one of personal triumph, but a beacon of hope for countless others facing similar challenges.</p>

      <h2>The Journey Begins</h2>
      <p>Born in a small village in Central America, Elena's early life was marked by political instability and economic hardship. When civil unrest forced her family to flee their home, they found themselves in a refugee camp with limited resources and uncertain futures. But even in the most challenging circumstances, Elena's curiosity about the world around her never wavered.</p>

      <p>"I was always fascinated by how things worked," Elena recalls. "Even in the camp, I would take apart broken radios and try to understand their components. I didn't know it then, but that curiosity would become the foundation of my career in robotics."</p>

      <h2>Education as a Lifeline</h2>
      <p>When Elena's family was granted asylum in the United States, she was 12 years old and spoke no English. The transition was difficult, but she approached her new life with the same determination that had helped her survive the refugee camp.</p>

      <p>"Learning English was my first challenge," she says. "But I realized that education was my way out of poverty and my path to helping others. I threw myself into my studies, often staying up late to master concepts that my classmates found difficult."</p>

      <p>Elena's dedication paid off. She excelled in mathematics and science, eventually earning a scholarship to study engineering at a prestigious university. It was there that she discovered her passion for robotics.</p>

      <h2>Breaking Barriers in Robotics</h2>
      <p>As one of the few women in her engineering program, Elena faced numerous challenges. "There were times when I felt like I didn't belong," she admits. "But I remembered where I came from and how far I had already come. That gave me the strength to push through."</p>

      <p>Elena's research focuses on developing robotic systems that can assist in disaster relief and humanitarian aid. Her work combines her technical expertise with her deep understanding of the challenges faced by displaced populations.</p>

      <p>"I want to create technology that helps people in crisis situations," she explains. "My experience as a refugee gives me a unique perspective on what kind of assistance is most needed and how technology can be designed to be truly helpful."</p>

      <h2>Innovation and Impact</h2>
      <p>Elena's most significant contribution to the field is her development of autonomous robotic systems that can navigate disaster zones and provide essential supplies to survivors. These robots are designed to work in environments that are too dangerous for human rescue workers.</p>

      <p>"The key is making the technology intuitive and reliable," Elena says. "In a crisis situation, people need technology that works without requiring extensive training or maintenance. That's been the focus of my research."</p>

      <p>Her innovations have already been deployed in several disaster relief operations, helping to save lives and provide critical support to affected communities. The impact of her work extends far beyond the technical achievements—it represents hope and possibility for countless others.</p>

      <h2>Mentoring the Next Generation</h2>
      <p>Today, Elena is not only a leading researcher but also a dedicated mentor to young women and refugees pursuing careers in STEM. She established a scholarship program specifically for refugee students and regularly speaks at schools and community centers.</p>

      <p>"I want to show young people that their background is not a limitation—it's a strength," she says. "The unique perspectives that come from diverse experiences are exactly what the field of technology needs."</p>

      <p>Elena's mentorship has already helped dozens of students pursue careers in STEM, creating a ripple effect that extends far beyond her own achievements.</p>

      <h2>Looking to the Future</h2>
      <p>As Elena looks ahead, she sees endless possibilities for how technology can be used to address humanitarian challenges. She is currently working on projects that combine robotics with artificial intelligence to create even more sophisticated assistance systems.</p>

      <p>"The goal is not just to create better robots," she explains. "It's to create technology that truly serves humanity, especially those who are most vulnerable. That's what drives me every day."</p>

      <p>Elena's journey from refugee to robotics pioneer is more than just a personal success story—it's a powerful reminder of the potential that exists in every person, regardless of their circumstances. Her work continues to inspire and her impact grows with each life she touches through her innovations and mentorship.</p>
    `,
    author: "Elena Rodriguez",
    authorBio: "Elena Rodriguez is a robotics researcher and humanitarian technologist. She holds a Ph.D. in Robotics from MIT and has developed autonomous systems for disaster relief operations. She is the founder of the Refugee Scholars Program and a visiting professor at Stanford University.",
    authorImage: "/file.svg",
    date: "March 28, 2024",
    readTime: "12 min read",
    category: "impact-stories",
    image: "/file.svg",
    featured: false,
    likes: 892,
    comments: 67,
    views: 12840,
    tags: ["Impact Stories", "Robotics", "Refugee", "Humanitarian", "Innovation", "Mentorship"]
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
              <span className="text-sm text-white/60">Impact Stories</span>
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
