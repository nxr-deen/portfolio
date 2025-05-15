"use client";

import React, { useState, useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useIsMobile } from "@/hooks/use-mobile";

export default function PortfolioAlert() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useIsMobile();

  const handleDismiss = () => {
    setIsVisible(false);
    // Store the state in localStorage to remember user's preference
    try {
      localStorage.setItem("portfolio-alert-dismissed", "true");
    } catch (error) {
      console.error("Error setting localStorage:", error);
    }
  };
  useEffect(() => {
    // Make sure the component is mounted
    setIsMounted(true);

    // Force a reset for testing - remove this line later if you want to keep dismissal behavior
    localStorage.removeItem("portfolio-alert-dismissed");

    // Check if user has previously dismissed the alert
    try {
      const isDismissed =
        localStorage.getItem("portfolio-alert-dismissed") === "true";
      if (isDismissed) {
        setIsVisible(false);
      }
    } catch (error) {
      // Handle any localStorage errors
      console.error("Error accessing localStorage:", error);
    }

    // Log to console for debugging
    console.log("Portfolio alert component mounted");
  }, []);

  // Don't render anything until client-side hydration is complete
  if (!isMounted) return null;

  // Don't render if the alert has been dismissed
  if (!isVisible) return null;
  return (
    <div
      className={`fixed ${
        isMobile ? "top-16 px-2" : "top-24"
      } left-0 right-0 mx-auto z-50 w-11/12 max-w-md shadow-xl animate-pulse-slow`}
    >
      <Alert
        variant="default"
        className={`border-2 border-yellow-400 dark:border-yellow-500 bg-yellow-50 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200 rounded-lg px-3 ${
          isMobile ? "py-2 flex-col" : "py-3 flex items-center justify-between"
        }`}
      >
        <div
          className={`flex items-center ${
            isMobile ? "mb-2 justify-center w-full" : ""
          }`}
        >
          <AlertTriangle
            className={`${
              isMobile ? "h-4 w-4 mr-2" : "h-5 w-5 mr-3"
            } flex-shrink-0`}
          />
          <AlertDescription
            className={`${
              isMobile ? "text-xs text-center" : "text-sm"
            } font-semibold`}
          >
            Portfolio under construction! Some features are still being
            developed.
          </AlertDescription>
        </div>
        <button
          onClick={handleDismiss}
          className={`bg-yellow-200 dark:bg-yellow-800 hover:bg-yellow-300 dark:hover:bg-yellow-700 text-yellow-800 dark:text-yellow-200 text-sm font-medium px-3 py-1 rounded-md ${
            isMobile ? "w-full mt-1" : "ml-4"
          } flex-shrink-0`}
        >
          Got it
        </button>
      </Alert>
    </div>
  );
}
