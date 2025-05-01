import Link from "next/link"
import { Check, HelpCircle } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Subscription plans with prices in INR
const subscriptionPlans = [
  {
    id: "starter",
    name: "Starter",
    price: 799,
    frequency: "weekly",
    description: "Perfect for individuals or couples",
    features: [
      "4-5 types of vegetables/herbs",
      "Weekly delivery",
      "Seasonal rotation",
      "Recipe suggestions",
      "Free delivery",
    ],
    recommended: false,
  },
  {
    id: "family",
    name: "Family",
    price: 1499,
    frequency: "weekly",
    description: "Ideal for families of 3-4",
    features: [
      "7-8 types of vegetables/herbs",
      "Weekly delivery",
      "Customizable selection",
      "Recipe suggestions",
      "Free delivery",
      "Priority harvesting",
    ],
    recommended: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: 2499,
    frequency: "weekly",
    description: "For serious home cooks and large families",
    features: [
      "10-12 types of vegetables/herbs",
      "Weekly delivery",
      "Fully customizable selection",
      "Premium varieties included",
      "Free delivery",
      "Priority harvesting",
      "Exclusive access to limited crops",
    ],
    recommended: false,
  },
]

// FAQ items
const faqItems = [
  {
    question: "How does the subscription work?",
    answer:
      "Choose your preferred plan, select your delivery day, and we'll deliver fresh produce to your doorstep every week. You can pause, modify, or cancel your subscription anytime.",
  },
  {
    question: "Can I customize what's in my box?",
    answer:
      "Yes! The Family and Premium plans allow you to customize your selection. The Starter plan offers a curated seasonal selection.",
  },
  {
    question: "What if I'm not home during delivery?",
    answer:
      "Our packaging keeps produce fresh for up to 12 hours. We'll leave your box in a safe place, or you can specify delivery instructions.",
  },
  {
    question: "How do I pause or cancel my subscription?",
    answer:
      "You can pause or cancel your subscription anytime through your account dashboard or by contacting our customer service team.",
  },
  {
    question: "Do you deliver to my area?",
    answer:
      "We currently deliver to most areas in major Indian cities. Enter your pincode during checkout to confirm availability in your area.",
  },
]

export default function SubscribePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Fresh Produce, Delivered Weekly</h1>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Subscribe to regular deliveries of pesticide-free, hydroponic produce and save up to 20% compared to
              one-time purchases.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#plans" className="bg-white text-green-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-md">
                View Plans
              </a>
              <Link
                href="/shop"
                className="bg-transparent hover:bg-green-700 border border-white font-medium py-3 px-6 rounded-md"
              >
                Shop Individual Items
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Choose Your Plan</h3>
                <p className="text-gray-600">
                  Select a subscription plan that fits your household's needs and dietary preferences.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Customize Your Box</h3>
                <p className="text-gray-600">
                  Personalize your weekly delivery with your favorite vegetables and herbs.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Receive Fresh Deliveries</h3>
                <p className="text-gray-600">
                  Get farm-fresh produce delivered to your doorstep on your chosen delivery day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Subscription Plans */}
        <section id="plans" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Subscription Plans</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Choose the perfect plan for your household. All plans include free delivery and the freshest hydroponic
              produce harvested within 24 hours of delivery.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {subscriptionPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`bg-white rounded-lg overflow-hidden shadow-md ${
                    plan.recommended ? "ring-2 ring-green-500 relative" : ""
                  }`}
                >
                  {plan.recommended && (
                    <div className="bg-green-500 text-white text-xs font-bold uppercase py-1 text-center">
                      Most Popular
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-3xl font-bold">₹{plan.price}</span>
                      <span className="text-gray-600">/{plan.frequency}</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      className={`w-full py-3 px-4 rounded-md font-medium ${
                        plan.recommended
                          ? "bg-green-600 hover:bg-green-700 text-white"
                          : "bg-white border border-green-600 text-green-600 hover:bg-green-50"
                      }`}
                    >
                      Subscribe Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12 text-gray-600">
              <p>All plans can be paused or canceled anytime. No long-term commitment required.</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Subscribers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Priya S.</h4>
                    <p className="text-sm text-gray-500">Family Plan Subscriber</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "The quality and freshness of HydroGrow's produce is unmatched. My family loves the variety, and I
                  appreciate knowing exactly where our food comes from."
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Rahul M.</h4>
                    <p className="text-sm text-gray-500">Premium Plan Subscriber</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "As a chef, I'm extremely particular about ingredients. HydroGrow's subscription has transformed my
                  home cooking with consistently exceptional produce."
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Ananya K.</h4>
                    <p className="text-sm text-gray-500">Starter Plan Subscriber</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "The convenience of having fresh produce delivered weekly has been a game-changer. The quality is
                  amazing, and I love supporting sustainable farming."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              {faqItems.map((item, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <HelpCircle className="h-5 w-5 text-green-500 mr-2" />
                    {item.question}
                  </h3>
                  <p className="text-gray-600 ml-7">{item.answer}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Still have questions? We're here to help!</p>
              <Link
                href="/contact"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Subscription?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Join thousands of happy customers enjoying fresh, pesticide-free produce delivered to their doorstep.
            </p>
            <a
              href="#plans"
              className="inline-block bg-white hover:bg-gray-100 text-green-600 font-medium py-3 px-8 rounded-md transition-colors duration-300"
            >
              Choose Your Plan
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
