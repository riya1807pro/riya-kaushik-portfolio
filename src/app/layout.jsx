"use client"
import { useEffect, useState } from "react";
import Loader from "../components/loader";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body className="bg-gradient-to-tr from-blue-50 via-pink-50 to-purple-100 min-h-screen text-gray-800 font-inter transition-all">
        {loading && <Loader />}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}