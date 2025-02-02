import React from 'react'
import { candidate } from '../constant';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';


export default function CandidateList2() {
  return (
    <div className='flex flex-col gap-24 w-[90%] mx-auto my-16'>
      {candidate.map((c) => (
        // <div className='flex flex-wrap gap-6'>
        <div className='flex flex-col sm:flex-row gap-5'>
          <div className='w-full xs:h-[270px] sm:w-[250px] sm:h-[250px] lg:w-[345px] lg:h-[345px]'>
            <img className='rounded-[15px] object-cover w-full h-full' src={c.photo} alt={c.name} />
          </div>
          <div className='flex flex-col gap-6'>
            <div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-2">
                {c.name}
              </h3>
              <p className='text-[15px] text-gray-500'>Vote for SU president</p>
            </div>
            <div className='flex gap-4'>
              <Facebook fill='black' />
              <Twitter fill='black' />
              <Instagram />
            </div>
            <div>
              <ol className="list-inside text-left text-gray-700 space-y-2 text-lg">
                <li className='text-[15px]'>
                  <span className="font-normal text-black">Department:</span> {c.Department}
                </li>
                <li className='text-[15px]'>
                  <span className="font-normal text-black">Faculty:</span> {c.Faculty}
                </li>
                <li className='text-[15px]'>
                  <span className="font-normal text-black">Leadership Experience:</span> {c.LeadershipExperience}
                </li>
                <li className='text-[15px]'>
                  <span className="font-normal text-black">Age:</span> {c.age}
                </li>
              </ol>
            </div>
            <Link to={`/candidates/${c.id}`}
              className="text-gray-500 border-2 border-solid border-gray-300 rounded-[60px] hover:border-0 py-2 text-center  text-[16px] w-40 sm:w-[10rem] hover:-translate-y-1 hover:bg-dark-brown hover:text-white h transition duration-300">
              View Full Bio
            </Link>
          </div>
        </div>
      ))}

    </div>
  )
}
