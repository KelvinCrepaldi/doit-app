import { UserProvider } from "@/context/UserContext";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { TaskProvider } from "@/context/TaskContext";
import { SignupProvider } from "@/context/SignupContext";

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
        <SignupProvider>
          <TaskProvider>
            <body className="font-roboto">{children}</body>
          </TaskProvider>
        </SignupProvider>
      </UserProvider>
    </html>
  );
}
