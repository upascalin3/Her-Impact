"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  BookOpen, 
  Calendar, 
  User, 
  Eye, 
  Heart, 
  MessageSquare, 
  Share2, 
  Clock,
  Award,
  GraduationCap,
  MapPin,
  Globe,
  Users,
  Target,
  Lightbulb,
  Shield,
  Star,
  CheckCircle,
  ExternalLink,
  Twitter,
  Linkedin,
  Facebook,
  Mail
} from "lucide-react";

export default function DrClaireKarekeziArticle() {
  const [isLiked, setIsLiked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Dr. Sarah Johnson",
      role: "Neurosurgeon",
      avatar: "/file.svg",
      content: "Dr. Karekezi's work in Rwanda has been truly transformative. Her approach to neurosurgery in resource-limited settings is revolutionary.",
      time: "2 hours ago",
      likes: 12
    },
    {
      id: 2,
      author: "Maria Rodriguez",
      role: "Medical Student",
      avatar: "/file.svg",
      content: "As a medical student in Africa, Dr. Karekezi's story gives me hope. She proves that with determination, we can overcome any barrier.",
      time: "5 hours ago",
      likes: 8
    }
  ]);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = "Dr. Claire Karekezi: Pioneering Neurosurgery in Rwanda";
    
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
        alert('Link copied to clipboard!');
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
        role: "Reader",
        avatar: "/file.svg",
        content: commentText,
        time: "Just now",
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
          <Link href="/categories/impact-stories" className="flex items-center gap-2 text-white">
            <ArrowLeft size={16} />
            Back to Impact Stories
          </Link>
          <div className="flex items-center gap-4">
            <button 
              onClick={handleLike}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                isLiked 
                  ? 'bg-red-500/20 text-red-400' 
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              <Heart size={18} className={isLiked ? 'fill-current' : ''} />
              {isLiked ? 'Liked' : 'Like'}
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
                    <ExternalLink size={16} />
                    Copy Link
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Article Header */}
      <section className="bg-[#0a0f1f] py-20">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#79a1ff] to-[#f48fb1] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award size={16} />
                Impact Story
              </div>
              <h1 className="section-title text-4xl md:text-5xl mb-6">
                Dr. Claire Karekezi: Pioneering Neurosurgery in Rwanda
              </h1>
              <p className="body-text text-xl text-[#c9d4ff] mb-8">
                From overcoming resource limitations to establishing Rwanda's first comprehensive neurosurgery program, Dr. Claire Karekezi has transformed healthcare in East Africa through innovation, determination, and unwavering commitment to her patients.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>Published March 15, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>8 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye size={16} />
                  <span>2.4k views</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full max-w-lg mx-auto aspect-square glow-ring glass rounded-2xl overflow-hidden">
                <div className="absolute inset-0 dots-wave opacity-60" />
                <Image 
                  src="/Dr-Claire-Karekezi.png" 
                  alt="Dr. Claire Karekezi - Pioneering Neurosurgeon" 
                  fill 
                  className="object-cover rounded-2xl" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-[#070b16]">
        <div className="container-page">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert max-w-none">
              <h2 className="section-title text-3xl mb-6">Breaking Barriers in African Healthcare</h2>
              
              <p className="body-text text-lg mb-6">
                Dr. Claire Karekezi's journey to becoming Rwanda's first female neurosurgeon is a testament to the power of determination and the transformative impact of women in STEM. Born and raised in Rwanda, Dr. Karekezi witnessed firsthand the critical need for specialized medical care in her country, particularly in the field of neurosurgery.
              </p>

              <p className="body-text text-lg mb-6">
                After completing her medical degree in Rwanda, Dr. Karekezi pursued advanced training in neurosurgery abroad, facing numerous challenges including language barriers, cultural differences, and limited resources. However, her unwavering commitment to serving her community drove her to excel in one of medicine's most demanding specialties.
              </p>

              <h3 className="section-title text-2xl mb-4 mt-8">Establishing Rwanda's First Neurosurgery Program</h3>
              
              <p className="body-text text-lg mb-6">
                Upon returning to Rwanda, Dr. Karekezi faced the daunting task of establishing the country's first comprehensive neurosurgery program. With limited infrastructure and resources, she had to be innovative in her approach, often adapting techniques and equipment to work within the constraints of a developing healthcare system.
              </p>

              <div className="glass rounded-2xl p-8 my-8">
                <h4 className="subheading text-xl mb-4">Key Achievements</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                    <span className="body-text">Established Rwanda's first neurosurgery department at King Faisal Hospital</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                    <span className="body-text">Trained over 50 medical professionals in neurosurgical techniques</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                    <span className="body-text">Performed over 1,000 complex neurosurgical procedures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                    <span className="body-text">Developed innovative techniques for resource-limited settings</span>
                  </li>
                </ul>
              </div>

              <h3 className="section-title text-2xl mb-4 mt-8">Innovation in Resource-Limited Settings</h3>
              
              <p className="body-text text-lg mb-6">
                Dr. Karekezi's work has been characterized by her ability to innovate within constraints. She has developed cost-effective surgical techniques, established telemedicine connections with international specialists, and created training programs that can be replicated across Africa.
              </p>

              <p className="body-text text-lg mb-6">
                Her approach to neurosurgery in resource-limited settings has been published in international medical journals and has influenced healthcare practices across the continent. She has also been instrumental in establishing partnerships between Rwandan hospitals and international medical institutions.
              </p>

              <h3 className="section-title text-2xl mb-4 mt-8">Mentoring the Next Generation</h3>
              
              <p className="body-text text-lg mb-6">
                Beyond her clinical work, Dr. Karekezi is passionate about mentoring young medical professionals, particularly women. She has established scholarship programs for female medical students and created mentorship networks that support women pursuing careers in surgery and medicine.
              </p>

              <blockquote className="glass rounded-2xl p-6 my-8 border-l-4 border-[#79a1ff]">
                <p className="body-text text-lg italic text-[#c9d4ff] mb-4">
                  "When I started my journey in neurosurgery, I was told that this field was not for women, especially not for African women. But I believed that every patient deserves the best possible care, regardless of where they are born. Today, I'm proud to say that we've proven that excellence knows no gender or geographic boundaries."
                </p>
                <cite className="text-white/70">— Dr. Claire Karekezi</cite>
              </blockquote>

              <h3 className="section-title text-2xl mb-4 mt-8">Impact and Recognition</h3>
              
              <p className="body-text text-lg mb-6">
                Dr. Karekezi's work has not gone unnoticed. She has received numerous awards and recognition for her contributions to healthcare in Africa, including the African Union's Excellence in Healthcare Award and the World Health Organization's Global Health Leadership Award.
              </p>

              <p className="body-text text-lg mb-6">
                Her story has inspired countless young women across Africa to pursue careers in medicine and surgery, proving that with determination and the right support, women can excel in any field, even in traditionally male-dominated specialties like neurosurgery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-20 bg-[#0a0f1f]">
        <div className="container-page">
          <div className="max-w-4xl mx-auto">
            <h3 className="section-title text-3xl mb-8">What People Are Saying</h3>
            
            {/* Comment Form */}
            <form onSubmit={handleCommentSubmit} className="glass rounded-2xl p-6 mb-8">
              <h4 className="subheading text-xl mb-4">Share Your Thoughts</h4>
              <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="What does Dr. Karekezi's story mean to you?"
                className="w-full h-32 rounded-lg px-4 py-3 bg-white/5 border border-white/10 outline-none text-white placeholder:text-white/60 focus:border-[#79a1ff] transition-colors resize-none mb-4"
              />
              <button
                type="submit"
                className="btn btn-primary btn-glow bg-gradient-to-r from-[#79a1ff] to-[#f48fb1] text-white flex items-center gap-2"
              >
                <MessageSquare size={18} />
                Post Comment
              </button>
            </form>

            {/* Comments List */}
            <div className="space-y-6">
              {comments.map((comment) => (
                <div key={comment.id} className="glass rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1] flex items-center justify-center flex-shrink-0">
                      <User size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h5 className="font-medium text-white">{comment.author}</h5>
                        <span className="text-sm text-white/60">{comment.role}</span>
                        <span className="text-sm text-white/40">•</span>
                        <span className="text-sm text-white/40">{comment.time}</span>
                      </div>
                      <p className="body-text text-white/80 mb-3">{comment.content}</p>
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-1 text-white/60 hover:text-white transition-colors">
                          <Heart size={16} />
                          <span className="text-sm">{comment.likes}</span>
                        </button>
                        <button className="text-white/60 hover:text-white transition-colors text-sm">
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

      {/* Related Stories */}
      <section className="py-20 bg-[#070b16]">
        <div className="container-page">
          <h3 className="section-title text-3xl mb-8 text-center">More Impact Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "From Refugee to Robotics Pioneer",
                excerpt: "How one woman's journey from displacement to innovation is changing the world of robotics.",
                href: "/stories/from-refugee-to-robotics-pioneer",
                image: "/file.svg"
              },
              {
                title: "Women in AI Research Collaboration",
                excerpt: "Breaking barriers in artificial intelligence through global collaboration and mentorship.",
                href: "/stories/women-in-ai-research-collaboration",
                image: "/file.svg"
              },
              {
                title: "Global STEM Mentorship Network",
                excerpt: "Building bridges across continents to empower the next generation of women in STEM.",
                href: "/stories/global-stem-mentorship-network",
                image: "/file.svg"
              }
            ].map((story, index) => (
              <Link key={index} href={story.href} className="glass rounded-2xl overflow-hidden hover:bg-white/5 transition-colors group">
                <div className="h-48 bg-gradient-to-tr from-[#f48fb1]/40 to-[#79a1ff]/30" />
                <div className="p-6">
                  <h4 className="subheading text-xl mb-2 group-hover:text-white">{story.title}</h4>
                  <p className="body-text text-white/70 mb-4">{story.excerpt}</p>
                  <div className="flex items-center gap-2 text-[#79a1ff] text-sm font-medium">
                    <span>Read More</span>
                    <ExternalLink size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
