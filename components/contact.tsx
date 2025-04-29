"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Terminal, Send, AlertCircle, CheckCircle } from "lucide-react"
import emailjs from "emailjs-com"

export default function Contact() {
  const form = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean
    message: string
  } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.current) return

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Replace these with your actual EmailJS service ID, template ID, and user ID
      const result = await emailjs.sendForm(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        form.current,
        "YOUR_USER_ID", // Replace with your EmailJS user ID
      )

      console.log("Email successfully sent!", result.text)
      setSubmitStatus({
        success: true,
        message: "$ Message sent successfully! Status: 200 OK",
      })
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Failed to send email:", error)
      setSubmitStatus({
        success: false,
        message: "$ Error sending message. Please try again later. Status: 500",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-muted/5 z-0"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Terminal className="h-5 w-5 text-primary" />
              <span className="text-sm font-mono text-primary">~/contact</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl formal-heading">Get In Touch</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
          <div className="space-y-6">
            <Card className="tech-card border-primary/20 bg-background/50">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium font-mono">Email</h3>
                  <p className="text-muted-foreground font-mono text-sm">ptelukun@gmu.edu</p>
                </div>
              </CardContent>
            </Card>
            <Card className="tech-card border-accent/20 bg-background/50">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="rounded-full bg-accent/10 p-3">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium font-mono">Location</h3>
                  <p className="text-muted-foreground font-mono text-sm">Virginia, United States</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <Card className="tech-card border-primary/20 bg-background/50">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Terminal className="h-5 w-5 text-primary" />
                <CardTitle className="formal-heading">Send a Message</CardTitle>
              </div>
              <CardDescription className="font-mono text-sm">
                $ echo "Fill out the form below and I'll get back to you as soon as possible."
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-mono leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    $ name:
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="border-primary/20 focus:border-primary focus:ring-primary/30 bg-background/50 font-mono"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-mono leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    $ email:
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="border-primary/20 focus:border-primary focus:ring-primary/30 bg-background/50 font-mono"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-mono leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    $ message:
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    required
                    className="min-h-[120px] border-primary/20 focus:border-primary focus:ring-primary/30 bg-background/50 font-mono"
                  />
                </div>
                <Button type="submit" className="w-full cyber-button" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <span className="mr-2">Sending...</span>
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
                {submitStatus && (
                  <div
                    className={`flex items-center text-${submitStatus.success ? "accent" : "destructive"} text-center font-mono`}
                  >
                    {submitStatus.success ? (
                      <CheckCircle className="h-4 w-4 mr-2" />
                    ) : (
                      <AlertCircle className="h-4 w-4 mr-2" />
                    )}
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
