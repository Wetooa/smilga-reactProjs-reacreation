import React from "react";
import PageFrames from "./components/PageFrames";
import BirthdayReminder from "./pages/Birthday Reminder/BirthdayReminder";
import Tours from "./pages/Tours/Tours";

const pages = [
  {
    pageName: "Birthday Reminder",
  },
  {
    pageName: "Tours",
  },
  {
    pageName: "Reviews",
  },
  {
    pageName: "Accordion",
  },
  {
    pageName: "Menu",
  },
  {
    pageName: "Tabs",
  },
];

function App() {
  return (
    <div className="scroll-smooth transition-all duration-500">
      <div className="flex align-middle text-center items-center bg-gray-900 text-blue-400 text-3xl font-bold h-48 justify-center">
        <p>React Projects</p>
      </div>
      <div className="flex items-center justify-center mt-10 flex-col">
        <a href="#sec" className="bg-sky-300 p-2 rounded-lg">
          Start Course
        </a>
        <h2 className="underline underline-offset-2 font-bold text-3xl mt-6 bg-sky-200 p-1">
          Basic Projects
        </h2>
        <div
          id="sec"
          className="flex items-center text-center justify-center mt-8 w-8/12 gap-5 flex-wrap"
        >
          {pages.map((page) => {
            return <PageFrames key={page.pageName} {...page} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
