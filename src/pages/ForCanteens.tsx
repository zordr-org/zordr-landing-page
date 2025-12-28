import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, Settings, Zap, ArrowRight, DollarSign, ChefHat, BarChart2 } from "lucide-react";
import dashboardMockup from "@/assets/canteen-dashboard-mockup.png";

const ForCanteens = () => {
    return (
        <main>
            {/* Hero */}
            <section className="section-padding bg-gradient-to-b from-primary/10 to-background pt-32 pb-24">
                <div className="container-tight text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
                        <ChefHat size={16} />
                        <span>Built for Modern Kitchens</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-foreground max-w-4xl mx-auto leading-tight mb-8">
                        Turn Peak-Hour Chaos <br /> into <span className="text-primary glow-text">Predictable Revenue</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                        Zordr gives you the tools to serve more students, reduce wastage, and manage your kitchen with military precision.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button asChild size="lg" className="h-12 px-8 text-lg">
                            <Link to="/contact">Maximize Your Kitchen</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="h-12 px-8 text-lg">
                            <Link to="/contact">See Workflow</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="section-padding">
                <div className="container-tight">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: TrendingUp,
                                title: "Revenue Predictability",
                                desc: "Know exactly what to prep before the break starts based on pre-orders.",
                                color: "text-green-500",
                                bg: "bg-green-500/10"
                            },
                            {
                                icon: Zap,
                                title: "Peak-Hour Handling",
                                desc: "Serve 3x more students by separating ordering from pickup flow.",
                                color: "text-amber-500",
                                bg: "bg-amber-500/10"
                            },
                            {
                                icon: Settings,
                                title: "Offer & Pricing Control",
                                desc: "Instantly update menus, run happy hours, and manage stock availability.",
                                color: "text-blue-500",
                                bg: "bg-blue-500/10"
                            },
                            {
                                icon: Clock,
                                title: "Operational Simplicity",
                                desc: "One screen for orders, one screen for kitchen. No confusion.",
                                color: "text-purple-500",
                                bg: "bg-purple-500/10"
                            },
                        ].map((item, index) => (
                            <div key={index} className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-all hover:-translate-y-1">
                                <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-4`}>
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dashboard Visual */}
            <section className="section-padding bg-secondary/20 overflow-hidden">
                <div className="container-tight">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                                Your Entire Operation <br /> on <span className="text-primary">One Screen</span>
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Stop guessing. Start knowing. Our dashboard gives you real-time insights into what's selling, who's buying, and how much unique revenue you're generating.
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Live Order Tracking",
                                    "Inventory Level Alerts",
                                    "Daily Sales Reports",
                                    "Top Item analytics"
                                ].map((feat, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                            <ArrowRight size={14} />
                                        </div>
                                        <span className="font-medium">{feat}</span>
                                    </div>
                                ))}
                            </div>

                            <Button asChild size="lg" className="mt-4">
                                <Link to="/contact">Get Dashboard Access</Link>
                            </Button>
                        </div>

                        <div className="lg:w-1/2 relative">
                            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border border-border/50 bg-background/50 backdrop-blur-sm">
                                <img
                                    src={dashboardMockup}
                                    alt="Zordr Canteen Dashboard"
                                    className="w-full h-auto object-cover"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none"></div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>
                            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl opacity-50 -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Strip */}
            <section className="py-16 bg-foreground text-background">
                <div className="container-tight">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                        {[
                            { label: "Throughput", value: "3x", suffix: "Faster" },
                            { label: "Wastage", value: "40%", suffix: "Reduction" },
                            { label: "Hardware", value: "0", suffix: "Required" },
                            { label: "Setup Time", value: "24", suffix: "Hours" },
                        ].map((stat, i) => (
                            <div key={i} className="px-4">
                                <div className="text-4xl md:text-5xl font-black text-primary mb-2">{stat.value}</div>
                                <div className="text-sm md:text-base text-primary-foreground/70 uppercase tracking-wider font-semibold">{stat.label}</div>
                                <div className="text-xs text-primary-foreground/50 mt-1">{stat.suffix}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section-padding text-center">
                <div className="container-tight max-w-3xl border border-border rounded-2xl p-12 bg-secondary/30">
                    <h2 className="text-3xl font-bold mb-6">Ready to upgrade your kitchen?</h2>
                    <p className="text-muted-foreground mb-8 text-lg">Join the fastest growing network of smart campus kitchens.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="w-full sm:w-auto">
                            <Link to="/contact">Request Demo</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-background">
                            <Link to="/contact">Talk to an Expert</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ForCanteens;
