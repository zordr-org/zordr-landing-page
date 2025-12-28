import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Workflow, Calendar, Package, Sparkles, BarChart3, Building, Store, Users, Activity, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Building,
      step: "1",
      title: "Campus Onboarding",
      description: "We map your campus ecosystem, configure time slots, and digitize menus.",
    },
    {
      icon: Store,
      step: "2",
      title: "Canteen Setup",
      description: "Partners get their dashboard setup to manage orders, inventory, and menu availability.",
    },
    {
      icon: Users,
      step: "3",
      title: "Student Adoption",
      description: "Students download the app, browse menus, and start pre-ordering for their breaks.",
    },
    {
      icon: Activity,
      step: "4",
      title: "Demand Stabilization",
      description: "Orders flow into manageable time slots, reducing peak load and ensuring kitchen readiness.",
    },
    {
      icon: TrendingUp,
      step: "5",
      title: "Revenue Optimization",
      description: "Operations become predictable, wastage drops, and throughput/revenue increases.",
    },
  ];

  const automatedFeatures = [
    { icon: Workflow, text: "Order flow" },
    { icon: Calendar, text: "Slot management" },
    { icon: Package, text: "Inventory visibility" },
    { icon: Sparkles, text: "Offer logic" },
    { icon: BarChart3, text: "Demand insights" },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-primary/10 to-background pt-32 pb-24">
        <div className="container-tight text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            How It Works
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, slot-based system that brings order to campus food chaos.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="pb-16 md:pb-24">
        <div className="container-tight">
          <div className="space-y-6">
            {steps.map((item) => (
              <div
                key={item.step}
                className="flex flex-col md:flex-row items-start gap-6 p-6 md:p-8 bg-secondary/30 rounded-lg border border-border"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center md:hidden">
                    <item.icon className="text-primary" size={24} />
                  </div>
                </div>
                <div className="hidden md:flex w-12 h-12 rounded-lg bg-primary/10 items-center justify-center flex-shrink-0">
                  <item.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automated by Zordr */}
      <section className="section-padding bg-secondary/30">
        <div className="container-tight">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
            Automated by Zordr
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Everything runs seamlessly in the background so you can focus on what matters.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {automatedFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-background border border-border rounded-lg"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <span className="text-sm font-medium text-foreground">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-tight text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Ready to transform your campus food experience?
          </h2>
          <Button asChild size="lg">
            <Link to="/contact">Request a Pilot</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default HowItWorks;
