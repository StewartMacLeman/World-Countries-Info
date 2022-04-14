import React from "react";

const CountryFlag = (props) => {
  return (
    <div className="countryFlag">
      <img src={props.flag} alt={`The flag of country ${props.name}.`} />
    </div>
  );
};

export default CountryFlag;
