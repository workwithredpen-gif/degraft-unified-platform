import { Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const news = [
  {
    title: "De-Graft Wins PropTech Innovation of the Year 2024",
    date: "2024-12-01",
    excerpt: "Recognized for transforming property management with AI-driven automation and proven cost savings.",
    link: "#",
  },
  {
    title: "New IoT Integration: Real-Time Asset Monitoring for Telecoms",
    date: "2024-11-15",
    excerpt: "Major telecom providers can now connect their tower sensors directly to the De-Graft platform for predictive maintenance.",
    link: "#",
  },
  {
    title: "De-Graft Expands to Kenya with New Nairobi Office",
    date: "2024-10-22",
    excerpt: "Opening of our third regional hub to better serve East African customers with on-the-ground support.",
    link: "#",
  },
  {
    title: "Product Update: Enhanced ESG Reporting for Waste Management",
    date: "2024-10-05",
    excerpt: "New features include Scope 3 carbon calculations, custom sustainability dashboards, and stakeholder report templates.",
    link: "#",
  },
  {
    title: "Case Study Published: UK Council Saves £2.1M with De-Graft",
    date: "2024-09-18",
    excerpt: "Detailed analysis of how a municipal authority achieved 64% waste diversion and significant cost reductions.",
    link: "/resources/case-studies",
  },
  {
    title: "De-Graft Achieves SOC 2 Type II Compliance",
    date: "2024-08-30",
    excerpt: "Independent audit confirms bank-grade security controls and data protection measures.",
    link: "#",
  },
];

export default function News() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h1 className="mb-6">News</h1>
          <p className="text-lg md:text-xl text-muted max-w-3xl">
            Latest updates, product announcements, and industry insights from De-Graft.
          </p>
        </div>

        {/* News List */}
        <div className="space-y-6">
          {news.map((item, index) => (
            <div
              key={index}
              className="rounded-xl bg-panel border border-border p-6 md:p-8 shadow-card hover:shadow-lg transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3 text-sm text-muted">
                    <Calendar className="h-4 w-4" />
                    {new Date(item.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted">{item.excerpt}</p>
                </div>

                <Button variant="outline" asChild>
                  <a href={item.link} target={item.link.startsWith("http") ? "_blank" : undefined} rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}>
                    {item.link.startsWith("http") ? "Read More" : "View"}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center rounded-2xl bg-gradient-to-br from-brand/10 to-brand/5 border border-brand/20 p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Stay in the loop
          </h3>
          <p className="text-lg text-muted mb-6">
            Subscribe to our newsletter for product updates, industry insights, and customer stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand"
              aria-label="Email address"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
