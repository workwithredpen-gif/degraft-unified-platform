export default function Terms() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="mb-8">Terms of Service</h1>
        
        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="text-muted">
              By accessing or using the De-Graft platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
            <p className="text-muted">
              De-Graft provides cloud-based property, asset, and waste management software. We reserve the right to modify, suspend, or discontinue any aspect of the service at any time with reasonable notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted">
              <li>You must provide accurate and complete information when creating an account</li>
              <li>You are responsible for maintaining the confidentiality of your credentials</li>
              <li>You are responsible for all activities under your account</li>
              <li>Notify us immediately of any unauthorized access</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use</h2>
            <p className="text-muted mb-3">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted">
              <li>Use the service for any illegal purpose</li>
              <li>Attempt to gain unauthorized access to any portion of the platform</li>
              <li>Upload malicious code or malware</li>
              <li>Interfere with or disrupt the service</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Payment Terms</h2>
            <p className="text-muted">
              Subscription fees are billed in advance on a recurring basis. All fees are non-refundable except as required by law. We reserve the right to modify pricing with 30 days' notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
            <p className="text-muted">
              The De-Graft platform, including all content, features, and functionality, is owned by De-Graft Management and protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Data Ownership</h2>
            <p className="text-muted">
              You retain all rights to the data you input into the platform. We do not claim ownership of your content. We may use aggregated, anonymized data for analytics and service improvement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Service Level Agreement</h2>
            <p className="text-muted">
              We strive to maintain 99.9% uptime. Planned maintenance will be communicated in advance. Service credits may be available for prolonged outages as outlined in your subscription agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
            <p className="text-muted">
              To the maximum extent permitted by law, De-Graft shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
            <p className="text-muted">
              We may terminate or suspend your account immediately, without prior notice, for conduct that violates these Terms or is harmful to other users, us, or third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
            <p className="text-muted">
              These Terms shall be governed by the laws of England and Wales. Any disputes shall be resolved in the courts of London, United Kingdom.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
            <p className="text-muted">
              For questions about these Terms, contact us at:{" "}
              <a href="mailto:legal@degraft.example" className="text-brand hover:underline">
                legal@degraft.example
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
