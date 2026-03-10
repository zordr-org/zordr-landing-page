import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle, Mail, MapPin, Phone, AlertCircle } from "lucide-react";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "", college: "", email: "", phone: "", vendors: "", message: "",
  });

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = "Name is required.";
    if (!formData.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Please enter a valid email address.";
    if (!formData.phone.trim()) e.phone = "Phone number is required.";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/mzdjedzl", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...formData,
          _replyto: formData.email,
          _subject: `ZORDR Demo Request — ${formData.name}`,
        }),
      });
      if (response.ok) setIsSubmitted(true);
      else setErrors({ form: "Something went wrong. Please try again." });
    } catch {
      setErrors({ form: "Connection error. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const set = (field: string, value: string) => {
    setFormData(p => ({ ...p, [field]: value }));
    if (errors[field]) setErrors(p => ({ ...p, [field]: "" }));
  };

  if (isSubmitted) {
    return (
      <main className="section-padding min-h-[60vh] flex items-center">
        <div className="container-tight text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-primary" size={32} />
          </div>
          <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
          <p className="text-muted-foreground max-w-md mx-auto">We've received your request. Our team will be in touch shortly to schedule your demo.</p>
          <Button className="mt-8" variant="outline" onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <section className="bg-gradient-to-b from-primary/5 to-background pt-24 pb-12">
        <div className="container-tight text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6">Request a Demo</h1>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            See ZORDR live on your campus. Fill in the form and our team will set up a personalized walkthrough.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're a college administrator, canteen owner, or just curious about ZORDR — we're ready to talk.
                </p>
              </div>
              <div className="space-y-5">
                {[
                  { icon: Mail,   title: "Email Us", sub: "General inquiries & partnerships", val: "contact@zordr.in",    href: "mailto:contact@zordr.in" },
                  { icon: Phone,  title: "Call Us",  sub: "Mon–Fri, 9am to 6pm",             val: "+91 9849473492",       href: "tel:+919849473492" },
                  { icon: MapPin, title: "Visit Us", sub: "Headquarters",                     val: "Hyderabad, Telangana", href: null },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{item.title}</p>
                      <p className="text-xs text-muted-foreground mb-0.5">{item.sub}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-primary hover:underline font-medium">{item.val}</a>
                      ) : (
                        <p className="text-sm font-medium">{item.val}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-5 bg-secondary/30 border border-border rounded-xl">
                <h3 className="font-semibold mb-3">Why ZORDR?</h3>
                <ul className="space-y-2">
                  {["Specialized for high-density campuses", "Zero hardware cost for colleges", "Up and running in 24 hours"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle size={14} className="text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-background border border-border rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Request a Demo</h2>
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>

                {errors.form && (
                  <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-4 py-3">
                    <AlertCircle size={16} className="flex-shrink-0" />
                    {errors.form}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name <span className="text-destructive">*</span></Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => set("name", e.target.value)}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && <p className="text-xs text-destructive flex items-center gap-1"><AlertCircle size={12} />{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone <span className="text-destructive">*</span></Label>
                    <Input
                      id="phone"
                      placeholder="10-digit number"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && <p className="text-xs text-destructive flex items-center gap-1"><AlertCircle size={12} />{errors.phone}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email <span className="text-destructive">*</span></Label>
                  <Input
                    id="email"
                    placeholder="you@institution.edu"
                    type="email"
                    value={formData.email}
                    onChange={(e) => set("email", e.target.value)}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && <p className="text-xs text-destructive flex items-center gap-1"><AlertCircle size={12} />{errors.email}</p>}
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="college">College / Organization</Label>
                    <Input
                      id="college"
                      placeholder="e.g. IIT Hyderabad"
                      value={formData.college}
                      onChange={(e) => set("college", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vendors">Number of Vendors</Label>
                    <Input
                      id="vendors"
                      type="number"
                      min="1"
                      placeholder="e.g. 5"
                      value={formData.vendors}
                      onChange={(e) => set("vendors", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your campus and what you're looking for..."
                    className="min-h-[100px]"
                    value={formData.message}
                    onChange={(e) => set("message", e.target.value)}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Request Demo"}
                </Button>

              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;