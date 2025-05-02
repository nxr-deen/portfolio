"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  User,
  Code,
  Briefcase,
  FolderKanban,
  MessageSquareQuote,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

type NavigationItem = {
  name: string;
  href: string;
  iconComponent: React.ElementType;
};

const navigationItems: NavigationItem[] = [
  {
    name: "About",
    href: "#about",
    iconComponent: User,
  },
  {
    name: "Experience",
    href: "#experience",
    iconComponent: Briefcase,
  },
  {
    name: "Projects",
    href: "#projects",
    iconComponent: FolderKanban,
  },
  {
    name: "Skills",
    href: "#skills",
    iconComponent: Code,
  },
  {
    name: "Testimonials",
    href: "#testimonials",
    iconComponent: MessageSquareQuote,
  },
];

export default function VerticalNavigation() {
  const [activeSection, setActiveSection] = useState<string>("");
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Track scroll position to highlight active section with improved detection for last section
  useEffect(() => {
    const handleScroll = () => {
      // Get current scroll position and page dimensions
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollBottom = scrollPosition + viewportHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Handle visibility toggling on mobile based on scroll direction
      if (isMobile) {
        if (scrollPosition > lastScrollY + 20) {
          // Scrolling down - hide the navigation
          setIsVisible(false);
        } else if (scrollPosition < lastScrollY - 20) {
          // Scrolling up - show the navigation
          setIsVisible(true);
        }
        setLastScrollY(scrollPosition);
      }

      // Super aggressive approach for the testimonials section
      // If we're in the last 20% of the page OR near the bottom, activate testimonials
      if (
        scrollPosition > documentHeight * 0.8 ||
        documentHeight - scrollBottom < 200
      ) {
        setActiveSection("#testimonials");
        return;
      }

      // Process other sections normally
      const sections = navigationItems
        .filter((item) => item.href !== "#testimonials") // Skip testimonials
        .map((item) => {
          const element = document.querySelector(item.href);
          if (!element) return { id: item.href, top: 0, bottom: 0 };

          const rect = element.getBoundingClientRect();
          return {
            id: item.href,
            top: rect.top + window.scrollY,
            bottom: rect.bottom + window.scrollY,
          };
        });

      // Find active section (if any)
      let currentSection = "";
      for (const section of sections) {
        if (
          scrollPosition + viewportHeight / 2 >= section.top &&
          scrollPosition + viewportHeight / 2 <= section.bottom
        ) {
          currentSection = section.id;
          break;
        }
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    // Set up scroll listener
    window.addEventListener("scroll", handleScroll);

    // Initial check when component mounts
    setTimeout(handleScroll, 100);

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile, lastScrollY]);

  // Handle click on navigation item
  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveSection(href);

    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 100, // Offset for better positioning
        behavior: "smooth",
      });
    }
  };

  // Desktop vertical navigation
  if (!isMobile) {
    return (
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
        <div className="relative">
          {/* Vertical line that connects all nav items */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 via-blue-400/40 to-primary/40 transform -translate-x-1/2 rounded-full" />

          {/* Navigation items */}
          <div className="relative space-y-8">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.href;
              const IconComponent = item.iconComponent;

              return (
                <div key={item.href} className="relative">
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(item.href, e)}
                  >
                    <motion.div
                      className={cn(
                        "relative z-10 flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 group",
                        isActive
                          ? "bg-primary text-white shadow-lg shadow-primary/25"
                          : "bg-background text-muted-foreground hover:text-primary hover:bg-background/80 border border-border hover:border-primary/50"
                      )}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      layout
                    >
                      {/* Icon */}
                      <IconComponent className="h-5 w-5" />

                      {/* Label that appears on hover */}
                      <motion.span
                        className="absolute left-full ml-4 px-3 py-1.5 rounded-md text-sm font-medium whitespace-nowrap bg-background border border-border shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none"
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.name}
                      </motion.span>

                      {/* Active item indicator */}
                      {isActive && (
                        <motion.span
                          className="absolute inset-0 rounded-full bg-primary/10"
                          style={{ zIndex: -1 }}
                        />
                      )}
                    </motion.div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Mobile horizontal navigation
  return (
    <motion.div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ease-in-out",
        !isVisible && "translate-y-full"
      )}
      initial={{ y: "100%" }}
      animate={{ y: isVisible ? 0 : "100%" }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-background/80 backdrop-blur-lg border-t border-border py-2 px-4 shadow-lg">
        <div className="flex justify-around items-center">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.href;
            const IconComponent = item.iconComponent;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(item.href, e)}
                className="block"
              >
                <div className="flex flex-col items-center gap-1">
                  <div
                    className={cn(
                      "relative flex items-center justify-center w-10 h-10 rounded-full transition-colors",
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    <IconComponent className="h-5 w-5" />
                    {isActive && (
                      <span className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                    )}
                  </div>
                  <span
                    className={cn(
                      "text-xs font-medium transition-colors",
                      isActive ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {item.name}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
