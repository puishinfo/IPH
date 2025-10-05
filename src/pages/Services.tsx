import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Camera, MapPin, Star, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Mahabodhi Temple Tours",
      description: "Guided exploration of the UNESCO World Heritage Site where Buddha attained enlightenment.",
      features: ["Sacred Bodhi Tree", "Meditation sessions", "Historical insights", "Photo opportunities"],
      duration: "2-3 hours",
      price: "Starting from ₹2,500",
      highlights: ["UNESCO World Heritage Site", "Most sacred Buddhist location", "Professional photography assistance"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Monastery Circuit",
      description: "Visit international monasteries including Thai, Japanese, Tibetan, and Korean temples.",
      features: ["Multiple monasteries", "Cultural exchange", "Architectural tours", "Prayer sessions"],
      duration: "Full day",
      price: "Starting from ₹3,200",
      highlights: ["Visit 8+ international monasteries", "Cultural immersion experience", "Meet monks and practitioners"]
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Photography Tours",
      description: "Capture the spiritual essence of Bodhgaya with guidance on the best photo spots.",
      features: ["Golden hour shoots", "Sacred architecture", "Cultural moments", "Professional tips"],
      duration: "Half day",
      price: "Starting from ₹5000",
      highlights: ["Best photography locations", "Golden hour timing", "Cultural sensitivity guidance"]
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Extended Pilgrimage",
      description: "Multi-day spiritual journey covering all major Buddhist sites in and around Bodhgaya.",
      features: ["Sujata Stupa", "Rajgir excursion", "Nalanda ruins", "Vulture Peak"],
      duration: "3-7 days",
      price: "Starting from ₹5,000/day",
      highlights: ["Complete Buddhist circuit", "Historical Nalanda University", "Rajgir hot springs"]
    }
  ];

  const additionalServices = [
    {
      title: "Private Meditation Sessions",
      description: "Personal guidance in Buddhist meditation techniques",
      price: "₹3000/hour"
    },
    {
      title: "Korean Language Tours",
      description: "Specialized tours conducted in fluent Korean",
      price: "₹5000 extra"
    },
    {
      title: "Airport Transfers",
      description: "Comfortable transportation from Gaya Airport",
      price: "₹1500 one way"
    },
    {
      title: "Accommodation Assistance",
      description: "Help finding suitable lodging near sacred sites",
      price: "Free service"
    },
    {
      title: "Custom Itineraries",
      description: "Personalized tours based on your spiritual interests",
      price: "Quote on request"
    },
    {
      title: "Group Discounts",
      description: "Special rates for groups of 6 or more people",
      price: "Up to 20% off"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our Spiritual Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Personalized Buddhist pilgrimage experiences designed to deepen your spiritual 
              understanding and connection to this sacred land.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-4 rounded-full text-blue-600 mr-4">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-sm bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
                        {service.duration}
                      </span>
                      <span className="text-sm font-semibold text-blue-600">
                        {service.price}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Includes:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Highlights:</h4>
                    <ul className="space-y-1">
                      {service.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-center">
                          <Star className="w-4 h-4 text-amber-500 mr-2" />
                          <span className="text-sm text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="w-full block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
                >
                  Book This Tour
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600">Enhance your pilgrimage experience with our supplementary offerings</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-semibold">{service.price}</span>
                  <Link
                    to="/contact"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    Inquire →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Information</h2>
            <p className="text-xl text-gray-600">Transparent pricing with no hidden costs</p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Professional guide services</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Entry fees to all sites</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Transportation during tours</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Meditation guidance</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Cultural interpretation</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Payment Options</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="text-gray-700">Cash payments accepted</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="text-gray-700">Bank transfers available</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="text-gray-700">Flexible payment schedules</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="text-gray-700">Group booking discounts</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="text-gray-700">Advance booking benefits</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Special Note</h3>
              <p className="text-gray-600">
                All prices are subject to group size, season, and specific requirements. 
                Contact us for personalized quotes and special packages. We offer competitive 
                rates while maintaining the highest quality of service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Book Your Spiritual Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today to discuss your requirements and create a personalized itinerary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Custom Quote
            </Link>
            <Link
              to="/testimonials"
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
            >
              Read Reviews
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;