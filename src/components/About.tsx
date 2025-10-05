import React from 'react';
import { Award, Globe, Heart, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Meet Your Spiritual Guide
          </h2>
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
                src="https://images.pexels.com/photos/8849298/pexels-photo-8849298.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
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
  );
};

export default About;