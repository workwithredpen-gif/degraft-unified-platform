export default function Privacy() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="mb-8">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-muted">
              De-Graft Management ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our property, asset, and waste management platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <p className="text-muted mb-3">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted">
              <li>Account information (name, email, company details)</li>
              <li>Property, asset, and waste data you enter into the platform</li>
              <li>Usage data and analytics</li>
              <li>Communication records</li>
              <li>Payment information (processed securely by third-party providers)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices, updates, and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Analyze usage patterns to improve user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            <p className="text-muted">
              We implement appropriate technical and organizational measures to protect your data, including encryption, access controls, and regular security audits. Our infrastructure is SOC 2 compliant and hosted in tier-4 data centers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
            <p className="text-muted">
              We retain your information for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your data at any time, subject to legal retention requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
            <p className="text-muted mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Export your data</li>
              <li>Withdraw consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. International Data Transfers</h2>
            <p className="text-muted">
              Your data may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for international transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
            <p className="text-muted">
              For questions about this Privacy Policy, please contact us at:{" "}
              <a href="mailto:privacy@degraft.example" className="text-brand hover:underline">
                privacy@degraft.example
              </a>
            </p>
          </section>

          <p className="text-sm text-muted italic mt-12">
            Last updated: January 2025
          </p>
        </div>
      </div>
    </div>
  );
}
