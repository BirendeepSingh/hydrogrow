import Image from "next/image"
import Link from "next/link"
import { Leaf, Droplet, Sprout, Recycle, Award, Users } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Team members data
const teamMembers = [
  {
    name: "Arjun Sharma",
    role: "Founder & CEO",
    bio: "Agricultural engineer with 10+ years of experience in sustainable farming technologies.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Priya Mehta",
    role: "Head of Operations",
    bio: "Former logistics expert who ensures our produce reaches customers at peak freshness.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Dr. Vikram Patel",
    role: "Chief Agronomist",
    bio: "PhD in Plant Science with expertise in optimizing nutrient profiles for hydroponic systems.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Neha Gupta",
    role: "Sustainability Director",
    bio: "Environmental scientist dedicated to minimizing our ecological footprint.",
    image: "/placeholder.svg?height=400&width=400",
  },
]

// Timeline events
const timeline = [
  {
    year: "2018",
    title: "The Idea",
    description: "HydroGrow began as a small experiment in Arjun's apartment, growing herbs for local restaurants.",
  },
  {
    year: "2019",
    title: "First Facility",
    description: "We opened our first 500 sq. ft. hydroponic facility in Mumbai and began supplying to 10 restaurants.",
  },
  {
    year: "2020",
    title: "Direct to Consumer",
    description: "Launched our subscription service, delivering fresh produce directly to urban households.",
  },
  {
    year: "2021",
    title: "Expansion",
    description: "Expanded to Delhi and Bangalore with new growing facilities to meet increasing demand.",
  },
  {
    year: "2022",
    title: "Sustainability Award",
    description: "Recognized with the National Sustainability Excellence Award for our water conservation practices.",
  },
  {
    year: "2023",
    title: "Today",
    description: "Now operating in 5 major cities with plans to expand nationwide in the coming years.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-green-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Story</h1>
              <p className="text-xl mb-0">
                We're on a mission to revolutionize how India grows, distributes, and consumes fresh produce.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-6">
                  At HydroGrow, we're committed to providing the freshest, most nutritious produce while conserving our
                  planet's precious resources. We believe that sustainable farming is not just better for the
                  environment—it produces better tasting, more nutritious food.
                </p>
                <p className="text-gray-600">
                  Our mission is to make locally-grown, pesticide-free produce accessible to urban households throughout
                  India, reducing food miles and supporting a healthier lifestyle for our customers and our planet.
                </p>
              </div>
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="HydroGrow hydroponic facility"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                <p className="text-gray-600">
                  We're committed to environmentally responsible farming practices that conserve water and reduce waste.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Droplet className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality</h3>
                <p className="text-gray-600">
                  We never compromise on the quality of our produce, ensuring optimal nutrition and flavor in every
                  harvest.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-gray-600">
                  We believe in building strong relationships with our customers, employees, and the communities we
                  serve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Growing Process */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Growing Process</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-semibold mb-4">Advanced Hydroponic Technology</h3>
                <p className="text-gray-600 mb-4">
                  Our state-of-the-art hydroponic systems grow plants in nutrient-rich water solutions instead of soil.
                  This method uses up to 90% less water than traditional farming while producing higher yields in less
                  space.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Sprout className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Controlled environment for optimal growing conditions year-round</span>
                  </li>
                  <li className="flex items-start">
                    <Recycle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Closed-loop water systems that recycle and conserve water</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>No pesticides, herbicides, or chemical fertilizers</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden order-1 md:order-2">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="HydroGrow hydroponic system"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-64">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-green-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Journey */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {timeline.map((event, index) => (
                  <div key={index} className="flex">
                    <div className="flex flex-col items-center mr-6">
                      <div className="bg-green-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center">
                        {event.year}
                      </div>
                      {index < timeline.length - 1 && <div className="h-full w-0.5 bg-green-200 my-2"></div>}
                    </div>
                    <div className="pt-1.5">
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Certifications</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white p-6 rounded-lg shadow-sm text-center w-64">
                  <div className="relative h-24 w-24 mx-auto mb-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt={`Certification ${item}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Certification {item}</h3>
                  <p className="text-gray-600 text-sm">
                    Description of this certification and what it means for our customers.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Experience the HydroGrow Difference</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Join us in our mission to revolutionize fresh produce in India.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/shop"
                className="bg-white hover:bg-gray-100 text-green-600 font-medium py-3 px-6 rounded-md transition-colors duration-300"
              >
                Shop Our Products
              </Link>
              <Link
                href="/contact"
                className="bg-transparent hover:bg-green-700 border border-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
