import { CTASection } from "@/components/ui/CTASection";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { StatCard } from "@/components/ui/StatCard";
import {
  Package,
  Settings,
  TrendingUp,
  Wrench,
  DollarSign,
  Radio,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    icon: Package,
    title: "Asset Registers & Lifecycle",
    description: "Complete digital twin of every asset from procurement to disposal with full history.",
  },
  {
    icon: Settings,
    title: "PM Schedules",
    description: "Preventive maintenance scheduling with automated work order generation and alerts.",
  },
  {
    icon: Wrench,
    title: "Parts & Vendors",
    description: "Spare parts inventory management with vendor catalogs and procurement workflows.",
  },
  {
    icon: TrendingUp,
    title: "Downtime Tracking",
    description: "Monitor asset availability, track failures, and identify patterns for improvement.",
  },
  {
    icon: Radio,
    title: "RFID/IoT Integrations",
    description: "Real-time asset tracking and condition monitoring via IoT sensors and RFID tags.",
  },
  {
    icon: DollarSign,
    title: "Cost Analytics",
    description: "TCO calculations, ROI tracking, and depreciation management for informed decisions.",
  },
];

const faqs = [
  {
    question: "What types of assets can we track?",
    answer: "Any physical asset - from office equipment and vehicles to machinery, IT infrastructure, and industrial equipment. The system is fully customizable for your asset categories.",
  },
  {
    question: "How does IoT integration work?",
    answer: "We support major IoT platforms and sensor types. Real-time data flows into the platform for condition monitoring, predictive maintenance, and automated alerting.",
  },
  {
    question: "Can we track assets across multiple locations?",
    answer: "Absolutely. The platform supports multi-site, multi-region asset tracking with location hierarchy and geo-mapping capabilities.",
  },
  {
    question: "What about asset depreciation?",
    answer: "Built-in depreciation calculators support multiple methods (straight-line, declining balance). Financial reports auto-generate for accounting integration.",
  },
  {
    question: "How does predictive maintenance work?",
    answer: "AI analyzes historical failure patterns, usage data, and IoT sensor readings to predict when maintenance is needed, preventing costly breakdowns.",
  },
];

export default function AssetManagement() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero */}
      <section className="mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6">Asset Management</h1>
            <p className="text-lg md:text-xl text-muted mb-8">
              Maximize asset uptime and ROI with complete lifecycle tracking, predictive maintenance, and real-time monitoring powered by IoT integration.
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
                Organizations lose millions to unplanned downtime, over-maintenance, and poor asset visibility. Reactive maintenance is costly, and asset data is scattered across departments.
              </p>
              <p className="text-muted">
                Without predictive insights, assets fail unexpectedly, spare parts are overstocked or understocked, and total cost of ownership balloons.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-semibold mb-6">Our Solution</h2>
              <p className="text-muted mb-4">
                De-Graft transforms asset management from reactive to proactive. AI-driven insights predict maintenance needs, IoT sensors provide real-time health monitoring, and automated workflows keep everything running smoothly.
              </p>
              <p className="text-muted">
                Extend asset life, reduce maintenance costs by up to 40%, and eliminate surprise failures.
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
              End-to-end asset lifecycle management
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
            <h2 className="mb-4">Proven Results</h2>
            <p className="text-lg text-muted">
              Impact across our asset management customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <StatCard value="42%" label="Reduction in maintenance costs" />
            <StatCard value="98.7%" label="Asset uptime achieved" />
            <StatCard value="65%" label="Fewer unplanned failures" />
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
        title="Ready to optimize your asset operations?"
        description="Discover how predictive maintenance can transform your bottom line."
        primaryText="Book a Demo"
        secondaryText="View All Solutions"
        secondaryHref="/solutions"
      />
    </div>
  );
}
