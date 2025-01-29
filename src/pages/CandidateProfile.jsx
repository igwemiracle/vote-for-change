import React from "react";
import { useParams, Link } from "react-router-dom";
import { images } from "../assets/images";

const CandidateProfile = () => {
  const { id } = useParams();
  const candidate = {
    1: {
      name: "Comr Shie Paul",
      bio: "Experienced leader with a strong track record in student governance and advocacy.",
      manifesto: "Promising better education opportunities, enhanced student welfare, and inclusivity.",
      photo: images.buhari,
      achievements: [
        "Organized the annual Student Leadership Summit.",
        "Introduced a mentorship program for freshmen.",
        "Secured funding for campus-wide events.",
      ],
      timeline: [
        { year: "2021", event: "Elected as Class Representative" },
        { year: "2022", event: "Became Vice President of SU" },
        { year: "2023", event: "Led a campus-wide sustainability campaign" },
      ],
    },
    2: {
      name: "Comr John Tarka",
      bio: "Dedicated organizer committed to fostering unity and promoting innovative student programs.",
      manifesto: "Focused on providing innovative programs, improved campus facilities, and student empowerment.",
      photo: images.jona,
      achievements: [
        "Launched a successful food drive for underprivileged students.",
        "Initiated tech training workshops for students.",
        "Coordinated inter-departmental sports events.",
      ],
      timeline: [
        { year: "2020", event: "Became Head of Sports Committee" },
        { year: "2021", event: "Elected as SU Sports Director" },
        { year: "2023", event: "Introduced campus-wide tech training" },
      ],
    },
  }[id];

  return (
    <div className="relative  text-white py-16">

      {/* Profile Header */}
      <div className="relative text-[#2D3F51] py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <img
            src={candidate.photo}
            alt={`${candidate.name}'s profile`}
            className="w-40 h-40 rounded-full shadow-lg mb-4 md:mb-0"
          />
          <div className="ml-6 text-center md:text-left">
            <h1 className="text-4xl font-bold">{candidate.name}</h1>
            <p className="text-lg mt-2">{candidate.bio}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto p-6">
        {/* Manifesto Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-[#2D3F51]">Manifesto</h2>
          <p className="text-gray-700">{candidate.manifesto}</p>
        </div>

        {/* Achievements Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-[#2D3F51]">Achievements</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {candidate.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>

        {/* Timeline Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-[#2D3F51]">Timeline</h2>
          <ol className="border-l border-[#AF4D32]">
            {candidate.timeline.map((entry, index) => (
              <li key={index} className="mb-4">
                <div className="flex items-center mb-1">
                  <div className="bg-[#AF4D32] w-4 h-4 rounded-full border-2 border-white"></div>
                  <span className="ml-4 text-gray-600 text-lg font-semibold">{entry.year}</span>
                </div>
                <p className="ml-8 text-gray-600">{entry.event}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <Link
            to="/candidates"
            className="bg-[#AF4D32] text-white py-2 px-6 rounded-lg shadow hover:bg-[#93412a] transition"
          >
            Back to Candidates
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;