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
      <body>
        <Navigation />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
