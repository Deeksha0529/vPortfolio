import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Career Snapshot</h2>
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-xl p-8">
            <div className="prose dark:prose-invert max-w-none">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">About Me</h3>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                         I am a passionate and skilled Frontend Developer with expertise in HTML, CSS, Tailwind, Bootstrap, React, and JavaScript. Alongside frontend development, I am currently enhancing my problem-solving abilities by learning Data Structures and Algorithms (DSA). I’m always eager to explore new technologies and tackle complex challenges to improve my coding skills.
             
           
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;