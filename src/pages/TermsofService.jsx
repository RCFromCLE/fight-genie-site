import React from "react";
import { ArrowLeft } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';


const TermsofService = () => {
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
              Terms of Service
            </CardTitle>
            <p className="text-gray-400 mt-2">Last Updated: {lastUpdated}</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">1. Acceptance of Terms</h2>
              <p>By accessing and using Fight Genie, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">2. Service Description</h2>
              <p>Fight Genie is a Discord bot providing AI-powered UFC fight predictions and analysis. Our service includes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>AI-powered fight predictions and analysis</li>
                <li>Statistical analysis</li>
                <li>Fighter performance tracking</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">3. User Obligations</h2>
              <p>Users must:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate information when required</li>
                <li>Use the service in compliance with Discord's Terms</li>
                <li>Not attempt to manipulate or abuse the service</li>
                <li>Not use the service for nefarious purposes</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">4. Payments and Refunds</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All purchases are final and non-refundable</li>
                <li>Pricing is subject to change with notice</li>
                <li>Payment processing is handled by secure third-party providers</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">5. Limitation of Liability</h2>
              <p>Fight Genie is provided "as is" without warranties. We are not responsible for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Accuracy of predictions</li>
                <li>Financial losses from using our service</li>
                <li>Service interruptions or technical issues</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">6. Contact Us</h2>
              <p>For questions about these terms, contact us at:</p>
              <p className="text-blue-400">rudycorradetti4@gmail.com</p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsofService;