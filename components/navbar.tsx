"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ShoppingCart } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-10 mr-2">
              <Image src="/placeholder-logo.png?height=40&width=40" alt="HydroGrow Logo" fill className="object-contain" />
            </div>
            <span className="text-xl font-bold text-green-600">HydroGrow</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 font-medium">
              Home
            </Link>
            <Link href="/shop" className="text-gray-700 hover:text-green-600 font-medium">
              Shop
            </Link>
            <Link href="/subscribe" className="text-gray-700 hover:text-green-600 font-medium">
              Subscribe
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600 font-medium">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600 font-medium">
              Contact
            </Link>
          </nav>

          {/* Cart and Mobile Menu Toggle */}
          <div className="flex items-center">
            <Link href="/cart" className="p-2 text-gray-700 hover:text-green-600">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <button className="p-2 ml-3 text-gray-700 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-gray-700 hover:text-green-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/shop"
                className="text-gray-700 hover:text-green-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                href="/subscribe"
                className="text-gray-700 hover:text-green-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Subscribe
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-green-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-green-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
