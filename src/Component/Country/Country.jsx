import React from "react";
import "./Country.css";

const Country = ({ country }) => {
  // console.log(country);
  const handleVisited = () => {
    console.log("button clicked");
  };

  return (
    <div className="country">
      <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common}</h3>
      <p>Population: {country.population.population}</p>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 200000 ? "Big Country" : "Small Country"}
      </p>
      <button onClick={handleVisited} className="btn">
        Not Visited
      </button>
    </div>
  );
};

export default Country;
