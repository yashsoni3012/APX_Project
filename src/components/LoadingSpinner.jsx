// src/components/LoadingSpinner.jsx
import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-500 border-solid"></div>
    </div>
  );
};

export default LoadingSpinner;
