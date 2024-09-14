import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="grid w-full place-content-center py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Get in Touch
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                  We&apos;re here to help. Reach out to us for any questions,
                  concerns, or feedback about UpLift.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="grid w-full place-content-center bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Contact Information
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Don&apos;t hesitate to reach out. We&apos;re always here to
                  help and improve our service based on your feedback.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="text-primary" />
                    <span>support@uplift.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="text-primary" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="text-primary" />
                    <span>123 UpLift Street, San Francisco, CA 94105</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Office Hours</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Monday - Friday: 9:00 AM - 5:00 PM (PST)
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you as
                    soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input id="first-name" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input id="last-name" placeholder="Doe" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        placeholder="john@example.com"
                        required
                        type="email"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select defaultValue="general">
                        <SelectTrigger id="subject">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="general">
                            General Inquiry
                          </SelectItem>
                          <SelectItem value="support">
                            Technical Support
                          </SelectItem>
                          <SelectItem value="billing">
                            Billing Question
                          </SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        className="min-h-[100px]"
                        id="message"
                        placeholder="Your message here..."
                        required
                      />
                    </div>
                    <Button className="w-full" type="submit">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="grid w-full place-content-center py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Can&apos;t find the answer you&apos;re looking for? Reach out
                  to our customer support team.
                </p>
              </div>
              <div className="w-full max-w-2xl space-y-4">
                <details className="border-b pb-4">
                  <summary className="cursor-pointer text-lg font-semibold">
                    How do I reset my password?
                  </summary>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    You can reset your password by clicking on the &quot;Forgot
                    Password&quot; link on the login page. Follow the
                    instructions sent to your email to create a new password.
                  </p>
                </details>
                <details className="border-b pb-4">
                  <summary className="cursor-pointer text-lg font-semibold">
                    Can I upgrade my plan at any time?
                  </summary>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Yes, you can upgrade your plan at any time. Go to your
                    account settings and select &quot;Change Plan&quot; to view
                    available options.
                  </p>
                </details>
                <details className="border-b pb-4">
                  <summary className="cursor-pointer text-lg font-semibold">
                    Is there a mobile app available?
                  </summary>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Yes, we have mobile apps available for both iOS and Android
                    devices. You can download them from the App Store or Google
                    Play Store.
                  </p>
                </details>
                <details className="border-b pb-4">
                  <summary className="cursor-pointer text-lg font-semibold">
                    How secure is my data?
                  </summary>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    We take data security very seriously. All data is encrypted
                    in transit and at rest. We use industry-standard security
                    measures to protect your information.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
