import type { Metadata } from "next";
import { Poppins, Lato } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-heading",
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-body",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Her Impact — Women in STEM Blog",
  description: "Her Impact is a modern blog celebrating women in STEM with stories, insights, and opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${lato.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
