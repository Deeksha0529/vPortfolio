import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Github, Linkedin, Twitter, Code, BookOpen, Award } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Vaishnavi.dev
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Crafting digital experiences with passion and precision.
            </p>
            <div className="flex gap-4 pt-4">
              {[
                { Icon: Github, url: 'https://github.com/Deeksha0529', label: 'GitHub' },
                { Icon: Linkedin, url: 'https://www.linkedin.com/in/vaishnavisrivastava78', label: 'LinkedIn' },
                { Icon: Twitter, url: 'https://x.com/VaishnaviSri_29', label: 'Twitter' }
              ].map(({ Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-50 dark:bg-gray-700 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6 text-gray-800 dark:text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'Skills', 'Services', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <HashLink 
                    smooth 
                    to={`#${link.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    {link}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Coding Profiles */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6 text-gray-800 dark:text-white">
              Coding Profiles
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'LeetCode', icon: Code, url: 'https://leetcode.com/u/Vaishnavi-Srivastava/' },
                { name: 'Code 360', icon: BookOpen, url: 'https://www.naukri.com/code360/profile/d8f42a74-1451-4faa-b5e8-3f92d4f42118' },
                { name: 'CodeChef', icon: Award, url: 'https://www.codechef.com/users/vaishnavi_0529' }
              ].map(({ name, icon: Icon, url }) => (
                <li key={name}>
                  <a 
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"
                  >
                    <Icon className="w-4 h-4" />
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6 text-gray-800 dark:text-white">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <p className="text-gray-600 dark:text-gray-300">
                Feel free to reach out for collaborations or just a friendly hello!
              </p>
              <HashLink 
                smooth 
                to="#contact"
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 w-full text-center"
              >
                Contact Me
              </HashLink>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-300 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Vaishnavi.dev. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;