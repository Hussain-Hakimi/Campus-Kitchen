import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Campus Kitchen | Fresh Homemade Food",
  description: "Fresh homemade food delivered near your university.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
