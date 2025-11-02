import { CTASection } from "@/components/ui/CTASection";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { StatCard } from "@/components/ui/StatCard";
import {
  Trash2,
  Route,
  BarChart3,
  Camera,
  Leaf,
  TrendingDown,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    icon: Trash2,
    title: "Stream Tracking",
    description: "Monitor waste by type, location, and segregation compliance across your entire operation.",
  },
  {
    icon: BarChart3,
    title: "Bin Inventory",
    description: "Digital inventory of all bins and containers with capacity monitoring and maintenance schedules.",
  },
  {
    icon: Route,
    title: "Route Planning",
    description: "AI-optimized collection routes that reduce fuel costs and improve service reliability.",
  },
  {
    icon: Camera,
    title: "Pickup Logging & Weights",
    description: "Mobile app for drivers to log collections, capture photos, and record weights in real-time.",
  },
  {
    icon: Leaf,
    title: "Contamination Capture",
    description: "Track contamination incidents with photo evidence to improve segregation compliance.",
  },
  {
    icon: TrendingDown,
    title: "ESG/Scope-3 Reports",
    description: "Automated carbon footprint calculations and sustainability reports for stakeholder reporting.",
  },
];

const faqs = [
  {
    question: "How does route optimization work?",
    answer: "Our AI analyzes historical collection data, traffic patterns, bin fill levels, and service schedules to generate the most efficient routes. This typically reduces fuel costs by 20-30%.",
  },
  {
    question: "Can we track multiple waste streams?",
    answer: "Yes - track unlimited waste streams including general waste, recyclables, organics, hazardous materials, and custom categories specific to your operation.",
  },
  {
    question: "How do we calculate carbon footprint?",
    answer: "The platform uses internationally recognized methodologies (GHG Protocol, ISO standards) to calculate Scope 3 emissions from waste generation, transportation, and processing.",
  },
  {
    question: "What about compliance reporting?",
    answer: "Built-in templates for common regulatory reports (EPA, environmental permits, duty of care). Custom report builders available for specific requirements.",
  },
  {
    question: "Can residents/users report issues?",
    answer: "Absolutely. Optional resident portal and mobile app for service requests, missed collections, and contamination reporting with photo upload.",
  },
];

export default function WasteManagement() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero */}
      <section className="mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6">Waste Management</h1>
            <p className="text-lg md:text-xl text-muted mb-8">
              Drive sustainability goals with comprehensive waste tracking, optimized routes, and automated ESG reporting that proves your environmental impact.
            </p>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="mb-20 bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-semibold mb-6">The Problem</h2>
              <p className="text-muted mb-4">
                Waste operations are data-poor and inefficient. Routes are planned by habit, contamination goes untracked, and ESG reporting requires weeks of manual data compilation.
              </p>
              <p className="text-muted">
                Organizations can't prove their sustainability claims, miss diversion targets, and waste budget on inefficient collection routes.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-semibold mb-6">Our Solution</h2>
              <p className="text-muted mb-4">
                De-Graft digitizes your entire waste operation. Real-time data from the field flows into automated reports, AI optimizes collection routes, and contamination tracking improves segregation compliance.
              </p>
              <p className="text-muted">
                Achieve verifiable diversion rates, reduce collection costs by 25%+, and generate ESG reports in minutes, not weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Key Features</h2>
            <p className="text-lg text-muted">
              Complete waste operations and ESG compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Sustainability Impact</h2>
            <p className="text-lg text-muted">
              Results from our waste management customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <StatCard value="64%" label="Average waste diversion rate" />
            <StatCard value="28%" label="Reduction in collection costs" />
            <StatCard value="100%" label="ESG reporting compliance" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl bg-panel border border-border px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to transform your waste operations?"
        description="Achieve your sustainability goals with data-driven waste management."
        primaryText="Book a Demo"
        secondaryText="View All Solutions"
        secondaryHref="/solutions"
        backgroundImageSrc="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920"
        backgroundImageAlt="Professional business consultation"
      />
    </div>
  );
}
