"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MessageCircle } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create WhatsApp message
    const message = encodeURIComponent(
      `New Contact Form Submission\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\n\nMessage:\n${formData.message}`
    )
    
    // Redirect to WhatsApp using api.whatsapp.com
    window.open(`https://api.whatsapp.com/send?phone=17185012165&text=${message}`, '_blank')
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal mb-4 text-balance">
              Let's Connect
            </h2>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Ready to take the next step? Schedule a discovery call or send me a message.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-6">
              <Card className="border-none shadow-md rounded-3xl bg-cream/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-olive/10 flex items-center justify-center mb-2">
                    <Mail className="w-6 h-6 text-olive" />
                  </div>
                  <CardTitle className="text-lg">Email</CardTitle>
                  <CardDescription>
                    <a href="mailto:yochevedshapiroconsulting@gmail.com" className="text-olive hover:underline text-[10px] leading-tight">
                      yochevedshapiroconsulting@gmail.com
                    </a>
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-none shadow-md rounded-3xl bg-cream/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-olive/10 flex items-center justify-center mb-2">
                    <Phone className="w-6 h-6 text-olive" />
                  </div>
                  <CardTitle className="text-lg">Phone</CardTitle>
                  <CardDescription>
                    <a href="tel:718-501-2165" className="text-olive hover:underline">
                      718-501-2165
                    </a>
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-none shadow-md rounded-3xl bg-cream/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-olive/10 flex items-center justify-center mb-2">
                    <MessageCircle className="w-6 h-6 text-olive" />
                  </div>
                  <CardTitle className="text-lg">WhatsApp Group</CardTitle>
                  <CardDescription>
                    <a href="https://chat.whatsapp.com/CCu3vITJFl19xsDlsriHHZ" target="_blank" rel="noopener noreferrer" className="text-olive hover:underline">
                      Join Our Community
                    </a>
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <Card className="lg:col-span-2 border-none shadow-lg rounded-3xl">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-charcoal">Send a Message</CardTitle>
                <CardDescription>I'll get back to you within 24-48 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="rounded-xl"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="rounded-xl"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your needs..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="rounded-xl resize-none"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full rounded-full bg-olive text-white hover:bg-olive-dark">
                    Schedule a Discovery Call
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
