import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote: "Yocheved's advice was invaluable in helping us navigate and overwhelming and challenging situation with our son and his school environment! Yocheved provided clarity in a way that is supportive, genuine and at a time when we felt lost and alone. She held our hands through a challenging process. We are eternally grateful and know that her advice directly led to our child's increased success.",
    author: "Mrs. Shevy Leeds, Parent, Davie FL",
  },
  {
    quote: "The workshop Yocheved gave to our Early Childhood staff was dynamic, engaging and informative. She has a wealth of knowledge to share with all educators.",
    author: "Mrs. Feigie Ceitlin, Director of Lamplighter Chabad Day School, Tuscon AZ",
  },
  {
    quote: "Yocheved stepped in and supported our family on navigating the diagnosis and support services process for our child. Her clarity and advice was so important to us at an overwhelming time in our lives",
    author: "Mrs. Mushky S, Parent",
  },
  {
    quote: "Yocheved's approach to understanding each child's unique needs has transformed my teaching practice. The strategies she shared help me create a more inclusive classroom where all my students can succeed.",
    author: "Mrs. Rochel Gopin, Assistant Director Lubavitch Educational Center Miami FL",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-sage-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal mb-4 text-balance">
            What Parents & Educators Say
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg rounded-3xl bg-background">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="text-4xl text-sage leading-none">"</div>
                  <p className="text-charcoal-light leading-relaxed italic">
                    {testimonial.quote}
                  </p>
                  {testimonial.author === "Mrs. Rochel Gopin, Assistant Director Lubavitch Educational Center Miami FL" ? (
                    <p className="text-sm font-medium text-sage-dark text-center">
                      — {testimonial.author}
                    </p>
                  ) : (
                    <p className="text-sm font-medium text-sage-dark">
                      — {testimonial.author}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
