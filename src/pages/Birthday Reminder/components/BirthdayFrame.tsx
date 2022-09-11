import React from "react";

type BirthdayFrameProps = {
  name: string;
  age: number;
  image: string;
};

function BirthdayFrame(props: BirthdayFrameProps) {
  return (
    <body>
      <div className="flex">
        <img
          className="w-24 h-24 rounded-full  object-cover"
          src={props.image}
          alt={props.name}
        />
        <div className="ml-4 items-start justify-center flex flex-col">
          <p className="font-bold">{props.name}</p>
          <p>{props.age} years</p>
        </div>
      </div>
    </body>
  );
}

export default BirthdayFrame;
