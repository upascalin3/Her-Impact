"use client";
import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { 
  Home as HomeIcon, 
  Grid3X3, 
  BookOpen, 
  Users, 
  Mail, 
  Check, 
  ArrowRight, 
  Share2, 
  ChevronLeft, 
  ChevronRight,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Heart,
  Lightbulb,
  GraduationCap,
  Users2,
  BookOpenCheck,
  TrendingUp,
  MessageSquare,
  Calendar,
  History,
  Shield,
  Eye,
  Lock,
  Globe,
  Star,
  Sparkles,
  Target,
  Zap,
  ChevronDown
} from "lucide-react";

export default function Home() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  
  // Enable/disable arrows based on scroll position
  const onStoriesScroll = () => {
    const el = document.getElementById('stories-track');
    if (!el) return;
    const atStart = el.scrollLeft <= 0;
    const atEnd = Math.ceil(el.scrollLeft + el.clientWidth) >= el.scrollWidth;
    const prevBtn = document.getElementById('stories-prev');
    const nextBtn = document.getElementById('stories-next');
    if (prevBtn) prevBtn.setAttribute('aria-disabled', atStart ? 'true' : 'false');
    if (nextBtn) nextBtn.setAttribute('aria-disabled', atEnd ? 'true' : 'false');
  };

  const categories = [
    { title: "Impact Stories", href: "/categories/impact-stories", icon: Heart, desc: "Real journeys of women breaking barriers" },
    { title: "STEM Innovations", href: "/categories/stem-innovations", icon: Lightbulb, desc: "Groundbreaking projects and technologies" },
    { title: "Career & Empowerment", href: "/categories/career-empowerment", icon: TrendingUp, desc: "Tools and guidance for STEM careers" },
    { title: "Education & Learning", href: "/categories/education-learning", icon: GraduationCap, desc: "Tutorials and learning resources" },
    { title: "Community & Collaboration", href: "/categories/community-collaboration", icon: Users2, desc: "Global networks and projects" },
    { title: "Research & Insights", href: "/categories/research-insights", icon: BookOpenCheck, desc: "Studies and data about women in STEM" },
    { title: "Voices & Perspectives", href: "/categories/voices-perspectives", icon: MessageSquare, desc: "Opinion articles and thought pieces" },
    { title: "Events & Opportunities", href: "/categories/events-opportunities", icon: Calendar, desc: "Scholarships and conferences" },
    { title: "Women's History", href: "/categories/womens-history", icon: History, desc: "Honoring STEM pioneers" }
  ];
  return (
    <main className="font-sans">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-[rgba(6,10,22,0.6)] backdrop-blur-md border-b border-white/10">
        <div className="container-page h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <img src="/logo.svg" alt="Her Impact Logo" className="w-6 h-6" />
            <span className="subheading">Her Impact</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-white/80">
            <a href="#hero" className="hover:text-white flex items-center gap-2">
              <HomeIcon size={16} />
              Home
            </a>
            <div className="relative group">
              <button 
                className="hover:text-white flex items-center gap-2"
                onMouseEnter={() => setIsCategoriesOpen(true)}
                onMouseLeave={() => setIsCategoriesOpen(false)}
              >
                <Grid3X3 size={16} />
                Categories
                <ChevronDown size={14} className={`transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isCategoriesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-[rgba(6,10,22,0.95)] backdrop-blur-md border border-white/10 rounded-xl shadow-2xl z-50"
                  onMouseEnter={() => setIsCategoriesOpen(true)}
                  onMouseLeave={() => setIsCategoriesOpen(false)}
                >
                  <div className="p-4">
                    <div className="text-sm text-white/60 mb-3 font-medium">Explore Categories</div>
                    <div className="grid grid-cols-1 gap-2">
                      {categories.map((category, i) => (
                        <a
                          key={category.title}
                          href={category.href}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1]">
                            <category.icon size={16} className="text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-white text-sm font-medium group-hover:text-white/90">
                              {category.title}
                            </div>
                            <div className="text-white/60 text-xs">
                              {category.desc}
                            </div>
                          </div>
                          <ArrowRight size={14} className="text-white/40 group-hover:text-white/60" />
                        </a>
                      ))}
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/10">
                      <a href="#categories" className="flex items-center gap-2 text-white/80 hover:text-white text-sm">
                        <Grid3X3 size={14} />
                        View All Categories
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="relative group">
              <a href="#stories" className="hover:text-white flex items-center gap-2">
                <BookOpen size={16} />
                Stories
              </a>
              <div className="absolute top-full left-0 mt-2 w-48 bg-[rgba(6,10,22,0.95)] backdrop-blur-md border border-white/10 rounded-xl shadow-2xl z-50 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="p-2">
                  <a href="#stories" className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 text-white/80 hover:text-white">
                    <BookOpen size={16} />
                    Featured Stories
                  </a>
                  <a href="/stories" className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 text-white/80 hover:text-white">
                    <BookOpen size={16} />
                    All Stories
                  </a>
                </div>
              </div>
            </div>
            <a href="/community" className="hover:text-white flex items-center gap-2">
              <Users size={16} />
              Community
            </a>
            <a href="/opportunities" className="hover:text-white flex items-center gap-2">
              <Target size={16} />
              Opportunities
            </a>
            <a href="#newsletter" className="pill flex items-center gap-2">
              <Mail size={16} />
              Contact
            </a>
          </nav>
        </div>
      </header>
      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden bg-[#0a0f1f]">
        <div className="hero-aura" aria-hidden />
        <div className="absolute inset-x-0 bottom-0 h-40 neon-line opacity-40" aria-hidden />
        <div className="relative container-page py-24 md:py-32 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="reveal">
              <div className="pill w-max mb-4">
                <span className="text-sm">New</span>
                <span className="opacity-80">Explore our latest stories →</span>
              </div>
              <h1 className="section-title text-4xl md:text-6xl leading-tight mb-4">
                Celebrating Women Shaping <span className="gradient-text">STEM</span>
              </h1>
              <p className="body-text text-base md:text-lg text-[#c9d4ff] mb-8 max-w-xl">Her Impact is a digital platform celebrating women who shape the future through Science, Technology, Engineering, and Mathematics — and honor the trailblazers who paved the way.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#stories" className="btn btn-primary btn-glow bg-white text-[#0b3d91] flex items-center gap-2">
                  <BookOpen size={18} />
                  Discover Stories
                </a>
                <a href="#community" className="pill flex items-center gap-2">
                  <Users size={18} />
                  Join the Community
                  <ArrowRight size={16} />
                </a>
              </div>
              <div className="flex gap-6 mt-10 text-white/80">
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-green-400" />
                  <span>Inspiring Stories</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={16} className="text-blue-400" />
                  <span>Global Community</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={16} className="text-yellow-400" />
                  <span>Empowering Resources</span>
                </div>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="relative w-full max-w-xl mx-auto aspect-[4/3] dots-wave glass glow-ring rounded-2xl float-animation">
                <div className="absolute -top-4 left-8 pill pulse-glow">Innovation</div>
                <div className="absolute top-10 right-6 pill pulse-glow" style={{animationDelay: '0.5s'}}>Leadership</div>
                <div className="absolute bottom-8 left-10 pill pulse-glow" style={{animationDelay: '1s'}}>Discovery</div>
                <div className="absolute bottom-4 right-12 pill pulse-glow" style={{animationDelay: '1.5s'}}>Impact</div>
                
                {/* Floating vector elements */}
                <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1] opacity-60 float-animation" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-3/4 right-1/4 w-6 h-6 rounded-full bg-gradient-to-tr from-[#f48fb1] to-[#79a1ff] opacity-40 float-animation" style={{animationDelay: '2.5s'}}></div>
                <div className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-white/20 float-animation" style={{animationDelay: '3s'}}></div>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            <div className="glass rounded-xl p-6 text-center">
              <div className="text-white/60 text-sm">All-time reads</div>
              <div className="subheading text-2xl mt-1">4,200,368</div>
            </div>
            <div className="glass rounded-xl p-6 text-center">
              <div className="text-white/60 text-sm">Community members</div>
              <div className="subheading text-2xl mt-1">10,434</div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-separator" />

      {/* About Section (Who We Are) */}
      <section id="about" className="relative overflow-hidden bg-[#0a0f1f] text-white">
        <div className="hero-aura" aria-hidden />
        <div className="swoosh primary" aria-hidden />
        <div className="swoosh secondary" aria-hidden />
        <div className="relative container-page py-20 md:py-24">
          <div className="pill w-max mb-6">About Us</div>
          <h2 className="section-title text-3xl md:text-4xl mb-8">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            <div className="glass glow-ring rounded-2xl p-8 reveal">
              <p className="body-text text-[#c9d4ff] text-lg">
                Her Impact celebrates women shaping the future through STEM and honors the trailblazers who paved the way. We share powerful stories of innovation, discovery, and leadership, connecting generations of women making a difference.
                <br /><br />
                Our mission is to empower, educate, and elevate women in STEM by sharing knowledge, showcasing contributions, and creating a space where ideas and impact grow together.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 text-white/90">
                <div className="card-glow rounded-xl p-4 text-center">
                  <div className="text-sm opacity-80">Stories</div>
                  <div className="subheading text-xl mt-1">500+</div>
                </div>
                <div className="card-glow rounded-xl p-4 text-center">
                  <div className="text-sm opacity-80">Contributors</div>
                  <div className="subheading text-xl mt-1">120+</div>
                </div>
                <div className="card-glow rounded-xl p-4 text-center">
                  <div className="text-sm opacity-80">Countries</div>
                  <div className="subheading text-xl mt-1">30+</div>
                </div>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="relative h-full min-h-[300px] glass glow-ring rounded-2xl p-6">
                <div className="dots-wave absolute inset-0 rounded-2xl opacity-60" />
                <div className="relative grid grid-cols-3 gap-3 h-full">
                  <div className="rounded-xl bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1] opacity-80" />
                  <div className="rounded-xl bg-white/20" />
                  <div className="rounded-xl bg-white/10" />
                  <div className="rounded-xl bg-white/10" />
                  <div className="rounded-xl bg-gradient-to-tr from-[#f48fb1] to-[#79a1ff] opacity-80" />
                  <div className="rounded-xl bg-white/20" />
                  <div className="rounded-xl bg-white/20" />
                  <div className="rounded-xl bg-white/10" />
                  <div className="rounded-xl bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1] opacity-80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-separator" />

      {/* Features (Glowing cards) */}
      <section id="categories" className="bg-[#070b16] text-white">
        <div className="container-page py-20 md:py-24">
          <h2 className="section-title text-3xl md:text-4xl mb-10 text-center">Explore <span className="gradient-text">Her Impact</span> Categories</h2>
          <p className="body-text text-center text-white/70 max-w-2xl mx-auto mb-10">Discover stories, resources, and opportunities to empower women in STEM.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Impact Stories", desc: "Real journeys of women breaking barriers and leading change.", icon: Heart },
              { title: "STEM Innovations", desc: "Groundbreaking projects and emerging technologies driven by women.", icon: Lightbulb },
              { title: "Career & Empowerment", desc: "Tools, guidance, and mentorship for women navigating STEM careers.", icon: TrendingUp },
              { title: "Education & Learning", desc: "Hands-on tutorials, study resources, and learning tools for all ages.", icon: GraduationCap },
              { title: "Community & Collaboration", desc: "Global networks and projects uniting women in STEM.", icon: Users2 },
              { title: "Research & Insights", desc: "Studies, data, and trends about women's progress in STEM.", icon: BookOpenCheck },
              { title: "Voices & Perspectives", desc: "Opinion articles and thought pieces from women in STEM.", icon: MessageSquare },
              { title: "Events & Opportunities", desc: "Scholarships, workshops, and conferences empowering women.", icon: Calendar },
              { title: "Women's History", desc: "Honoring pioneers who changed the course of STEM.", icon: History },
            ].map((c, i) => (
              <div key={c.title} className="card-glow p-6 reveal" style={{animationDelay: `${0.05 * i}s`}}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1]">
                  <c.icon size={24} className="text-white" />
                </div>
                <h3 className="subheading text-xl mb-2">{c.title}</h3>
                <p className="body-text text-white/70">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="#community" className="btn btn-primary btn-glow bg-white text-[#0b3d91]">Join the Community</a>
          </div>
        </div>
      </section>

      <div className="section-separator" />

      {/* Featured Stories */}
      <section id="stories" className="relative overflow-hidden bg-[#0a0f1f] text-white">
        <div className="hero-aura" aria-hidden />
        <div className="swoosh primary" aria-hidden />
        <div className="swoosh secondary" aria-hidden />
        <div className="relative container-page py-20 md:py-24">
          <div className="flex items-end justify-between gap-4 mb-10">
            <div>
              <div className="pill w-max mb-3">Featured Stories</div>
              <h2 className="section-title text-3xl md:text-4xl">Inspiring Journeys and Innovations</h2>
            </div>
            <a href="#categories" className="pill">Explore Categories →</a>
          </div>
          <div className="relative">
            <div className="edge-fade-left" aria-hidden />
            <div className="edge-fade-right" aria-hidden />
            <div id="stories-track" onScroll={onStoriesScroll} className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-px-10 pb-2 no-scrollbar whitespace-nowrap">
            {[
              {t: "The Woman Behind the Code"},
              {t: "AI with Empathy"},
              {t: "The Next Frontier in Robotics"},
              {t: "The Hidden Figures of NASA"},
              {t: "African Women Who Shaped Science"},
            ].map((s, i) => (
              <article key={s.t} className="glow-ring glass rounded-2xl overflow-hidden reveal flex flex-col snap-start min-w-[340px] shrink-0" style={{animationDelay: `${0.05 * i}s`}}>
                <div className="h-40 bg-gradient-to-tr from-[#f48fb1]/40 to-[#79a1ff]/30" />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="subheading text-xl mb-2 text-white">{s.t}</h3>
                  <p className="body-text text-[#c9d4ff] mb-4 flex-1">A snapshot of groundbreaking work reshaping our world.</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <a className="btn btn-primary btn-glow bg-white text-[#0b3d91] flex items-center gap-2" href="#">
                      <BookOpen size={16} />
                      Read More
                    </a>
                    <a className="pill flex items-center gap-2" href="#">
                      <Share2 size={16} />
                      Share
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
            </div>
          </div>
          <button id="stories-prev" className="icon-button glass absolute -left-6 top-1/2 -translate-y-1/2 z-20" onClick={() => { const el = document.getElementById('stories-track'); el?.scrollBy({left: -360, behavior: 'smooth'}); }} aria-label="Previous stories">
            <ChevronLeft size={20} />
          </button>
          <button id="stories-next" className="icon-button glass absolute -right-6 top-1/2 -translate-y-1/2 z-20" onClick={() => { const el = document.getElementById('stories-track'); el?.scrollBy({left: 360, behavior: 'smooth'}); }} aria-label="Next stories">
            <ChevronRight size={20} />
          </button>
          <div className="absolute inset-x-0 bottom-0 h-40 neon-line opacity-40" aria-hidden />
        </div>
      </section>

      <div className="section-separator" />

      {/* Decentralized/Security section */}
      <section className="bg-[#070b16] text-white">
        <div className="container-page py-20 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div className="relative h-72 md:h-96 glass glow-ring rounded-2xl">
            <div className="absolute inset-6 rounded-xl card-glow" />
            <div className="absolute -top-3 -left-3 w-16 h-16 rounded-xl bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1]" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-xl bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1]" />
          </div>
          <div>
            <h3 className="section-title text-3xl md:text-4xl mb-4">Empowering a Safe Community</h3>
            <p className="body-text text-white/70 mb-6">We prioritize trust and safety through transparent content moderation, community-driven reviews, and secure platforms to protect contributors and readers.</p>
            <ul className="grid sm:grid-cols-2 gap-3 body-text text-white/80">
              <li className="flex items-center gap-2">
                <Eye size={16} className="text-green-400" />
                Transparent Moderation
              </li>
              <li className="flex items-center gap-2">
                <Users size={16} className="text-blue-400" />
                Community Reviews
              </li>
              <li className="flex items-center gap-2">
                <Shield size={16} className="text-purple-400" />
                Secure Platforms
              </li>
              <li className="flex items-center gap-2">
                <Lock size={16} className="text-yellow-400" />
                Privacy-First Approach
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="section-separator" />

      {/* Impact Maker Spotlight */}
      <section id="founder" className="relative overflow-hidden bg-[#0a0f1f] text-white">
        <div className="hero-aura" aria-hidden />
        <div className="swoosh primary" aria-hidden />
        <div className="swoosh secondary" aria-hidden />
        <div className="relative container-page py-20 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="reveal">
              <div className="pill w-max mb-3">Impact Maker of the Month</div>
              <h2 className="section-title text-3xl md:text-4xl mb-4">Trailblazing Women in STEM</h2>
              <div className="glass glow-ring rounded-2xl p-6">
                <p className="body-text text-[#c9d4ff] text-lg mb-4">Each month, we spotlight a trailblazing woman in STEM who is driving innovation and inspiring change. From groundbreaking research to transformative leadership, these women are shaping the future.</p>
                <p className="body-text italic text-white/90 mb-6">“Her innovation sparks progress, her leadership inspires change, and her impact transforms the world.”</p>
                <a href="#about" className="btn btn-primary btn-glow bg-white text-[#0b3d91]">Discover More Trailblazers</a>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="relative w-full max-w-md mx-auto aspect-square glow-ring glass rounded-2xl overflow-hidden">
                <div className="absolute inset-0 dots-wave opacity-60" />
                <Image src="/file.svg" alt="Impact Maker portrait" fill className="object-contain p-16 invert" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-separator" />

      {/* Community CTA */}
      <section id="community" className="relative overflow-hidden bg-[#0a0f1f] text-white">
        <div className="hero-aura" aria-hidden />
        <div className="swoosh primary" aria-hidden />
        <div className="swoosh secondary" aria-hidden />
        <div className="relative container-page py-24 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="reveal">
              <div className="pill w-max mb-3">Community</div>
              <h2 className="section-title text-3xl md:text-4xl mb-4">Join the Global Movement</h2>
              <div className="glass glow-ring rounded-2xl p-6">
                <p className="body-text text-[#e3e9fb] mb-6">Join a vibrant community of women and allies in STEM. Share your story, collaborate on projects, and celebrate the impact of women driving change worldwide.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#newsletter" className="btn btn-primary btn-glow bg-white text-[#0b3d91]">Join Our Newsletter</a>
                  <a href="#contribute" className="pill">Become a Contributor →</a>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div className="card-glow rounded-xl p-4">
                  <div className="text-sm opacity-80">Active members</div>
                  <div className="subheading text-xl">10k+</div>
                </div>
                <div className="card-glow rounded-xl p-4">
                  <div className="text-sm opacity-80">Stories shared</div>
                  <div className="subheading text-xl">4k+</div>
                </div>
                <div className="card-glow rounded-xl p-4">
                  <div className="text-sm opacity-80">Events yearly</div>
                  <div className="subheading text-xl">120+</div>
                </div>
              </div>
            </div>
            <div className="reveal reveal-delay-2 grid grid-cols-4 gap-3">
              {Array.from({length: 12}).map((_, i) => (
                <div key={i} className="h-16 rounded-2xl card-glow" />
              ))}
            </div>
            <div className="absolute inset-x-0 bottom-0 h-40 neon-line opacity-40" aria-hidden />

            {/* Stay Inspired (newsletter) */}
            <div id="newsletter" className="mt-14">
              <div className="max-w-2xl mb-4">
                <div className="pill w-max mb-3">Newsletter</div>
                <h3 className="section-title text-3xl md:text-4xl mb-3">Stay Inspired</h3>
                <p className="body-text text-[#c9d4ff]">Get the latest stories, events, and opportunities from Her Impact, plus our weekly Innovation Digest.</p>
              </div>
              <form className="glass glow-ring rounded-full p-2 flex flex-col sm:flex-row gap-2 max-w-2xl">
                <input type="email" required placeholder="Email address" className="flex-1 h-12 rounded-full px-5 bg-transparent outline-none text-white placeholder:text-white/60" />
                <button type="submit" className="btn btn-primary btn-glow bg-white text-[#0b3d91] h-12">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-40 neon-line opacity-40" aria-hidden />
        </div>    
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-[#0a0f1f] text-white">
        <div className="hero-aura" aria-hidden />
        <div className="swoosh primary" aria-hidden />
        <div className="swoosh secondary" aria-hidden />
        <div className="relative container-page py-20">
          <div className="flex flex-col md:flex-row items-start justify-between gap-10">
            <div>
              <div className="subheading text-xl">Her Impact</div>
              <div className="body-text text-[#c9d4ff]">“Because when she innovates, the world moves forward.”</div>
            </div>
            <nav className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-8">
              {[
                {href: "#hero", label: "Home"},
                {href: "#about", label: "About"},
                {href: "#categories", label: "Categories"},
                {href: "#stories", label: "Stories"},
                {href: "#community", label: "Community"},
                {href: "#newsletter", label: "Contact"},
              ].map((l) => (
                <a key={l.label} href={l.href} className="body-text text-[#e3e9fb] hover:text-[var(--secondary)] transition-colors">{l.label}</a>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              {[
                {alt: "LinkedIn", src: "/globe.svg"},
                {alt: "X", src: "/globe.svg"},
                {alt: "Instagram", src: "/globe.svg"},
                {alt: "YouTube", src: "/globe.svg"},
              ].map((s) => (
                <a key={s.alt} href="#" className="icon-button" aria-label={s.alt}>
                  <Image src={s.src} alt={s.alt} width={18} height={18} className="invert" />
                </a>
              ))}
            </div>
          </div>
          <div className="section-separator my-8" />
          <div className="body-text text-center text-[#b9c6ef]">© 2025 Her Impact. All Rights Reserved.</div>
        </div>
      </footer>
    </main>
  );
}