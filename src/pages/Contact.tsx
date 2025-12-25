import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle } from "lucide-react";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    institution: "",
    city: "",
    phone: "",
    email: "",
  });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.role) {
      newErrors.role = "Please select a role";
    }
    if (!formData.institution.trim()) {
      newErrors.institution = "Institution name is required";
    }
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  if (isSubmitted) {
    return (
      <main className="section-padding">
        <div className="container-tight">
          <div className="max-w-md mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-primary" size={32} />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Request Submitted!
            </h1>
            <p className="text-muted-foreground">
              Thank you for your interest in Zordr. Our team will review your request and get back to you within 2-3 business days.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* Hero */}
      <section className="section-padding pb-8 md:pb-12">
        <div className="container-tight text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Request Pilot Access
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in bringing Zordr to your campus? Fill out the form below and we'll be in touch.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="pb-16 md:pb-24">
        <div className="container-tight">
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto bg-secondary/30 border border-border rounded-lg p-6 md:p-8"
          >
            <div className="space-y-6">
              {/* Name */}
              <div>
                <Label htmlFor="name" className="text-foreground">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className={`mt-2 ${errors.name ? "border-destructive" : ""}`}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="text-sm text-destructive mt-1">{errors.name}</p>
                )}
              </div>

              {/* Role */}
              <div>
                <Label htmlFor="role" className="text-foreground">
                  Role
                </Label>
                <Select
                  value={formData.role}
                  onValueChange={(value) => handleInputChange("role", value)}
                >
                  <SelectTrigger
                    id="role"
                    className={`mt-2 ${errors.role ? "border-destructive" : ""}`}
                  >
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="college">College</SelectItem>
                    <SelectItem value="canteen">Canteen</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.role && (
                  <p className="text-sm text-destructive mt-1">{errors.role}</p>
                )}
              </div>

              {/* Institution Name */}
              <div>
                <Label htmlFor="institution" className="text-foreground">
                  Institution Name
                </Label>
                <Input
                  id="institution"
                  type="text"
                  value={formData.institution}
                  onChange={(e) => handleInputChange("institution", e.target.value)}
                  className={`mt-2 ${errors.institution ? "border-destructive" : ""}`}
                  placeholder="College or organization name"
                />
                {errors.institution && (
                  <p className="text-sm text-destructive mt-1">{errors.institution}</p>
                )}
              </div>

              {/* City */}
              <div>
                <Label htmlFor="city" className="text-foreground">
                  City
                </Label>
                <Input
                  id="city"
                  type="text"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  className={`mt-2 ${errors.city ? "border-destructive" : ""}`}
                  placeholder="Your city"
                />
                {errors.city && (
                  <p className="text-sm text-destructive mt-1">{errors.city}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone" className="text-foreground">
                  Phone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className={`mt-2 ${errors.phone ? "border-destructive" : ""}`}
                  placeholder="10-digit phone number"
                />
                {errors.phone && (
                  <p className="text-sm text-destructive mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`mt-2 ${errors.email ? "border-destructive" : ""}`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-sm text-destructive mt-1">{errors.email}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full">
                Request Pilot Access
              </Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
