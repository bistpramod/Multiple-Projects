import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";

export const metadata: Metadata = {
  title: "Contact Manager",
  description: "Its a contact manager app made from next js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={" h-full antialiased"}>
      <body>
        <div>
          <Navbar/>
          <main>{children} </main>
        </div>
      </body>
    </html>
  );
}
