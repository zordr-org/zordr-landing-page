import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Server, ShieldCheck, BarChart3, MessageSquare, CreditCard, Wrench, FileX, Users, LayoutDashboard, Star, TrendingUp, Zap, Smile, ShoppingCart } from "lucide-react";

const ForColleges = () => {
  return (
    <main>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-primary/10 to-background pt-32 pb-24">
        <div className="container-tight text-center">
          <h1 className="text-4xl md:text-6xl font-black text-foreground max-w-4xl mx-auto leading-tight">
            Empower Your Campus with <span className="text-primary">Data-Driven</span> Food Operations
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            Zordr gives you full visibility and control over your campus food ecosystem without the operational headache.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/contact">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What Colleges Get */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What You Get</h2>
            <p className="text-muted-foreground text-lg">Infrastructure that works for you from Day 1</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Server, title: "Digital Infrastructure", desc: "A complete ordering & kitchen display system setup." },
              { icon: ShieldCheck, title: "Compliance Monitoring", desc: "Real-time tracking of orders, payments, and service times." },
              { icon: BarChart3, title: "Performance Analytics", desc: "Weekly reports on efficienty, peak hours, and sales volume." },
              { icon: MessageSquare, title: "Student Feedback", desc: "Direct ratings and reviews mechanism for continuous improvement." },
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-xl border border-border bg-card/50 hover:bg-card transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Don't Manage */}
      <section className="section-padding bg-secondary/20">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What You <span className="text-destructive">Don't</span> Have To Manage</h2>
              <p className="text-lg text-muted-foreground mb-8">We handle the bits that usually cause administrative friction.</p>
              <div className="space-y-4">
                {[
                  { icon: CreditCard, text: "No payment handling (Direct to vendor)" },
                  { icon: Wrench, text: "No hardware maintenance" },
                  { icon: FileX, text: "No vendor onboarding headaches" },
                  { icon: Users, text: "No daily operational disputes" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 bg-background p-4 rounded-lg border border-border">
                    <div className="p-2 rounded-full bg-destructive/10 text-destructive">
                      <item.icon size={20} />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:block bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-2xl p-8 border border-border/50">
              {/* Abstract Visual Representation */}
              <div className="space-y-4 opacity-80">
                <div className="h-4 bg-primary/20 rounded w-3/4"></div>
                <div className="h-4 bg-primary/10 rounded w-1/2"></div>
                <div className="h-4 bg-primary/10 rounded w-5/6"></div>
                <div className="h-32 bg-primary/5 rounded w-full mt-8 border border-primary/20 flex items-center justify-center">
                  <span className="font-semibold text-primary/40">Zordr Managed Layer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Control & Visibility */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Control & Visibility</h2>
            <p className="text-muted-foreground text-lg">Tools designed for management oversight</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: LayoutDashboard, title: "Centralized Dashboard", desc: "View all campus outlets in one place." },
              { icon: Star, title: "Hygiene & Quality", desc: "Track performance ratings per canteen." },
              { icon: TrendingUp, title: "Volume Tracking", desc: "Understand consumption patterns on campus." },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center p-8 rounded-xl border border-border bg-card">
                <div className="mb-4 text-primary">
                  <item.icon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Experience */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-tight">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Elevated Student Experience</h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              A modern campus deserves modern amenities. Zordr transforms the break-time experience.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Zero Queues", desc: "Students get their time back." },
              { icon: Smile, title: "Fresh Food", desc: "Prepared just in time for pickup." },
              { icon: ShoppingCart, title: "Modern Feel", desc: "App-based ordering like the real world." },
            ].map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition">
                <div className="mb-4 text-primary">
                  <item.icon size={32} />
                </div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-primary-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ForColleges;
