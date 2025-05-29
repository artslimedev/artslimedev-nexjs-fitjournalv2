import Sidebar from "@/components/Sidebar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <div className="flex">
          <Sidebar />
          <main className="w-full md:ml-20">{children}</main>
        </div>
      </body>
    </html>
  );
}
