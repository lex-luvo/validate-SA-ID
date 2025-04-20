import type { Metadata } from "next";
import {JetBrains_Mono} from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    variable: "--font-jetbrainsMono",
});
export const metadata: Metadata = {
  title: "SA ID Validator",
  description: "Validate South African ID Numbers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${jetbrainsMono.variable} content-wrapper`}>
    {children}
    </body>
    </html>
  );
}
