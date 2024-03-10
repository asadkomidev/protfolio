import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/provider/theme-provider";
import MainNavbar from "@/components/nav-bar/main-navbar";
import MobileNavbar from "@/components/nav-bar/mobile-navbar";
import Container from "@/components/shared/container";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/footer/footer";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asad Komi - Portfolio",
  description:
    "Dedicated to transforming complex challenges into elegant software solutions. Expert in diverse technologies, driven by innovation.",
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
          <main>
            <Container className="flex items-center justify-end pt-4 md:hidden">
              <MobileNavbar />
            </Container>
            <MainNavbar className="absolute bottom-12 left-0 right-0 hidden md:flex" />
            {children}
            <Analytics />
            <SpeedInsights />
            <Toaster />
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
