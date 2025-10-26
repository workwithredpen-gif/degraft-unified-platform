import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export function CTASection({
  title,
  description,
  primaryText = "Book a Demo",
  primaryHref = "/contact",
  secondaryText,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-brand to-brand-700 p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-foreground mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-brand-foreground/90 mb-8 max-w-2xl mx-auto">
              {description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-panel text-brand hover:bg-panel/90"
            >
              <Link to={primaryHref}>
                {primaryText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            {secondaryText && secondaryHref && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-brand-foreground/30 text-brand-foreground hover:bg-brand-foreground/10"
              >
                <Link to={secondaryHref}>{secondaryText}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
