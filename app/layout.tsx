import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

// Loading these here makes the literal "Poppins"/"Inter" family names
// available document-wide, which is what the portable quotation-template
// CSS Modules reference. Your real CRM app should load the same two
// Google Fonts (any way it likes) for the template to match this preview.
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quotation Template Preview (Modern) | Offbeat Compass",
  description:
    "Local preview harness for the portable 'modern' quotation-template component.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
