import { SchoolIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <section className="h-[10vh] w-full flex justify-center items-center">
      <nav className="w-3/4 bg-gray-900 flex justify-between items-center mx-auto text-white text-lg border border-gray-800 rounded nav">
        <div className="1/2 flex gap-4">
          <SchoolIcon />
          <button className="text-sm bg-amber-200 text-black rounded">
            Toggle Mode
          </button>
        </div>
        <ul className="flex w-1/4 justify-end items-center">
          <li className="text-gray-400 hover:text-gray-300 uppercase">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="text-gray-400 hover:text-gray-300 uppercase">
            <NavLink to="/lesson-planner">Lesson Planner</NavLink>
          </li>
        </ul>
        <div className=" flex items-center gap-5">
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
        </div>
      </nav>
    </section>
  );
}
