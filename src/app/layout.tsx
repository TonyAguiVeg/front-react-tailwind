import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reto tecnico-tonyagular",
  description: "proyecto usando Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
