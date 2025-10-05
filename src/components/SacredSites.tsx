import React from 'react';
import { Calendar, Clock, Star } from 'lucide-react';

const SacredSites = () => {
  const sites = [
    {
      name: "Mahabodhi Temple",
      image: "https://images.pexels.com/photos/8849304/pexels-photo-8849304.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      description: "The sacred temple marking the spot where Buddha attained enlightenment under the Bodhi Tree.",
      significance: "UNESCO World Heritage Site",
      bestTime: "Early morning or evening",
      duration: "2-3 hours"
    },
    {
      name: "Sacred Bodhi Tree",
      image: "https://images.pexels.com/photos/8849299/pexels-photo-8849299.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      description: "The descendant of the original tree under which Prince Siddhartha became the Buddha.",
      significance: "Most sacred spot in Buddhism",
      bestTime: "Dawn meditation",
      duration: "1-2 hours"
    },
    {
      name: "Great Buddha Statue",
      image: "https://images.pexels.com/photos/10817088/pexels-photo-10817088.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      description: "An 80-foot tall statue of Buddha in meditation posture, surrounded by beautiful gardens.",
      significance: "Modern pilgrimage destination",
      bestTime: "Sunset",
      duration: "1 hour"
    },
    {
      name: "Sujata Stupa",
      image: "https://images.pexels.com/photos/8849301/pexels-photo-8849301.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      description: "Commemorates the spot where Sujata offered rice milk to Buddha before his enlightenment.",
      significance: "Pre-enlightenment site",
      bestTime: "Morning",
      duration: "45 minutes"
    },
    {
      name: "International Monasteries",
      image: "https://images.pexels.com/photos/8849296/pexels-photo-8849296.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      description: "Various monasteries built by different Buddhist countries showcasing unique architectural styles.",
      significance: "Cultural diversity",
      bestTime: "Throughout the day",
      duration: "Half day"
    },
    {
      name: "Meditation Park",
      image: "https://images.pexels.com/photos/8849297/pexels-photo-8849297.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      description: "Peaceful gardens perfect for meditation and reflection in the heart of Bodhgaya.",
      significance: "Spiritual retreat",
      bestTime: "Early morning",
      duration: "Flexible"
    }
  ];

  return (
    <section id="sites" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Sacred Sites of Bodhgaya
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the profound spiritual significance of each sacred location 
            with expert guidance and authentic insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sites.map((site, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={site.image}
                  alt={site.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-amber-500" />
                    <span className="text-sm font-medium text-gray-700">{site.significance}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{site.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{site.description}</p>

                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2 text-blue-500" />
                    <span>Best time: {site.bestTime}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2 text-green-500" />
                    <span>Duration: {site.duration}</span>
                  </div>
                </div>

                <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SacredSites;