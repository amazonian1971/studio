
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutUsPage() {
  return (
    <div className="container max-w-4xl py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">About TrusTNet</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            Welcome to TrusTNet, the platform dedicated to helping you build trust and accountability. We believe that making and keeping promises is fundamental to personal growth and strong relationships.
          </p>
          <p>
            Our mission is to provide a space where individuals can publicly declare their intentions, track their progress, and inspire others with their commitments. Whether you're making a personal goal, a business commitment, or a promise to a loved one, TrusTNet is here to support you on your journey.
          </p>
          <p>
            Join our community and start building a web of trust today.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
