"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center py-10">
      <div className="space-y-6 max-w-lg">
        <div className="relative w-full h-48 mx-auto mb-8 animate-float">
          <Image
            src="/404-illustration.svg"
            alt="404 Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 dark:from-yellow-300 dark:to-yellow-600 bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
          Page Not Found
        </h2>

        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Looks like you've ventured into uncharted territory. The page you're
          looking for has gone missing or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Button
            variant="outline"
            className="flex items-center gap-2 transition-transform hover:scale-105"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Button>

          <Link href="/">
            <Button className="flex items-center gap-2 transition-transform hover:scale-105">
              <Home className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
