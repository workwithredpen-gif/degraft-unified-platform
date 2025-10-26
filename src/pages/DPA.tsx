export default function DPA() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="mb-8">Data Processing Agreement</h1>
        
        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Definitions</h2>
            <p className="text-muted">
              This Data Processing Agreement ("DPA") forms part of the agreement between De-Graft Management ("Processor") and the customer ("Controller") for the provision of property, asset, and waste management services.
            </p>
            <p className="text-muted">
              Terms such as "Personal Data," "Data Subject," "Processing," and "Data Breach" have the meanings set forth in the General Data Protection Regulation (GDPR).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Scope and Purpose</h2>
            <p className="text-muted">
              The Processor will process Personal Data on behalf of the Controller for the purposes of providing the De-Graft platform services, including property management, asset tracking, and waste operations management.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Processor Obligations</h2>
            <p className="text-muted mb-3">The Processor shall:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted">
              <li>Process Personal Data only on documented instructions from the Controller</li>
              <li>Ensure persons authorized to process Personal Data are bound by confidentiality</li>
              <li>Implement appropriate technical and organizational measures (TOMs)</li>
              <li>Assist the Controller in responding to Data Subject requests</li>
              <li>Notify the Controller of any Data Breach without undue delay</li>
              <li>Delete or return Personal Data upon termination of services</li>
              <li>Make available all information necessary to demonstrate compliance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Sub-Processing</h2>
            <p className="text-muted">
              The Controller provides general authorization for the Processor to engage sub-processors. A list of current sub-processors is available upon request. The Processor will notify the Controller of any changes to sub-processors with at least 30 days' notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Security Measures</h2>
            <p className="text-muted mb-3">The Processor implements the following security measures:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted">
              <li>Encryption of data at rest and in transit (AES-256)</li>
              <li>Access controls and multi-factor authentication</li>
              <li>Regular security audits and penetration testing</li>
              <li>SOC 2 Type II compliance certification</li>
              <li>Incident response and disaster recovery procedures</li>
              <li>Employee security training and background checks</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Data Subject Rights</h2>
            <p className="text-muted">
              The Processor will assist the Controller in fulfilling Data Subject rights requests, including access, rectification, erasure, data portability, and objection to processing. The Controller is responsible for responding to such requests.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Data Breach Notification</h2>
            <p className="text-muted">
              In the event of a Data Breach, the Processor will notify the Controller within 72 hours and provide all relevant information, including the nature of the breach, affected Data Subjects, and mitigation measures taken.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. International Data Transfers</h2>
            <p className="text-muted">
              Data may be transferred to and processed in the United Kingdom, Ghana, and Kenya. The Processor ensures appropriate safeguards are in place for international transfers, including Standard Contractual Clauses (SCCs) where required.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Audits and Inspections</h2>
            <p className="text-muted">
              The Controller may audit the Processor's compliance with this DPA upon reasonable notice. The Processor will cooperate with such audits and provide necessary documentation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Data Retention and Deletion</h2>
            <p className="text-muted">
              Upon termination of services, the Processor will delete or return all Personal Data within 90 days, unless required by law to retain. Backup copies will be securely destroyed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Liability</h2>
            <p className="text-muted">
              Each party's liability under this DPA is subject to the limitations and exclusions set forth in the main service agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Contact for DPA Matters</h2>
            <p className="text-muted">
              For questions or concerns regarding this DPA, contact our Data Protection Officer at:{" "}
              <a href="mailto:dpo@degraft.example" className="text-brand hover:underline">
                dpo@degraft.example
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
