import { MessageSquare, ArrowLeft, BookOpen, Calendar, User } from "lucide-react";
import Link from "next/link";

export default function VoicesPerspectivesPage() {
  return (
    <main className="min-h-screen bg-[#0a0f1f] text-white">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-[rgba(6,10,22,0.6)] backdrop-blur-md border-b border-white/10">
        <div className="container-page h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white">
            <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1]" />
            <span className="subheading">Her Impact</span>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-white/80 hover:text-white">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0a0f1f] py-20">
        <div className="hero-aura" aria-hidden />
        <div className="relative container-page">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-tr from-[#79a1ff] to-[#f48fb1]">
              <MessageSquare size={24} className="text-white" />
            </div>
            <div>
              <div className="pill w-max">Category</div>
              <h1 className="section-title text-4xl md:text-5xl">Voices & Perspectives</h1>
            </div>
          </div>
          <p className="body-text text-[#c9d4ff] text-lg max-w-3xl mb-8">
            Opinion articles and thought pieces from women in STEM. Read personal stories, expert insights, and diverse perspectives that shape the conversation around women in science and technology.
          </p>
        </div>
      </section>

      {/* Opinion Articles */}
      <section className="bg-[#070b16] py-20">
        <div className="container-page">
          <h2 className="section-title text-3xl mb-10">Featured Perspectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Why Representation Matters in Tech Leadership",
                author: "Dr. Sarah Johnson",
                date: "April 2, 2024",
                excerpt: "A personal reflection on the importance of diverse leadership in technology companies."
              },
              {
                title: "Breaking Stereotypes: My Journey in Physics",
                author: "Dr. Maria Rodriguez",
                date: "March 29, 2024",
                excerpt: "How one physicist is challenging preconceptions about women in theoretical physics."
              },
              {
                title: "The Future of Women in AI: Opportunities and Challenges",
                author: "Dr. Elena Chen",
                date: "March 25, 2024",
                excerpt: "An expert's perspective on the evolving landscape of women in artificial intelligence."
              }
            ].map((article, i) => (
              <article key={article.title} className="card-glow p-6 reveal">
                <div className="h-40 bg-gradient-to-tr from-[#f48fb1]/40 to-[#79a1ff]/30 rounded-xl mb-4" />
                <h3 className="subheading text-xl mb-2">{article.title}</h3>
                <p className="body-text text-white/70 mb-4">{article.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    {article.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {article.date}
                  </div>
                </div>
                <Link href="#" className="btn btn-primary btn-glow bg-white text-[#0b3d91] flex items-center gap-2 w-full justify-center">
                  <BookOpen size={16} />
                  Read Article
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
