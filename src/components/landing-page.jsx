'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle, Code, Globe, Zap } from "lucide-react"
import Link from "next/link"

export function LandingPageComponent() {
  return (
    (<div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Zap className="h-6 w-6" />
          <span className="sr-only">SaaSify</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-50 via-indigo-50 to-pink-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Simplify Your Workflow with SaaSify
                </h1>
                <p
                  className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Boost productivity and streamline your business processes with our intuitive SaaS platform.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Globe className="h-12 w-12 mb-4 text-purple-500" />
                <h3 className="text-xl font-bold mb-2">Global Accessibility</h3>
                <p className="text-gray-500">Access your work from anywhere in the world, at any time.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Code className="h-12 w-12 mb-4 text-purple-500" />
                <h3 className="text-xl font-bold mb-2">Powerful Integrations</h3>
                <p className="text-gray-500">Seamlessly connect with your favorite tools and services.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <CheckCircle className="h-12 w-12 mb-4 text-purple-500" />
                <h3 className="text-xl font-bold mb-2">Advanced Analytics</h3>
                <p className="text-gray-500">Gain insights with comprehensive data analysis and reporting.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Basic", "Pro", "Enterprise"].map((plan) => (
                <div key={plan} className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">{plan}</h3>
                  <p className="text-4xl font-bold mb-6">
                    ${plan === "Basic" ? "9" : plan === "Pro" ? "29" : "99"}
                    <span className="text-sm font-normal text-gray-500">/month</span>
                  </p>
                  <ul className="mb-6 space-y-2">
                    {["5 Projects", "10GB Storage", "Basic Support"].map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-auto">Choose Plan</Button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-500 to-indigo-500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to Get Started?
                </h2>
                <p className="mx-auto max-w-[600px] text-white md:text-xl">
                  Join thousands of satisfied users and take your productivity to the next level.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="flex-1" placeholder="Enter your email" type="email" />
                  <Button className="bg-white text-purple-500">Sign Up</Button>
                </form>
                <p className="text-xs text-white">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 SaaSify. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>)
  );
}