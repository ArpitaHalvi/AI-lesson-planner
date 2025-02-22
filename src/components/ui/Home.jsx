import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full bg-black h-[90vh] flex flex-col justify-center items-center gap-3">
      <h1 className="w-1/2 text-white text-6xl font-bold text-center">
        <span className="head-tag">AI-Powered</span> Lesson Planning for Smarter
        More Efficient Teaching!
      </h1>
      <p className="text-white text-base w-1/4 text-center">
        Create and optimize lesson plans effortlessly with AI, saving time and
        enhancing learning experience.
      </p>
      <NavLink
        to="/lesson-planner"
        className="bg-white px-3 py-2 rounded-full text-lg hover:bg-gray-200 text-black login"
      >
        Get Started
      </NavLink>
    </div>
  );
}
