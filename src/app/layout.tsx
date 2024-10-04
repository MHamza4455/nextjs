"use client";
import { usePathname } from "next/navigation";
import "./globals.css";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return <>{children}</>;
  }

  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
