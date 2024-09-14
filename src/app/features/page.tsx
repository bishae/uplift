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
  DollarSign,
  Clock,
  Users,
  BarChart,
  Calendar,
  Mail,
  Settings,
  Zap,
} from "lucide-react";
import Image from "next/image";

export default function FeaturesPage() {
  const features = [
    {
      icon: <FileText className="mb-4 h-8 w-8 text-primary" />,
      title: "Project Management",
      description:
        "Organize and track your projects with ease. Set milestones, assign tasks, and monitor progress all in one place.",
    },
    {
      icon: <DollarSign className="mb-4 h-8 w-8 text-primary" />,
      title: "Cost Tracking",
      description:
        "Keep a close eye on your expenses. Track costs per project, set budgets, and receive alerts to stay on financial target.",
    },
    {
      icon: <Clock className="mb-4 h-8 w-8 text-primary" />,
      title: "Time Tracking",
      description:
        "Log time spent on tasks and projects. Generate detailed timesheets and analyze productivity with insightful reports.",
    },
    {
      icon: <Users className="mb-4 h-8 w-8 text-primary" />,
      title: "Team Collaboration",
      description:
        "Foster seamless communication within your team. Share files, leave comments, and collaborate in real-time.",
    },
    {
      icon: <BarChart className="mb-4 h-8 w-8 text-primary" />,
      title: "Reporting & Analytics",
      description:
        "Gain valuable insights with customizable reports. Visualize data and make informed decisions to improve your business.",
    },
    {
      icon: <Calendar className="mb-4 h-8 w-8 text-primary" />,
      title: "Scheduling",
      description:
        "Manage your team's workload efficiently. Allocate resources, set deadlines, and visualize project timelines.",
    },
    {
      icon: <Mail className="mb-4 h-8 w-8 text-primary" />,
      title: "Client Invoicing",
      description:
        "Create and send professional invoices with ease. Track payments and set up recurring billing for your clients.",
    },
    {
      icon: <Settings className="mb-4 h-8 w-8 text-primary" />,
      title: "Customization",
      description:
        "Tailor UpLift to your needs. Customize workflows, create templates, and set up automation to boost efficiency.",
    },
    {
      icon: <Zap className="mb-4 h-8 w-8 text-primary" />,
      title: "Integrations",
      description:
        "Connect UpLift with your favorite tools. Integrate with accounting software, communication platforms, and more.",
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
                  Powerful Features for Effortless Project Management
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                  Discover how UpLift can transform your workflow and boost
                  productivity with our comprehensive set of features.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Book a Demo</Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="grid w-full place-content-center bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Features
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex flex-col items-center">
                      {feature.icon}
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
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
                  Why Choose UpLift?
                </h2>
                <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  UpLift is designed to streamline your project management
                  process, giving you more time to focus on what matters most -
                  delivering exceptional results to your clients.
                </p>
                <ul className="mt-6 grid gap-4">
                  <li className="flex items-center gap-2">
                    <FileText className="text-primary" />
                    <span>
                      All-in-one solution for project and cost management
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="text-primary" />
                    <span>Perfect for freelancers and small teams</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Settings className="text-primary" />
                    <span>Customizable to fit your unique workflow</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="text-primary" />
                    <span>Integrates with your favorite tools</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="UpLift Dashboard"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  src="/placeholder.svg"
                  width="550"
                  height="310"
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
                  Ready to Uplift Your Project Management?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of satisfied users who have transformed their
                  workflow with UpLift.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <input
                    className="flex h-10 w-full max-w-lg flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Get Started</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Start your 14-day free trial. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
