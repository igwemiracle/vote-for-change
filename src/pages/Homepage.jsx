import React, { useState, useEffect, useRef } from 'react';
import { events, heroData } from '../constant';
import ElectionDetails from '../components/ElectionDetails';
import CardContainer from '../components/CardComponent/CardContainer';
import Timeline from '../components/TimelineComponent';
import { Link } from 'react-router-dom';
import HowToVote from '../components/HowToVote';

const Homepage = () => {
  const [current, setCurrent] = useState(0);
  const ElectionDetailsRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Function to scroll down to ElectionDetails
  const scrollToElectionDetails = () => {
    ElectionDetailsRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="min-h-screen bg-gray-100 -mt-8">
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
        <div className="w-[90%] mx-auto text-white absolute inset-0 bg-opacity-50 z-10
         flex flex-col justify-center">
          <h1 className="lg:text-6xl font-extrabold mb-4 xs:leading-[3rem] xs:text-4xl">
            {heroData[current].slogan}
          </h1>

          <p className="xs:text-2xl lg:text-2xl leading-9 mb-6 font-normal">{heroData[current].description}</p>
          <Link to={'/vote'} className="border border-solid border-white rounded-[60px] hover:border-0 hover:bg-[#a0442a]  py-3 text-center xs:w-40 text-lg shadow-lg">
            Get Started
          </Link>
        </div>
      </div>
      {/* Cards Section (Pass Scroll Function) */}
      <CardContainer scrollToElectionDetails={scrollToElectionDetails} />
      {/* How to Vote Section */}
      <HowToVote />
      {/* Election Details Section */}
      <div ref={ElectionDetailsRef}>
        <ElectionDetails />
      </div>
      {/* TimeLine */}
      <Timeline events={events} />
    </div >
  );
};


export default Homepage;