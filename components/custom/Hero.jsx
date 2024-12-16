import React, { useState } from "react";
import { CreateCampaign } from "./CreateCampaign";
const Hero = ({ titleData, createCampaign }) => {
  const [campaign, setCampaign] = useState({
    title: "",
    description: "",
    amount: "",
    deadline: "",
  });

  const createNewCampaign = async (e) => {
    e.preventDefault();
    try {
      const data = await createCampaign(campaign);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="overflow-hidden">
        <div className="flex flex-col items-center justify-between xl:flex-row">
          <div className="w-full mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-5xl sm:leading-none">
              FundItUp <br className="hidden md:block" />
              Crowdfunding
            </h2>
            <p className="max-w-xl mb-4 text-base text-primary/80 md:text-lg">
              Make ideas into reality. It’s where creators share new visions for
              creative work with the communities that will come together to fund
              them
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700  text-gray-700"
            >
              Learn more
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
          {/* <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
            <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
              <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                Campaign
              </h3>
              <form>
                <div className="mb-1 sm:mb-2">
                  <label
                    htmlFor="firstName"
                    className="inline-block mb-1 font-medium"
                  >
                    Title
                  </label>
                  <input
                    onChange={(e) =>
                      setCampaign({
                        ...campaign,
                        title: e.target.value,
                      })
                    }
                    placeholder="title"
                    required
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="firstName"
                    name="firstName"
                  />
                </div>
                <div className="mb-1 sm:mb-2">
                  <label
                    htmlFor="lastName"
                    className="inline-block mb-1 font-medium"
                  >
                    Description
                  </label>
                  <input
                    onChange={(e) =>
                      setCampaign({
                        ...campaign,
                        description: e.target.value,
                      })
                    }
                    placeholder="description"
                    required
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="lastName"
                    name="lastName"
                  />
                </div>
                <div className="mb-1 sm:mb-2">
                  <label
                    htmlFor="email"
                    className="inline-block mb-1 font-medium"
                  >
                    Target Amount
                  </label>
                  <input
                    onChange={(e) =>
                      setCampaign({
                        ...campaign,
                        amount: e.target.value,
                      })
                    }
                    placeholder="amount"
                    required
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="mb-1 sm:mb-2">
                  <label
                    htmlFor="email"
                    className="inline-block mb-1 font-medium"
                  >
                    Deadline
                  </label>
                  <input
                    onChange={(e) =>
                      setCampaign({
                        ...campaign,
                        deadline: e.target.value,
                      })
                    }
                    placeholder="Date"
                    required
                    type="date"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="mt-4 mb-2 sm:mb-4">
                  <button
                    onClick={(e) => createNewCampaign(e)}
                    type="submit"
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none newColor"
                  >
                    Create Campaign
                  </button>
                </div>
                <p className="text-xs text-gray-600 sm:text-sm">
                  Create you Campaign for raise funds
                </p>
              </form>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
