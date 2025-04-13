import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { FiMenu, FiX, FiUser, FiLogOut } from "react-icons/fi";

export const Navbar = () => {
  const { user, signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    await signOut();
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-indigo-600">
              HomeServicePro
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-indigo-600 px-3 py-2"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-indigo-600 px-3 py-2"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-indigo-600 px-3 py-2"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-indigo-600 px-3 py-2"
            >
              Contact
            </Link>

            {user ? (
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-indigo-600">
                  <FiUser className="mr-1" /> Account
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-gray-700 hover:bg-indigo-50"
                  >
                    Dashboard
                  </Link>
                  {user.user_metadata?.is_admin && (
                    <Link
                      to="/admin"
                      className="block px-4 py-2 text-gray-700 hover:bg-indigo-50"
                    >
                      Admin
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-indigo-50 flex items-center"
                  >
                    <FiLogOut className="mr-2" /> Logout
                  </button>
                </div>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white pb-3 px-4">
          <Link
            to="/"
            className="block text-gray-700 hover:text-indigo-600 py-2"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-gray-700 hover:text-indigo-600 py-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/services"
            className="block text-gray-700 hover:text-indigo-600 py-2"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="block text-gray-700 hover:text-indigo-600 py-2"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          {user ? (
            <>
              <Link
                to="/dashboard"
                className="block text-gray-700 hover:text-indigo-600 py-2"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
              {user.user_metadata?.is_admin && (
                <Link
                  to="/admin"
                  className="block text-gray-700 hover:text-indigo-600 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Admin
                </Link>
              )}
              <button
                onClick={handleLogout}
                className="block text-gray-700 hover:text-indigo-600 py-2 w-full text-left flex items-center"
              >
                <FiLogOut className="mr-2" /> Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="block text-gray-700 hover:text-indigo-600 py-2"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 mt-2"
                onClick={() => setIsOpen(false)}
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};
