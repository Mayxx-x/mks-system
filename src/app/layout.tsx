import type { Metadata } from "next";
import { Montserrat } from "next/font/google"
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MKS Sistemas - Alvaro Nascimento",
  description: "Teste MKS Sistemas - Alvaro Nascimento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
