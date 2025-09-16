"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function PrivacyPolicyPage() {
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    setLastUpdated(new Date().toLocaleDateString());
  }, []);

  return (
    <div className="container max-w-4xl py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <h2 className="text-xl font-semibold text-foreground">1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you create an account, make a promise, or communicate with us. This may include your name, email address, and any other information you choose to provide.
          </p>
          <h2 className="text-xl font-semibold text-foreground">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to operate, maintain, and provide the features and functionality of TrusTNet. This includes personalizing your experience, communicating with you, and for security purposes.
          </p>
          <h2 className="text-xl font-semibold text-foreground">3. Sharing of Your Information</h2>
          <p>
            We do not share your personal information with third parties except as described in this Privacy Policy. We may share information with your consent, to comply with legal obligations, or to protect our rights.
          </p>
          <h2 className="text-xl font-semibold text-foreground">4. Your Choices</h2>
          <p>
            You may review, update, or delete information in your account at any time by logging into your account settings.
          </p>
          <p>
            Last Updated: {lastUpdated}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
