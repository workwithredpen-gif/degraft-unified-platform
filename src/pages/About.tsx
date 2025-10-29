import { Award, MapPin } from "lucide-react";
import { CTASection } from "@/components/ui/CTASection";

const awards = [
  { title: "PropTech Innovation of the Year", year: "2024" },
  { title: "ESG Impact Award", year: "2023" },
  { title: "GovTech Pilot Winner", year: "2023" },
  { title: "Customer Choice Award", year: "2024" },
];

const team = [
  {
    name: "Samuel De-Graft",
    role: "Founder & CEO",
    bio: "Former property management director with 15 years leading operations for multinational banks.",
    imageSrc: "/images/team-samuel.svg",
    imageAlt: "Illustrated headshot of Samuel De-Graft",
  },
  {
    name: "Ama Osei",
    role: "Chief Product Officer",
    bio: "IoT and smart cities expert. Previously led asset management platforms for telecom operators.",
    imageSrc: "/images/team-ama.svg",
    imageAlt: "Illustrated headshot of Ama Osei",
  },
  {
    name: "David Mensah",
    role: "Head of Engineering",
    bio: "Built scalable SaaS platforms for 10+ years. Passionate about clean code and user experience.",
    imageSrc: "/images/team-david.svg",
    imageAlt: "Illustrated headshot of David Mensah",
  },
  {
    name: "Grace Kimani",
    role: "Regional Director, East Africa",
    bio: "15 years in municipal waste management. Drives our sustainability and ESG initiatives.",
    imageSrc: "/images/team-grace.svg",
    imageAlt: "Illustrated headshot of Grace Kimani",
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero */}
      <section className="relative mb-20 overflow-hidden">
        <img
          src="/images/about-hero.svg"
          alt="Founding team collaborating in a London workspace"
          className="absolute inset-0 h-full w-full object-cover -z-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-bg/90 -z-10" aria-hidden="true" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Built with Africa in mind — deployed globally</h1>
            <p className="text-lg md:text-xl text-muted">
              De-Graft was born from the challenges of managing property, assets, and waste across multiple African markets. We deliver world-class software with on-the-ground support that understands your reality.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="mb-20 bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <img
                src="/images/about-story.svg"
                alt="Illustration of De-Graft's early operations"
                className="mb-6 w-full rounded-xl object-cover"
                loading="lazy"
              />
              <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
              <p className="text-muted mb-4">
                Founded in 2020, De-Graft emerged from real frustration: spreadsheets, paper files, and disconnected systems that made it nearly impossible to manage large property portfolios efficiently.
              </p>
              <p className="text-muted">
                We knew there had to be a better way—one that didn't require a PhD in software engineering or a massive IT budget.
              </p>
            </div>

            <div>
              <img
                src="/images/about-mission.svg"
                alt="Illustration of a connected smart city representing De-Graft's mission"
                className="mb-6 w-full rounded-xl object-cover"
                loading="lazy"
              />
              <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
              <p className="text-muted mb-4">
                To replace manual processes with intelligent automation that anyone can use. To prove that operational excellence and sustainability aren't luxuries—they're achievable with the right tools.
              </p>
              <p className="text-muted">
                We're building the operating system for property, asset, and waste management across Africa and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Awards & Recognition</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="rounded-xl bg-panel border border-border p-6 text-center"
              >
                <Award className="h-12 w-12 text-accent-gold mx-auto mb-4" />
                <h4 className="font-semibold mb-1">{award.title}</h4>
                <p className="text-sm text-muted">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Meet the Team</h2>
            <p className="text-lg text-muted">
              Leadership with deep industry experience and a passion for solving real problems
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.imageSrc}
                  alt={member.imageAlt}
                  className="mx-auto mb-4 h-32 w-32 rounded-full object-cover shadow-lg"
                  loading="lazy"
                />

                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-sm text-brand mb-3">{member.role}</p>
                <p className="text-sm text-muted">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Presence */}
      <section className="mb-20 bg-gradient-to-br from-brand to-brand-700 text-brand-foreground py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-brand-foreground">Global Reach, Local Support</h2>
            <p className="text-lg text-brand-foreground/90 max-w-2xl mx-auto">
              Headquartered in London with operational teams in Ghana and Kenya, we provide 24/7 support and on-site training.
            </p>
          </div>

          <img
            src="/images/global-presence.svg"
            alt="Stylised world map highlighting London, Accra, and Nairobi"
            className="mx-auto mb-12 h-64 w-full max-w-4xl object-contain"
            loading="lazy"
          />

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-3 text-brand-foreground/80" />
              <h3 className="text-xl font-semibold mb-1">London</h3>
              <p className="text-sm text-brand-foreground/80">UK Headquarters</p>
            </div>
            
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-3 text-brand-foreground/80" />
              <h3 className="text-xl font-semibold mb-1">Accra</h3>
              <p className="text-sm text-brand-foreground/80">West Africa Hub</p>
            </div>
            
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-3 text-brand-foreground/80" />
              <h3 className="text-xl font-semibold mb-1">Nairobi</h3>
              <p className="text-sm text-brand-foreground/80">East Africa Hub</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Join hundreds of organizations transforming operations"
        primaryText="Book a Demo"
        secondaryText="Contact Us"
        secondaryHref="/contact"
        backgroundImageSrc="/images/cta-meeting.svg"
        backgroundImageAlt="Business meeting illustration supporting the call to action"
      />
    </div>
  );
}
