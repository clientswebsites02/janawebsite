"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, FileCheck, Database, Users, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function Experience() {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const responsibilities = [
    {
      icon: Users,
      text: "Coordinate insurance claims between patients and companies",
    },
    {
      icon: Database,
      text: "Manage and archive medical and insurance documents accurately",
    },
    {
      icon: FileCheck,
      text: "Communicate with hospitals and follow up on medical approvals",
    },
    {
      icon: CheckCircle,
      text: "Enter patient data into insurance management systems with precision",
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 px-4">
              Work Experience
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
          </motion.div>

          {/* Experience Card */}
          <motion.div variants={itemVariants}>
            <Card className="border-2 border-purple-100 shadow-xl hover:shadow-2xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 sm:p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl md:text-2xl lg:text-3xl mb-2">
                        Hospital Affairs Coordinator
                      </CardTitle>
                      <CardDescription className="text-base md:text-lg">
                        <span className="font-semibold text-purple-700">NatHealth</span>
                      </CardDescription>
                      <p className="text-xs md:text-sm text-gray-600 mt-2">Insurance Documentation Management</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6 md:pt-8">
                <h3 className="text-lg md:text-xl font-semibold mb-6 text-gray-800">Key Responsibilities</h3>
                <div className="space-y-4">
                  {responsibilities.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="flex items-start space-x-4 p-4 rounded-lg bg-gradient-to-r from-purple-50 to-blue-50 hover:shadow-md transition-shadow"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-sm md:text-base text-gray-700 leading-relaxed pt-1.5">{item.text}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Skills Gained */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-base md:text-lg font-semibold mb-4 text-gray-800">Skills Developed</h4>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {[
                      "Documentation Management",
                      "Client Communication",
                      "Data Entry",
                      "Healthcare Administration",
                      "Insurance Processing",
                      "Attention to Detail",
                      "Multi-tasking",
                      "Problem Resolution",
                    ].map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: index * 0.05 + 0.5 }}
                        className="px-3 md:px-4 py-1.5 md:py-2 bg-white border-2 border-purple-200 rounded-full text-xs md:text-sm font-medium text-purple-700 hover:bg-purple-50 transition-colors"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants} className="mt-12">
            <Card className="border-2 border-blue-100 shadow-xl hover:shadow-2xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div>
                    <CardTitle className="text-2xl md:text-3xl mb-2">
                      Bachelor of Software Engineering
                    </CardTitle>
                    <CardDescription className="text-lg">
                      <span className="font-semibold text-blue-700">Mutah University, Jordan</span>
                    </CardDescription>
                    <p className="text-sm text-gray-600 mt-2">Graduation Year: 2024</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 leading-relaxed">
                  Graduated with a strong foundation in computer science principles, software development 
                  methodologies, and programming paradigms. Developed expertise in C++ and gained comprehensive 
                  knowledge of software engineering best practices, algorithms, and data structures.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
