import { Calendar, ArrowLeft, BookOpen, Calendar as CalendarIcon, User } from "lucide-react";
import Link from "next/link";

export default function EventsOpportunitiesPage() {
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
              <Calendar size={24} className="text-white" />
            </div>
            <div>
              <div className="pill w-max">Category</div>
              <h1 className="section-title text-4xl md:text-5xl">Events & Opportunities</h1>
            </div>
          </div>
          <p className="body-text text-[#c9d4ff] text-lg max-w-3xl mb-8">
            Scholarships, workshops, and conferences empowering women. Discover upcoming events, funding opportunities, and professional development resources designed to advance women in STEM.
          </p>
        </div>
      </section>

      {/* Events and Opportunities */}
      <section className="bg-[#070b16] py-20">
        <div className="container-page">
          <h2 className="section-title text-3xl mb-10">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Women in Tech Leadership Summit 2024",
                author: "Tech Leadership Institute",
                date: "April 15, 2024",
                excerpt: "A three-day conference featuring keynote speakers, workshops, and networking opportunities."
              },
              {
                title: "STEM Scholarship Program Applications Open",
                author: "Global STEM Foundation",
                date: "April 10, 2024",
                excerpt: "Full scholarships available for women pursuing advanced degrees in STEM fields."
              },
              {
                title: "AI Ethics Workshop for Women",
                author: "AI Ethics Institute",
                date: "April 5, 2024",
                excerpt: "Hands-on workshop exploring ethical considerations in artificial intelligence development."
              }
            ].map((event, i) => (
              <article key={event.title} className="card-glow p-6 reveal">
                <div className="h-40 bg-gradient-to-tr from-[#f48fb1]/40 to-[#79a1ff]/30 rounded-xl mb-4" />
                <h3 className="subheading text-xl mb-2">{event.title}</h3>
                <p className="body-text text-white/70 mb-4">{event.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    {event.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <CalendarIcon size={14} />
                    {event.date}
                  </div>
                </div>
                <Link href="#" className="btn btn-primary btn-glow bg-white text-[#0b3d91] flex items-center gap-2 w-full justify-center">
                  <BookOpen size={16} />
                  Learn More
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
