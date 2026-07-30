"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lightbulb, Search, Target, FileText } from 'lucide-react'

const workshops = [
  {
    icon: Lightbulb,
    title: "On the Same Page: Parent-Teacher Partnership That Works",
    description: "Parents and teachers share the same goal but don't always share the same playbook. This session offers concrete strategies for building a true partnership — one where communication flows easily and the child feels the difference.",
  },
  {
    icon: Lightbulb,
    title: "Unlocking True Potential: Empowering Kids",
    description: "Discover strategies to help every child reach their full potential through strengths-based approaches and individualized support.",
  },
  {
    icon: Search,
    title: "When a Child Needs More",
    description: "Learn to recognize when additional support is needed and how to effectively advocate for appropriate services and interventions.",
  },
  {
    icon: Target,
    title: "Set Up for Success",
    description: "Create classroom and home environments that promote learning, reduce behavioral challenges, and support all learners.",
  },
  {
    icon: FileText,
    title: "Effective Lesson Planning",
    description: "Design lessons that engage diverse learners, accommodate different learning styles, and achieve educational objectives.",
  },
  {
    icon: Lightbulb,
    title: "On the Same Page: Parent-Teacher Partnership That Works",
    description: "Parents and teachers share the same goal but don't always share the same playbook. This session offers concrete strategies for building a true partnership — one where communication flows easily and the child feels the difference.",
  },
]

export function Workshops() {

  return (
    <section id="workshops" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal mb-4 text-balance">
            Workshop Offerings
          </h2>
          <p className="text-lg text-charcoal-light leading-relaxed mb-6">
            Professional development sessions designed to equip educators with practical, evidence-based strategies.
          </p>
          {/* workshop flyer download removed */}
        </div>
        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {workshops.map((workshop, index) => (
            <Card key={index} className="border-2 border-olive/20 hover:border-olive/40 transition-colors rounded-3xl bg-cream/30">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-olive flex items-center justify-center flex-shrink-0">
                    <workshop.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-serif text-charcoal mb-2">{workshop.title}</CardTitle>
                    <CardDescription className="text-charcoal-light leading-relaxed">
                      {workshop.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" className="rounded-full bg-olive text-white hover:bg-olive-dark" asChild>
            <a href="#contact">Book for Your School</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
