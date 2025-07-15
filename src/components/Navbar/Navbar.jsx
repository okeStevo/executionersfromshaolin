import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import Logo from "../../assets/Logo.png";
import { IoMdSearch } from "react-icons/io";
import { CgDarkMode } from "react-icons/cg";
import DarkMode from "../DarkMode";
import { data } from "autoprefixer";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 4,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 5,
    name: "Electronics",
    link: "/#",
  },
];

const Dropdownlinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white">
      {/* Upper Navbar */}
      <div className="bg-[#ffcc70] py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a
              href="#"
              className="font-bold text-black text-xl sm:text-2xl flex items-center gap-0 leading-none"
            >
              <img src={Logo} alt="Logo" className="w-20" />
              Charlyn Store
            </a>
          </div>

          {/* Search + Order */}

          <div className="flex justify-between items-center gap-2">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group hover:w-[300px] transition-all duration-300 
                rounded-full border border-white px-2 py-1 bg-white text-gray-700 focus:outline-none focus:border-1
                focus:border-primary dark:border-gray-800 dark:bg-gray-800 dark:text-white"
              />
              <button>
                <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
              </button>
            </div>

            {/* order button */}
            <button
              onClick={() => handleOrderPopup(true)}
              className="bg-secondary border-secondary hover:bg-secondary transition-all duration-200 hover:text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/*Dark Mode Switcher*/}
            <div className="flex items-center">
              <DarkMode />
            </div>
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div className="flex justify-center bg-white dark:bg-gray-900">
        <ul className="sm:flex hidden items-center gap-4">
          {
            Menu.map((data) => (
              <li key={data.id}>
                <a href={data.link}
                  className="inline-block px-4 text-black dark:text-white hover:text-[#ffcc70] duration-200">
                  {data.name}
                </a>
              </li>
            ))
          }
          {/* Simple Dropdown and links */}
          <li className="group relative cursor-pointer">
            <a 
            href="z"
            className="flex items-center gap-[2px] p-4 ">
              Trending Products
              <span>
                <FaCaretDown 
                className="transition-all duration-200 group-hover:rotate-100" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[180px] rounded-md bg-white p-2 text-black
            shadow-md">
              <ul>
                  {Dropdownlinks.map((data) => (
                    <li key={data.id}>
                      <a href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-orange-100 dark:hover:bg-gray-700 "
                      >
                        {data.name}
                      </a>
                    </li>
                  ))
                  }
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
