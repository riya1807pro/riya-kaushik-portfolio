"use client"
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from "../components/navbar"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
