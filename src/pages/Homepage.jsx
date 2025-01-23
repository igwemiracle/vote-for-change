import React, { useState, useEffect } from 'react';
import { heroData } from '../constant';
import CardComponent from '../components/CardComponent';
import ElectionDetails from '../components/ElectionDetails';

const Homepage = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroData.length);
    }, 5000); // Change slides every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroData.map((item, index) => (
            <img
              key={item.id}
              src={item.image}
              alt={item.name}
              className={`absolute w-full h-full object-cover transition-opacity duration-1000
                 ${index === current ? 'opacity-100' : 'opacity-0'
                }`}
            />
          ))}
        </div>
        {/* Overlay Text */}
        <div className="flex flex-col items-start justify-center text-white absolute inset-0 bg-opacity-50 z-10
        lg:w-[450px] lg:ml-96 xs:ml-8">
          <h1 className="lg:text-6xl font-extrabold mb-4 xs:text-3xl lg:leading-[70px]">
            {heroData[current].slogan}
          </h1>
          <p className="xs:text-lg lg:text-2xl leading-9 mb-6">{heroData[current].description}</p>
          <button className="bg-[#AF4D32] hover:bg-[#a0442a] px-6 py-3 rounded text-lg shadow-lg">
            Learn More
          </button>
        </div>
      </div>
      {/* Cards Section */}
      <CardComponent />

      {/* Election Details Section */}
      <ElectionDetails />
    </div>
  );
};

export default Homepage;
