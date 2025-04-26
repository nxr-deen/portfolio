"use client"

import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 relative bg-muted/30">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="absolute right-0 top-1/3 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute left-0 bottom-1/3 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="max-w-xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md mb-3">
            CONTACT
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Get In Touch</h2>
          <p className="text-muted-foreground">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Contact Information Side */}
              <div className="bg-background p-8">
                <div className="relative z-10">
                  <CardHeader className="p-0 pb-6">
                    <CardTitle className="text-xl md:text-2xl">Contact Information</CardTitle>
                    <CardDescription>
                      Here's how you can reach me
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="p-0 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Email</p>
                        <Link 
                          href="mailto:n_bouderbala@estin.dz"
                          className="hover:text-primary inline-flex items-center group"
                        >
                          n_bouderbala@estin.dz
                          <ExternalLink className="h-3.5 w-3.5 ml-1.5 opacity-0 group-hover:opacity-100 transition-all" />
                        </Link>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Phone</p>
                        <Link 
                          href="tel:+213540194210"
                          className="hover:text-primary inline-flex items-center group"
                        >
                          +213 540 194 210
                          <ExternalLink className="h-3.5 w-3.5 ml-1.5 opacity-0 group-hover:opacity-100 transition-all" />
                        </Link>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Location</p>
                        <p>Lakhdaria-Bouira, Algeria</p>
                      </div>
                    </div>
                  </CardContent>
                  
                  {/* Social Links */}
                  <div className="mt-12 pt-6 border-t">
                    <p className="mb-4 text-sm text-muted-foreground">Connect with me</p>
                    <div className="flex gap-3">
                      <Link 
                        href="https://github.com/nxr-deen" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                      >
                        <Github className="h-5 w-5 text-primary" aria-hidden="true" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                      <Link 
                        href="https://www.linkedin.com/in/n-bouderbala/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                      >
                        <Linkedin className="h-5 w-5 text-primary" aria-hidden="true" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Professional Profile */}
              <div className="bg-muted/30 p-8 border-l border-primary">
                <CardHeader className="p-0 pb-6">
                  <CardTitle className="text-xl md:text-2xl">Professional Profile</CardTitle>
                  <CardDescription>
                    I specialize in building exceptional digital experiences
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="p-0">
                  <div className="space-y-4 mb-8">
                    <div className="group">
                      <h4 className="flex items-center text-base font-medium mb-1 group-hover:text-primary transition-colors">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                        Full-Stack Development
                      </h4>
                      <p className="text-sm text-muted-foreground pl-3.5">
                        Creating responsive web applications with modern technologies
                      </p>
                    </div>
                    <div className="group">
                      <h4 className="flex items-center text-base font-medium mb-1 group-hover:text-primary transition-colors">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                        UI/UX Design
                      </h4>
                      <p className="text-sm text-muted-foreground pl-3.5">
                        Crafting intuitive and visually appealing user experiences
                      </p>
                    </div>
                    <div className="group">
                      <h4 className="flex items-center text-base font-medium mb-1 group-hover:text-primary transition-colors">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                        Technical Consulting
                      </h4>
                      <p className="text-sm text-muted-foreground pl-3.5">
                        Providing guidance on technology choices and implementations
                      </p>
                    </div>
                  </div>
                  
                  <Button asChild className="group" size="lg">
                    <Link href="mailto:n_bouderbala@estin.dz">
                      Get in Touch
                      <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </div>
      
      {/* Add CSS for background grid pattern */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(var(--foreground-rgb), 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(var(--foreground-rgb), 0.05) 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}</style>
    </section>
  )
}
