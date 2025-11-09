import React from 'react';
import { Award, Globe, Heart, BookOpen, Star, Users, MapPin } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Meet Your Spiritual Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mr. Brajesh Kumar brings authentic Buddhist wisdom and unmatched local expertise 
              to your pilgrimage journey in Bodhgaya.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Government Approved Guide</h3>
                    <p className="text-gray-600">
                      Officially certified tourist guide with extensive knowledge of Bodhgaya's 
                      sacred sites and Buddhist history.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Heart className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Monastic Experience</h3>
                    <p className="text-gray-600">
                      Over 6 months of Buddhist practice as a monk in Burma (Myanmar), 
                      providing deep insights into Buddhist philosophy and traditions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Globe className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Korean Language Expert</h3>
                    <p className="text-gray-600">
                      Certified Korean interpreter associated with Mulla Sangha Korean Monastery, 
                      specializing in Korean pilgrim services.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <BookOpen className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Cultural Immersion</h3>
                    <p className="text-gray-600">
                      Deep understanding of local customs, traditions, and the spiritual 
                      significance of each sacred site in Bodhgaya.
                    </p>
                  </div>
                </div>
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
                  <p className="text-2xl font-bold text-blue-600">15+ Years</p>
                  <p className="text-gray-600">Experience in Tourism</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meditation Teacher */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Meet Our Meditation Teacher</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Manish Kumar leads guided meditation and mindfulness sessions tailored for pilgrims and beginners alike.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mr. Manish Kumar</h3>
              <p className="text-gray-700 mb-4">Mr. Manish Kumar is a certified meditation instructor with over 20 years of experience guiding international groups in mindfulness, breathwork, and meditative practices. His approach emphasizes gentle, accessible techniques that foster spiritual reflection and inner peace, particularly during pilgrimages and retreats. A dedicated scholar in the field, Mr. Manish holds a degree in Buddhist Studies from Mahachula University in Thailand, where he deepened his understanding of contemplative traditions.</p>

              <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-6">
                <li>Daily guided morning meditations</li>
                <li>Breathwork and relaxation techniques</li>
                <li>Small-group and private sessions (English/Hindi)</li>
                <li>Custom meditation plans for pilgrims</li>
              </ul>

              <div className="mt-4">
                <a
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                >
                  Book a Session
                </a>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="relative">
                <img
                  src="/manish.jpg"
                  alt="Mr. Manish Kumar - Meditation Teacher"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Background */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">A Journey of Spiritual Discovery</h2>
              
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  Mr. Brajesh Kumar's journey into Buddhist tourism began with a profound personal 
                  spiritual quest. His deep connection to Buddhism was forged through over six months 
                  of intensive monastic practice in Burma (Myanmar), where he lived as a monk and 
                  immersed himself in the authentic teachings and traditions of Theravada Buddhism.
                </p>
                
                <p>
                  This transformative experience provided him with insights that go far beyond 
                  academic knowledge. Having walked the path of a Buddhist monk, Mr. Kumar understands 
                  the spiritual significance of each ritual, the meaning behind every prayer, and 
                  the profound peace that comes from meditation practice.
                </p>
                
                <p>
                  His association with the Mulla Sangha Korean Monastery in Bodhgaya has further 
                  enriched his understanding of different Buddhist traditions. As a certified Korean 
                  interpreter, he has become the bridge between Korean pilgrims and the sacred sites 
                  of Bodhgaya, facilitating meaningful spiritual connections across cultural boundaries.
                </p>
                
                <p>
                  What sets Mr. Kumar apart is his ability to share not just historical facts, but 
                  the living essence of Buddhism. His tours are not mere sightseeing experiences, 
                  but spiritual journeys that can transform visitors' understanding of themselves 
                  and their place in the world.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Specializations</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Buddhist Philosophy & History</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Meditation Guidance</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Korean Language Services</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Cultural Interpretation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Sacred Site Navigation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Certifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-amber-600" />
                    <span className="text-gray-700">Government Approved Tourist Guide</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-amber-600" />
                    <span className="text-gray-700">Korean Language Interpreter</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-amber-600" />
                    <span className="text-gray-700">Buddhist Studies Certificate</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Languages</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Korean</span>
                    <span className="text-green-600 font-semibold">Basic</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">English</span>
                    <span className="text-green-600 font-semibold">Fluent</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Hindi</span>
                    <span className="text-green-600 font-semibold">Native</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Japanese</span>
                    <span className="text-green-600 font-semibold">Basic</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Thai</span>
                    <span className="text-green-600 font-semibold">Basic</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience That Speaks</h2>
            <p className="text-xl text-gray-600">Numbers that reflect our commitment to spiritual tourism</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">5000+</h3>
                <p className="text-gray-600">Happy Pilgrims</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">250+</h3>
                <p className="text-gray-600">Sacred Sites Covered</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="bg-amber-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <Globe className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">25+</h3>
                <p className="text-gray-600">Countries Served</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="bg-purple-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <Star className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">15</h3>
                <p className="text-gray-600">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;