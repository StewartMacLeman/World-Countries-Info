import React from "react";
import CountryInfo from "./CountryInfo";
import CountryFlag from "./CountryFlag";

const CountryContainer = (props) => {
  return (
    <div className="countryContainer">
      <CountryInfo
        name={props.name}
        capital={props.capital}
        population={props.population}
        region={props.region}
        subRegion={props.subRegion}
      />
      <CountryFlag flag={props.flag} name={props.name} />
    </div>
  );
};

export default CountryContainer;
