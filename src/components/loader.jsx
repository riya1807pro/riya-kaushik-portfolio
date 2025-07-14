"use client";
import React from "react";
import {FourSquare} from "react-loading-indicators"

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-black bg-opacity-80 flex items-center justify-center">
      <div className="relative flex items-center justify-center">
       <FourSquare color="#140524" size="large" text="Redirecting" textColor="#1e0101" />
      </div>
    </div>
  );
};

export default Loader;