import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import { Theme } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iRecipe",
  description: "Made with love",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme accentColor="grass" >
          <NavBar />
          <main>
            <div>{children}</div>
          </main>
        </Theme>
      </body>
    </html>
  );
}
