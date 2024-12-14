import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, Github, Linkedin, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Hello, I am <span className="text-blue-600">Vaishnavi Srivastava</span>
          </h2>
          <div className="text-xl text-gray-600 dark:text-gray-300 mb-6 h-8">
            <TypeAnimation
              sequence={[
                'I love coding',
                2000,
                'I love making cool websites',
                2000,
              ]}
              repeat={Infinity}
            />
          </div>
           <p className="text-gray-600 dark:text-gray-300 mb-8">
          Frontend developer passionate about crafting responsive, user-friendly web applications with a strong focus on clean design and functionality.
          </p>
          <div className="flex gap-4">
          <button
  onClick={() => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';  // Linking from public folder
    link.download = 'resume.pdf';
    link.click();
  }}
  className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
>
  <Download className="w-5 h-5" /> Download CV
</button>


           <div className="flex gap-4">
              <a href="https://github.com/Deeksha0529" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/vaishnavisrivastava78" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://x.com/VaishnaviSri_29" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="aspect-square rounded-full overflow-hidden shadow-2xl border-8 border-white dark:border-gray-700">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
              alt="Vaishnavi Srivastava"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;