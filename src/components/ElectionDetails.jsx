import React from 'react'

export default function ElectionDetails() {
  return (
    <>
      {/* Additional Election Details Section */}
      <div className="mt-16 mx-auto rounded-lg w-[90%]">
        <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">Election Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 xs:p-4 lg:p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4 text-gray-800">Eligibility & Guidelines</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>
                <span className="font-bold">Eligibility:</span> Only BSU students with active matric number are eligible.
              </li>
              <li>
                <span className="font-bold">Voting Rights:</span> Your vote is private and can be cast only once.
              </li>
              <li>
                <span className="font-bold">Campaign Rules:</span> Adherence to ethical and respectful campaigning is mandatory.
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 xs:p-4 lg:p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4 text-gray-800">Important Dates & Info</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>
                <span className="font-bold">Voting Deadline:</span> March 25th, 11:59 PM.
              </li>
              <li>
                <span className="font-bold">Results Announcement:</span> March 26th, 2025, at the Student Union Hall.
              </li>
              <li>
                <span className="font-bold">Support:</span> For technical help, contact <a href="#" className="text-blue-600 hover:underline">support@bsu.edu</a>.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
