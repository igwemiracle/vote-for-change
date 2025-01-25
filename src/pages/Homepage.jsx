import React, { useState, useEffect } from 'react';
import { events, heroData } from '../constant';
import ElectionDetails from '../components/ElectionDetails';
import CardContainer from '../components/CardComponent/CardContainer';
import Timeline from '../components/TimelineComponent';

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
            <div key={item.id} className={`absolute w-full h-full transition-opacity duration-1000 
            ${index === current ? 'opacity-100' : 'opacity-0'}`}>
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#2D3F51] bg-opacity-70"></div>
            </div>
          ))}
        </div>
        {/* Overlay Text */}
        <div className="flex flex-col items-center justify-center text-center text-white absolute inset-0 bg-opacity-50 z-10">
          <h1 className="lg:text-6xl font-extrabold mb-4 xs:text-3xl lg:leading-[70px] text-shadow-md">
            {heroData[current].slogan}
          </h1>

          <p className="xs:text-lg lg:text-2xl leading-9 mb-6">{heroData[current].description}</p>
          <button className="border border-solid border-white rounded-[60px] hover:border-0 hover:bg-[#a0442a] active:bg-[#a0442a] px-9 py-3 text-lg shadow-lg">
            Learn More
          </button>
        </div>
      </div>
      {/* Cards Section */}
      <CardContainer />
      {/* Election Details Section */}
      <ElectionDetails />
      {/* TimeLine */}
      <Timeline events={events} className={`bg-[#CCCCCC]`} />
    </div>
  );
};


export default Homepage;
