import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const webinars = [
  {
    title: "Property Management Masterclass: From Spreadsheets to Smart Systems",
    date: "2025-02-15",
    duration: "45 min",
    status: "upcoming",
    description: "Learn how leading property managers eliminated spreadsheets and cut admin time by 50%.",
  },
  {
    title: "ESG Reporting Made Easy: Automating Sustainability Metrics",
    date: "2025-01-28",
    duration: "60 min",
    status: "upcoming",
    description: "Discover how to generate Scope 3 waste reports in minutes and meet stakeholder demands.",
  },
  {
    title: "Predictive Maintenance: AI-Driven Asset Management",
    date: "2024-12-10",
    duration: "50 min",
    status: "recorded",
    description: "Watch how telecom operators achieved 99.8% uptime with IoT-enabled predictive maintenance.",
  },
  {
    title: "Multi-Site Waste Optimization for Municipalities",
    date: "2024-11-20",
    duration: "40 min",
    status: "recorded",
    description: "Case study: How a UK council diverted 64% of waste and saved £2.1M annually.",
  },
];

export default function Webinars() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h1 className="mb-6">Webinars</h1>
          <p className="text-lg md:text-xl text-muted max-w-3xl">
            Join live sessions with industry experts or watch on-demand recordings to deepen your knowledge.
          </p>
        </div>

        {/* Webinar List */}
        <div className="space-y-6">
          {webinars.map((webinar, index) => (
            <div
              key={index}
              className="rounded-xl bg-panel border border-border p-6 md:p-8 shadow-card hover:shadow-lg transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                        webinar.status === "upcoming"
                          ? "bg-brand/10 text-brand"
                          : "bg-secondary text-muted"
                      }`}
                    >
                      {webinar.status === "upcoming" ? "Upcoming" : "Recorded"}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-muted">
                      <Calendar className="h-4 w-4" />
                      {new Date(webinar.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-muted">
                      <Clock className="h-4 w-4" />
                      {webinar.duration}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{webinar.title}</h3>
                  <p className="text-muted">{webinar.description}</p>
                </div>

                <Button variant={webinar.status === "upcoming" ? "default" : "outline"}>
                  {webinar.status === "upcoming" ? "Register" : "Watch"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center rounded-2xl bg-secondary/50 p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Want a private demo for your team?
          </h3>
          <p className="text-lg text-muted mb-6">
            We'll tailor a session to your specific use case and answer all your questions.
          </p>
          <Button asChild size="lg">
            <a href="/contact">
              Book a Private Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
