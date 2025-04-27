"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="font-bold text-xl">
          Noureddine Bouderbala
        </Link>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-sm font-medium hover:underline">
            About
          </Link>
          <Link
            href="#experience"
            className="text-sm font-medium hover:underline"
          >
            Experience
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium hover:underline"
          >
            Projects
          </Link>
          <Link href="#skills" className="text-sm font-medium hover:underline">
            Skills
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium hover:underline"
          >
            Testimonials
          </Link>
          <ModeToggle />
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
            <div className="container py-4 flex flex-col space-y-4">
              <Link
                href="#about"
                className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#experience"
                className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </Link>
              <Link
                href="#projects"
                className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#skills"
                className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="#testimonials"
                className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <div className="px-4">
                <ModeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
