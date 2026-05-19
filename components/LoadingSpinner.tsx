import React from 'react';

export const LoadingSpinner: React.FC = () => (
  <div className="flex flex-col items-center justify-center space-y-4 p-8">
    <div className="relative w-16 h-16">
      <div className="absolute top-0 left-0 w-full h-full border-4 border-indigo-500/30 rounded-full animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full border-t-4 border-indigo-400 rounded-full animate-spin"></div>
    </div>
    <p className="text-indigo-200 animate-pulse font-medium">Synthesizing Model...</p>
  </div>
);