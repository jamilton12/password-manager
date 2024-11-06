import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"

const inter = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "800"],
});

export const metadata: Metadata = {
  title: "TarretPassword",
  description: "Creating a password manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
