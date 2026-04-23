import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Clock, Users, BarChart3, Smartphone, LayoutDashboard,
  Building2, Zap, CheckCircle, Star, ChefHat, ShoppingBag, TrendingUp, Shield
} from "lucide-react";

import nitLogo from "@/assets/nitlogo.png";
import bitsLogo from "@/assets/bitslogo.png";
import vjtiLogo from "@/assets/vjitlogo.png";
import iiitLogo from "@/assets/iiithlogo.png";
import vitLogo from "@/assets/vitlogo.png";

const colleges = [
  { logo: nitLogo,  full: "NIT Warangal" },
  { logo: bitsLogo, full: "BITS Pilani" },
  { logo: vjtiLogo, full: "VJTI Mumbai" },
  { logo: iiitLogo, full: "IIIT Hyderabad" },
  { logo: vitLogo,  full: "VIT Vellore" },
];

const testimonials = [
  {
    name: "Dr. Ramesh Iyer",
    role: "Dean of Administration",
    college: "NIT Warangal",
    logo: nitLogo,
    quote: "ZORDR transformed our canteen operations completely. Queue times dropped by 70% in the first month.",
    avatar: "RI",
  },
  {
    name: "Suresh Kumar",
    role: "Canteen Owner",
    college: "BITS Pilani",
    logo: bitsLogo,
    quote: "My revenue went up 40% because I stopped wasting food and started serving more students per hour.",
    avatar: "SK",
  },
  {
    name: "Priya Nair",
    role: "3rd Year Student",
    college: "VJTI Mumbai",
    logo: vjtiLogo,
    quote: "I actually get to eat lunch now. Pre-ordering means my food is ready the moment I arrive.",
    avatar: "PN",
  },
];

const Index = () => {
  return (
    <main>
      {/* HERO */}
      <section className="section-padding bg-gradient-to-b from-primary/10 to-background pt-32 pb-24">
        <div className="container-tight text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            <Zap size={14} />
            <span>Now live on campuses across India</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight max-w-4xl mx-auto">
            Revolutionizing Campus <br />
            <span className="text-primary">Food Experience</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            ZORDR helps colleges streamline food ordering, eliminate queues, and increase vendor revenue — all without any hardware.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="h-12 px-8 text-base">
              <Link to="/contact">Book a Demo</Link>
            </Button>
            <Link to="/product" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline underline-offset-4 group">
              Explore the Platform
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Hero Stats Strip */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: TrendingUp, value: "3x",  label: "Faster order throughput" },
              { icon: Shield,     value: "40%", label: "Reduction in food wastage" },
              { icon: Zap,        value: "48h", label: "Campus onboarding time" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-2 p-6 bg-background border border-border rounded-2xl shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <stat.icon size={20} />
                </div>
                <span className="text-4xl font-black text-primary">{stat.value}</span>
                <span className="text-sm text-muted-foreground text-center">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section-padding bg-secondary/30">
        <div className="container-tight">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Campus Food Is Broken</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">Every campus deals with the same painful inefficiencies.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Clock,     title: "Long Queues",     desc: "Students waste 40% of their break time standing in line. Food gets cold. Tempers run high." },
              { icon: Users,     title: "Manual Chaos",    desc: "Vendors rely on handwritten slips, shouting orders, and gut feel to manage 500 students at once." },
              { icon: BarChart3, title: "Zero Visibility", desc: "Colleges have no data on vendor performance, food safety compliance, or student satisfaction." },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-background border border-border rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZORDR SOLUTION FLOW */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How ZORDR Fixes This</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">A smart pre-order flow that distributes demand before it hits the counter.</p>
          </div>
          <div className="relative p-8 border border-border rounded-2xl bg-secondary/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-border -translate-y-1/2 -z-0"></div>
              {[
                { icon: Smartphone,  title: "Student Orders", text: "Pre-orders on app before break" },
                { icon: ChefHat,     title: "Kitchen Preps",  text: "Food ready exactly on time" },
                { icon: ShoppingBag, title: "Fast Pickup",    text: "Zero queue, grab and go" },
                { icon: BarChart3,   title: "Admin Insight",  text: "Real-time data dashboard" },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center bg-background p-5 rounded-xl border border-border w-full md:w-44 z-10 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-3">
                    <step.icon size={22} />
                  </div>
                  <h4 className="font-bold text-sm mb-1">{step.title}</h4>
                  <p className="text-xs text-muted-foreground">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM OVERVIEW */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-tight">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">One Platform. Three Products.</h2>
            <p className="text-primary-foreground/60 text-lg">Built for every stakeholder on campus.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Smartphone,      title: "Student App",        items: ["Browse digital menus", "Skip long queues", "Instant pickup alerts"] },
              { icon: LayoutDashboard, title: "Vendor Dashboard",   items: ["Live order management", "Digital menu control", "Sales analytics"] },
              { icon: Building2,       title: "Campus Admin Panel", items: ["Operational oversight", "Vendor performance data", "Campus digitalization"] },
            ].map((product, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
                <product.icon className="text-primary mb-5" size={36} />
                <h3 className="text-xl font-bold mb-4">{product.title}</h3>
                <ul className="space-y-2">
                  {product.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                      <CheckCircle size={14} className="text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-white/20 text-background bg-transparent hover:bg-white/10 hover:text-background">
              <Link to="/product">See Full Product Details</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PARTNER COLLEGE LOGOS + TESTIMONIALS */}
      {/* 
      <section className="border-y border-border py-16 bg-secondary/20">
        <div className="container-tight">

          {/* Logo strip — auto-scrolling marquee * /}
          <p className="text-center text-xs font-bold text-muted-foreground uppercase tracking-widest mb-10">
            Trusted by partner colleges
          </p>

          <div className="relative overflow-hidden mb-16">
            {/* Fade edges * /}
            <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-secondary/20 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-secondary/20 to-transparent z-10 pointer-events-none" />

            {/* Scrolling track * /}
            <div className="flex gap-8 animate-marquee w-max">
              {[...colleges, ...colleges].map((c, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center px-6 py-4 bg-background border border-border rounded-xl shadow-sm flex-shrink-0"
                >
                  <img
                    src={c.logo}
                    alt={c.full}
                    className="h-14 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials * /}
          <p className="text-center text-xs font-bold text-muted-foreground uppercase tracking-widest mb-10">
            What our partners say
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-background border border-border rounded-xl p-6 flex flex-col gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={14} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm flex-1">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-9 h-9 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                  <div className="flex flex-col items-center gap-1 flex-shrink-0">
                    <img
                      src={t.logo}
                      alt={t.college}
                      className="h-10 w-auto object-contain"
                    />
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{t.college}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      */}

      {/* FINAL CTA */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="bg-primary rounded-2xl p-12 md:p-20 text-center text-primary-foreground">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Ready to digitize your campus food?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">
              Join leading colleges already using ZORDR to modernize their campus food operations.
            </p>
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 h-12 px-10 text-base font-bold">
              <Link to="/contact">Book a Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
