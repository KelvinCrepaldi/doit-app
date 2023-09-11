import { UserProvider } from "@/context/UserContext";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  display: "swap",
  variable: "--roboto",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Do.it",
  description: "Gerencie atividades de forma fácil e rápida!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <UserProvider>
        <body className="font-roboto">{children}</body>
      </UserProvider>
    </html>
  );
}
