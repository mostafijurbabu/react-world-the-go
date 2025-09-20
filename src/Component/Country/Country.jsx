import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
  const [visited, setVisited] = useState(false);
  // console.log(country);
  // console.log(handleVisitedCountries);
  const handleVisited = () => {
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }

    // or
    // setVisited(visited ? false : true);

    // or
    setVisited(!visited);
    handleVisitedCountries(country);
  };

  return (
    // <div className={`country border-lg text-center ${visited ? 'country-visited' : 'country-not-visited' }`}>

    <div className={`country ${visited && "country-visited"}`}>
      <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common}</h3>
      <p>Population: {country.population.population}</p>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 200000 ? "Big Country" : "Small Country"}
      </p>
      <button onClick={handleVisited} className="btn">
        {visited ? "Visited" : "Not Visited"}
      </button>
      <button
        onClick={() => {
          handleVisitedFlag(country?.flags?.flags?.png);
        }}
        className="btn"
      >
        Add Visited Flag
      </button>
    </div>
  );
};

export default Country;
