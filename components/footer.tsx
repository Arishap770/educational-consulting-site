import Image from "next/image"
import { Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3 items-start">
          <div>
            <div className="mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%202-0AdiE9rNcafdG8VwYHx8IRHsp6vRDm.jpg"
                alt="Yocheved Shapiro Educational Advocacy and Consulting"
                width={220}
                height={80}
                className="h-20 w-auto"
              />
            </div>
            <p className="text-sm text-cream/70 leading-relaxed">
              Educational Consulting & Advocacy
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-cream/70">
              <li><a href="#about" className="hover:text-cream transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-cream transition-colors">Services</a></li>
              <li><a href="#workshops" className="hover:text-cream transition-colors">Workshops</a></li>
              <li><a href="#contact" className="hover:text-cream transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-cream/70">
              <li>
                <a href="mailto:yochevedshapiroconsulting@gmail.com" className="hover:text-cream transition-colors">
                  yochevedshapiroconsulting@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:718-501-2165" className="hover:text-cream transition-colors">
                  718-501-2165
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/yocheved_shapiro" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  @yocheved_shapiro
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-cream/10 text-center text-sm text-cream/50">
          <p>© {new Date().getFullYear()} Yocheved Shapiro, M.Ed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
