import React, { useState } from "react";

export function CreateCampaign({ titleData, createCampaign }) {
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
    <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
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
            <label htmlFor="lastName" className="inline-block mb-1 font-medium">
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
            <label htmlFor="email" className="inline-block mb-1 font-medium">
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
            <label htmlFor="email" className="inline-block mb-1 font-medium">
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
    </div>
  );
}

// export default CreateCampaign;
