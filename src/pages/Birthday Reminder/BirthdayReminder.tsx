import React from "react";
import { useState } from "react";
import data from "./data";
import BirthdayFrame from "./components/BirthdayFrame";

function BirthdayReminder() {
  const [people, setPeople] = useState(data);
  return (
    <body className="w-screen h-screen bg-pink-300">
      <div className=" flex justify-center ">
        <div className="bg-white w-6/12 shadow-xl flex flex-col items-start m-10 rounded-lg">
          <p className="text-xl font-bold m-4">
            {people.length} birthdays today
          </p>
          <div className="flex flex-wrap flex-col gap-4">
            {people.map((item) => {
              return (
                <div className="m-2 ml-6">
                  <BirthdayFrame {...item} />
                </div>
              );
            })}
          </div>
          <button
            onClick={() => setPeople([])}
            className="bg-pink-500 w-11/12 self-center m-4 p-2 rounded-md text-white font-medium text-2xl capitalize"
          >
            clear all
          </button>
        </div>
      </div>
    </body>
  );
}

export default BirthdayReminder;
