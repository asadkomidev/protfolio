
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/provider/theme-provider";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asad Komi - Portfolio",
  description: "Dedicated to transforming complex challenges into elegant software solutions. Expert in diverse technologies, driven by innovation.",
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
          <main>{children}
          <Analytics/>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
