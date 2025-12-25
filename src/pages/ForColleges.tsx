import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, UtensilsCrossed, CircleDollarSign, Wrench, Eye, Users, TrendingUp, Trash2, Zap, BarChart3 } from "lucide-react";

const ForColleges = () => {
  const collegePoints = [
    { icon: CircleDollarSign, text: "No upfront cost" },
    { icon: Wrench, text: "No tech maintenance" },
    { icon: Eye, text: "Admin visibility" },
    { icon: Users, text: "Controlled crowd flow" },
  ];

  const canteenPoints = [
    { icon: TrendingUp, text: "Predictable demand" },
    { icon: Trash2, text: "Reduced wastage" },
    { icon: Zap, text: "Faster turnaround" },
    { icon: BarChart3, text: "Higher peak-hour sales" },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-tight text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            For Colleges & Canteens
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            A partnership that benefits everyone — management, canteen owners, and students.
          </p>
        </div>
      </section>

      {/* For College Management */}
      <section className="pb-16 md:pb-24">
        <div className="container-tight">
          <div className="bg-secondary/30 border border-border rounded-lg p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                <Building2 className="text-primary" size={28} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                For College Management
              </h2>
            </div>
            <p className="text-xl text-muted-foreground mb-8">
              Cleaner campuses. Zero operational overhead.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {collegePoints.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-background border border-border rounded-lg"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <span className="font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For Canteen Owners */}
      <section className="pb-16 md:pb-24">
        <div className="container-tight">
          <div className="bg-secondary/30 border border-border rounded-lg p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                <UtensilsCrossed className="text-primary" size={28} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                For Canteen Owners
              </h2>
            </div>
            <p className="text-xl text-muted-foreground mb-8">
              More control. Less chaos. Better profits.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {canteenPoints.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-background border border-border rounded-lg"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <span className="font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="section-padding bg-secondary/30">
        <div className="container-tight text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Revenue Model
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-2">
            Zordr earns via a small commission per order.
          </p>
          <p className="text-lg font-medium text-foreground">
            No fixed fees. No lock-in.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-tight text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Let's bring Zordr to your campus
          </h2>
          <Button asChild size="lg">
            <Link to="/contact">Request a Pilot</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default ForColleges;
