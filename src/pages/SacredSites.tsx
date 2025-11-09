import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Star, MapPin, Camera, Users } from 'lucide-react';

const SacredSites = () => {
  const sites = [
    {
      name: "Mahabodhi Temple",
      image: "mahabodhi.jpg",
      description: "The sacred temple marking the spot where Buddha attained enlightenment under the Bodhi Tree.",
      significance: "UNESCO World Heritage Site",
      bestTime: "Early morning or evening",
      duration: "2-3 hours",
      highlights: ["Original Bodhi Tree descendant", "Diamond Throne (Vajrasana)", "Ancient sculptures", "Prayer halls"],
      history: "Built in the 5th-6th century CE, this temple marks the exact spot where Prince Siddhartha became the Buddha over 2,500 years ago."
    },
    {
      name: "Sacred Bodhi Tree",
      image: "bodhitree.jpg",
      description: "The descendant of the original tree under which Prince Siddhartha became the Buddha.",
      significance: "Most sacred spot in Buddhism",
      bestTime: "Dawn meditation",
      duration: "1-2 hours",
      highlights: ["Direct descendant of original tree", "Meditation platform", "Prayer flags", "Pilgrims from worldwide"],
      history: "The current tree is believed to be a direct descendant of the original Bodhi Tree, carefully preserved through centuries."
    },
    {
      name: "Great Buddha Statue",
      image: "great-buddha.jpg",
      description: "An 80-foot tall statue of Buddha in meditation posture, surrounded by beautiful gardens.",
      significance: "Modern pilgrimage destination",
      bestTime: "Sunset",
      duration: "1 hour",
      highlights: ["80-foot tall statue", "Beautiful gardens", "Meditation areas", "Panoramic views"],
      history: "Inaugurated in 1989, this magnificent statue was built with contributions from Buddhist devotees worldwide."
    },
    {
      name: "Sujata Stupa",
      image: "Sujata_Garh.jpg",
      description: "Commemorates the spot where Sujata offered rice milk to Buddha before his enlightenment.",
      significance: "Pre-enlightenment site",
      bestTime: "Morning",
      duration: "45 minutes",
      highlights: ["Historical significance", "Peaceful surroundings", "Ancient ruins", "Village atmosphere"],
      history: "This site commemorates Sujata, a village girl who offered rice pudding to the starving Buddha, giving him strength for his final meditation."
    },
    {
      name: "International Monasteries",
      image: "thai-monastry.jpg",
      description: "Various monasteries built by different Buddhist countries showcasing unique architectural styles.",
      significance: "Cultural diversity",
      bestTime: "Throughout the day",
      duration: "Half day",
      highlights: ["Thai Temple", "Japanese Temple", "Korean Monastery", "Tibetan Monastery"],
      history: "These monasteries represent the global nature of Buddhism, each built in traditional architectural styles of their respective countries."
    },
    {
      name: "Meditation Park",
      image: "meditation-park.jpg",
      description: "Peaceful gardens perfect for meditation and reflection in the heart of Bodhgaya.",
      significance: "Spiritual retreat",
      bestTime: "Early morning",
      duration: "Flexible",
      highlights: ["Tranquil environment", "Meditation spots", "Beautiful landscaping", "Quiet reflection areas"],
      history: "Designed as a modern space for contemplation, these gardens provide a peaceful retreat for pilgrims and visitors."
    }
  ];

  const nearbyAttractions = [
    {
      name: "Nalanda University Ruins",
      distance: "90 km",
      description: "Ancient Buddhist university and UNESCO World Heritage Site"
    },
    {
      name: "Rajgir",
      distance: "75 km",
      description: "Historic city with hot springs and Buddhist sites"
    },
    {
      name: "Vulture Peak",
      distance: "80 km",
      description: "Where Buddha delivered many important sermons"
    },
    {
      name: "Pawapuri",
      distance: "95 km",
      description: "Sacred Jain pilgrimage site"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Sacred Sites of Bodhgaya
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the profound spiritual significance of each sacred location 
              with expert guidance and authentic insights.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">6+ Sacred Sites</h3>
                <p className="text-gray-600">Major Buddhist pilgrimage locations</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Star className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">UNESCO Heritage</h3>
                <p className="text-gray-600">World Heritage Site recognition</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Global Pilgrims</h3>
                <p className="text-gray-600">Visitors from around the world</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sites */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {sites.map((site, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative h-80 overflow-hidden rounded-2xl shadow-xl">
                    <img
                      src={`/${site.image}`}
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
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{site.name}</h2>
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">{site.description}</p>
                  
                  <div className="bg-gray-50 p-6 rounded-xl mb-6">
                    <p className="text-gray-600 italic">{site.history}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 mr-3 text-blue-500" />
                      <div>
                        <span className="font-medium">Best time:</span>
                        <br />
                        <span className="text-sm">{site.bestTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 mr-3 text-green-500" />
                      <div>
                        <span className="font-medium">Duration:</span>
                        <br />
                        <span className="text-sm">{site.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-bold text-gray-900 mb-3">Key Highlights:</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {site.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                          <span className="text-sm text-gray-600">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    <Camera className="h-5 w-5 mr-2" />
                    Book Site Visit
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nearby Attractions</h2>
            <p className="text-xl text-gray-600">Extend your pilgrimage to other significant Buddhist sites</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nearbyAttractions.map((attraction, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{attraction.name}</h3>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {attraction.distance}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{attraction.description}</p>
                <Link
                  to="/contact"
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  Include in Tour →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visitor Guidelines */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visitor Guidelines</h2>
            <p className="text-xl text-gray-600">Respectful practices for sacred site visits</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Do's</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Dress modestly and remove shoes when required</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Maintain silence in meditation areas</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Follow photography guidelines</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Show respect to monks and pilgrims</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Keep the premises clean</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Don'ts</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Don't touch sacred objects without permission</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Avoid loud conversations or music</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Don't smoke or consume alcohol on premises</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Avoid pointing feet toward Buddha statues</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Don't litter or damage property</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Experience the Sacred Sites with Expert Guidance
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let Mr. Brajesh Kumar guide you through these sacred locations with authentic insights and spiritual wisdom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Plan Your Visit
            </Link>
            <Link
              to="/services"
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
            >
              View Tour Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SacredSites;