import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFF] pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-slate-600 mb-8">Effective Date: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. What Are Cookies?</h2>
              <p>Cookies are small text files stored in your browser. They help us remember you, improve loading times, and analyze usage patterns.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Types of Cookies We Use</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="border border-slate-200 px-4 py-2 text-left">Type</th>
                      <th className="border border-slate-200 px-4 py-2 text-left">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-200 px-4 py-2 font-medium">Essential</td>
                      <td className="border border-slate-200 px-4 py-2">Login, session handling, and functionality</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 px-4 py-2 font-medium">Analytics</td>
                      <td className="border border-slate-200 px-4 py-2">Measure traffic and usage patterns (e.g., Plausible, Google Analytics)</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 px-4 py-2 font-medium">Preference</td>
                      <td className="border border-slate-200 px-4 py-2">Save theme, language, and UI settings</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Your Control</h2>
              <p>You can disable or delete cookies via your browser settings. Disabling essential cookies may affect site performance.</p>
              <p className="mt-4">We offer a cookie banner to opt-in or opt-out of analytics cookies where required by law.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Third-Party Cookies</h2>
              <p>Some services (e.g., Stripe, AI providers) may use their own cookies when you interact with them through SOPCRAFTER. We don't control those cookies.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Changes to This Policy</h2>
              <p>We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Effective Date".</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
              <p>If you have any questions about this Cookie Policy, please contact us at privacy@sopcrafter.com</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy; 