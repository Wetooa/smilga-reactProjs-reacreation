import React from "react";
const CatImage = require("../images/cat.jpg");

type PageFramesProps = {
  pageName: string;
};

function PageFrames(props: PageFramesProps) {
  return (
    <div className="group relative w-52 h-48 overflow-hidden shadow-lg hover:opacity-75 transition-all duration-500 hover:shadow-2xl  cursor-pointer rounded-md">
      <img
        src={CatImage}
        alt="cat"
        className="w-full h-auto object-cover group-hover:scale-110 transition-all duration-600 scale-101"
      />
      <div className="p-2 absolute bottom-0 bg-white shadow-lg text-black w-full font-medium">
        {props.pageName}
      </div>
    </div>
  );
}

export default PageFrames;
