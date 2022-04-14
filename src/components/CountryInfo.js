import React from "react";

const CountryInfo = (props) => {
  return (
    <div className="countryInfo">
      <p className="highlight">Name: {props.name}</p>
      <p>Captial: {props.capitol}</p>
      <p>Population: {props.population}</p>
      <p>Region: {props.region}</p>
      <p>Sub-region: {props.subRegion}</p>
    </div>
  );
};

export default CountryInfo;
