import React from 'react'

export default function CardComponent() {
  return (
    <div className="relative -mt-20 z-20 flex lg:flex-row gap-6 justify-center flex-wrap items-center
      ">
      {[1, 2, 3].map((card, index) => (
        <div key={index}
          className="bg-[#AF4D32] rounded-lg shadow-lg p-6 w-64 h-64 flex flex-col items-center justify-center text-center
         transition duration-300
          hover:shadow-lg hover:-translate-y-4"
        >
          <h3 className="text-2xl font-bold text-white  mb-2">
            {card === 1 ? "Election Details" : card === 2 ? "Candidate Profiles" : "Voting Page"}
          </h3>
          <p className="text-gray-200  text-base">
            {card === 1 ? "Find out the election dates, instructions, and more." : card === 2
              ? "Explore each candidate's profile, biography, and manifesto."
              : "Select your preferred candidate and cast your vote."}
          </p>
        </div>
      ))}
    </div>
  )
}
