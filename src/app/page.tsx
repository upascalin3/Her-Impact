"use client";
import Image from "next/image";
import React, { useMemo, useRef, useState } from "react";
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
  ChevronDown,
  PenTool,
  Award
} from "lucide-react";

export default function Home() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  
  // Handle keyboard navigation for dropdown
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isCategoriesOpen) return;
    
    const totalItems = categories.length + 1; // +1 for "All Articles" link
    
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex(prev => (prev + 1) % totalItems);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex(prev => prev <= 0 ? totalItems - 1 : prev - 1);
        break;
      case 'Escape':
        e.preventDefault();
        setIsCategoriesOpen(false);
        setFocusedIndex(-1);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (focusedIndex === 0) {
          window.location.href = '/articles';
        } else if (focusedIndex > 0) {
          window.location.href = categories[focusedIndex - 1].href;
        }
        break;
    }
  };

  // Handle dropdown toggle
  const toggleDropdown = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
    setFocusedIndex(-1);
  };

  // Handle mouse enter/leave
  const handleMouseEnter = () => {
    setIsCategoriesOpen(true);
    setFocusedIndex(-1);
  };

  const handleMouseLeave = () => {
    setIsCategoriesOpen(false);
    setFocusedIndex(-1);
  };

  // Handle click outside to close dropdown
  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as Element;
    if (!target.closest('.dropdown-container')) {
      setIsCategoriesOpen(false);
      setFocusedIndex(-1);
    }
  };

  // Add event listener for click outside
  React.useEffect(() => {
    if (isCategoriesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isCategoriesOpen]);
  
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
    { title: "Impact Stories", href: "/articles?category=impact-stories", icon: Heart, desc: "Real journeys of women breaking barriers" },
    { title: "STEM Innovations", href: "/articles?category=stem-innovations", icon: Lightbulb, desc: "Groundbreaking projects and technologies" },
    { title: "Career & Empowerment", href: "/articles?category=career-empowerment", icon: TrendingUp, desc: "Tools and guidance for STEM careers" },
    { title: "Education & Learning", href: "/articles?category=education-learning", icon: GraduationCap, desc: "Tutorials and learning resources" },
    { title: "Community & Collaboration", href: "/articles?category=community-collaboration", icon: Users2, desc: "Global networks and projects" },
    { title: "Research & Insights", href: "/articles?category=research-insights", icon: BookOpenCheck, desc: "Studies and data about women in STEM" },
    { title: "Voices & Perspectives", href: "/articles?category=voices-perspectives", icon: MessageSquare, desc: "Opinion articles and thought pieces" },
    { title: "Events & Opportunities", href: "/articles?category=events-opportunities", icon: Calendar, desc: "Scholarships and conferences" },
    { title: "Women's History", href: "/articles?category=womens-history", icon: History, desc: "Honoring STEM pioneers" }
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
            <a href="/" className="hover:text-white flex items-center gap-2">
              <HomeIcon size={16} />
              Home
            </a>
      <div className="relative group dropdown-container">
        <button 
          className="hover:text-white flex items-center gap-2"
          onClick={toggleDropdown}
          onKeyDown={handleKeyDown}
          aria-expanded={isCategoriesOpen}
          aria-haspopup="true"
          aria-label="Articles menu"
          id="articles-button"
        >
          <BookOpen size={16} />
          Articles
          <ChevronDown size={14} className={`transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`} />
        </button>
        {isCategoriesOpen && (
          <div 
            className="absolute top-full left-0 mt-2 w-80 bg-[rgba(6,10,22,0.95)] backdrop-blur-md border border-white/10 rounded-xl shadow-2xl z-50"
            role="menu"
            aria-labelledby="articles-button"
            aria-orientation="vertical"
          >
            <div className="p-4">
              <div className="text-sm text-white/60 mb-3 font-medium">Explore Articles</div>
              <div className="grid grid-cols-1 gap-2">
                <a
                  href="/articles"
                  className={`flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group ${
                    focusedIndex === 0 ? 'bg-white/10' : ''
                  }`}
                  role="menuitem"
                  tabIndex={-1}
                  onFocus={() => setFocusedIndex(0)}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1]">
                    <BookOpen size={16} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white text-sm font-medium group-hover:text-white/90">
                      All Articles
                    </div>
                    <div className="text-white/60 text-xs">
                      Browse all articles across categories
                    </div>
                  </div>
                  <ArrowRight size={14} className="text-white/40 group-hover:text-white/60" />
                </a>
                {categories.map((category, i) => (
                  <a
                    key={category.title}
                    href={category.href}
                    className={`flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group ${
                      focusedIndex === i + 1 ? 'bg-white/10' : ''
                    }`}
                    role="menuitem"
                    tabIndex={-1}
                    onFocus={() => setFocusedIndex(i + 1)}
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
                <a 
                  href="/articles/write" 
                  className="flex items-center gap-2 text-white/80 hover:text-white text-sm"
                  role="menuitem"
                  tabIndex={-1}
                >
                  <PenTool size={14} />
                  Write Article
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
            <a href="/stories" className="hover:text-white flex items-center gap-2">
              <BookOpen size={16} />
              Stories
            </a>
            <a href="/community" className="hover:text-white flex items-center gap-2">
              <Users size={16} />
              Community
            </a>
            <a href="/opportunities" className="hover:text-white flex items-center gap-2">
              <Target size={16} />
              Opportunities
            </a>
            <a href="/contact" className="pill flex items-center gap-2">
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
                <a href="/stories" className="btn btn-primary btn-glow bg-white text-[#0b3d91] flex items-center gap-2">
                  <BookOpen size={18} />
                  Discover Stories
                </a>
                <a href="/community" className="pill flex items-center gap-2">
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
              { title: "Impact Stories", desc: "Real journeys of women breaking barriers and leading change.", icon: Heart, href: "/articles?category=impact-stories" },
              { title: "STEM Innovations", desc: "Groundbreaking projects and emerging technologies driven by women.", icon: Lightbulb, href: "/articles?category=stem-innovations" },
              { title: "Career & Empowerment", desc: "Tools, guidance, and mentorship for women navigating STEM careers.", icon: TrendingUp, href: "/articles?category=career-empowerment" },
              { title: "Education & Learning", desc: "Hands-on tutorials, study resources, and learning tools for all ages.", icon: GraduationCap, href: "/articles?category=education-learning" },
              { title: "Community & Collaboration", desc: "Global networks and projects uniting women in STEM.", icon: Users2, href: "/articles?category=community-collaboration" },
              { title: "Research & Insights", desc: "Studies, data, and trends about women's progress in STEM.", icon: BookOpenCheck, href: "/articles?category=research-insights" },
              { title: "Voices & Perspectives", desc: "Opinion articles and thought pieces from women in STEM.", icon: MessageSquare, href: "/articles?category=voices-perspectives" },
              { title: "Events & Opportunities", desc: "Scholarships, workshops, and conferences empowering women.", icon: Calendar, href: "/articles?category=events-opportunities" },
              { title: "Women's History", desc: "Honoring pioneers who changed the course of STEM.", icon: History, href: "/articles?category=womens-history" },
            ].map((c, i) => (
              <a key={c.title} href={c.href} className="card-glow p-6 reveal hover:bg-white/5 transition-colors group" style={{animationDelay: `${0.05 * i}s`}}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1] group-hover:scale-110 transition-transform">
                  <c.icon size={24} className="text-white" />
                </div>
                <h3 className="subheading text-xl mb-2">{c.title}</h3>
                <p className="body-text text-white/70">{c.desc}</p>
              </a>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="/community" className="btn btn-primary btn-glow bg-white text-[#0b3d91]">Join the Community</a>
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
            <a href="/articles" className="pill">Explore Categories →</a>
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
                    <a className="btn btn-primary btn-glow bg-white text-[#0b3d91] flex items-center gap-2" href="/stories">
                      <BookOpen size={16} />
                      Read More
                    </a>
                    <a className="pill flex items-center gap-2" href="/stories">
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
              <h2 className="section-title text-3xl md:text-4xl mb-4">Dr. Claire Karekezi</h2>
              <div className="glass glow-ring rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1] flex items-center justify-center">
                    <Award size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="subheading text-xl">Pioneering Neurosurgeon</h3>
                    <p className="body-text text-white/70">Rwanda's First Female Neurosurgeon</p>
                  </div>
                </div>
                <p className="body-text text-[#c9d4ff] text-lg mb-4">Dr. Claire Karekezi has transformed healthcare in East Africa by establishing Rwanda's first comprehensive neurosurgery program, proving that excellence knows no geographic boundaries.</p>
                <p className="body-text italic text-white/90 mb-6">"When I started my journey in neurosurgery, I was told this field was not for women, especially not for African women. Today, I'm proud to say we've proven that excellence knows no gender or geographic boundaries."</p>
                <a href="/stories/dr-claire-karekezi-neurosurgery-pioneer" className="btn btn-primary btn-glow bg-white text-[#0b3d91]">Read Her Story</a>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="relative w-full max-w-md mx-auto aspect-square glow-ring glass rounded-2xl overflow-hidden">
                <div className="absolute inset-0 dots-wave opacity-60" />
                <Image src="/Dr-Claire-Karekezi.png" alt="Dr. Claire Karekezi - Trailblazing Woman in STEM" fill className="object-cover rounded-2xl" />
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
                  <a href="/contact" className="btn btn-primary btn-glow bg-white text-[#0b3d91]">Join Our Newsletter</a>
                  <a href="/articles/write" className="pill">Become a Contributor →</a>
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.svg" alt="Her Impact Logo" className="w-8 h-8" />
                <span className="subheading text-xl">Her Impact</span>
              </div>
              <p className="body-text text-[#c9d4ff] mb-6">"Because when she innovates, the world moves forward."</p>
              <div className="flex items-center gap-3">
                {[
                  {name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/company/her-impact", color: "text-blue-400" },
                  {name: "Twitter", icon: Twitter, url: "https://x.com/herimpactrw", color: "text-blue-300" },
                  {name: "Instagram", icon: Instagram, url: "https://www.instagram.com/herimpact.rw/", color: "text-pink-400" },
                  {name: "YouTube", icon: Youtube, url: "https://www.youtube.com/@herimpact-t5f", color: "text-red-400" },
                  {name: "Gmail", icon: Mail, url: "mailto:herimpactrw@gmail.com", color: "text-red-500" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors group"
                    aria-label={social.name}
                  >
                    <social.icon size={18} className={`${social.color} group-hover:scale-110 transition-transform`} />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="subheading text-lg mb-4">Explore</h3>
              <nav className="space-y-3">
                {[
                  {href: "/", label: "Home"},
                  {href: "/stories", label: "Stories"},
                  {href: "/articles", label: "Articles"},
                  {href: "/opportunities", label: "Opportunities"},
                ].map((link) => (
                  <a key={link.label} href={link.href} className="body-text text-[#c9d4ff] hover:text-white transition-colors block">
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Categories */}
            <div>
              <h3 className="subheading text-lg mb-4">Categories</h3>
              <nav className="space-y-3">
                {[
                  {href: "/categories/impact-stories", label: "Impact Stories"},
                  {href: "/categories/stem-innovations", label: "STEM Innovations"},
                  {href: "/categories/career-empowerment", label: "Career & Empowerment"},
                  {href: "/categories/education-learning", label: "Education & Learning"},
                ].map((link) => (
                  <a key={link.label} href={link.href} className="body-text text-[#c9d4ff] hover:text-white transition-colors block">
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Community & Support */}
            <div>
              <h3 className="subheading text-lg mb-4">Community</h3>
              <nav className="space-y-3">
                {[
                  {href: "/community", label: "Join Community"},
                  {href: "/contact", label: "Contact Us"},
                  {href: "/articles/write", label: "Write Article"},
                  {href: "/opportunities", label: "Submit Opportunity"},
                ].map((link) => (
                  <a key={link.label} href={link.href} className="body-text text-[#c9d4ff] hover:text-white transition-colors block">
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div className="section-separator my-8" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="body-text text-[#b9c6ef]">© 2025 Her Impact. All Rights Reserved.</div>
            <div className="flex items-center gap-6 text-sm text-[#b9c6ef]">
              <a href="/contact" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/contact" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="/contact" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}