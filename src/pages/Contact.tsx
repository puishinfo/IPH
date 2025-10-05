import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Globe, Award } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    language: 'english',
    tourType: '',
    groupSize: '',
    dates: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // You could integrate with an email service or backend here
    alert('Thank you for your inquiry! We will contact you within 2 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Begin Your Spiritual Journey
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contact Mr. Brajesh Kumar to plan your personalized Buddhist pilgrimage 
              experience in Bodhgaya.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">+91 9934611463</p>
                      <p className="text-sm text-gray-500">Available 24/7 for emergencies</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <MessageCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                      <p className="text-gray-600">+91 9934611463</p>
                      <p className="text-sm text-gray-500">Quick responses in English</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">innerpeaceholidays@outlook.com</p>
                      <p className="text-sm text-gray-500">Response within 2 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Office Location</h4>
                      <p className="text-gray-600">Shop No. 9, Node 1</p>
                      <p className="text-gray-600">Bodhgaya, Bihar 824231, India</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Office Hours</h4>
                      <p className="text-gray-600">Mon - Sun: 6:00 AM - 8:00 PM</p>
                      <p className="text-sm text-gray-500">Available for temple morning prayers</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-4">Languages Spoken</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span>Korean (Fluent)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span>English (Fluent)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span>Hindi (Native)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span>Basic Japanese</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-amber-600" />
                    <span className="text-gray-700">Government certified guide</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-amber-600" />
                    <span className="text-gray-700">6+ months monastic experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-5 w-5 text-amber-600" />
                    <span className="text-gray-700">Korean language specialist</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-amber-600" />
                    <span className="text-gray-700">15+ years local experience</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Plan Your Pilgrimage</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Language</label>
                    <select
                      name="language"
                      value={formData.language}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="english">English</option>
                      <option value="korean">Korean (한국어)</option>
                      <option value="hindi">Hindi</option>
                      <option value="japanese">Basic Japanese</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tour Type</label>
                    <select
                      name="tourType"
                      value={formData.tourType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a tour</option>
                      <option value="mahabodhi">Mahabodhi Temple Tours</option>
                      <option value="monastery">Monastery Circuit</option>
                      <option value="photography">Photography Tours</option>
                      <option value="extended">Extended Pilgrimage</option>
                      <option value="meditation">Meditation & Mindfulness</option>
                      <option value="custom">Custom Tour</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Group Size</label>
                    <select
                      name="groupSize"
                      value={formData.groupSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select size</option>
                      <option value="1">Solo traveler</option>
                      <option value="2-5">2-5 people</option>
                      <option value="6-10">6-10 people</option>
                      <option value="11+">11+ people</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Dates</label>
                  <input
                    type="text"
                    name="dates"
                    value={formData.dates}
                    onChange={handleChange}
                    placeholder="e.g., March 15-20, 2024 or Flexible"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests or Questions</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tell us about your spiritual goals, dietary requirements, accessibility needs, budget considerations, or any special interests..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Inquiry</span>
                </button>

                <p className="text-sm text-gray-500 text-center">
                  We typically respond within 2 hours during business hours. 
                  For urgent inquiries, please call or WhatsApp us directly.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us in Bodhgaya</h2>
            <p className="text-xl text-gray-600">Located in the heart of the sacred city, near all major Buddhist sites</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Our Location</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Inner Peace Holidays</p>
                      <p className="text-gray-600">Shop No. 9 Node 1 Mahabodhi Shopping Complex</p>
                      <p className="text-gray-600">Bodhgaya, Bihar 824231, India</p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Nearby Landmarks:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 2 minutes walk to Mahabodhi Temple</li>
                      <li>• 5 minutes walk to Sacred Bodhi Tree</li>
                      <li>• 10 minutes walk to Great Buddha Statue</li>
                      <li>• 15 minutes drive to Gaya Airport</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Transportation:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Airport pickup service available</li>
                      <li>• Walking distance to all major sites</li>
                      <li>• Local transportation arranged</li>
                      <li>• Bicycle rentals nearby</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Map</h3>
                  <p className="text-gray-600 mb-4">
                    Detailed location map with directions will be provided upon booking confirmation.
                  </p>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      GPS Coordinates:<br />
                      24.694668° N, 84.979693° E
                    </p>
                  </div>

                  <div style={{ width: '100%', maxWidth: '600px', margin: 'auto' }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.967297210437!2d84.97439428910201!3d24.693650895298127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32c5c6d0082bf%3A0x885ebb926713f75d!2sInner%20Peace%20Holidays!5e0!3m2!1sen!2sin!4v1754213338434!5m2!1sen!2sin"
                      width="600"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common inquiries</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How far in advance should I book?",
                answer: "We recommend booking at least 2-4 weeks in advance, especially during peak season (October to March). However, we can often accommodate last-minute requests based on availability."
              },
              {
                question: "What is included in the tour price?",
                answer: "Our tours include professional guide services, entry fees to all sites, local transportation during tours, meditation guidance, and cultural interpretation. Meals and accommodation are typically not included unless specified."
              },
              {
                question: "Do you provide services in Native language?",
                answer: "Yes! Mr. Brajesh Kumar is a certified Guide and can conduct entire tours in very Explainatory manner. This service is particularly popular with all Buddhist pilgrims."
              },
              {
                question: "What should I wear when visiting sacred sites?",
                answer: "Please dress modestly with covered shoulders and knees. Comfortable walking shoes are recommended. You'll need to remove shoes at certain temples, so slip-on shoes are convenient."
              },
              {
                question: "Is photography allowed at the sites?",
                answer: "Photography policies vary by location. We'll guide you on where photography is permitted and help you capture beautiful, respectful images of your pilgrimage experience."
              },
              {
                question: "What is your cancellation policy?",
                answer: "We offer flexible cancellation policies. Full refund for cancellations 48 hours before the tour. For weather-related cancellations, we provide full refunds or rescheduling options."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;