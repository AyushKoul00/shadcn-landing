'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle, Code, Globe, Moon, Sun, Zap } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    (<Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme">
      <Sun
        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon
        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>)
  );
}

export function LandingPageComponent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    (<div className="flex flex-col min-h-screen">
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-7xl mx-auto px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Zap className="h-6 w-6" />
          <span className="sr-only">SaaSify</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
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
          <ThemeToggle />
        </nav>
      </motion.header>
      <main className="flex-1">
        <section
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-50 via-indigo-50 to-pink-50 dark:from-purple-900 dark:via-indigo-900 dark:to-pink-900">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div variants={itemVariants} className="space-y-2">
                <h1
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Simplify Your Workflow with SaaSify
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Boost productivity and streamline your business processes with our intuitive SaaS platform.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="space-x-4">
                <Button
                  className="bg-gradient-to-r from-purple-500 to-indigo-500 text-primary-foreground">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline">Learn More</Button>
              </motion.div>
            </div>
          </motion.div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Key Features
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Globe, title: "Global Accessibility", description: "Access your work from anywhere in the world, at any time." },
                { icon: Code, title: "Powerful Integrations", description: "Seamlessly connect with your favorite tools and services." },
                { icon: CheckCircle, title: "Advanced Analytics", description: "Gain insights with comprehensive data analysis and reporting." }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col items-center text-center">
                  <feature.icon className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Pricing Plans
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Basic", price: "9", features: ["5 Projects", "10GB Storage", "Basic Support"] },
                { name: "Pro", price: "29", features: ["15 Projects", "50GB Storage", "Priority Support"] },
                { name: "Enterprise", price: "99", features: ["Unlimited Projects", "500GB Storage", "24/7 Dedicated Support"] }
              ].map((plan, index) => (
                <motion.div
                  key={plan.name}
                  variants={itemVariants}
                  className="flex flex-col p-6 bg-card rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}>
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <p className="text-4xl font-bold mb-6">
                    ${plan.price}
                    <span className="text-sm font-normal text-muted-foreground">/month</span>
                  </p>
                  <ul className="mb-6 space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-auto" variant="pink">Choose Plan</Button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-500 to-indigo-500">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div variants={itemVariants} className="space-y-2">
                <h2
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-foreground">
                  Ready to Get Started?
                </h2>
                <p className="mx-auto max-w-[600px] text-primary-foreground md:text-xl">
                  Join thousands of satisfied users and take your productivity to the next level.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="flex-1" placeholder="Enter your email" type="email" />
                  <Button className="bg-background text-foreground">Sign Up</Button>
                </form>
                <p className="text-xs text-primary-foreground">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>
      <motion.footer
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-7xl mx-auto flex flex-col gap-2 sm:flex-row py-6 shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 SaaSify. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </motion.footer>
    </div>)
  );
}