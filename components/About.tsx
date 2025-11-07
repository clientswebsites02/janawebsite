"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Heart, Target, Code2, Users, Sparkles } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const highlights = [
    {
      icon: GraduationCap,
      title: "Fresh Graduate",
      description: "Bachelor's degree in Software Engineering from Mutah University (2024)",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Code2,
      title: "Technical Skills",
      description: "Proficient in C++, HTML/CSS, with knowledge of AI concepts and modern development",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Strong communication, leadership, and collaborative spirit in team environments",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const journey = [
    {
      icon: Heart,
      title: "Passion",
      text: "Driven by a genuine love for technology and creating solutions that make a real difference in people's lives.",
    },
    {
      icon: Target,
      title: "Goal",
      text: "Committed to continuous growth while contributing to innovative software development projects.",
    },
    {
      icon: Sparkles,
      title: "Approach",
      text: "Combining technical expertise with creativity, attention to detail, and a problem-solving mindset.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100">
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
              About Me
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-4 md:mb-6" />
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Aspiring Junior Software Engineer passionate about building elegant software and continuous learning
            </p>
          </motion.div>

          {/* Introduction Card */}
          <motion.div variants={itemVariants} className="mb-8 md:mb-12">
            <Card className="border-2 border-purple-100 shadow-xl bg-gradient-to-br from-white to-purple-50">
              <CardContent className="p-6 sm:p-8 md:p-10">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base md:text-lg">
                    👋 Hello! I'm <span className="font-semibold text-purple-700">Jana Hamed Al-madadha</span>, 
                    a passionate Junior Software Engineer based in Amman, Jordan. With a fresh perspective from my 
                    Bachelor's degree in Software Engineering from Mutah University, I bring enthusiasm, creativity, 
                    and a strong foundation in modern programming practices.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
                    💡 My journey in technology is driven by a desire to create meaningful solutions. I thrive in 
                    collaborative environments where innovation meets teamwork, and I'm constantly seeking opportunities 
                    to expand my technical expertise while making a positive impact through code.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div variants={itemVariants} className="mb-8 md:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-gray-800 px-4">
              What I Bring
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full border-2 border-purple-100 shadow-lg hover:shadow-2xl transition-all bg-white">
                    <CardContent className="p-4 sm:p-6 text-center">
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                      </div>
                      <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-gray-800">{item.title}</h4>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Journey Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
              My Approach
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {journey.map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-purple-100 to-blue-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-purple-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-800">{item.title}</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Professional Summary */}
          <motion.div variants={itemVariants} className="mt-12">
            <Card className="border-2 border-blue-100 shadow-xl bg-gradient-to-r from-blue-50 to-purple-50">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">
                  Current Focus
                </h3>
                <p className="text-gray-700 leading-relaxed text-center text-base md:text-lg">
                  I'm currently expanding my expertise in software development while working as a 
                  <span className="font-semibold text-purple-700"> Hospital Affairs Coordinator at NatHealth</span>, 
                  where I've developed strong organizational, communication, and problem-solving skills managing 
                  complex insurance documentation and medical approvals. I'm eager to transition these skills into 
                  full-time software development roles where I can make a meaningful impact.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
