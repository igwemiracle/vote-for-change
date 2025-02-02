import React from 'react'
import { Link } from 'react-router-dom'

export default function BreadCrumbs() {
  return (
    <div className="flex items-center xs:py-[8px] xs:pl-8 xs:gap-1 sm:pl-16 lg:pl-24 sm:gap-2 lg:gap-4
     py-4 overflow-y-auto whitespace-nowrap ">
      <Link
        to={"/"}
        className="text-white hover:text-gray-300 xs:text-[12px] xs:gap-3 sm:text-[18px]">
        Home
      </Link>

      <span className="text-white dark:text-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </span>

      <Link
        to={"/candidates"}
        className="text-white hover:text-gray-300 xs:text-[12px] xs:gap-3 sm:text-[18px]">
        Candidates
      </Link>

      <span className="text-white dark:text-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </span>

      <Link
        to={"/vote"}
        className="text-white hover:text-gray-300 xs:text-[12px] xs:gap-3 sm:text-[18px]">
        Vote
      </Link>
    </div>
  )
}
