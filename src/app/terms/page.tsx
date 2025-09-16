"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function TermsAndConditionsPage() {
    const [lastUpdated, setLastUpdated] = useState("");

    useEffect(() => {
        // This ensures the date is only rendered on the client, avoiding hydration mismatch.
        setLastUpdated(new Date().toLocaleDateString());
    }, []);

  return (
    <div className="container max-w-4xl py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Terms and Conditions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <h2 className="text-xl font-semibold text-foreground">1. Acceptance of Terms</h2>
          <p>
            By accessing or using TrusTNet, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not access the service.
          </p>
          <h2 className="text-xl font-semibold text-foreground">2. User Conduct</h2>
          <p>
            You are responsible for your own conduct and content on TrusTNet. You agree not to post content that is unlawful, harmful, or otherwise objectionable. We reserve the right to remove content and terminate accounts that violate these guidelines.
          </p>
          <h2 className="text-xl font-semibold text-foreground">3. Promises and Accountability</h2>
          <p>
            TrusTNet is a platform for making public commitments. While we encourage accountability, we are not responsible for the fulfillment of any promises made by users. The platform is for motivational and tracking purposes.
          </p>
          <h2 className="text-xl font-semibold text-foreground">4. Limitation of Liability</h2>
          <p>
            In no event shall TrusTNet, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
          </p>
           {lastUpdated && <p>Last Updated: {lastUpdated}</p>}
        </CardContent>
      </Card>
    </div>
  );
}
