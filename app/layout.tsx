import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
// import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Suspense } from "react";
import { FloatingActionButton, FloatingActionButtonProvider } from "@/components/floating-action-button";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
// import Canvas from "@/components/canvas";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "./favicon.webp",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className="scroll-smooth">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col">
            <Suspense>
              <Navbar />
            </Suspense>
            <main className="container mx-auto max-w-7xl flex-grow">
              {children}
            </main>
            <FloatingActionButtonProvider>
              <Link href={'https://wa.me/message/EU2TRMLX3TJYN1'}><FloatingActionButton color="success"><MessageCircle color="white" /><div className="text-white font-medium">Hubungi kami</div></FloatingActionButton></Link>
            </FloatingActionButtonProvider>
            <footer className="w-full flex items-center justify-center py-3">
              <div className="flex items-center gap-1 text-current">
                <span className="text-default-600">&copy; 2026</span>
                <p className="text-primary">Mitra Nusarasa Mandiri</p>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
