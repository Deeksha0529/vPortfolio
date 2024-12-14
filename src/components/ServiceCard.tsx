import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, Icon, description }) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg p-6 min-h-[250px] transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="relative z-10 transition-opacity duration-300 group-hover:opacity-0">
        <div className="text-blue-600 dark:text-blue-400 mb-4">
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
      </div>
      
      <div className="absolute inset-0 bg-blue-50 dark:bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-6">
        <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;