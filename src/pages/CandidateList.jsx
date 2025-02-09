import React, { useState, useEffect } from 'react';
import { candidate } from '../constant';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import CandidateSkeletonList from '../components/CandidateSkeletonList';

export default function CandidateList() {
  // Simulate loading state; replace with your actual data fetching logic.
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request delay
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <CandidateSkeletonList />;
  }

  return (
    <div className="flex flex-col gap-24 w-[90%] mx-auto my-16">
      {candidate.map((c) => (
        <div key={c.id} className="flex flex-col sm:flex-row gap-5">
          <div className="w-full xs:h-[270px] sm:w-[250px] sm:h-[250px] lg:w-[345px] lg:h-[360px]">
            <img
              className="rounded-[15px] object-cover w-full h-full"
              src={c.photo}
              alt={c.name}
            />
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-2">
                {c.name}
              </h3>
              <p className="text-[15px] text-gray-500">{c.slogan}</p>
            </div>
            <div className="flex gap-2">
              {c.socials.map((social, index) => (
                <SocialIcon
                  key={index}
                  url={social.url}
                  style={{ width: '40px', height: '40px' }}
                />
              ))}
            </div>
            <div>
              <ol className="list-inside text-left text-gray-700 space-y-2 text-lg">
                <li className="text-[15px]">
                  <span className="font-normal text-black">
                    Faculty&nbsp;&nbsp;:&nbsp;&nbsp;
                  </span>
                  {c.Faculty}
                </li>
                <li className="text-[15px]">
                  <span className="font-normal text-black">
                    Department&nbsp;&nbsp;:&nbsp;&nbsp;
                  </span>
                  {c.Department}
                </li>
                <li className="text-[15px]">
                  <span className="font-normal text-black">
                    Leadership Experience&nbsp;&nbsp;:&nbsp;&nbsp;
                  </span>
                  {c.LeadershipExperience}
                </li>
                <li className="text-[15px]">
                  <span className="font-normal text-black">
                    Age&nbsp;&nbsp;:&nbsp;&nbsp;
                  </span>
                  {c.age}
                </li>
              </ol>
            </div>
            <Link
              to={`/candidates/${c.id}`}
              className="text-gray-600 border-2 border-solid border-gray-300 rounded-[60px] hover:border-0 py-2 text-center text-[16px] w-40 sm:w-[9rem] hover:-translate-y-1 hover:bg-dark-brown hover:text-white transition duration-300"
            >
              View Full Bio
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
