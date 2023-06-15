import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Mr Biskit Portfolio",
  description: "Biskit Boulder Home to Mr Biskit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="bg-gradient-to-tr from-black to-gray-900">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
