import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  // Prevent background scrolling when popup is open
  React.useEffect(() => {
    document.body.style.overflow = orderPopup ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [orderPopup]);

  if (!orderPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
      {/* Modal content */}
      <div className="bg-white dark:bg-gray-900 dark:text-white rounded-lg p-6 w-80 relative shadow-lg">
        {/* Close Icon */}
        <button
          onClick={() => setOrderPopup(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-black dark:text-gray-300 dark:hover:text-white"
        >
          <IoCloseCircleOutline size={24} />
        </button>

        {/* Title */}
        <h2 className="text-lg font-bold mb-4">Order Now</h2>

        {/* Form */}
        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Name"
            className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-orange-400 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-orange-400 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
          <input
            type="text"
            placeholder="Address"
            className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-orange-400 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
          <button
            type="submit"
            className="mt-2 bg-[#f97316] hover:scale-105 durstion-200 hover:opacity-90 text-white font-medium py-2 rounded"
          >
            Order Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
