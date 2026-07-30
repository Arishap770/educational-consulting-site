import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/transparent-2.png"
                  alt="Yocheved Shapiro"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal text-balance">
              About Yocheved Shapiro, M.Ed.
            </h2>
            <div className="space-y-4 text-charcoal-light leading-relaxed">
              <p>
                With over 20 years of experience in early childhood education and a Master's degree in Educational Psychology, I bring a unique blend of academic expertise and hands-on experience to every consultation and workshop.
              </p>
              <p>
                My passion lies in making learning accessible for all children, with specialized expertise in advocating for neurodivergent learners. My work as an educator and parent of neurodivergent children has led me to the belief that when we support and empower the adults in a child's life—whether parents or educators—we create lasting positive change for the children themselves.
              </p>
              <p>
                Through personalized consulting, advocacy support, and practical workshops, I help families and schools understand children's behaviors, implement effective strategies, and create environments where every child can thrive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
