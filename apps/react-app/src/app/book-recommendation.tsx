import React, { useEffect, useRef } from 'react';

// Mock AI recommendation function (replace with actual AI logic or API call)
const getAIRecommendations = (genres) => {
  const recommendations = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' },
    { title: 'Pride and Prejudice', author: 'Jane Austen' },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
  ];

  return recommendations.filter(() => Math.random() > 0.5);
};

const BookRecommendationAI = ({ onReady }) => {
  const getRecommendations = (genres, callback) => {
    // Simulate API call delay
    setTimeout(() => {
      const recommendations = getAIRecommendations(genres);
      callback(recommendations);
    }, 1000);
  };

  useEffect(() => {
    onReady({ getRecommendations });
  }, [onReady]);

  return (
    <div className="hidden">
      {/* This component doesn't render anything visible */}
    </div>
  );
};

export default BookRecommendationAI;