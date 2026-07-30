import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Schedule a Call | Yocheved Shapiro, M.Ed.',
  description: 'Schedule a consultation call with Yocheved Shapiro to discuss your educational needs.',
}

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal mb-4">
              Schedule a Call
            </h1>
            <p className="text-lg text-charcoal-light">
              Choose a convenient time to discuss how I can support your educational needs.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <iframe
              src="https://calendly.com/yochshap"
              width="100%"
              height="800"
              frameBorder="0"
              title="Schedule a consultation with Yocheved Shapiro"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
