import React from "react";
import { ArrowLeft } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';

const PrivacyPolicy = () => {
  const lastUpdated = "December 3, 2024";

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <a href="/" className="inline-flex items-center space-x-2 text-gray-400 hover:text-gray-200 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </a>

        <Card>
          <CardHeader>
            <CardTitle className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-gray-100 to-blue-500">
              Privacy Policy
            </CardTitle>
            <p className="text-gray-400 mt-2">Last Updated: {lastUpdated}</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">1. Information We Collect</h2>
              <p>When you use Fight Genie, we collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Discord server information for bot functionality</li>
                <li>Discord user information for bot functionality</li>
                <li>Payment information (processed securely through our payment providers, not stored on our infrastructure)</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">2. How We Use Your Information</h2>
              <p>We use collected information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and maintain our services</li>
                <li>Process payments and manage subscriptions</li>
                <li>Improve our prediction algorithms and user experience</li>
                <li>Send important updates about our service</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">3. Data Storage and Security</h2>
              <p>Your data is securely stored and encrypted. We implement industry-standard security measures to protect your information.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">4. Third-Party Services</h2>
              <p>We use the following third-party services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Discord (for bot functionality)</li>
                <li>Payment processors (for secure transactions)</li>
                <li>OddsAPI (for odds integration)</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request data deletion</li>
                <li>Opt-out of marketing communications</li>
                <li>Request data corrections</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">6. Contact Us</h2>
              <p>For privacy-related questions, contact us at:</p>
              <p className="text-blue-400">rudycorradetti4@gmail.com</p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;