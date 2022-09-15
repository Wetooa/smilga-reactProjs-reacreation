import React from "react";
import { useEffect, useState } from "react";
import TourFrame from "./components/TourFrame";

const url = "https://course-api.com/react-tours-project";
function Tours() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="mt-10 bg-gray-300 text-center items-center justify-center flex flex-col">
          <h1 className="text-3xl font-bold p-10">Our Tours</h1>
          {tours.map((tour: any) => {
            return (
              <div>
                <TourFrame key={tour.id} {...tour} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Tours;
