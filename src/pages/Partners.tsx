import { Handshake, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const partners = [
  {
    name: "IoT Solutions Ltd",
    category: "Technology Partner",
    description: "Leading IoT platform for asset monitoring and predictive maintenance. Integrated sensor data flows seamlessly into De-Graft.",
  },
  {
    name: "CloudSecure Inc",
    category: "Infrastructure Partner",
    description: "Tier-4 data center provider ensuring 99.99% uptime and SOC 2 compliant hosting infrastructure.",
  },
  {
    name: "ESG Analytics Co",
    category: "Data Partner",
    description: "Carbon calculation methodologies and sustainability benchmarking to power our ESG reporting features.",
  },
  {
    name: "FieldTech Services",
    category: "Implementation Partner",
    description: "On-ground field services for hardware installation, training, and change management across Africa.",
  },
  {
    name: "Global Consulting Partners",
    category: "System Integrator",
    description: "Enterprise consulting firm helping large organizations implement De-Graft at scale with change management.",
  },
  {
    name: "Mobile Innovations",
    category: "Technology Partner",
    description: "RFID and barcode technology for asset tagging and tracking integrated into the De-Graft platform.",
  },
];

export default function Partners() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="mb-6">Partners</h1>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto">
            We work with best-in-class technology providers, integrators, and service partners to deliver exceptional value to our customers.
          </p>
        </div>

        {/* Partner Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="rounded-xl bg-panel border border-border p-6 shadow-card hover:shadow-lg transition-all"
            >
              {/* Logo Placeholder */}
              <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-brand/20 to-brand/5 flex items-center justify-center mb-4">
                <Handshake className="h-8 w-8 text-brand" />
              </div>

              <span className="inline-block text-xs font-medium text-muted mb-3">
                {partner.category}
              </span>

              <h3 className="text-xl font-semibold mb-3">{partner.name}</h3>
              <p className="text-muted text-sm">{partner.description}</p>
            </div>
          ))}
        </div>

        {/* Become a Partner CTA */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-brand to-brand-700 p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-foreground mb-4">
            Become a Partner
          </h2>
          <p className="text-lg text-brand-foreground/90 mb-8 max-w-2xl mx-auto">
            Are you a technology provider, system integrator, or service partner interested in collaborating? Let's explore how we can create value together.
          </p>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6 text-brand-foreground/90 mb-8">
              <div>
                <h3 className="font-semibold mb-2">Technology Partners</h3>
                <p className="text-sm">Integrate your solutions with our platform</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Resellers</h3>
                <p className="text-sm">Bring De-Graft to your customer base</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Service Partners</h3>
                <p className="text-sm">Provide implementation and support services</p>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-panel text-brand hover:bg-panel/90"
            >
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
