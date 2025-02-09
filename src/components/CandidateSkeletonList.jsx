import React from 'react';

const CandidateSkeleton = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-5 animate-pulse">
      {/* Image Placeholder */}
      <div className="w-full xs:h-[270px] sm:w-[250px] sm:h-[250px] lg:w-[345px] lg:h-[360px] bg-gray-300 rounded-[15px]" />

      {/* Content Placeholder */}
      <div className="flex flex-col gap-6 flex-1">
        {/* Name and Slogan */}
        <div>
          <div className="h-8 bg-gray-300 rounded w-3/4 mb-2" />
          <div className="h-4 bg-gray-300 rounded w-1/2" />
        </div>
        {/* Social Icons Placeholder */}
        <div className="flex gap-2">
          <div className="w-10 h-10 bg-gray-300 rounded-full" />
          <div className="w-10 h-10 bg-gray-300 rounded-full" />
          <div className="w-10 h-10 bg-gray-300 rounded-full" />
        </div>
        {/* Details List Placeholder */}
        <div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-2/3" />
            <div className="h-4 bg-gray-300 rounded w-1/2" />
            <div className="h-4 bg-gray-300 rounded w-3/4" />
            <div className="h-4 bg-gray-300 rounded w-1/4" />
          </div>
        </div>
        {/* Button Placeholder */}
        <div className="w-40 h-10 bg-gray-300 rounded-[60px]" />
      </div>
    </div>
  );
};

const CandidateSkeletonList = () => {
  // Adjust the number of skeletons based on how many items you expect
  const skeletons = Array(3).fill(0);
  return (
    <div className="flex flex-col gap-24 w-[90%] mx-auto my-16">
      {skeletons.map((_, idx) => (
        <CandidateSkeleton key={idx} />
      ))}
    </div>
  );
};

export default CandidateSkeletonList;
