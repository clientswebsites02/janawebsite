"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Brain, MessageSquare, Users, Lightbulb, FileText, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const technicalSkills = [
    { name: "C++", icon: Code2, level: 90, color: "from-blue-500 to-cyan-500" },
    { name: "HTML/CSS", icon: Globe, level: 85, color: "from-orange-500 to-red-500" },
    { name: "AI Concepts", icon: Brain, level: 70, color: "from-purple-500 to-pink-500" },
    { name: "Microsoft Office", icon: FileText, level: 95, color: "from-green-500 to-emerald-500" },
  ];

  const softSkills = [
    { name: "Communication", icon: MessageSquare, description: "Effective communication facilitating collaboration" },
    { name: "Teamwork", icon: Users, description: "Cooperative and supportive team spirit" },
    { name: "Problem Solving", icon: Lightbulb, description: "Creative solutions and decision making under pressure" },
    { name: "Attention to Detail", icon: Database, description: "Accuracy and precision in task execution" },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-gradient-to-br from-gray-100 via-purple-100 to-blue-100">
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
              Skills & Expertise
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
          </motion.div>

          {/* Technical Skills */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8 text-center text-gray-800 px-4">
              Technical Skills
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-purple-100"
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center mr-4`}>
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-800">{skill.name}</h4>
                    </div>
                    <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <motion.div
                      className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8 text-center text-gray-800 px-4">
              Soft Skills
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {softSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center border border-purple-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <skill.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-base md:text-lg font-semibold mb-2 text-gray-800">{skill.name}</h4>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8 text-center text-gray-800 px-4">
              Certifications & Courses
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              <motion.div whileHover={{ scale: 1.05, y: -5 }}>
                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 shadow-lg hover:shadow-xl transition-all border-2 border-purple-100 h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <p className="font-semibold text-gray-800 text-base md:text-lg">Artificial Intelligence Course</p>
                </div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -5 }}>
                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 shadow-lg hover:shadow-xl transition-all border-2 border-purple-100 h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Code2 className="w-8 h-8 text-white" />
                  </div>
                  <p className="font-semibold text-gray-800 text-base md:text-lg">C++ Programming Course</p>
                </div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -5 }}>
                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 shadow-lg hover:shadow-xl transition-all border-2 border-purple-100 h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <p className="font-semibold text-gray-800 text-base md:text-lg">HTML Course</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8 text-center text-gray-800 px-4">
              Languages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* Arabic */}
              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Card className="border-2 border-green-100 shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-white to-green-50 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full -mr-16 -mt-16" />
                  <CardContent className="p-6 relative">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                        AR
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-800">Arabic</h4>
                        <p className="text-sm text-gray-600">العربية</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                        />
                      </div>
                      <span className="text-sm font-semibold text-green-600">Native</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* English */}
              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Card className="border-2 border-blue-100 shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-white to-blue-50 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full -mr-16 -mt-16" />
                  <CardContent className="p-6 relative">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                        EN
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-800">English</h4>
                        <p className="text-sm text-gray-600">International</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "90%" }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                        />
                      </div>
                      <span className="text-sm font-semibold text-blue-600">Fluent</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
