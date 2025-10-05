import React from 'react';
import { Clock, Users, Camera, MapPin } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Mahabodhi Temple Tours",
      description: "Guided exploration of the UNESCO World Heritage Site where Buddha attained enlightenment.",
      features: ["Sacred Bodhi Tree", "Meditation sessions", "Historical insights", "Photo opportunities"],
      duration: "2-3 hours",
      price: "Starting from ₹500"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Monastery Circuit",
      description: "Visit international monasteries including Thai, Japanese, Tibetan, and Korean temples.",
      features: ["Multiple monasteries", "Cultural exchange", "Architectural tours", "Prayer sessions"],
      duration: "Full day",
      price: "Starting from ₹1,200"
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Photography Tours",
      description: "Capture the spiritual essence of Bodhgaya with guidance on the best photo spots.",
      features: ["Golden hour shoots", "Sacred architecture", "Cultural moments", "Professional tips"],
      duration: "Half day",
      price: "Starting from ₹800"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Extended Pilgrimage",
      description: "Multi-day spiritual journey covering all major Buddhist sites in and around Bodhgaya.",
      features: ["Sujata Stupa", "Rajgir excursion", "Nalanda ruins", "Vulture Peak"],
      duration: "3-7 days",
      price: "Starting from ₹3,000/day"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Spiritual Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Personalized Buddhist pilgrimage experiences designed to deepen your spiritual 
            understanding and connection to this sacred land.
          </p>
        </div>

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

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 mb-3">Includes:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300">
                Book This Tour
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;