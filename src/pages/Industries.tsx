import { Building2, Radio, Landmark, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CTASection } from "@/components/ui/CTASection";

const industries = [
  {
    icon: Building2,
    title: "Banks & Insurers",
    pain: "Managing thousands of branches, ATMs, and foreclosed properties with scattered compliance data.",
    solution: "Centralized portfolio management with automated compliance tracking, audit trails, and fraud detection algorithms that flag anomalies.",
    results: "52% reduction in audit preparation time, 100% compliance adherence, and fraud losses cut by 78%.",
    modules: "Property Management, Asset Management",
    color: "brand",
  },
  {
    icon: Radio,
    title: "Telecoms",
    pain: "Tower sites, data centers, and network equipment spread across regions with limited visibility into maintenance needs.",
    solution: "IoT-enabled asset monitoring with predictive maintenance, automated vendor management, and uptime tracking across the entire network.",
    results: "99.8% network uptime, 35% lower maintenance costs, and 60% faster fault resolution.",
    modules: "Asset Management, Property Management",
    color: "accent-blue",
  },
  {
    icon: Landmark,
    title: "Municipal & Public Estate",
    pain: "Large property portfolios with tight budgets, sustainability mandates, and public accountability requirements.",
    solution: "Integrated property, asset, and waste management with ESG reporting, citizen portals, and budget optimization tools.",
    results: "47% OPEX savings, 64% waste diversion rates, and full transparency for stakeholders.",
    modules: "Property Management, Waste Management, Asset Management",
    color: "accent-gold",
  },
];

export default function Industries() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="mb-6">Built for complex organisations</h1>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto">
            De-Graft is purpose-built for organizations managing large portfolios across multiple locations. Here's how we serve key industries.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="space-y-12">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="rounded-2xl bg-panel border border-border p-8 md:p-12 shadow-card"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Icon & Title */}
                  <div>
                    <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-${industry.color}/10`}>
                      <Icon className={`h-8 w-8 text-${industry.color}`} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                      {industry.title}
                    </h2>
                    <div className="text-sm text-muted mb-4">
                      Relevant modules:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {industry.modules.split(", ").map((module, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium"
                        >
                          {module}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Common Pain Points</h3>
                      <p className="text-muted">{industry.pain}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-2">How De-Graft Helps</h3>
                      <p className="text-muted">{industry.solution}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-2">Typical Results</h3>
                      <p className="text-muted">{industry.results}</p>
                    </div>

                    <Button asChild>
                      <Link to="/contact">
                        Discuss Your Needs
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Info */}
        <div className="mt-20 text-center rounded-2xl bg-secondary/50 p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Don't see your industry?
          </h3>
          <p className="text-lg text-muted mb-6 max-w-2xl mx-auto">
            De-Graft serves facilities teams, corporate real estate, logistics providers, and more. If you manage property, assets, or waste, we can help.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              Let's Talk
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* CTA */}
      <CTASection
        title="Ready to see how it works for your industry?"
        primaryText="Book a Demo"
        secondaryText="View Solutions"
        secondaryHref="/solutions"
      />
    </div>
  );
}
