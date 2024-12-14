import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Award, BookOpen, Brain } from 'lucide-react';


 
const profiles = [
  {
    name: 'CodeChef',
    icon: Code2,
    url: 'https://www.codechef.com/users/vaishnavi_0529',
    description: 'Java Programming'
  },
  {
    name: 'HackerRank',
    icon: BookOpen,
    url: 'https://hackerrank.com/your-profile',
    description: 'Coding Challenges'
  },
  {
    name: 'LeetCode',
    icon: Award,
    url: 'https://leetcode.com/u/Vaishnavi-Srivastava/',
    description: 'Competitive Programming'
  },
  {
    name: 'Code 360',
    icon: Brain,
    url: 'https://www.naukri.com/code360/profile/d8f42a74-1451-4faa-b5e8-3f92d4f42118',
    description: 'Web Development and Problem Solving & DSA'
  }
];

const CodingProfiles: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Coding Profiles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <profile.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2 dark:text-white">{profile.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{profile.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;