import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFF] pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-slate-600 mb-8">Effective Date: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <ul className="list-disc pl-6 mt-4">
                <li><strong>Account Info:</strong> Email and name (if provided)</li>
                <li><strong>Uploaded Content:</strong> Videos, images, and transcripts for SOP generation</li>
                <li><strong>AI Output:</strong> SOPs and related metadata</li>
                <li><strong>Usage Data:</strong> Device, browser, and IP info for performance analytics</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 mt-4">
                <li>To provide and improve SOP generation services</li>
                <li>To personalize your user experience</li>
                <li>To troubleshoot issues and respond to support requests</li>
                <li>To analyze product performance and user behavior (in aggregate)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Use of AI and Third-Party Tools</h2>
              <p>We may process content through third-party AI providers such as OpenAI, Groq, or other reputable vendors. Your data is used only to fulfill your request and is <strong>not used to train those models</strong>.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Data Sharing</h2>
              <p>We do <strong>not sell</strong> your personal information. We only share data with:</p>
              <ul className="list-disc pl-6 mt-4">
                <li>Payment processors (e.g., Stripe)</li>
                <li>AI vendors for processing requests</li>
                <li>Cloud storage or hosting providers (e.g., Supabase/Firebase)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Data Retention</h2>
              <p>We store uploaded content and generated SOPs for up to 30 days unless explicitly saved by the user. Users can request deletion at any time.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
              <p>You may:</p>
              <ul className="list-disc pl-6 mt-4">
                <li>Request a copy of your data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent for AI processing</li>
              </ul>
              <p className="mt-4">To do so, contact: support@sopcrafter.com</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Security</h2>
              <p>We use industry-standard practices to protect your data including:</p>
              <ul className="list-disc pl-6 mt-4">
                <li>Encrypted video storage</li>
                <li>Secure API authentication</li>
                <li>HTTPS-only data transmission</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. International Users</h2>
              <p>If you're outside the U.S., your data may be processed in countries with different laws. By using SOPCRAFTER, you consent to this.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Changes to this Policy</h2>
              <p>We'll notify you of any material changes to our privacy practices via email or on the site.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at privacy@sopcrafter.com</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 