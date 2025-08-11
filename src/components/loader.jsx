"use client";
import React from "react";
import { FourSquare } from "react-loading-indicators";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 dark:from-black dark:via-gray-900 dark:to-purple-900 bg-opacity-90 flex items-center justify-center transition-all duration-500">
      <div className="relative flex items-center justify-center rounded-2xl shadow-2xl p-8 bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl">
        <FourSquare color="#db2777" size="large" text="Redirecting" textColor="#fff" />
      </div>
    </div>
  );
};

export default Loader;