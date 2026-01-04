import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Briefcase, MapPin, Clock, ArrowRight, Heart, Zap, Users } from "lucide-react";

const Careers = () => {
    const positions = [
        {
            title: "Frontend Engineer",
            department: "Engineering",
            location: "Remote / Hyderabad",
            type: "Full-time",
            description: "We are looking for a passionate Frontend Engineer to help us build the future of campus dining. You will be working with React, TypeScript, and Tailwind CSS to create beautiful and responsive interfaces.",
        },
        {
            title: "Backend Engineer",
            department: "Engineering",
            location: "Remote / Hyderabad",
            type: "Full-time",
            description: "Join our backend team to build robust and scalable APIs. You will be working with Node.js, databases, and cloud infrastructure to power our campus operations platform.",
        },
        {
            title: "Marketing Specialist",
            department: "Marketing",
            location: "Hyderabad",
            type: "Full-time",
            description: "We need a creative Marketing Specialist to help us reach more colleges and students. You will be responsible for content creation, social media management, and campus outreach campaigns.",
        },
    ];

    return (
        <main>
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-b from-primary/10 to-background pt-32 pb-16">
                <div className="container-tight text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight max-w-3xl mx-auto">
                        Join the Zordr Team
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Help us revolutionize campus food operations. We are building the operating system for college canteens, and we need your help.
                    </p>
                </div>
            </section>

            {/* Culture Section */}
            <section className="section-padding bg-secondary/30">
                <div className="container-tight">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
                        Why Work With Us?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-background border border-border rounded-lg p-6">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                <Zap className="text-primary" size={24} />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">Impact</h3>
                            <p className="text-muted-foreground">
                                Build products that are used by thousands of students every day. make a real difference in campus life.
                            </p>
                        </div>
                        <div className="bg-background border border-border rounded-lg p-6">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                <Users className="text-primary" size={24} />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">Team</h3>
                            <p className="text-muted-foreground">
                                Work with a passionate and talented team of engineers and designers who are obsessed with quality.
                            </p>
                        </div>
                        <div className="bg-background border border-border rounded-lg p-6">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                <Heart className="text-primary" size={24} />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">Culture</h3>
                            <p className="text-muted-foreground">
                                We value autonomy, ownership, and continuous learning. We believe in work-life balance and checking your ego at the door.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Positions Section */}
            <section className="section-padding">
                <div className="container-tight">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
                        Open Positions
                    </h2>
                    <div className="space-y-6">
                        {positions.map((job, index) => (
                            <div key={index} className="border border-border rounded-xl p-6 hover:border-primary/50 transition-colors bg-card/30">
                                <div className="flex flex-col md:flex-row justify-between gap-4 md:items-start">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-foreground mb-2">{job.title}</h3>
                                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                                            <div className="flex items-center gap-1">
                                                <Briefcase size={16} />
                                                <span>{job.department}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin size={16} />
                                                <span>{job.location}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock size={16} />
                                                <span>{job.type}</span>
                                            </div>
                                        </div>
                                        <p className="text-muted-foreground max-w-3xl">{job.description}</p>
                                    </div>
                                    <div className="shrink-0 flex items-center">
                                        <Button asChild>
                                            <Link to="/contact">
                                                Apply Now
                                                <ArrowRight className="ml-2 w-4 h-4" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Strip */}
            <section className="section-padding bg-foreground">
                <div className="container-tight text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-background mb-8">
                        Don't see a role for you?
                    </h2>
                    <p className="text-lg text-muted-foreground/80 mb-8 max-w-2xl mx-auto">
                        We are always looking for talented individuals. Feel free to reach out and introduce yourself.
                    </p>
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 min-w-[160px]">
                        <Link to="/contact">Contact Us</Link>
                    </Button>
                </div>
            </section>
        </main>
    );
};

export default Careers;
