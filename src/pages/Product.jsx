import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Smartphone, LayoutDashboard, Building2, PlayCircle, Apple,
  ClipboardList, BarChart3, Bell, MenuSquare, TrendingUp, ShieldCheck
} from "lucide-react";

const Product = () => {
  return (
    <main>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-primary/10 to-background pt-32 pb-24">
        <div className="container-tight text-center">
          <h1 className="text-4xl md:text-6xl font-black text-foreground leading-tight max-w-3xl mx-auto">
            Product Ecosystem
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            A unified platform connecting students, vendors, and campus administrators — built from the ground up for closed campus environments.
          </p>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="section-padding bg-secondary/20">
        <div className="container-tight">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Three Products. One Platform.</h2>
            <p className="text-muted-foreground text-lg">Every stakeholder gets their own purpose-built tool.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Smartphone,      title: "Student App",     desc: "Mobile-first ordering for students",    color: "bg-blue-500/10 text-blue-500" },
              { icon: LayoutDashboard, title: "Vendor Dashboard", desc: "Kitchen and sales management tool",     color: "bg-orange-500/10 text-orange-500" },
              { icon: Building2,       title: "Admin Panel",      desc: "Campus-wide oversight and analytics",   color: "bg-green-500/10 text-green-500" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 bg-background border border-border rounded-xl">
                <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mb-4`}>
                  <item.icon size={28} />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student App */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                  <Smartphone size={24} />
                </div>
                <span className="text-sm font-bold text-blue-500 uppercase tracking-wider">Student App</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Order food before the bell rings</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Students pre-order during class, food is ready the moment they arrive. No waiting. No frustration.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: MenuSquare,    text: "Browse live digital menus from all campus canteens" },
                  { icon: ClipboardList, text: "Place pre-orders for specific time slots" },
                  { icon: Bell,          text: "Get instant notifications when food is ready for pickup" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon size={16} />
                    </div>
                    <span className="text-muted-foreground">{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                  <PlayCircle size={16} />
                  Get on Play Store
                </Button>
                <Button className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Apple size={16} />
                  Download on App Store
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-primary/5 rounded-2xl p-10 border border-border flex flex-col gap-4">
              <div className="h-3 bg-blue-500/20 rounded w-2/3"></div>
              <div className="h-3 bg-blue-500/10 rounded w-1/2"></div>
              <div className="grid grid-cols-2 gap-3 mt-4">
                {["Biryani", "Dosa", "Sandwich", "Tea"].map((item) => (
                  <div key={item} className="bg-white/60 border border-border rounded-lg p-3 text-sm font-medium text-center">{item}</div>
                ))}
              </div>
              <div className="mt-4 bg-primary/10 border border-primary/20 rounded-lg p-4 text-sm font-semibold text-primary text-center">
                🔔 Your order is ready for pickup!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Dashboard */}
      <section className="section-padding bg-secondary/20">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/5 rounded-2xl p-10 border border-border hidden md:block">
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-white/60 border border-border rounded-lg p-3">
                  <span className="text-sm font-medium">Order #142 — Biryani ×2</span>
                  <span className="text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">Preparing</span>
                </div>
                <div className="flex items-center justify-between bg-white/60 border border-border rounded-lg p-3">
                  <span className="text-sm font-medium">Order #143 — Dosa ×1</span>
                  <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">Ready</span>
                </div>
                <div className="flex items-center justify-between bg-white/60 border border-border rounded-lg p-3">
                  <span className="text-sm font-medium">Order #144 — Tea ×3</span>
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">New</span>
                </div>
                <div className="mt-4 p-4 bg-orange-500/10 rounded-lg text-center">
                  <span className="text-2xl font-black text-orange-500">₹12,450</span>
                  <p className="text-xs text-muted-foreground mt-1">Today's revenue</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
                  <LayoutDashboard size={24} />
                </div>
                <span className="text-sm font-bold text-orange-500 uppercase tracking-wider">Vendor Dashboard</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Your entire kitchen on one screen</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Stop juggling paper slips. Manage every order, update your menu, and track revenue — all from one dashboard.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: ClipboardList, text: "Live order dashboard with status management" },
                  { icon: MenuSquare,    text: "Real-time digital menu and availability updates" },
                  { icon: BarChart3,     text: "Daily, weekly, and monthly sales analytics" },
                  { icon: TrendingUp,    text: "Order preparation flow with kitchen display" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon size={16} />
                    </div>
                    <span className="text-muted-foreground">{item.text}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-2">
                <Link to="/contact">Get Vendor Access</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Dashboard */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center">
                  <Building2 size={24} />
                </div>
                <span className="text-sm font-bold text-green-500 uppercase tracking-wider">Campus Admin Panel</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Total visibility. Zero overhead.</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Get a bird's-eye view of your entire campus food ecosystem without any day-to-day operational involvement.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: ShieldCheck, text: "Track vendor performance, hygiene ratings, and compliance" },
                  { icon: BarChart3,   text: "Real-time order analytics across all campus canteens" },
                  { icon: TrendingUp,  text: "Campus-wide consumption patterns and peak hour data" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-green-500/10 text-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon size={16} />
                    </div>
                    <span className="text-muted-foreground">{item.text}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-2">
                <Link to="/contact">Request Admin Access</Link>
              </Button>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 rounded-2xl p-10 border border-border hidden md:block">
              <div className="space-y-4">
                <p className="text-sm font-semibold text-muted-foreground">Campus Overview</p>
                {[
                  { name: "Main Canteen",      score: 92, orders: "1,240" },
                  { name: "North Block Cafe",  score: 88, orders: "430" },
                  { name: "Engineering Block", score: 95, orders: "780" },
                ].map((v) => (
                  <div key={v.name} className="bg-white/60 border border-border rounded-lg p-3 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">{v.name}</p>
                      <p className="text-xs text-muted-foreground">{v.orders} orders today</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center text-sm font-bold">
                      {v.score}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground">
        <div className="container-tight text-center">
          <h2 className="text-3xl font-bold text-background mb-6">Ready to see it in action?</h2>
          <p className="text-primary-foreground/60 mb-8 max-w-lg mx-auto">Book a live demo and we'll walk you through the entire ZORDR platform for your campus.</p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/contact">Book a Demo</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Product;