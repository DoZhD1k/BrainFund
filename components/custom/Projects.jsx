import { useState } from "react";
import Link from "next/link";
import { FaEthereum } from "react-icons/fa";

const Projects = ({ category }) => {
  const [end, setEnd] = useState(4);
  const [count] = useState(4);

  return (
    <div className="flex flex-col px-6 mb-7">
      <div className="flex justify-center items-center flex-wrap">
        {Array(6)
          .fill()
          .map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              category={category}
            />
          ))}
      </div>

      <div className="flex justify-center items-center my-5">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-indigo-500
          text-white font-medium text-xs leading-tight uppercase
          rounded-full shadow-md hover:bg-indigo-700"
          onClick={() => setEnd(end + count)}
        >
          Load more
        </button>
      </div>
    </div>
  );
};

const ProjectCard = ({ id, category }) => {
  return (
    <div id="projects" className="rounded-lg shadow-lg bg-white w-64 m-4">
      <Link href={`/category/${category}/project/${project.id}`}>
        <img
          src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
          alt="title"
          className="rounded-xl h-64 w-full object-cover"
        />

        <div className="p-4">
          <h5>{project.title}</h5>

          <div className="flex flex-col">
            <div className="flex justify-start space-x-2 items-center mb-3">
              <div className="rounded-full shadow-md p-2 bg-red-400"></div>
              <small className="text-gray-700">Owner</small>
            </div>

            <small className="text-gray-500">2 days left</small>
          </div>

          <div className="w-full bg-gray-300 overflow-hidden">
            <div
              className="bg-indigo-500 text-xs font-medium
              text-indigo-100 text-center p-0.5 leading-none
              rounded-l-full h-1"
              style={{ width: "50%" }}
            ></div>
          </div>

          <div
            className="flex justify-between items-center 
            font-bold mt-1 mb-2 text-gray-700"
          >
            <small>ETH Raised</small>
            <small className="flex justify-start items-center">
              <FaEthereum />
              <span>ETH</span>
            </small>
          </div>

          <div
            className="flex justify-between items-center flex-wrap
              mt-4 mb-2 text-gray-500 font-bold"
          >
            <small>{14} Backers</small>
            <div>
              {/* <small className="text-red-500">Expired</small> */}
              <small className="text-gray-500">Open</small>
              {/* <small className="text-indigo-500">Accepted</small> */}
              {/* <small className="text-gray-500">Reverted</small> */}
              {/* <small className="text-red-500">Deleted</small> */}
              {/* <small className="text-orange-500">Paid</small> */}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Projects;
