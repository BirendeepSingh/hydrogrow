import Image from "next/image"
import Link from "next/link"
import { Filter, ChevronDown } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Product data with prices in INR
const products = [
  {
    id: 1,
    name: "Fresh Basil",
    category: "Herbs",
    price: 199,
    image: "/placeholder.svg?height=400&width=600",
    description: "Aromatic basil grown in our hydroponic facility. Perfect for Italian dishes and salads.",
  },
  {
    id: 2,
    name: "Cherry Tomatoes",
    category: "Vegetables",
    price: 249,
    image: "/placeholder.svg?height=400&width=600",
    description: "Sweet and juicy cherry tomatoes. Great for salads or as a healthy snack.",
  },
  {
    id: 3,
    name: "Baby Spinach",
    category: "Leafy Greens",
    price: 179,
    image: "/placeholder.svg?height=400&width=600",
    description: "Tender baby spinach leaves. Rich in iron and vitamins.",
  },
  {
    id: 4,
    name: "Red Bell Pepper",
    category: "Vegetables",
    price: 129,
    image: "/placeholder.svg?height=400&width=600",
    description: "Crisp and sweet red bell peppers. Excellent source of vitamin C.",
  },
  {
    id: 5,
    name: "Mint",
    category: "Herbs",
    price: 149,
    image: "/placeholder.svg?height=400&width=600",
    description: "Fresh mint leaves. Perfect for teas, cocktails, and desserts.",
  },
  {
    id: 6,
    name: "Kale",
    category: "Leafy Greens",
    price: 199,
    image: "/placeholder.svg?height=400&width=600",
    description: "Nutrient-dense kale. A superfood packed with vitamins and minerals.",
  },
  {
    id: 7,
    name: "Cilantro",
    category: "Herbs",
    price: 129,
    image: "/placeholder.svg?height=400&width=600",
    description: "Fresh cilantro. Essential for Mexican and Asian cuisines.",
  },
  {
    id: 8,
    name: "Cucumber",
    category: "Vegetables",
    price: 99,
    image: "/placeholder.svg?height=400&width=600",
    description: "Crisp hydroponic cucumbers. Low in calories and high in hydration.",
  },
  {
    id: 9,
    name: "Arugula",
    category: "Leafy Greens",
    price: 169,
    image: "/placeholder.svg?height=400&width=600",
    description: "Peppery arugula leaves. Adds a distinctive flavor to salads and sandwiches.",
  },
]

// Categories for filtering
const categories = ["All", "Vegetables", "Herbs", "Leafy Greens"]

export default function ShopPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Shop Header */}
        <section className="bg-green-600 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Shop Fresh Hydroponic Produce</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Pesticide-free, nutrient-rich vegetables and herbs harvested at peak freshness
            </p>
          </div>
        </section>

        {/* Shop Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {/* Filters */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div className="flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                <span className="font-medium">Filter by:</span>
                <div className="relative ml-2">
                  <select className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500">
                    {categories.map((category) => (
                      <option key={category} value={category.toLowerCase()}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 pointer-events-none" />
                </div>
              </div>
              <div className="relative">
                <select className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500">
                  <option value="featured">Featured</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="name-a-z">Name: A to Z</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 pointer-events-none" />
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative h-64">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{product.name}</h3>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {product.category}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-bold">₹{product.price}</p>
                      <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <a
                  href="#"
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-current="page"
                  className="relative inline-flex items-center px-4 py-2 border border-green-500 bg-green-50 text-sm font-medium text-green-600"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  2
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  3
                </a>
                <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                  ...
                </span>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  8
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  9
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  10
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </section>

        {/* Delivery Info */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-6">Fast & Fresh Delivery</h2>
              <p className="text-gray-600 mb-8">
                We deliver to most areas in major cities within 24 hours of harvest. Orders over ₹500 qualify for free
                delivery. Check your pincode at checkout for availability.
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
