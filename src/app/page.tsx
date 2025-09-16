import { Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function WelcomePage() {
  const features = [
    {
      title: 'Make Public Promises',
      description: 'Declare your intentions and hold yourself accountable to the world.',
    },
    {
      title: 'Track Your Progress',
      description: 'Keep a record of your journey and see how far you’ve come.',
    },
    {
      title: 'Build Trust',
      description: 'Show your reliability by keeping the promises you make.',
    },
    {
      title: 'Connect with Others',
      description: 'Follow others and get inspired by their commitments.',
    },
  ];

  const socialProof = [
    PlaceHolderImages.find((img) => img.id === 'user-1'),
    PlaceHolderImages.find((img) => img.id === 'user-2'),
    PlaceHolderImages.find((img) => img.id === 'user-3'),
    PlaceHolderImages.find((img) => img.id === 'user-4'),
    PlaceHolderImages.find((img) => img.id === 'user-5'),
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40 bg-background">
          <div className="container mx-auto text-center px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4">
              <Handshake className="h-16 w-16 text-primary" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Welcome to PromiseWeb
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                A new way to make and keep promises. Build trust and
                accountability in a public space.
              </p>
            </div>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/signup">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/login">Sign In</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12">
              How It Works
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="social-proof"
          className="w-full py-12 md:py-24 lg:py-32 bg-secondary"
        >
          <div className="container mx-auto text-center px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Join a growing community
            </h2>
            <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl mb-8">
              Thousands of users are already making and keeping their promises on
              PromiseWeb.
            </p>
            <div className="flex justify-center items-center -space-x-2">
              {socialProof.map((user, index) =>
                user ? (
                  <Image
                    key={index}
                    src={user.imageUrl}
                    alt={user.description}
                    width={48}
                    height={48}
                    className="rounded-full border-2 border-background"
                    style={{ zIndex: socialProof.length - index }}
                    data-ai-hint={user.imageHint}
                  />
                ) : null
              )}
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 border-t">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} PromiseWeb. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
