import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  FileText,
  Users,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="grid w-full place-content-center py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Streamline Your Projects with{" "}
                  <span className="underline">UPLIFT</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                  Empower your freelance career or small team with our
                  all-in-one project and cost management platform.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
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
              Key Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <FileText className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-bold">Project Management</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Efficiently organize and track your projects in one place.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <DollarSign className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-bold">Cost Tracking</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Monitor expenses and stay within budget effortlessly.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <FileText className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-bold">Client Invoicing</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Create and send professional invoices with ease.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Clock className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-bold">Time Tracking</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Log and analyze time spent on tasks and projects.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-bold">Team Collaboration</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Foster seamless communication and file sharing within your
                  team.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <ArrowRight className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-bold">Productivity Tools</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Boost efficiency with integrated productivity features.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="how-it-works"
          className="grid w-full place-content-center py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              How It Works
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
                  1
                </div>
                <h3 className="mb-2 text-xl font-bold">Sign Up</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Create your account and set up your profile.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
                  2
                </div>
                <h3 className="mb-2 text-xl font-bold">Create Projects</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Add your projects and define tasks and milestones.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
                  3
                </div>
                <h3 className="mb-2 text-xl font-bold">Track Progress</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Monitor time, costs, and project advancement in real-time.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="grid w-full place-content-center bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Our Users Say
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="User"
                  className="mb-4 h-24 w-24 rounded-full"
                  width={500}
                  height={500}
                />
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  &quot;UpLift has revolutionized how I manage my freelance
                  projects. It&apos;s a game-changer!&quot;
                </p>
                <p className="font-bold">Sarah K., Graphic Designer</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="User"
                  className="mb-4 h-24 w-24 rounded-full"
                  width={500}
                  height={500}
                />
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  &quot;As a small team, UpLift has helped us stay organized and
                  on budget. Highly recommended!&quot;
                </p>
                <p className="font-bold">Mike R., Startup Founder</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="User"
                  className="mb-4 h-24 w-24 rounded-full"
                  width={500}
                  height={500}
                />
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  &quot;The invoicing feature alone has saved me hours each
                  month. UpLift is a must-have tool.&quot;
                </p>
                <p className="font-bold">Emily T., Consultant</p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="pricing"
          className="grid w-full place-content-center py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Simple, Transparent Pricing
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
                <h3 className="mb-4 text-2xl font-bold">Freelancer</h3>
                <p className="mb-4 text-4xl font-bold">
                  $9.99<span className="text-base font-normal">/month</span>
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    <span>Unlimited Projects</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    <span>Basic Invoicing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    <span>Time Tracking</span>
                  </li>
                </ul>
                <Button className="mt-auto">Choose Plan</Button>
              </div>
              <div className="flex flex-col rounded-lg bg-primary p-6 text-primary-foreground shadow-lg">
                <h3 className="mb-4 text-2xl font-bold">Small Team</h3>
                <p className="mb-4 text-4xl font-bold">
                  $24.99<span className="text-base font-normal">/month</span>
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-white" />
                    <span>Everything in Freelancer</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-white" />
                    <span>Team Collaboration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-white" />
                    <span>Advanced Reporting</span>
                  </li>
                </ul>
                <Button className="mt-auto bg-white text-primary hover:bg-gray-100">
                  Choose Plan
                </Button>
              </div>
              <div className="flex flex-col rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
                <h3 className="mb-4 text-2xl font-bold">Business</h3>
                <p className="mb-4 text-4xl font-bold">
                  $49.99<span className="text-base font-normal">/month</span>
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    <span>Everything in Small Team</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    <span>Priority Support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    <span>Custom Integrations</span>
                  </li>
                </ul>
                <Button className="mt-auto">Choose Plan</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="grid w-full place-content-center bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Uplift Your Projects?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                  Join thousands of freelancers and small teams who are already
                  benefiting from UpLift.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
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
