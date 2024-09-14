import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FileText,
  Users,
  BarChart,
  Clock,
  DollarSign,
  Zap,
} from "lucide-react";
import Image from "next/image";

export default function HowItWorksPage() {
  const steps = [
    {
      icon: <FileText className="h-12 w-12 text-primary" />,
      title: "Create Your Project",
      description:
        "Set up your project with key details, milestones, and team members.",
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Collaborate with Your Team",
      description:
        "Invite team members, assign tasks, and communicate seamlessly within the platform.",
    },
    {
      icon: <Clock className="h-12 w-12 text-primary" />,
      title: "Track Time and Progress",
      description:
        "Log time spent on tasks and monitor project progress in real-time.",
    },
    {
      icon: <DollarSign className="h-12 w-12 text-primary" />,
      title: "Manage Costs",
      description:
        "Track expenses, set budgets, and generate financial reports effortlessly.",
    },
    {
      icon: <BarChart className="h-12 w-12 text-primary" />,
      title: "Analyze and Report",
      description:
        "Gain insights with powerful analytics and create comprehensive reports.",
    },
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: "Streamline and Automate",
      description:
        "Utilize integrations and automation to enhance your workflow efficiency.",
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
                  How UPLIFT Works
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                  Discover how UPLIFT streamlines your project management and
                  boosts productivity in six simple steps.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="grid w-full place-content-center bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {steps.map((step, index) => (
                <Card
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <CardHeader>
                    <div className="mb-4 grid place-content-center rounded-full bg-primary/10 p-2">
                      {step.icon}
                    </div>
                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{step.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="grid w-full place-content-center py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Start Your UpLift Journey
                </h2>
                <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ready to transform your project management experience? Follow
                  these steps to get started with UpLift:
                </p>
                <ul className="mt-6 grid gap-4">
                  <li className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      1
                    </div>
                    <span>Sign up for a free trial account</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      2
                    </div>
                    <span>Set up your first project</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      3
                    </div>
                    <span>Invite your team members</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      4
                    </div>
                    <span>Start tracking time and managing tasks</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button>Start Free Trial</Button>
                  <Button variant="outline">Watch Demo</Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="UpLift Dashboard Preview"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height={310}
                  src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2839&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={550}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="grid w-full place-content-center bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Got questions about how UpLift works? We&apos;ve got answers.
                </p>
              </div>
              <div className="w-full max-w-2xl space-y-4">
                <details className="border-b pb-4">
                  <summary className="cursor-pointer text-lg font-semibold">
                    How long does it take to set up a project?
                  </summary>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Setting up a project in UpLift typically takes just a few
                    minutes. Our intuitive interface guides you through the
                    process, making it quick and easy.
                  </p>
                </details>
                <details className="border-b pb-4">
                  <summary className="cursor-pointer text-lg font-semibold">
                    Can I integrate UpLift with other tools?
                  </summary>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Yes, UpLift offers integrations with popular tools like
                    Slack, Trello, and Google Workspace. You can also use our
                    API to create custom integrations.
                  </p>
                </details>
                <details className="border-b pb-4">
                  <summary className="cursor-pointer text-lg font-semibold">
                    Is my data secure with UpLift?
                  </summary>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Absolutely. We use industry-standard encryption and security
                    measures to protect your data. Your information is stored
                    securely and backed up regularly.
                  </p>
                </details>
                <details className="border-b pb-4">
                  <summary className="cursor-pointer text-lg font-semibold">
                    Can I use UpLift on my mobile device?
                  </summary>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Yes, UpLift is fully responsive and works on all devices. We
                    also offer dedicated mobile apps for iOS and Android for an
                    optimized mobile experience.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>
        <section className="grid w-full place-content-center py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Project Management?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of satisfied users who have streamlined their
                  workflows with UpLift.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full">Start Your Free Trial</Button>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  No credit card required. 14-day free trial.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
