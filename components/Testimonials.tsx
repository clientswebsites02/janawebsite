"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Placeholder testimonials
  const testimonials = [
    {
      name: "Colleague Name",
      role: "Position at Company",
      content: "Jana is an exceptional team player with remarkable attention to detail. Her dedication to delivering quality work and her ability to communicate effectively make her a valuable asset to any team.",
      rating: 5,
    },
    {
      name: "Manager Name",
      role: "Supervisor at NatHealth",
      content: "Working with Jana has been a pleasure. She demonstrates strong organizational skills and handles complex documentation with precision. Her positive attitude and willingness to learn are truly commendable.",
      rating: 5,
    },
    {
      name: "Team Member",
      role: "Fellow Software Engineer",
      content: "Jana's passion for software development is evident in everything she does. Her problem-solving abilities and collaborative spirit make her an excellent colleague. I look forward to seeing her grow in her career.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-br from-purple-100 via-gray-50 to-blue-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 px-4">
              Testimonials
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-4" />
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto px-4">
              What colleagues and collaborators say about working with me
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="h-full"
              >
                <Card className="h-full border-2 border-purple-100 shadow-lg hover:shadow-2xl transition-all bg-white">
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Quote Icon */}
                    <div className="mb-4">
                      <Quote className="w-10 h-10 text-purple-600 opacity-50" />
                    </div>

                    {/* Rating */}
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-gray-700 leading-relaxed mb-6 flex-grow italic">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="border-t pt-4">
                      <p className="font-semibold text-gray-800 mb-1">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Want to Share Your Experience?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              If you've worked with me, I'd love to hear your feedback!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
