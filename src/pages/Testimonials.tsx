import React from 'react';
import { Link } from 'react-router-dom';
import { Quote, Star, Users, Globe, Award } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "김지현 (Kim Ji-yun)",
      country: "South Korea",
      rating: 5,
      text: "Mr. Brajesh Kumar's deep understanding of Buddhism made our pilgrimage truly meaningful. His monastic experience brought authentic insights to every site we visited. The way he explained the significance of each location touched our hearts deeply.",
      tour: "7-day Buddhist Pilgrimage",
      date: "March 2024",
      image: "https://images.unsplash.com/photo-1562053650-cabb17e80ed4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Sarah Thompson",
      country: "United Kingdom",
      rating: 5,
      text: "An extraordinary spiritual journey! Brajesh's knowledge of Buddhist philosophy and the history of Bodhgaya created a profound and transformative experience for our group. His English is excellent and his passion for Buddhism is evident in every word.",
      tour: "Monastery Circuit Tour",
      date: "February 2024",
      image: "https://images.pexels.com/photos/8849299/pexels-photo-8849299.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Thich Minh An",
      country: "Vietnam",
      rating: 5,
      text: "As a fellow Buddhist practitioner, I was impressed by Mr. Kumar's authentic approach and respect for the sacred sites. His guidance enhanced our meditation practice significantly. The depth of his understanding comes from genuine spiritual experience.",
      tour: "Meditation & Mindfulness Tour",
      date: "January 2024",
      image: "https://images.pexels.com/photos/8849301/pexels-photo-8849301.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Yuki Tanaka",
      country: "Japan",
      rating: 5,
      text: "The personalized attention and cultural sensitivity shown by Mr. Kumar made our visit to Bodhgaya unforgettable. He understood our Japanese Buddhist traditions and helped us connect them with the original teachings. Highly recommended for serious Buddhist pilgrims.",
      tour: "Private Temple Tour",
      date: "December 2023",
      image: "https://images.pexels.com/photos/8849304/pexels-photo-8849304.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Phra Somchai",
      country: "Thailand",
      rating: 5,
      text: "Excellent guide with genuine Buddhist understanding. His connections with various monasteries provided us with unique experiences not available through other tour operators. The Thai monastery visit was particularly meaningful with his cultural insights.",
      tour: "International Monastery Tour",
      date: "November 2023",
      image: "https://images.pexels.com/photos/8849296/pexels-photo-8849296.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Michael Rodriguez",
      country: "United States",
      rating: 5,
      text: "Mr. Kumar's English is excellent, and his passion for Buddhism is evident. He helped us understand the deeper meaning behind each ritual and tradition we witnessed. His monastic background adds authenticity that you won't find with other guides.",
      tour: "Cultural Immersion Package",
      date: "October 2023",
      image: "https://images.pexels.com/photos/8849297/pexels-photo-8849297.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Dr. Lisa Chen",
      country: "Singapore",
      rating: 5,
      text: "As a Buddhist studies professor, I was skeptical about tour guides, but Mr. Kumar exceeded all expectations. His scholarly knowledge combined with practical experience as a monk provided insights I couldn't find in textbooks. Absolutely remarkable!",
      tour: "Academic Buddhist Tour",
      date: "September 2023",
      image: "https://images.pexels.com/photos/10817088/pexels-photo-10817088.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Roberto Silva",
      country: "Brazil",
      rating: 5,
      text: "Despite the language barrier, Mr. Kumar's patient explanations and visual demonstrations helped me understand Buddhism in ways I never imagined. His compassion and dedication to sharing the dharma is truly inspiring. A life-changing experience!",
      tour: "Beginner's Buddhist Journey",
      date: "August 2023",
      image: "https://images.pexels.com/photos/10817102/pexels-photo-10817102.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Emma Wilson",
      country: "Australia",
      rating: 5,
      text: "The photography tour with Mr. Kumar was exceptional. He knew all the best spots and times for capturing the spiritual essence of Bodhgaya. His respect for the sacred sites while helping us get beautiful photos was perfectly balanced.",
      tour: "Photography & Spirituality Tour",
      date: "July 2023",
      image: "https://images.pexels.com/photos/8849298/pexels-photo-8849298.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const stats = [
    { number: "5000+", label: "Happy Pilgrims", icon: <Users className="h-8 w-8" /> },
    { number: "50+", label: "Countries Served", icon: <Globe className="h-8 w-8" /> },
    { number: "4.9/5", label: "Average Rating", icon: <Star className="h-8 w-8" /> },
    { number: "25", label: "Years Experience", icon: <Award className="h-8 w-8" /> }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Pilgrim Experiences
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from fellow travelers who have found peace and enlightenment 
              through our guided Buddhist pilgrimage tours.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4 text-blue-600">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start justify-between mb-4">
                  <Quote className="h-8 w-8 text-blue-600" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.country}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex justify-between items-center text-sm">
                    <span className="text-blue-600 font-medium">{testimonial.tour}</span>
                    <span className="text-gray-500">{testimonial.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Video Testimonials</h2>
            <p className="text-xl text-gray-600">Watch our pilgrims share their transformative experiences</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-blue-700 font-medium">Coming Soon</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Korean Pilgrim Experience</h3>
                  <p className="text-gray-600 text-sm">A heartfelt testimonial from our Korean visitors about their spiritual journey in Bodhgaya.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Platforms */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us On</h2>
            <p className="text-xl text-gray-600">Read more reviews on popular travel platforms</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <div className="bg-green-600 text-white p-4 rounded-full w-fit mx-auto mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">TripAdvisor</h3>
              <p className="text-green-600 font-semibold mb-2">4.9/5 Stars</p>
              <p className="text-gray-600 text-sm">Based on 150+ reviews</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="bg-blue-600 text-white p-4 rounded-full w-fit mx-auto mb-4">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Google Reviews</h3>
              <p className="text-blue-600 font-semibold mb-2">4.8/5 Stars</p>
              <p className="text-gray-600 text-sm">Based on 200+ reviews</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
              <div className="bg-purple-600 text-white p-4 rounded-full w-fit mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Facebook</h3>
              <p className="text-purple-600 font-semibold mb-2">4.9/5 Stars</p>
              <p className="text-gray-600 text-sm">Based on 80+ reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Share Your Experience
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Have you traveled with us? We'd love to hear about your spiritual journey and share it with future pilgrims.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Book Your Journey
            </Link>
            <a
              href="mailto:info@innerpeaceholidays.com?subject=Review Submission"
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
            >
              Submit Review
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;