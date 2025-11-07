"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Github, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formSubmitted, setFormSubmitted] = useState(false);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "madadhajana880@gmail.com",
      href: "mailto:madadhajana880@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+962 79 606 2704",
      href: "tel:+962796062704",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Amman, Jordan",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 px-4">
              Get In Touch
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-4" />
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ x: 10 }}
                    >
                      {info.href ? (
                        <a
                          href={info.href}
                          className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-blue-50 hover:shadow-md transition-all group"
                        >
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <info.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">{info.title}</p>
                            <p className="text-gray-600">{info.content}</p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-blue-50">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <info.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">{info.title}</p>
                            <p className="text-gray-600">{info.content}</p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">
                  Connect With Me
                </h3>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    className="w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center hover:shadow-lg transition-all"
                  >
                    <Linkedin className="w-7 h-7 text-white" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    className="w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center hover:shadow-lg transition-all"
                  >
                    <Github className="w-7 h-7 text-white" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="mailto:madadhajana880@gmail.com"
                    className="w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center hover:shadow-lg transition-all"
                  >
                    <Mail className="w-7 h-7 text-white" />
                  </motion.a>
                </div>
              </div>

              {/* Additional Info */}
              <Card className="border-2 border-purple-100 bg-gradient-to-br from-purple-50 to-blue-50">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3 text-gray-800">
                    Available For
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Software Development Projects
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Freelance Opportunities
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Collaboration & Networking
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Technical Consulting
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="border-2 border-purple-100 shadow-xl">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">
                    Send Me a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        required
                        className="border-purple-200 focus:border-purple-600"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="border-purple-200 focus:border-purple-600"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="Project Inquiry"
                        required
                        className="border-purple-200 focus:border-purple-600"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your project or inquiry..."
                        rows={6}
                        required
                        className="border-purple-200 focus:border-purple-600"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-base md:text-lg py-5 md:py-6"
                    >
                      {formSubmitted ? (
                        <>
                          <CheckCircle className="mr-2 h-5 w-5" />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
