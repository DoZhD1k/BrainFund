import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { CustomTrigger } from "../custom-trigger";
// INTERNAL IMPORT
import { CrowdFundingContext } from "@/context/CroudFunding";
import { Logo, Menu } from "@/components/custom/index";
import { ModeToggle } from "../mode-toggle";
const NavBar = () => {
  const { currentAccount, connectWallet } = useContext(CrowdFundingContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  // const menuList = [
  //   { name: "Categories", path: "/category" },
  //   { name: "Project", path: "/project" },
  //   { name: "Donate", path: "/donate" },
  //   { name: "About", path: "/about" },
  // ];

  return (
    <div className="flex px-4 py-2 items-start justify-between ">
      <CustomTrigger className="" />
      <div className="flex justify-between space-x-6">
        <div className="flex items-center">
          <ul className="md:flex items-center hidden space-x-8 lg:flex">
            {/* {menuList.map((el, i) => (
              <li key={i + 1}>
                <a
                  onClick={() => router.push(el.path)}
                  aria-label={el.name}
                  title={el.name}
                  className="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400 cursor-pointer"
                >
                  {el.name}
                </a>
              </li>
            ))} */}
            <ModeToggle />
          </ul>
        </div>
        {!currentAccount && (
          <ul className="md:flex items-center hidden space-x-8 lg:flex">
            <li>
              <button
                onClick={() => connectWallet()}
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-500 hover:bg-indigo-700 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Connect Wallet
              </button>
            </li>
          </ul>
        )}

        <div className="lg:hidden z-40">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <a
                      onClick={() => router.push("/")}
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center cursor-pointer"
                    >
                      <Logo color="text-black" />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        FundItUp
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li></li>
                    <li>
                      <button
                        onClick={() => connectWallet()}
                        className="inline-flex items-center  justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-500 hover:bg-indigo-700 focus:shadow-outline focus:outline-none"
                        aria-label="Sign up"
                        title="Sign up"
                      >
                        Connect Wallet
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
