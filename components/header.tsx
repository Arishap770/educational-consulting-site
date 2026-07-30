import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/logo-removebg.png"
              alt="Yocheved Shapiro"
              width={300}
              height={100}
              className="h-24 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-charcoal hover:text-olive transition-colors">
              About
            </a>
            <a href="#services" className="text-sm font-medium text-charcoal hover:text-olive transition-colors">
              Services
            </a>
            <a href="#workshops" className="text-sm font-medium text-charcoal hover:text-olive transition-colors">
              Workshops
            </a>
            <a href="#contact" className="text-sm font-medium text-charcoal hover:text-olive transition-colors">
              Contact
            </a>
          </nav>
          <Link href="/schedule">
            <Button className="bg-olive text-white hover:bg-olive-dark rounded-full">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
