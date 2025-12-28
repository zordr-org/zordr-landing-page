import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, TrendingDown, Trash2, ArrowRight, Building2, UtensilsCrossed, Zap, Server, Percent, Maximize, Receipt, EyeOff, CalendarClock, Utensils, Eye, TrendingUp, Smartphone, ChefHat, ShoppingBag, BarChart3, Store, Bike, Megaphone, CheckCircle2, XCircle } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.png";

const Index = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-primary/10 to-background pt-32 pb-24">
        <div className="container-tight text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight max-w-3xl mx-auto">
            The Operating System for Campus F&B
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Zordr is a closed-ecosystem ordering and operations platform built for colleges to reduce chaos, improve throughput, and increase canteen revenue.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/contact">Request a Campus Demo</Link>
            </Button>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline underline-offset-4"
            >
              Talk to Us
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-16 w-full max-w-5xl mx-auto relative group animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
              <img
                src={heroMockup}
                alt="Zordr Platform Ecosystem - Student App, Kitchen Dashboard, and Admin Panel"
                className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-[1.01]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-tight">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Campus Food Operations Are Broken
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-background border border-border rounded-lg p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Long Queues During Peak Hours</h3>
              <p className="text-muted-foreground">
                Students waste precious break time waiting in line instead of eating.
              </p>
            </div>
            <div className="bg-background border border-border rounded-lg p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <TrendingDown className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">No Demand Prediction</h3>
              <p className="text-muted-foreground">
                Canteens can't forecast demand, leading to over or under preparation.
              </p>
            </div>
            <div className="bg-background border border-border rounded-lg p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Receipt className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Manual Billing & Confusion</h3>
              <p className="text-muted-foreground">
                Manual order taking leads to errors, lost slips, and payment confusion.
              </p>
            </div>
            <div className="bg-background border border-border rounded-lg p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <EyeOff className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Zero Data Visibility</h3>
              <p className="text-muted-foreground">
                Colleges have no insight into canteen sales, hygiene, or student feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Flow */}
      <section className="section-padding">
        <div className="container-tight">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            How Zordr Fixes This
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { icon: CalendarClock, text: "Pre-order based demand flow" },
              { icon: Utensils, text: "Ready-to-pick vs ready-to-prepare logic" },
              { icon: Eye, text: "Centralized order visibility" },
              { icon: TrendingUp, text: "Predictable kitchen operations" },
              { icon: Smartphone, text: "Zero hardware dependency" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-4 border border-border rounded-lg bg-card/50">
                <div className="p-2 rounded-md bg-primary/10 text-primary">
                  <item.icon size={20} />
                </div>
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="relative p-8 border border-border rounded-xl bg-secondary/20">
            <h3 className="text-xl font-semibold text-center mb-8">The Zordr Flow</h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -z-10 -translate-y-8"></div>

              {[
                { icon: Smartphone, title: "Order", text: "Student places order" },
                { icon: ChefHat, title: "Prep", text: "Kitchen prepares food" },
                { icon: ShoppingBag, title: "Pickup", text: "Student picks up" },
                { icon: BarChart3, title: "Analytics", text: "Admin views data" },
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center bg-background p-4 rounded-lg shadow-sm border border-border w-full md:w-48 z-10">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-3">
                    <step.icon size={24} />
                  </div>
                  <h4 className="font-bold text-foreground">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="section-padding bg-secondary/30">
        <div className="container-tight">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Who It's For
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background border border-border rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building2 className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground">Colleges</h3>
              </div>
              <ul className="space-y-3">
                {["No upfront cost", "Zero operational involvement", "Better student experience", "Real-time data visibility"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background border border-border rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <UtensilsCrossed className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground">Canteens</h3>
              </div>
              <ul className="space-y-3">
                {["Higher throughput", "Predictable demand", "Reduced wastage", "More revenue per peak hour"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What Zordr Is NOT */}
      <section className="section-padding">
        <div className="container-tight text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12">What Zordr Is NOT</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Store, text: "Not a marketplace" },
              { icon: Bike, text: "Not a delivery app" },
              { icon: Megaphone, text: "Not customer-acquisition driven" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-6 bg-secondary/10 border border-border/50 rounded-lg">
                <div className="mb-4 p-3 bg-destructive/10 rounded-full text-destructive">
                  <XCircle size={32} />
                </div>
                <span className="font-semibold text-lg text-foreground mb-2">{item.text}</span>
              </div>
            ))}
          </div>
          <div className="p-6 bg-primary/5 rounded-xl border border-primary/20 inline-block">
            <p className="text-xl md:text-2xl font-bold text-primary">
              "Zordr is infrastructure built for closed campus ecosystems."
            </p>
          </div>
        </div>
      </section>

      {/* Why Zordr */}
      <section className="section-padding">
        <div className="container-tight">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Why Zordr
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building2, text: "Built for campuses only" },
              { icon: Server, text: "No hardware dependency" },
              { icon: Percent, text: "No heavy commissions" },
              { icon: Maximize, text: "Designed to scale" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 border border-border rounded-lg">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="text-primary" size={24} />
                </div>
                <span className="font-medium text-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-secondary/5 border-y border-border/50">
        <div className="container-tight text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-8 tracking-tight">
            Built as Campus Infrastructure
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
            Zordr is building <span className="text-primary font-semibold">CampusOS</span> — a foundational technology layer for food, commerce, and services inside institutional ecosystems.
          </p>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="section-padding bg-foreground">
        <div className="container-tight text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-background mb-8">
            Ready to modernize your campus food ecosystem?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 min-w-[160px]">
              <Link to="/contact">Request Demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-background border-background hover:bg-background/10 hover:text-background min-w-[160px]">
              <Link to="/contact">Contact Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
