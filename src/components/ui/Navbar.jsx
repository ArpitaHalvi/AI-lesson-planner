import { SchoolIcon } from "lucide-react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const loggedIn = useSelector((state) => state.auth.isAuthenticated);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="h-[10vh] w-full flex justify-center items-center">
      <nav
        className={`w-[95%] sm:w-3/4 bg-gray-900 flex justify-between items-center mx-auto text-white text-lg border border-gray-800 rounded nav transition-all duration-1000 ${
          isOpen && "relative"
        }`}
      >
        <div className="w-1/2 flex gap-4">
          <SchoolIcon />
          <button className="text-sm bg-amber-200 text-black rounded">
            Toggle Mode
          </button>
        </div>
        <div
          className={`w-3/4 transition-all duration-1000${
            isOpen
              ? "absolute top-4 flex-col left-0 h-[20vh] items-center bg-gray-500 w-[100%] p-5"
              : "hidden sm:flex gap-5"
          }`}
        >
          <ul className="flex flex-col sm:flex-row gap-3 items-center">
            <li className="text-gray-400 hover:text-gray-300 uppercase">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-gray-400 hover:text-gray-300 uppercase">
              <NavLink to="/lesson-planner">Lesson Planner</NavLink>
            </li>
          </ul>
          <div className={`flex justify-center items-center gap-5`}>
            {!loggedIn ? (
              <>
                <NavLink
                  to="/signup"
                  className="px-3 py-2 bg-white rounded-full text-lg text-black login hover:bg-gray-300"
                >
                  Sign Up
                </NavLink>
                <NavLink
                  to="/login"
                  className="px-3 py-2 bg-white rounded-full text-lg text-black login hover:bg-gray-300"
                >
                  Login
                </NavLink>
              </>
            ) : (
              <NavLink
                to="/logout"
                className="px-3 py-2 bg-white rounded-full text-lg text-black login hover:bg-gray-300"
              >
                Logout
              </NavLink>
            )}
          </div>
        </div>
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
          {isOpen ? (
            <FaTimes className="text-3xl" />
          ) : (
            <FaBars className="text-3xl" />
          )}
        </div>
      </nav>
    </section>
  );
}
