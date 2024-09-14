import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      name: "Freelancer",
      price: "$9.99",
      description: "Perfect for independent professionals",
      features: [
        "Unlimited Projects",
        "Basic Invoicing",
        "Time Tracking",
        "Task Management",
        "5GB Storage",
        "Email Support",
      ],
    },
    {
      name: "Small Team",
      price: "$24.99",
      description: "Ideal for growing teams up to 5 members",
      features: [
        "Everything in Freelancer",
        "Team Collaboration",
        "Advanced Reporting",
        "Client Portal",
        "20GB Storage",
        "Priority Email Support",
      ],
    },
    {
      name: "Business",
      price: "$49.99",
      description: "For established businesses with larger teams",
      features: [
        "Everything in Small Team",
        "Unlimited Team Members",
        "Custom Integrations",
        "API Access",
        "100GB Storage",
        "24/7 Phone & Email Support",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="grid w-full place-content-center py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Simple, Transparent Pricing
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                  Choose the plan that&apos;s right for you and start managing
                  your projects more efficiently today.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="pricing"
          className="grid w-full place-content-center bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3">
              {plans.map((plan, index) => (
                <Card
                  key={index}
                  className={index === 1 ? "border-primary" : ""}
                >
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold">
                      {plan.price}
                      <span className="text-sm font-normal">/month</span>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      {index === 1 ? "Start Free Trial" : "Choose Plan"}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="grid w-full place-content-center py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Got questions? We&apos;ve got answers. If you can&apos;t find
                  what you&apos;re looking for, feel free to contact our support
                  team.
                </p>
              </div>
              <div className="space-y-4">
                <details className="border-b pb-4">
                  <summary className="cursor-pointer text-lg font-semibold">
                    Can I change my plan later?
                  </summary>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Yes, you can upgrade or downgrade your plan at any time.
                    Changes will be reflected in your next billing cycle.
                  </p>
                </details>
                <details className="border-b pb-4">
                  <summary className="cursor-pointer text-lg font-semibold">
                    Is there a free trial available?
                  </summary>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Yes, we offer a 14-day free trial for all our plans. No
                    credit card required.
                  </p>
                </details>
                <details className="border-b pb-4">
                  <summary className="cursor-pointer text-lg font-semibold">
                    What payment methods do you accept?
                  </summary>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    We accept all major credit cards, PayPal, and bank transfers
                    for annual plans.
                  </p>
                </details>
                <details className="border-b pb-4">
                  <summary className="cursor-pointer text-lg font-semibold">
                    Can I cancel my subscription at any time?
                  </summary>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Yes, you can cancel your subscription at any time. Your
                    account will remain active until the end of your current
                    billing period.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>
        <section className="grid w-full place-content-center bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Still have questions?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our support team is here to help. Contact us and we&apos;ll
                  get back to you as soon as possible.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full">Contact Support</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
