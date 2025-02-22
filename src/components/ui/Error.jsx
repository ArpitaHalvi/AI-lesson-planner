/* eslint-disable react/prop-types */
import { FaTimes } from "react-icons/fa";
export default function Error({ msg, isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="w-full h-[5vh] text-red-800 bg-red-300 fixed top-0 error-div flex justify-center items-center text-lg">
      <p>{msg}</p>
      <button onClick={onClose} className="absolute right-0">
        <FaTimes />
      </button>
    </div>
  );
}
