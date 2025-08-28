'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const useProgressiveMessage = (initialMessage, messages, delay = 4000) => {
  const [message, setMessage] = useState(initialMessage);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < messages.length) {
        setMessage(messages[index]);
        index += 1;
      }
    }, delay);

    return () => clearInterval(interval);
  }, [messages, delay]);

  return message;
};

const Loader = () => {
  const [accentColor, setAccentColor] = useState('#4a1c84'); 
  const progressiveMessages = [
    'This is taking longer than expected...',
    'Still working on it...',
    'Server seems busy. Please hold on or refresh the page.'
  ];

  const loadingMessage = useProgressiveMessage('Redirecting...', progressiveMessages, 5000);

  useEffect(() => {
    const timer = setTimeout(() => setAccentColor('#4a90e2'), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="relative flex flex-col items-center justify-center space-y-6">
        
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
          className="w-20 h-20 border-4 border-t-transparent rounded-full"
          style={{ borderColor: `${accentColor} transparent ${accentColor} ${accentColor}` }}
        ></motion.div>

        <div className="text-white text-lg font-semibold text-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={loadingMessage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              {loadingMessage}
            </motion.p>
          </AnimatePresence>
        </div>

        <p className="text-gray-400 text-sm mt-2">Thank you for your patience...</p>
      </div>

      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ repeat: Infinity, duration: 3 }}
        style={{
          background: `radial-gradient(circle at 30% 30%, ${accentColor}, transparent 70%), radial-gradient(circle at 70% 70%, #140524, transparent 70%)`,
        }}
      />
    </div>
  );
};

export default Loader;
