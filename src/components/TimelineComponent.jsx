import React from "react";
import { images } from "../assets/images";


const Timeline = ({ events }) => {
  return (
    <div className="flex flex-col justify-center my-8 py-2 bg-[rgba(22,23,67,0.92)] bg-opacity-50 relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${images.studentsVoting})` }}
      ></div>

      {/* Content */}
      <div className="relative py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
        <div className="relative text-gray-700 antialiased text-sm font-semibold">
          {/* Vertical Bar */}
          <div className="hidden sm:block w-1 bg-dark-brown absolute h-full left-1/2 transform -translate-x-1/2"></div>

          {/* Timeline Events */}
          {events.map((event, index) => (
            <div key={event.id} className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center">
                {/* Left & Right Alternating Content */}
                <div className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"} w-full mx-auto items-center`}>
                  <div className={`w-full sm:w-1/2 ${index % 2 === 0 ? "sm:pr-8" : "sm:pl-8"}`}>
                    <div className="p-4 bg-white rounded shadow">
                      <h3 className="text-lg font-bold text-gray-800">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                </div>

                {/* Circle Indicator */}
                <div className="rounded-full bg-dark-brown border-white border-4 w-10 h-10 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default Timeline;
