"use client"
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from "../components/navbar"
import {Footer} from "../components/footer"
import Loader from "@/components/Loader";
import { useState, useEffect } from "react";

export default function RootLayout({ children }) {
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <html lang="en">
      <body className='bg-gradient-to-tr from-blue-300 via-purple-400 to-pink-300'>
        {loading && <Loader />}
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}