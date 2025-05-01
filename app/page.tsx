import Image from "next/image"
import Link from "next/link"
import { Leaf, Droplet, ShoppingBag, Clock } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Fresh hydroponic vegetables"
              fill
              className="object-cover brightness-[0.85]"
              priority
            />
          </div>
          <div className="container mx-auto px-4 z-10 text-white">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Freshness Delivered</h1>
              <p className="text-xl md:text-2xl mb-8">
                Pesticide-free, hydroponic vegetables and herbs delivered directly to your doorstep.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/shop"
                  className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md text-center transition-colors duration-300"
                >
                  Shop Now
                </Link>
                <Link
                  href="/about"
                  className="bg-white hover:bg-gray-100 text-green-700 font-medium py-3 px-6 rounded-md text-center transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose HydroGrow?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center p-6 rounded-lg">
                <div className="bg-green-100 p-4 rounded-full mb-4">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Sustainable</h3>
                <p className="text-gray-600">
                  Our hydroponic systems use 90% less water than traditional farming methods.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-lg">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <Droplet className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fresh</h3>
                <p className="text-gray-600">Harvested the same day as delivery for maximum freshness and nutrition.</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-lg">
                <div className="bg-amber-100 p-4 rounded-full mb-4">
                  <ShoppingBag className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Convenient</h3>
                <p className="text-gray-600">Flexible subscription options tailored to your household's needs.</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-lg">
                <div className="bg-purple-100 p-4 rounded-full mb-4">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Local</h3>
                <p className="text-gray-600">Grown in urban facilities, reducing transportation emissions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Fresh Basil", price: "₹199", image: "/placeholder.svg?height=400&width=600" },
                { name: "Cherry Tomatoes", price: "₹249", image: "/placeholder.svg?height=400&width=600" },
                { name: "Baby Spinach", price: "₹179", image: "/placeholder.svg?height=400&width=600" },
              ].map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative h-64">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.price}</p>
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/shop"
                className="inline-block bg-white border border-green-600 hover:bg-green-50 text-green-600 font-medium py-3 px-6 rounded-md transition-colors duration-300"
              >
                View All Products
              </Link>
            </div>
          </div>
        </section>

        {/* Subscription Section */}
        <section className="py-16 bg-green-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Subscribe to Fresh Deliveries</h2>
              <p className="text-xl mb-8">
                Get fresh, pesticide-free produce delivered to your door weekly or bi-weekly.
              </p>
              <Link
                href="/subscribe"
                className="inline-block bg-white hover:bg-gray-100 text-green-600 font-medium py-3 px-8 rounded-md transition-colors duration-300"
              >
                Start Your Subscription
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Priya J.",
                  quote: "The freshest produce I've ever had delivered. My family loves the weekly subscription!",
                  location: "Mumbai, MH",
                },
                {
                  name: "Rahul T.",
                  quote: "As a chef, I appreciate the quality and consistency of HydroGrow's herbs. Game changer!",
                  location: "Delhi, DL",
                },
                {
                  name: "Ananya R.",
                  quote:
                    "Knowing my veggies are pesticide-free and sustainably grown makes me feel good about my choices.",
                  location: "Bangalore, KA",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Info */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-6">Fast & Fresh Delivery</h2>
              <p className="text-gray-600 mb-8">
                We deliver to most areas in major Indian cities within 24 hours of harvest. Orders over ₹500 qualify for
                free delivery. Check your pincode at checkout for availability.
              </p>
              <Link
                href="/subscribe"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
              >
                Subscribe & Save 10%
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
