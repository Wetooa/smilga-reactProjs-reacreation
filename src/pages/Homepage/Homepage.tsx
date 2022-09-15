import React from "react";
import PageFrames from "./components/PageFrames";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const pages = [
    {
      pageName: "Birthday Reminder",
      path: "/birthday-reminder",
    },
    {
      pageName: "Tours",
      path: "/tours",
    },
    {
      pageName: "Reviews",
      path: "/reviews",
    },
    {
      pageName: "Accordion",
      path: "/accordion",
    },
    {
      pageName: "Menu",
      path: "/menu",
    },
    {
      pageName: "Tabs",
      path: "/tabs",
    },
  ];
  let navigate = useNavigate();

  return (
    <>
      <div className="scroll-smooth transition-all duration-500">
        <div className="flex align-middle text-center items-center bg-gray-900 text-blue-400 text-3xl font-bold h-48 justify-center">
          <p>React Projects</p>
        </div>
        <div className="flex items-center justify-center mt-10 flex-col">
          <a href="#sec" className="bg-sky-300 p-2 rounded-lg">
            Start Course
          </a>
          <h2 className="underline underline-offset-2 font-bold text-3xl mt-6 p-1">
            Basic Projects
          </h2>
          <div
            id="sec"
            className="flex items-center text-center justify-center mt-8 w-8/12 gap-5 flex-wrap"
          >
            {pages.map((page, index) => {
              return (
                <div onClick={() => navigate(`${page.path}`)}>
                  <PageFrames key={index} {...page} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
