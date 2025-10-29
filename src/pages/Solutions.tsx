import { Link } from "react-router-dom";
import { Building, Package, Recycle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: Building,
    title: "Property Management",
    description: "Manage your entire property portfolio from a single platform. Track leases, compliance, work orders, and vendor performance.",
    href: "/solutions/property-management",
    color: "brand",
    imageSrc: "/images/solution-property.svg",
    imageAlt: "Illustration of property managers overseeing British estates",
  },
  {
    icon: Package,
    title: "Asset Management",
    description: "Complete asset lifecycle tracking with preventive maintenance, IoT integration, and detailed cost analytics.",
    href: "/solutions/asset-management",
    color: "accent-blue",
    imageSrc: "/images/solution-asset.svg",
    imageAlt: "Illustration of engineers servicing telecom equipment",
  },
  {
    icon: Recycle,
    title: "Waste Management",
    description: "Optimize waste operations with stream tracking, route planning, and automated ESG reporting for sustainability goals.",
    href: "/solutions/waste-management",
    color: "accent-gold",
    imageSrc: "/images/solution-waste.svg",
    imageAlt: "Illustration of a smart UK recycling facility",
  },
];

export default function Solutions() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="relative overflow-hidden rounded-3xl mb-16">
        <img
          src="/images/solutions-hero.svg"
          alt="Operations managers reviewing dashboards in a smart office"
          className="absolute inset-0 h-full w-full object-cover -z-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-bg/85 -z-10" aria-hidden="true" />

        <div className="relative text-center px-6 py-16 md:py-20">
          <h1 className="mb-6">Solutions that replace manual work</h1>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto">
            Purpose-built modules that work together seamlessly. Choose one or combine them all for complete operational control.
          </p>
        </div>
        </div>

        {/* Solution Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <div
                key={solution.href}
                className="rounded-2xl bg-panel border border-border p-8 shadow-card hover:shadow-lg transition-all group overflow-hidden"
              >
                {solution.imageSrc && (
                  <div className="relative -mx-8 -mt-8 mb-6 overflow-hidden rounded-t-2xl">
                    <img
                      src={solution.imageSrc}
                      alt={solution.imageAlt}
                      className="h-40 w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" aria-hidden="true" />
                  </div>
                )}
                <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-${solution.color}/10`}>
                  <Icon className={`h-8 w-8 text-${solution.color}`} />
                </div>

                <h2 className="text-2xl font-semibold mb-4">{solution.title}</h2>
                
                <p className="text-muted mb-6">{solution.description}</p>
                
                <Button asChild variant="outline" className="w-full group-hover:bg-brand group-hover:text-brand-foreground group-hover:border-brand transition-all">
                  <Link to={solution.href}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center rounded-2xl bg-secondary/50 p-8 md:p-12 relative overflow-hidden">
          <img
            src="/images/cta-meeting.svg"
            alt="Conversational meeting illustration"
            className="absolute inset-0 h-full w-full object-cover -z-20"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-secondary/80 -z-10" aria-hidden="true" />

          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Not sure which solution fits?</h3>
            <p className="text-lg text-muted mb-6">
              Let's discuss your needs and find the right combination for your organization.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                Talk to an Expert
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
