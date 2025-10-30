import { CTASection } from "@/components/ui/CTASection";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { StatCard } from "@/components/ui/StatCard";
import {
  Building,
  FileCheck,
  Wrench,
  ClipboardCheck,
  Users,
  FileText,
  CheckCircle,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  {
    icon: Building,
    title: "Portfolio Map & Registers",
    description: "Complete digital repository of all properties with location mapping and key details.",
  },
  {
    icon: FileCheck,
    title: "Lease & Compliance Tracking",
    description: "Automated reminders for lease renewals, certifications, and regulatory requirements.",
  },
  {
    icon: Wrench,
    title: "Work Orders & SLAs",
    description: "Track maintenance requests, assign vendors, and monitor service level agreements.",
  },
  {
    icon: ClipboardCheck,
    title: "Audit Templates & Reminders",
    description: "Standardized inspection checklists with automated scheduling and notifications.",
  },
  {
    icon: Users,
    title: "Vendor Portal",
    description: "Centralized vendor management with performance tracking and communication tools.",
  },
  {
    icon: FileText,
    title: "Reports & Exports",
    description: "Generate custom reports and export data for stakeholder presentations.",
  },
];

const faqs = [
  {
    question: "How long does implementation take?",
    answer: "Typical implementation takes 2-4 weeks depending on portfolio size. We provide dedicated onboarding support and training to ensure smooth adoption.",
  },
  {
    question: "Can it integrate with our existing systems?",
    answer: "Yes, we offer API integrations with most property management systems, accounting software, and IoT platforms. Custom integrations can be arranged.",
  },
  {
    question: "How is property data kept secure?",
    answer: "We use bank-grade encryption, SOC 2 compliance, and regular security audits. Data is hosted in tier-4 data centers with 99.99% uptime guarantee.",
  },
  {
    question: "Can we customize the platform?",
    answer: "Absolutely. We offer configurable workflows, custom fields, and white-label options. Your account manager will help tailor the platform to your needs.",
  },
  {
    question: "What about mobile access?",
    answer: "Our responsive web app works perfectly on mobile devices. Native iOS and Android apps are also available for field teams.",
  },
];

export default function PropertyManagement() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero */}
      <section className="mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6">Property Management</h1>
            <p className="text-lg md:text-xl text-muted mb-8">
              Replace spreadsheets and scattered data with a unified platform that gives you complete visibility and control over your entire property portfolio.
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
                Property managers struggle with fragmented data across spreadsheets, emails, and paper files. Critical deadlines are missed, compliance gaps emerge, and reporting takes days instead of minutes.
              </p>
              <p className="text-muted">
                Without a centralized system, fraud risk increases, vendor accountability suffers, and operational costs spiral out of control.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-semibold mb-6">Our Solution</h2>
              <p className="text-muted mb-4">
                De-Graft provides a single source of truth for all property data. Automated workflows handle routine tasks, intelligent alerts prevent compliance lapses, and real-time dashboards give instant visibility.
              </p>
              <p className="text-muted">
                Your team spends less time on admin and more time on strategic initiatives that drive value.
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
              Everything you need to manage properties efficiently
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

      {/* Video Demo Placeholder */}
      <section className="mb-20 bg-secondary/30 py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="mb-4">See it in Action</h2>
            <p className="text-lg text-muted">
              Watch a 90-second overview of the Property Management module
            </p>
          </div>

          <div className="aspect-video rounded-2xl bg-panel border border-border flex items-center justify-center">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-brand" />
              </div>
              <p className="text-muted">Demo video coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Measurable Outcomes</h2>
            <p className="text-lg text-muted">
              Real results from our property management customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <StatCard value="52%" label="Reduction in admin time" />
            <StatCard value="100%" label="Compliance adherence" />
            <StatCard value="38%" label="Lower maintenance costs" />
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
        title="Ready to modernize your property management?"
        description="Let's discuss how De-Graft can transform your operations."
        primaryText="Book a Demo"
        secondaryText="View All Solutions"
        secondaryHref="/solutions"
        backgroundImageSrc="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920"
        backgroundImageAlt="Professional business consultation"
      />
    </div>
  );
}
