import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../globals.css";
import { ThemeProvider } from "@/provider/theme-provider";
import Navbar from "@/components/nav-bar/nav-bar-main";
import MobileNav from "@/components/nav-bar/mobile-nav";
import Container from "@/components/shared/container";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/footer/footer";

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
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            <Container className="flex items-center justify-end pt-4 md:hidden">
              <MobileNav />
            </Container>
            <Navbar className="absolute bottom-12 left-0 right-0 hidden md:flex" />
            {children}
            <Toaster />
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
