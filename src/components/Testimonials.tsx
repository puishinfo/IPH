import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "김지현 (Kim Ji-hyun)",
      country: "South Korea",
      rating: 5,
      text: "Mr. Brajesh Kumar's deep understanding of Buddhism and fluent Korean made our pilgrimage truly meaningful. His monastic experience brought authentic insights to every site we visited.",
      tour: "7-day Buddhist Pilgrimage"
    },
    {
      name: "Sarah Thompson",
      country: "United Kingdom",
      rating: 5,
      text: "An extraordinary spiritual journey! Brajesh's knowledge of Buddhist philosophy and the history of Bodhgaya created a profound and transformative experience for our group.",
      tour: "Monastery Circuit Tour"
    },
    {
      name: "Thich Minh An",
      country: "Vietnam",
      rating: 5,
      text: "As a fellow Buddhist practitioner, I was impressed by Mr. Kumar's authentic approach and respect for the sacred sites. His guidance enhanced our meditation practice significantly.",
      tour: "Meditation & Mindfulness Tour"
    },
    {
      name: "Yuki Tanaka",
      country: "Japan",
      rating: 5,
      text: "The personalized attention and cultural sensitivity shown by Mr. Kumar made our visit to Bodhgaya unforgettable. Highly recommended for serious Buddhist pilgrims.",
      tour: "Private Temple Tour"
    },
    {
      name: "Phra Somchai",
      country: "Thailand",
      rating: 5,
      text: "Excellent guide with genuine Buddhist understanding. His connections with various monasteries provided us with unique experiences not available through other tour operators.",
      tour: "International Monastery Tour"
    },
    {
      name: "Michael Rodriguez",
      country: "United States",
      rating: 5,
      text: "Mr. Kumar's English is excellent, and his passion for Buddhism is evident. He helped us understand the deeper meaning behind each ritual and tradition we witnessed.",
      tour: "Cultural Immersion Package"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Pilgrim Experiences
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from fellow travelers who have found peace and enlightenment 
            through our guided Buddhist pilgrimage tours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <Quote className="h-8 w-8 text-amber-400" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              <p className="text-gray-200 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="border-t border-white/10 pt-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.country}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-amber-400 font-medium">{testimonial.tour}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;