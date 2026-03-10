import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  CheckCircle, Zap, TrendingUp, BarChart3, CreditCard,
  Smartphone, LayoutDashboard, Building2, ChevronDown
} from "lucide-react";

const faqs = [
  {
    q: "Is there any setup or monthly fee?",
    a: "No. ZORDR is entirely commission-based. Vendors only pay when orders are successfully placed through the platform.",
  },
  {
    q: "What commission does ZORDR charge?",
    a: "Commission starts from 3% per order. Final rates may vary based on campus size, order volume, and operational requirements.",
  },
  {
    q: "Who receives the payment from students?",
    a: "Zordr uses a third-party payment gateway to collect payment from students and will settle vendors in T+1 day.",
  },
  {
    q: "How long does onboarding take?",
    a: "Most vendors can complete onboarding within a few minutes. Once verified, the outlet can start receiving orders immediately.",
  },
  {
    q: "Do vendors need special hardware?",
    a: "No special hardware is required. Vendors can manage orders using a smartphone, tablet, or computer.",
  },
  {
    q: "Can multiple outlets from the same campus use ZORDR?",
    a: "Yes. ZORDR supports multiple vendors and outlets within the same campus environment.",
  },
  {
    q: "What happens during peak hours?",
    a: "ZORDR uses slot-based demand management to distribute orders evenly and prevent congestion at the counter.",
  },
];

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>
      {/* HERO */}
      <section className="section-padding bg-gradient-to-b from-primary/10 to-background pt-32 pb-24">
        <div className="container-tight text-center">
          <h1 className="text-4xl md:text-6xl font-black text-foreground leading-tight max-w-3xl mx-auto">
            Pricing built for campus food vendors
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Simple commission-based pricing.<br />
            No setup fee. No monthly subscription.<br />
            You only pay when orders are placed.
          </p>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="section-padding pt-0">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-6">

            {/* Standard */}
            <div className="bg-background border-2 border-primary rounded-2xl p-10 flex flex-col gap-8">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Most Popular</p>
                <h2 className="text-3xl font-black mb-4">Standard</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Get started with ZORDR's full platform — student app, vendor dashboard, and campus admin panel.
                </p>
              </div>
              <div className="py-6 border-y border-border">
                <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                <div className="flex items-end gap-2">
                  <span className="text-7xl font-black text-primary leading-none">3%</span>
                  <span className="text-muted-foreground mb-2 text-base">commission<br />per order</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Final commission may vary depending on order volume, campus size, and number of outlets onboarded.
                Higher volume vendors may qualify for better commission rates.
              </p>
              <Button asChild size="lg" className="mt-auto">
                <Link to="/contact">Start Onboarding</Link>
              </Button>
            </div>

            {/* Enterprise */}
            <div className="bg-foreground text-background rounded-2xl p-10 flex flex-col gap-8">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Large Campuses</p>
                <h2 className="text-3xl font-black mb-4">Enterprise</h2>
                <p className="text-primary-foreground/60 leading-relaxed">
                  Custom pricing and operational setup for universities, food partners, or campuses with multiple outlets.
                </p>
              </div>
              <div className="flex flex-col gap-3 flex-1">
                {[
                  "Volume-based pricing",
                  "Multi-canteen support",
                  "Dedicated onboarding assistance",
                  "Custom operational setup",
                  "Priority support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-primary flex-shrink-0" />
                    <span className="text-sm text-primary-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground mt-auto">
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* REVENUE IMPACT */}
      <section className="section-padding bg-secondary/20">
        <div className="container-tight">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ZORDR Pays for Itself</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The commission you pay is only a small fraction of the additional revenue you gain through faster order processing.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Zap,        value: "2x",    label: "Faster Order Processing", desc: "Pre-orders and slot-based scheduling reduce waiting time and improve kitchen flow." },
              { icon: TrendingUp, value: "30–40%", label: "Higher Throughput",      desc: "Serve more students during peak hours without increasing staff or kitchen capacity." },
              { icon: BarChart3,  value: "Zero",  label: "Queue Congestion",        desc: "Students order in advance and pick up at their time slot, eliminating rush hour counter chaos." },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-background border border-border rounded-xl text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} />
                </div>
                <p className="text-4xl font-black text-primary mb-1">{item.value}</p>
                <p className="font-bold mb-2">{item.label}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM FEATURES */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything Included From Day One</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Every ZORDR campus receives the complete platform with no upsells and no hidden add-ons.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: Smartphone,      label: "Student mobile app (iOS & Android)" },
              { icon: LayoutDashboard, label: "Vendor dashboard for order management" },
              { icon: Building2,       label: "Campus admin control panel" },
              { icon: CreditCard,      label: "Payment integrations (UPI, cards, wallets)" },
              { icon: Zap,             label: "Slot-based demand management" },
              { icon: BarChart3,       label: "Real-time order sync" },
              { icon: TrendingUp,      label: "Weekly performance reports" },
              { icon: CheckCircle,     label: "Vendor training sessions" },
              { icon: CheckCircle,     label: "Onboarding and setup support" },
              { icon: CheckCircle,     label: "Inventory visibility alerts" },
              { icon: CheckCircle,     label: "Dedicated support contact" },
              { icon: CheckCircle,     label: "24-hour campus go-live" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-secondary/20 border border-border rounded-xl">
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <item.icon size={16} />
                </div>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMISSION TRANSPARENCY */}
      <section className="section-padding bg-secondary/20">
        <div className="container-tight max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transparent Pricing</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>Zordr uses a third-party payment gateway to collect payment from students.</p>
            <p>Vendors are settled in T+1 day — directly and reliably.</p>
            <p>There are no setup fees, subscription costs, or hidden charges.</p>
          </div>
          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {[
              { label: "Setup Fee",      value: "₹0" },
              { label: "Monthly Cost",   value: "₹0" },
              { label: "Hidden Charges", value: "None" },
            ].map((item) => (
              <div key={item.label} className="p-6 bg-background border border-border rounded-xl">
                <p className="text-3xl font-black text-primary mb-1">{item.value}</p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="section-padding">
        <div className="container-tight max-w-3xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="divide-y divide-border border border-border rounded-2xl overflow-hidden">
            {faqs.map((item, i) => (
              <div key={i} className="bg-background">
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-secondary/30 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-sm md:text-base pr-4">{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 text-muted-foreground transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding bg-foreground">
        <div className="container-tight text-center">
          <h2 className="text-3xl md:text-5xl font-black text-background mb-6">
            Start Accepting Orders From Students Today
          </h2>
          <p className="text-primary-foreground/60 text-lg mb-10 max-w-2xl mx-auto">
            Join the growing number of campus food vendors using ZORDR to streamline operations and increase daily order volume.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 h-12 px-10 text-base font-bold">
              <Link to="/contact">Start Onboarding</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 text-background bg-transparent hover:bg-white/10 hover:text-background h-12 px-10 text-base">
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Pricing;