import React from "react";

type TourFrameProps = {
  name: string;
  info: string;
  image: string;
  price: string;
};

function TourFrame(props: TourFrameProps) {
  return (
    <div>
      <div className="w-7/12 m-5 ">
        <img src={props.image} alt="" />
        <div className="h-24 bg-white"></div>
      </div>
    </div>
  );
}

export default TourFrame;
