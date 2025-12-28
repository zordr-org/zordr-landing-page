import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Server, Zap, Globe2 } from "lucide-react";

const About = () => {
    return (
        <main>
            {/* Hero */}
            <section className="section-padding bg-gradient-to-b from-primary/10 to-background pt-32 pb-24">
                <div className="container-tight text-center">
                    <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
                        The Operating System for <br /><span className="text-primary">Campus Commerce</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        We build the rails that allow institutional food and commerce to flow without friction.
                    </p>
                </div>
            </section>

            {/* Identity & Mission */}
            <section className="section-padding bg-secondary/20">
                <div className="container-tight">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 text-primary font-semibold">
                                <Server size={20} />
                                <span>What We Are</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold">Infrastructure for Closed Ecosystems</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Zordr is not a food delivery app. We don't employ riders or burn cash on discounts to acquire customers.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We are a B2B2C infrastructure platform designed specifically for the unique constraints of campuses—high density, short time windows, and closed user groups.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 text-primary font-semibold">
                                <Zap size={20} />
                                <span>Why We Exist</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold">Solving the "20-Minute Problem"</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                In the real world, ordering food happens at random times. In a college, 3,000 students get hungry at exactly 1:00 PM.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Standard consumer apps fail here. Zordr was built to manage this extreme demand spike through slot-based ordering and kitchen-first logic.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="section-padding">
                <div className="container-tight text-center max-w-3xl">
                    <h2 className="text-3xl font-bold mb-8">Our Philosophy</h2>
                    <div className="grid sm:grid-cols-2 gap-6 text-left">
                        <div className="p-6 border border-border rounded-xl">
                            <h3 className="font-bold text-xl mb-3">Efficiency &gt; Aggregation</h3>
                            <p className="text-muted-foreground">We care more about how fast a kitchen can process an order than how many restaurants are listed.</p>
                        </div>
                        <div className="p-6 border border-border rounded-xl">
                            <h3 className="font-bold text-xl mb-3">Control &gt; Chaos</h3>
                            <p className="text-muted-foreground">We give campuses absolute control over who sells what, when, and to whom.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Origin */}
            <section className="py-24 bg-foreground text-background text-center">
                <div className="container-tight">
                    <div className="flex flex-col items-center gap-4">
                        <Globe2 size={48} className="text-primary opacity-80" />
                        <div className="flex items-center gap-2 justify-center text-primary font-bold tracking-widest uppercase">
                            <MapPin size={16} />
                            <span>Origin</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black">Built in India</h2>
                        <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mt-4">
                            Engineered for the scale and complexity of Indian institutional campuses.
                        </p>

                        <div className="mt-12">
                            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                                <Link to="/contact">Join Our Team</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
