export default function CandidateCard({ name, manifesto, image }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <img src={image} alt={`${name}`} className="rounded-full w-24 h-24 mx-auto" />
      <h3 className="text-xl font-bold text-center mt-4">{name}</h3>
      <p className="text-gray-600 text-sm text-center mt-2">{manifesto}</p>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        View Profile
      </button>
    </div>
  );
}
