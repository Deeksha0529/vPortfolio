import React from 'react';
import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'SERVICES', href: '#services' },
    { name: 'CERTIFICATIONS', href: '#certifications' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
          >
            Vaishnavi.dev
          </motion.h1>
          <div className="flex gap-8">
            {navItems.map((item) => (
              <HashLink
                key={item.name}
                smooth
                to={item.href}
                onClick={() => setActiveSection(item.name.toLowerCase())}
                className={`relative font-medium hover:text-blue-600 transition-colors ${
                  activeSection === item.name.toLowerCase() 
                    ? 'text-blue-600' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {item.name}
                {activeSection === item.name.toLowerCase() && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </HashLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;