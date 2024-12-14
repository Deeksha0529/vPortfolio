import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
  {
    title: 'Java-Basic',
    organization: 'HackerRank',
    date: '2024',
    url: 'https://www.hackerrank.com/certificates/ccb2ff9ad722'
  },
  {
    title: '500 Difficulty Rating Problem Solve',
    organization: 'CodeChef',
    date: '2024',
    url: 'https://www.codechef.com/certificates/public/c3e1ebb'
  },
  {
    title: 'Problem Solver (Silver Badge)',
    organization: 'CodeChef',
    date: '2024',
    url: 'https://www.linkedin.com/posts/vaishnavisrivastava78_excited-to-share-that-ive-solved-250-problems-activity-7249443279719534592-5Zxs?utm_source=share&utm_medium=member_desktop'
  },
  {
    title: 'Completion of Basics of HTML and CSS',
    organization: 'OpenWeaver',
    date: '2024',
    url: 'https://www.linkedin.com/posts/vaishnavisrivastava78_excited-to-share-that-i-have-successfully-activity-7135518545064378368-m3BT?utm_source=share&utm_medium=member_desktop'
  }
];
const Certifications: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="block"
            >
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all group">
                <Award className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2 dark:text-white">{cert.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-1">{cert.organization}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;