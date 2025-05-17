import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import VerticalNavigation from "@/components/vertical-navigation";
import PortfolioAlert from "@/components/portfolio-alert";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Noureddine Bouderbala | Portfolio",
  description: "Personal portfolio of Noureddine Bouderbala",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <PortfolioAlert />
            <Navbar />
            <main className="flex-1 relative">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
