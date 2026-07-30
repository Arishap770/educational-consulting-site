import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-olive-50 to-background">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-balance leading-tight text-charcoal">
              Educational Consulting & Advocacy for Parents and Educators
            </h1>
            <p className="text-lg md:text-xl text-charcoal-light leading-relaxed">
              Empowering children by supporting the adults who guide them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full bg-olive text-white hover:bg-olive-dark" asChild>
                <a href="#contact">Book a Consultation</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-olive text-olive hover:bg-olive-50" asChild>
                <a href="#workshops">View Workshops</a>
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-olive/20 shadow-xl">
                <Image
                  src="/Headshot-2.jpg"
                  alt="Yocheved Shapiro, M.Ed."
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-olive text-white rounded-2xl p-6 shadow-lg max-w-[200px]">
                <p className="text-sm font-medium">20+ Years Experience in Early Childhood Education</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
