// src/components/ui/card.jsx
import React from "react";

const Card = ({ className = "", children, ...props }) => (
  <div 
    className={`bg-gray-950 border border-gray-800/50 rounded-xl shadow-lg ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardHeader = ({ className = "", children, ...props }) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
);

const CardTitle = ({ className = "", children, ...props }) => (
  <h3 
    className={`text-2xl font-bold text-gray-200 ${className}`}
    {...props}
  >
    {children}
  </h3>
);

const CardContent = ({ className = "", children, ...props }) => (
  <div className={`p-6 pt-0 text-gray-300 ${className}`} {...props}>
    {children}
  </div>
);

export { Card, CardHeader, CardTitle, CardContent };