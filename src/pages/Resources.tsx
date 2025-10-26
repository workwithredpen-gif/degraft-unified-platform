import { Link } from "react-router-dom";
import { Video, Calendar, FileText, Newspaper, ArrowRight } from "lucide-react";

const resources = [
  {
    icon: Calendar,
    title: "Webinars",
    description: "Join live sessions with industry experts and product demos, or watch recordings on-demand.",
    href: "/resources/webinars",
    color: "brand",
  },
  {
    icon: Video,
    title: "Videos",
    description: "Quick tutorials, feature walkthroughs, and customer testimonials to help you get the most from the platform.",
    href: "/resources/videos",
    color: "accent-blue",
  },
  {
    icon: FileText,
    title: "Case Studies",
    description: "Real-world examples of how organizations transformed their operations with De-Graft.",
    href: "/resources/case-studies",
    color: "accent-gold",
  },
  {
    icon: Newspaper,
    title: "News",
    description: "Latest product updates, company announcements, and industry insights from our team.",
    href: "/resources/news",
    color: "brand",
  },
];

export default function Resources() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="mb-6">Resources</h1>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto">
            Explore webinars, videos, case studies, and news to learn how De-Graft can transform your operations.
          </p>
        </div>

        {/* Resource Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <Link
                key={resource.href}
                to={resource.href}
                className="group rounded-2xl bg-panel border border-border p-8 shadow-card hover:shadow-lg transition-all"
              >
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-${resource.color}/10 group-hover:scale-110 transition-transform`}>
                  <Icon className={`h-7 w-7 text-${resource.color}`} />
                </div>
                
                <h2 className="text-2xl font-semibold mb-3 flex items-center justify-between">
                  {resource.title}
                  <ArrowRight className="h-5 w-5 text-muted group-hover:text-brand group-hover:translate-x-1 transition-all" />
                </h2>
                
                <p className="text-muted">{resource.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
