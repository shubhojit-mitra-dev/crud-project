import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Listify",
  description:
    "A CRUD app built with Next.js, and MongoDB for my DBMS Lab Minor Project. This CRUD App is a simple organizer like platform where you can add, edit, delete and view your topics. You can create your own collections to store specific topics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        <div className="fixed inset-0 -z-10 min-h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        </div>
        {children}
      </body>
    </html>
  );
}
