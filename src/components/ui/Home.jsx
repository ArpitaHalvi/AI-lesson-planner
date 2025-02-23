import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Home() {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div className="w-full bg-black h-[90vh] flex flex-col justify-center items-center gap-3">
      <h1 className="w-3/4 lg:w-1/2 text-white text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center">
        <span className="head-tag">AI-Powered</span> Lesson Planning for Smarter
        More Efficient Teaching!
      </h1>
      <p className="text-white text-base w-[60%] md:w-1/2 lg:w-1/4 text-center">
        Create and optimize lesson plans effortlessly with AI, saving time and
        enhancing learning experience.
      </p>
      <NavLink
        to={isLoggedIn ? "/lesson-planner" : "/login"}
        className="bg-white px-3 py-2 rounded-full text-lg hover:bg-gray-200 text-black login"
      >
        Get Started
      </NavLink>
    </div>
  );
}
