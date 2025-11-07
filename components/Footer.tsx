"use client";

import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-bold mb-4">Jana Hamed Al-madadha</h3>
              <p className="text-purple-200 leading-relaxed">
                Junior Software Engineer passionate about creating innovative solutions and building elegant software.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-purple-200 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-purple-200 hover:text-white transition-colors"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="text-purple-200 hover:text-white transition-colors"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-purple-200 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
              <ul className="space-y-2 text-purple-200">
                <li>
                  <a
                    href="mailto:madadhajana880@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    madadhajana880@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+962796062704"
                    className="hover:text-white transition-colors"
                  >
                    +962 79 606 2704
                  </a>
                </li>
                <li>Amman, Jordan</li>
              </ul>

              {/* Social Links */}
              <div className="flex space-x-4 mt-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="mailto:madadhajana880@gmail.com"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-purple-200 flex items-center justify-center flex-wrap gap-2">
              © {currentYear} Jana Hamed Al-madadha. Made with
              <Heart className="w-4 h-4 fill-red-500 text-red-500" />
              and passion for technology.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
