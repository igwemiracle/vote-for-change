import { images } from "../assets/images";

const HowToVote = () => {
  return (

    <div className="mx-auto text-center mt-12 w-[90%]">
      <h3 className="text-3xl font-bold text-gray-800 mb-6">How to Vote</h3>
      <div className="flex flex-col md:flex-row items-start justify-between gap-10">
        <div className="flex-1 mx-auto w-full">
          <img
            src={images.voting1}
            alt="Voting Process Illustration"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="flex-1 rounded-lg shadow-md xs:p-4 lg:p-6">
          <ol className="list-decimal list-inside text-left text-gray-700 space-y-5 text-lg">
            <li>
              <span className="font-bold">Step 1:</span> Ensure you are registered to vote. Sign up using your Matric number.
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
  );
}

export default HowToVote;