import { Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    sector: "Banking",
    title: "Major UK Bank Achieves 100% Compliance Across 850 Branches",
    problem: "Scattered property data, missed certifications, and audit preparation taking weeks.",
    solution: "De-Graft Property Management with automated compliance tracking and audit trails.",
    outcomes: [
      "52% reduction in audit preparation time",
      "100% compliance adherence",
      "£3.2M saved annually on property operations",
    ],
    downloadable: true,
  },
  {
    sector: "Telecoms",
    title: "African Telecom Provider Achieves 99.8% Network Uptime",
    problem: "Tower maintenance was reactive, leading to costly outages and lost revenue.",
    solution: "IoT-enabled Asset Management with predictive maintenance and real-time monitoring.",
    outcomes: [
      "99.8% uptime across 2,400 tower sites",
      "35% lower maintenance costs",
      "60% faster fault resolution",
    ],
    downloadable: true,
  },
  {
    sector: "Municipal",
    title: "UK Council Diverts 64% of Waste and Saves £2.1M Annually",
    problem: "Manual waste tracking, inefficient routes, and inability to prove ESG compliance.",
    solution: "Integrated Waste Management with route optimization and automated ESG reporting.",
    outcomes: [
      "64% waste diversion rate (up from 38%)",
      "£2.1M saved on collection costs",
      "Automated carbon reporting for stakeholders",
    ],
    downloadable: true,
  },
  {
    sector: "Insurance",
    title: "Insurer Cuts Property Inspection Time by 68%",
    problem: "Paper-based property inspections prone to fraud and delays in claims processing.",
    solution: "Mobile-enabled Property Management with photo capture, GPS tracking, and digital workflows.",
    outcomes: [
      "68% faster property inspections",
      "Fraud detection algorithms flag 94% of anomalies",
      "Claims processing time cut in half",
    ],
    downloadable: false,
  },
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h1 className="mb-6">Case Studies</h1>
          <p className="text-lg md:text-xl text-muted max-w-3xl">
            Real-world examples of organizations that transformed their operations with De-Graft.
          </p>
        </div>

        {/* Case Study List */}
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="rounded-2xl bg-panel border border-border p-8 md:p-10 shadow-card"
            >
              <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
                <div className="flex-1">
                  {/* Badge */}
                  <span className="inline-flex items-center rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-medium mb-4">
                    {study.sector}
                  </span>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                    {study.title}
                  </h2>

                  {/* Problem */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-lg mb-2">The Challenge</h3>
                    <p className="text-muted">{study.problem}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-lg mb-2">The Solution</h3>
                    <p className="text-muted">{study.solution}</p>
                  </div>

                  {/* Outcomes */}
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Results</h3>
                    <ul className="space-y-2">
                      {study.outcomes.map((outcome, i) => (
                        <li key={i} className="flex gap-3">
                          <ArrowRight className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                          <span className="text-muted">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                {study.downloadable && (
                  <div className="flex items-start">
                    <Button variant="outline" size="lg">
                      <Download className="mr-2 h-5 w-5" />
                      Download PDF
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center rounded-2xl bg-secondary/50 p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Want similar results for your organization?
          </h3>
          <p className="text-lg text-muted mb-6">
            Let's discuss how De-Graft can deliver measurable impact for you.
          </p>
          <Button asChild size="lg">
            <a href="/contact">
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
