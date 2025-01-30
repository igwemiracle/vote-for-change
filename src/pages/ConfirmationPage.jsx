import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai'; // Importing a success icon from React Icons

const ConfirmationPage = () => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-80 sm:w-96 md:w-[500px] lg:w-[600px] text-center">
        <AiOutlineCheckCircle className="text-green-500 text-6xl mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
        <p className="text-lg text-gray-700">Your vote has been successfully cast.</p>
        <button
          className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          onClick={() => window.location.href = '/'} // Redirect to homepage or another page
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
