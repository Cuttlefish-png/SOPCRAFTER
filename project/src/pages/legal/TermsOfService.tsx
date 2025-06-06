import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFF] pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-slate-600 mb-8">Effective Date: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. About SOPCRAFTER</h2>
              <p>SOPCRAFTER is a tool that allows users to upload or record videos and generate AI-powered Standard Operating Procedures (SOPs) for internal business use.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Eligibility</h2>
              <p>To use SOPCRAFTER, you must be at least 13 years old (or older if required in your jurisdiction) and capable of entering into a binding agreement.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Your Content & Responsibility</h2>
              <p>You own all content you upload (videos, transcripts, etc.). By uploading, you grant us a limited license to process and use that content to deliver our services.</p>
              <p className="mt-4">You agree not to upload:</p>
              <ul className="list-disc pl-6 mt-4">
                <li>Content you don't own or have permission to use</li>
                <li>Anything illegal, harmful, abusive, or infringing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Use of AI & Output Disclaimer</h2>
              <p>We use third-party AI services to generate SOPs. These SOPs are intended as <strong>general operational guidance</strong> only and <strong>may not be 100% accurate</strong>. You are solely responsible for reviewing and using them.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Payment & Plans</h2>
              <p>Free users may access limited features. Paid plans offer enhanced functionality. All payments are securely processed via Stripe.</p>
              <p className="mt-4">Recurring billing terms and cancellation policies are disclosed at checkout.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Account Suspension</h2>
              <p>We may suspend or terminate accounts for:</p>
              <ul className="list-disc pl-6 mt-4">
                <li>Violations of this agreement</li>
                <li>Abuse of the service or attempts to bypass usage limits</li>
                <li>Uploading harmful or illegal content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
              <p>SOPCRAFTER is provided "as is." We are not liable for any:</p>
              <ul className="list-disc pl-6 mt-4">
                <li>Errors or inaccuracies in AI-generated SOPs</li>
                <li>Loss of data or service interruption</li>
                <li>Business losses resulting from reliance on AI output</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Changes to Terms</h2>
              <p>We may update these terms from time to time. Continued use of SOPCRAFTER means you accept any changes.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Governing Law</h2>
              <p>These Terms are governed by the laws of the United States.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at support@sopcrafter.com</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 