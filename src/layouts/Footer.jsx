import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark-gray text-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Container */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About the Election</h3>
            <p className="text-sm">
              Our annual student council election empowers students to choose their leaders. Your vote matters!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-dark-brown hover:text-gray-200 transition duration-300">Home</Link>
              </li>
              <li>
                <Link to="/candidates" className="text-dark-brown hover:text-gray-200 transition duration-300">Candidates</Link>
              </li>
              <li>
                <Link to="/vote" className="text-dark-brown hover:text-gray-200 transition duration-300">Vote now</Link>
              </li>

            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <p className="text-sm">Email: elections@school.edu</p>
            <p className="text-sm">Phone: +1 234 567 890</p>
            <p className="text-sm">Address: 123 School Lane, Cityville</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center border-t border-gray-500 mt-8 pt-4">
          <p className="text-xs text-gray-400">&copy; 2025 School Election. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;