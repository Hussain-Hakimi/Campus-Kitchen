import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Halal Biryani House | Fresh Homemade Food",
  description: "Fresh homemade halal food delivered near your university.",
  icons: {
    icon: "/assets/logo.jpeg",
    shortcut: "/assets/logo.jpeg",
    apple: "/assets/logo.jpeg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
