import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import "./styles.css";

export const metadata: Metadata = {
  title: "Andrew Tran",
  description: "Personal portfolio and blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans+Code:wght@300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navigation />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
