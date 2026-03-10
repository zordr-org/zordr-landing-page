import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Briefcase, MapPin, Clock, Zap, Users, Heart, CheckCircle, ArrowRight, AlertCircle } from "lucide-react";

const isValidEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
const isValidUrl = (val: string) => {
  if (!val) return true;
  try { new URL(val); return true; } catch { return false; }
};

const Careers = () => {
  const [form, setForm] = useState({ name: "", email: "", resume: "", portfolio: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const scrollToApply = () => {
    document.getElementById("apply-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!isValidEmail(form.email)) e.email = "Please enter a valid email address.";
    if (!form.resume.trim()) e.resume = "Resume link is required.";
    else if (!isValidUrl(form.resume)) e.resume = "Please enter a valid URL (e.g. https://drive.google.com/...).";
    if (form.portfolio && !isValidUrl(form.portfolio)) e.portfolio = "Please enter a valid URL (e.g. https://github.com/...).";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/mzdjedzl", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _replyto: form.email,
          _subject: `ZORDR Careers Application — ${form.name}`,
          name: form.name,
          email: form.email,
          resume: form.resume,
          portfolio: form.portfolio || "Not provided",
        }),
      });
      if (response.ok) setSubmitted(true);
      else setErrors({ form: "Something went wrong. Please try again." });
    } catch {
      setErrors({ form: "Connection error. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  const positions = [
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote / Hyderabad",
      type: "Full-time",
      description: "Production-level expertise in React Native, React.js, and Node.js. Build scalable applications for our campus operations platform.",
    },
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / Hyderabad",
      type: "Full-time",
      description: "Deep experience in the React ecosystem and Node.js microservices. Lead technical decisions and mentor junior developers.",
    },
    {
      title: "Product Design Intern",
      department: "Design",
      location: "Remote",
      type: "Internship",
      description: "Help design the next generation of campus food tech. Strong Figma skills and understanding of mobile UX required.",
    },
  ];

  if (submitted) {
    return (
      <main className="section-padding min-h-[60vh] flex items-center">
        <div className="container-tight text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-primary" size={32} />
          </div>
          <h1 className="text-3xl font-bold mb-4">Application Received!</h1>
          <p className="text-muted-foreground max-w-md mx-auto">We'll review your application and get back to you within a few days.</p>
          <Button className="mt-8" variant="outline" onClick={() => { setSubmitted(false); setForm({ name: "", email: "", resume: "", portfolio: "" }); }}>
            Submit Another
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-primary/10 to-background pt-32 pb-24">
        <div className="container-tight text-center">
          <h1 className="text-4xl md:text-6xl font-black text-foreground leading-tight max-w-3xl mx-auto">
            Work at ZORDR
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            Help us build the operating system for campus food. A small, fast-moving team shipping real products used by thousands of students every day.
          </p>
        </div>
      </section>

      {/* Culture */}
      <section className="section-padding bg-secondary/20">
        <div className="container-tight">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Why Work With Us?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Zap,   title: "Real Impact",     desc: "Build products used by thousands of students every day. Every feature you ship changes how a campus operates." },
              { icon: Users, title: "Strong Team",     desc: "Work with passionate engineers and designers obsessed with quality and simplicity." },
              { icon: Heart, title: "Startup Culture", desc: "Autonomy, ownership, and continuous learning. We trust you to do your best work." },
            ].map((item, i) => (
              <div key={i} className="bg-background border border-border rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Open Roles</h2>
          </div>
          <div className="space-y-5">
            {positions.map((job, i) => (
              <div key={i} className="border border-border rounded-xl p-6 hover:border-primary/50 transition bg-card/30">
                <div className="flex flex-col md:flex-row justify-between gap-4 md:items-start">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      {job.type === "Internship" && (
                        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-semibold">Internship</span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1"><Briefcase size={14} />{job.department}</span>
                      <span className="flex items-center gap-1"><MapPin size={14} />{job.location}</span>
                      <span className="flex items-center gap-1"><Clock size={14} />{job.type}</span>
                    </div>
                    <p className="text-muted-foreground text-sm max-w-2xl">{job.description}</p>
                  </div>
                  <div className="shrink-0">
                    <button
                      onClick={scrollToApply}
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition"
                    >
                      Apply Now <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply-section" className="section-padding bg-secondary/20">
        <div className="container-tight max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Apply Now</h2>
            <p className="text-muted-foreground">Don't see a role for you? Submit your profile anyway — we're always looking for great people.</p>
          </div>
          <div className="bg-background border border-border rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>

              {errors.form && (
                <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-4 py-3">
                  <AlertCircle size={16} className="flex-shrink-0" />
                  {errors.form}
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name <span className="text-destructive">*</span></Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: "" }); }}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.name}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email <span className="text-destructive">*</span></Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: "" }); }}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="resume">Resume Link <span className="text-destructive">*</span></Label>
                <Input
                  id="resume"
                  placeholder="https://drive.google.com/your-resume"
                  value={form.resume}
                  onChange={(e) => { setForm({ ...form, resume: e.target.value }); setErrors({ ...errors, resume: "" }); }}
                  className={errors.resume ? "border-destructive" : ""}
                />
                {errors.resume && (
                  <p className="text-xs text-destructive flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.resume}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="portfolio">Portfolio / GitHub / LinkedIn</Label>
                <Input
                  id="portfolio"
                  placeholder="https://github.com/yourprofile"
                  value={form.portfolio}
                  onChange={(e) => { setForm({ ...form, portfolio: e.target.value }); setErrors({ ...errors, portfolio: "" }); }}
                  className={errors.portfolio ? "border-destructive" : ""}
                />
                {errors.portfolio && (
                  <p className="text-xs text-destructive flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.portfolio}
                  </p>
                )}
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                {submitting ? "Submitting..." : "Submit Application"}
              </Button>

            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Careers;