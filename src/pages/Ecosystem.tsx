import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Building2, UtensilsCrossed, GraduationCap,
  CheckCircle, BarChart3, ShieldCheck, Zap, Smile, ShoppingBag,
  TrendingUp, LayoutDashboard, Utensils, Clock, PlayCircle, Apple, Users
} from "lucide-react";

const Ecosystem = () => {
  return (
    <main>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-primary/10 to-background pt-32 pb-24">
        <div className="container-tight text-center">
          <h1 className="text-4xl md:text-6xl font-black text-foreground leading-tight max-w-3xl mx-auto">
            Built for Every Stakeholder
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            ZORDR creates value for colleges, vendors, and students simultaneously. Everyone wins.
          </p>
        </div>
      </section>

      {/* FOR COLLEGES */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="flex items-center gap-5 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
              <Building2 size={32} />
            </div>
            <div>
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">For Administration</p>
              <h2 className="text-4xl md:text-6xl font-black text-foreground leading-none">Colleges</h2>
            </div>
          </div>

          <p className="text-xl text-muted-foreground max-w-2xl mb-4 leading-relaxed">
            Digitalize campus food operations.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mb-14 leading-relaxed">
            Gain full visibility into vendor performance and improve the student experience with zero infrastructure cost.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-14">
            {[
              { icon: ShieldCheck, title: "Operational Control",  desc: "Monitor every order and vendor interaction from a single centralized dashboard." },
              { icon: BarChart3,   title: "Campus Insights",      desc: "Analyze peak hours, student preferences, and vendor efficiency to optimize campus flow." },
              { icon: Users,       title: "Crowd Management",     desc: "Reduce physical queue congestion by distributing demand through digital time slots." },
              { icon: Zap,         title: "Zero Tech Overhead",   desc: "We handle the maintenance, hosting, and support. No heavy IT lifting required from your end." },
            ].map((item, i) => (
              <div key={i} className="flex gap-5 items-start p-6 bg-secondary/20 border border-border rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <item.icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:block bg-background border border-border rounded-xl p-6 shadow-sm mb-14">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Campus Dashboard</p>
            {[
              { label: "Total Orders Today",  value: "2,456", change: "+18%" },
              { label: "Active Canteens",     value: "6 / 6", change: "All online" },
              { label: "Avg. Student Rating", value: "4.7 / 5", change: "+0.3" },
            ].map((metric) => (
              <div key={metric.label} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                <span className="text-sm text-muted-foreground">{metric.label}</span>
                <div className="text-right">
                  <span className="text-sm font-bold">{metric.value}</span>
                  <span className="text-xs text-green-500 ml-2">{metric.change}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 bg-primary/5 border border-primary/20 rounded-xl mb-8">
            <p className="text-sm font-semibold text-primary mb-1">Zero upfront cost</p>
            <p className="text-sm text-muted-foreground">No hardware investment. No implementation fee. We handle the entire setup.</p>
          </div>

          <Button asChild size="lg">
            <Link to="/contact">Partner With Us</Link>
          </Button>
        </div>
      </section>

      <div className="border-t-4 border-border" />

      {/* FOR CANTEENS */}
      <section className="section-padding bg-secondary/20">
        <div className="container-tight">
          <div className="flex items-center gap-5 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center flex-shrink-0">
              <UtensilsCrossed size={32} />
            </div>
            <div>
              <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-1">For Food Vendors</p>
              <h2 className="text-4xl md:text-6xl font-black text-foreground leading-none">Canteens</h2>
            </div>
          </div>

          <p className="text-xl text-muted-foreground max-w-2xl mb-4 leading-relaxed">
            More orders. Less chaos.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mb-14 leading-relaxed">
            Increase your daily throughput by 30–40% with automated order management and a digital kitchen flow.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-14">
            {[
              { icon: TrendingUp,      title: "Increased Revenue", desc: "Process more orders during peak hours without adding extra staff." },
              { icon: LayoutDashboard, title: "Order Dashboard",   desc: "A clean, digital preparation flow that replaces messy paper tokens." },
              { icon: Utensils,        title: "Menu Management",   desc: "Instantly update prices or mark items as out-of-stock from your phone." },
              { icon: Clock,           title: "Faster Turnaround", desc: "Confirmed pre-orders let you prepare food in advance, reducing wait times." },
            ].map((item, i) => (
              <div key={i} className="flex gap-5 items-start p-6 bg-background border border-border rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center flex-shrink-0">
                  <item.icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 mb-14">
            {[
              { label: "Throughput", value: "3x",  note: "Faster" },
              { label: "Wastage",    value: "40%", note: "Reduction" },
              { label: "Setup",      value: "24h", note: "Onboarding" },
            ].map((s) => (
              <div key={s.label} className="text-center p-5 bg-orange-500/5 border border-orange-500/10 rounded-xl">
                <p className="text-3xl font-black text-orange-500">{s.value}</p>
                <p className="text-xs font-semibold text-muted-foreground mt-1">{s.label}</p>
                <p className="text-xs text-muted-foreground">{s.note}</p>
              </div>
            ))}
          </div>

          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            <Link to="/contact">Start Selling with ZORDR</Link>
          </Button>
        </div>
      </section>

      <div className="border-t-4 border-border" />

      {/* FOR STUDENTS */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-tight">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-5 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">
                <GraduationCap size={32} />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">For Learners</p>
                <h2 className="text-4xl md:text-6xl font-black text-background leading-none">Students</h2>
              </div>
            </div>
            <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-2 leading-relaxed">
              Get your break back.
            </p>
            <p className="text-lg text-primary-foreground/60 max-w-2xl mx-auto leading-relaxed">
              No more spending half your lunch break in a queue. ZORDR gives students the ordering experience they deserve.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Zap,         title: "Skip Queues",        desc: "Pre-order during class and walk straight to pickup." },
              { icon: Smile,       title: "Fresher Food",       desc: "Food is prepared just-in-time. Never overcooked or reheated." },
              { icon: ShoppingBag, title: "App-Based Ordering", desc: "A modern digital experience — just like ordering in the real world." },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition text-center">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-primary-foreground/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/contact">Get ZORDR on Your Campus</Link>
            </Button>
            <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
              <PlayCircle size={18} />
              Get on Play Store
            </Button>
            <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Apple size={18} />
              Download on App Store
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Ecosystem;