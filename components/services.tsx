import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Heart, Users } from 'lucide-react'

const services = [
  {
    icon: Users,
    title: "Consulting",
    description: "For parents and educators",
    details: "One-on-one guidance to understand behaviors and develop individualized strategies that work for your child or classroom.",
  },
  {
    icon: Heart,
    title: "Advocacy",
    description: "Helping families navigate support services",
    details: "Expert support in communicating with schools, understanding IEP and behavior plans, and ensuring your child receives appropriate services.",
  },
  {
    icon: BookOpen,
    title: "Workshops",
    description: "Professional development for schools",
    details: "Evidence-based training sessions that equip educators with practical tools and strategies for supporting diverse learners.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-olive-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal mb-4 text-balance">
            Services
          </h2>
          <p className="text-lg text-charcoal-light leading-relaxed">
            Comprehensive support designed to empower both parents and educators in their journey to help children succeed.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-background rounded-3xl">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-olive/10 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-olive" />
                </div>
                <CardTitle className="text-2xl font-serif text-charcoal">{service.title}</CardTitle>
                <CardDescription className="text-olive-dark font-medium">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal-light leading-relaxed">{service.details}</p>
                {service.title === "Consulting" && (
                  <ul className="mt-4 text-sm text-charcoal-light space-y-1">
                    <li>Initial Consultation (1 hour): <span className="font-semibold">$200</span></li>
                    <li>Follow-up (30 min): <span className="font-semibold">$60</span></li>
                    <li>Behavior Plan: <span className="font-semibold">$350</span></li>
                  </ul>
                )}
                {service.title === "Workshops" && (
                  <ul className="mt-4 text-sm text-charcoal-light space-y-1">
                    <li>Via Zoom: <span className="font-semibold">$600</span></li>
                    <li>In Person: <span className="font-semibold">$800</span></li>
                    <li>For Schools: <span className="font-semibold">$550</span></li>
                  </ul>
                )}
                {service.title === "Advocacy" && (
                  <ul className="mt-4 text-sm text-charcoal-light space-y-1">
                    <li>Email Composition: <span className="font-semibold">$45</span></li>
                    <li>In Person Meeting: <span className="font-semibold">$100</span></li>
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
