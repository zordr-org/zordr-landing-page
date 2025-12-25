import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, TrendingDown, Trash2, ArrowRight, Building2, UtensilsCrossed, Zap, Server, Percent, Maximize } from "lucide-react";

const Index = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-tight text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight max-w-3xl mx-auto">
            The Operating System for Campus Food.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Zordr enables smart pre-ordering and predictable demand to eliminate food chaos in college campuses.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/contact">Request a Pilot</Link>
            </Button>
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline underline-offset-4"
            >
              See how it works
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-tight">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            The Campus Food Problem
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background border border-border rounded-lg p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Long Queues During Breaks</h3>
              <p className="text-muted-foreground">
                Students waste precious break time waiting in line instead of eating.
              </p>
            </div>
            <div className="bg-background border border-border rounded-lg p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <TrendingDown className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Unpredictable Demand</h3>
              <p className="text-muted-foreground">
                Canteens can't forecast demand, leading to over or under preparation.
              </p>
            </div>
            <div className="bg-background border border-border rounded-lg p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Trash2 className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Revenue Loss & Food Wastage</h3>
              <p className="text-muted-foreground">
                Excess food is wasted while peak demand goes unserved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Flow */}
      <section className="section-padding">
        <div className="container-tight">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
            How Zordr Works
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Zordr converts food ordering into a predictable, slot-based system.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
            {[
              { step: "1", text: "Students Pre-Order" },
              { step: "2", text: "Time Slots Assigned" },
              { step: "3", text: "Canteen Prepares" },
              { step: "4", text: "Smooth Pickups" },
            ].map((item, index) => (
              <div key={item.step} className="flex items-center gap-4 md:flex-col md:text-center">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {item.step}
                </div>
                <span className="font-medium text-foreground">{item.text}</span>
                {index < 3 && (
                  <ArrowRight className="hidden md:block text-muted-foreground mx-4" size={20} />
                )}
              </div>
            ))}
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
                {["No infrastructure cost", "Reduced chaos", "Better student experience"].map((item) => (
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
                {["Predictable demand", "Faster service", "Higher daily revenue"].map((item) => (
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

      {/* CTA Strip */}
      <section className="section-padding bg-foreground">
        <div className="container-tight text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-background mb-6">
            Want Zordr live in your campus?
          </h2>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/contact">Request a Pilot</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Index;
