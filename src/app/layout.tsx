import type { Metadata } from "next";
import "./globals.scss";
import { Footer } from "@/Layout/Footer";
import { IParentProps } from "@/Models";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: IParentProps) {
  return (
    <html lang="ru">
      <body className="antialiased">
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
