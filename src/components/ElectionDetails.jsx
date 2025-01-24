import React from 'react'
import { images } from '../assets/images'

export default function ElectionDetails() {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-6 py-12 bg-white shadow-lg rounded-lg">
        {/* Election Instructions Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">How to Vote</h3>
          <div className="flex flex-col md:flex-row items-start justify-between gap-10">
            <div className="flex-1">

              <img
                src={images.voting1}
                alt="Voting Process Illustration"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="flex-1">
              <ol className="list-decimal list-inside text-left text-gray-700 space-y-5 text-lg">
                <li>
                  <span className="font-bold">Step 1:</span> Ensure you are registered to vote. Sign up using your email and password if needed.
                </li>
                <li>
                  <span className="font-bold">Step 2:</span> Browse the list of candidates and read their manifestos.
                </li>
                <li>
                  <span className="font-bold">Step 3:</span> Go to the "Vote" section and select your preferred candidate.
                </li>
                <li>
                  <span className="font-bold">Step 4:</span> Click the "Submit Vote" button to cast your vote.
                </li>
                <li>
                  <span className="font-bold">Step 5:</span> After casting your vote, you will see a confirmation message.
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Additional Election Details Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">Election Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Eligibility & Guidelines</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-3">
                <li>
                  <span className="font-bold">Eligibility:</span> Only BSU students with active IDs are eligible.
                </li>
                <li>
                  <span className="font-bold">Voting Rights:</span> Your vote is private and can be cast only once.
                </li>
                <li>
                  <span className="font-bold">Campaign Rules:</span> Adherence to ethical and respectful campaigning is mandatory.
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Important Dates & Info</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-3">
                <li>
                  <span className="font-bold">Voting Deadline:</span> January 25th, 11:59 PM.
                </li>
                <li>
                  <span className="font-bold">Results Announcement:</span> January 26th, 2025, at the Student Union Hall.
                </li>
                <li>
                  <span className="font-bold">Support:</span> For technical help, contact <a href="#" className="text-blue-600 hover:underline">support@bsu.edu</a>.
                </li>
              </ul>
            </div>
          </div>
          <p className="text-center mt-8 text-lg text-gray-700">
            Remember to cast your vote before the deadline!
          </p>
        </div>
      </div>
    </div>

  )
}
