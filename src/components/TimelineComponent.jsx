import React from "react";

// Timeline Component
const Timeline = ({ events, className }) => {
  return (
    <div className={`min-h-screen py-6 flex flex-col justify-center sm:py-12 ${className}`}>
      <div className="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
        <div className="relative text-gray-700 antialiased text-sm font-semibold">
          {/* Vertical bar running through middle */}
          <div className="hidden sm:block w-1 bg-[#e26d4d] absolute h-full left-1/2 transform -translate-x-1/2"></div>

          {/* Loop through events data */}
          {events.map((event, index) => (
            <div key={event.id} className="mt-6 sm:mt-0 sm:mb-12">
              <div className={`flex flex-col sm:flex-row items-center ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                <div className={`flex justify-${index % 2 === 0 ? 'start' : 'end'} w-full mx-auto items-center`}>
                  <div className={`w-full sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8'}`}>
                    <div className="p-4 bg-white rounded shadow">
                      <h3 className="text-3xl font-bold text-gray-800 mb-6">{event.title}</h3>
                      {event.description}
                    </div>
                  </div>
                </div>
                {/* Replace icon with a numbered circle */}
                <div className="rounded-full bg-[#AF4D32] border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                  <span className="text-white font-bold">{index + 1}</span>
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