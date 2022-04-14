import React from "react";
import CountryContainer from "./CountryContainer";

const Main = (props) => {
  return (
    <main className="countriesContainer">
      {props.countriesArray.map((country, index) => {
        return (
          <CountryContainer
            key={index}
            name={country.name}
            capital={country.capital}
            population={country.population}
            region={country.region}
            subRegion={country.subRegion}
            flag={country.flag}
          />
        );
      })}
    </main>
  );
};

export default Main;
