import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Thanks for reaching out! We'll get back to you within 1-2 business days.");
      setFormData({ name: "", email: "", company: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="mb-6">Get in Touch</h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
            Ready to see how De-Graft can transform your operations? Book a demo or get in touch with our team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-8">Contact Information</h2>

            <div className="space-y-6 mb-12">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 shrink-0">
                  <Mail className="h-6 w-6 text-brand" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:hello@degraft.example"
                    className="text-muted hover:text-brand transition-colors"
                  >
                    hello@degraft.example
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 shrink-0">
                  <Phone className="h-6 w-6 text-brand" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a
                    href="tel:+442000000000"
                    className="text-muted hover:text-brand transition-colors"
                  >
                    +44 (0)20 0000 0000
                  </a>
                </div>
              </div>
            </div>

            {/* Regional Offices */}
            <h3 className="font-semibold text-lg mb-6">Our Offices</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="h-5 w-5 text-brand shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">London, UK</h4>
                  <p className="text-sm text-muted">
                    123 Tech Street
                    <br />
                    London EC2A 4NE
                    <br />
                    United Kingdom
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="h-5 w-5 text-brand shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Accra, Ghana</h4>
                  <p className="text-sm text-muted">
                    45 Independence Avenue
                    <br />
                    Accra, Ghana
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="h-5 w-5 text-brand shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Nairobi, Kenya</h4>
                  <p className="text-sm text-muted">
                    Westlands Business Park
                    <br />
                    Nairobi, Kenya
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl bg-panel border border-border p-8 shadow-card">
            <h2 className="text-2xl font-semibold mb-6">Book a Demo</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company / Authority
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full rounded-lg border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-lg border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand resize-none"
                  placeholder="Tell us about your needs..."
                  aria-required="true"
                />
              </div>

              {/* Honeypot */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-5 w-5" />
              </Button>

              <p className="text-xs text-muted text-center">
                We'll respond within 1-2 business days
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
