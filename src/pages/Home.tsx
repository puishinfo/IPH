import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Users, Award, Globe, Heart, BookOpen } from 'lucide-react';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40 sm:pt-0">
        <div 
          className="absolute inset-0 bg-cover bg-top bg-no-repeat"
          style={{
            backgroundImage: 'url("/pub/mahabodhi1.jpg")',
            backgroundPosition: 'top center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>
  <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pl-16 sm:pl-6 lg:pl-0 text-left sm:text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Journey to <span className="text-amber-400">Enlightenment</span>
          </h1>
          <p className="text-lg text-white/90 mb-6 max-w-3xl mx-auto">
            Discover transformative India tours blending ancient heritage, serene landscapes, and mindful retreats, including authentic Buddhist pilgrimage experiences in Bodhgaya, all guided by experts like
            <img src="/pub/Brajesh.jpg" alt="Mr. Brajesh Kumar" className="inline-block h-8 w-8 rounded-full mx-2 align-middle" />
            <span className="font-extrabold text-white text-lg lg:text-xl">Mr. Brajesh Kumar</span>{' '}
            and
            <img src="/pub/manish.jpg" alt="Mr. Manish Kumar" className="inline-block h-8 w-8 rounded-full mx-2 align-middle" />
            <span className="font-extrabold text-white text-lg lg:text-xl">Mr. Manish Kumar</span>
            — your gateway to profound cultural and spiritual awakening.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/services"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Tours
            </Link>
            <Link
              to="/about"
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
            >
              Meet Your Guide
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">UNESCO Heritage Site</h3>
              <p className="text-white/80">Mahabodhi Temple Complex</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Expert Guide</h3>
              <p className="text-white/80">1 Year monastic experience in Burma Pa-Auk Forest Monastery</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-amber-400" />
              </div>
                <h3 className="text-lg font-semibold text-white mb-2">Korean & Thai Specialist</h3>
                <p className="text-white/80">Certified guide and interpreter (Korean & Thai)</p>
            </div>
          </div>
        </div>
      </section>

      

      

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Your Spiritual Guide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mr. Brajesh Kumar brings authentic Buddhist wisdom and unmatched local expertise 
              to your pilgrimage journey in Bodhgaya.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Government Approved</h3>
                <p className="text-gray-600 text-sm">Certified tourist guide with extensive knowledge</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-amber-100 p-3 rounded-full w-fit mb-4">
                  <Heart className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Monastic Experience</h3>
                <p className="text-gray-600 text-sm">1 Year monastic experience in Burma Pa-Auk Forest Monastery</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
                  <Globe className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Korean Expert</h3>
                <p className="text-gray-600 text-sm">Certified Guide and interpreter</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                  <BookOpen className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cultural Immersion</h3>
                <p className="text-gray-600 text-sm">Deep local knowledge and customs</p>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="relative">
                <img
                  src="/pub/Brajesh.jpg"
                  alt="Buddhist monk in meditation"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                  <p className="text-2xl font-bold text-blue-600">25+ Years</p>
                  <p className="text-gray-600">Experience in Tourism</p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Link
                  to="/about"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Learn More About Your Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      {/* Meditation Teacher Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Meet Our Meditation Teacher</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Mr. Manish Kumar leads guided meditation and mindfulness sessions tailored for pilgrims and beginners alike.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mr. Manish Kumar</h3>
              <p className="text-gray-700 mb-4">Mr. Manish Kumar is a certified meditation instructor with over 20 years of experience guiding international groups in mindfulness, breathwork, and meditative practices. His approach emphasizes gentle, accessible techniques that foster spiritual reflection and inner peace, particularly during pilgrimages and retreats. A dedicated scholar in the field, Mr. Manish holds a degree in Buddhist Studies from Mahachula University in Thailand, where he deepened his understanding of contemplative traditions.</p>

              <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-6">
                <li>Daily guided morning meditations</li>
                <li>Breathwork and relaxation techniques</li>
                <li>Small-group and private sessions (English/Hindi/Thai)</li>
                <li>Custom meditation plans for pilgrims</li>
              </ul>

              <div className="mt-4">
                <Link
                  to="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                >
                  Book a Session
                </Link>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="relative">
                <img
                  src="/pub/manish.jpg"
                  alt="Mr. Manish Kumar - Meditation Teacher"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Mahabodhi Temple Tours",
                description: "Guided exploration of the UNESCO World Heritage Site",
                price: "From ₹500"
              },
              {
                title: "Monastery Circuit",
                description: "Visit international monasteries and temples",
                price: "From ₹1,200"
              },
              {
                title: "Photography Tours",
                description: "Capture the spiritual essence of Bodhgaya",
                price: "From ₹800"
              },
              {
                title: "Extended Pilgrimage",
                description: "Multi-day spiritual journey covering all sites",
                price: "From ₹3,000/day"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <p className="text-blue-600 font-semibold mb-4">{service.price}</p>
                <Link
                  to="/services"
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Begin Your Spiritual Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today to plan your personalized Buddhist pilgrimage experience in Bodhgaya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Book Your Tour
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
    </>
  );
};

export default Home;