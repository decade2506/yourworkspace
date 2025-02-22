import type { Metadata } from "next";
import { Montserrat} from "next/font/google";
import "./globals.css";
import { Weight } from "lucide-react";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
});


export const metadata: Metadata = {
  title: "Your Workspace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
