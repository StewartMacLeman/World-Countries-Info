import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => getCountriesApi(), []);

  function getCountriesApi() {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
        if (!res.ok) {
          throw Error("error");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        let countriesAPI = data.map((country) => {
          let countryObject = {
            name: country.name.common,
            capital: country.capital,
            population: country.population,
            region: country.region,
            subRegion: country.subregion,
            flag: country.flags.png,
          };
          return countryObject;
        });
        let sortedCountriesAPI = countriesAPI.sort((a, b) => {
          let nameA = a.name;
          let nameB = b.name;

          if (nameA > nameB) {
            return 1;
          }
          if (nameA < nameB) {
            return -1;
          }
          if (nameA === nameB) {
            return 0;
          }
        });
        setCountries(sortedCountriesAPI);
        console.log(`A country object example:`, sortedCountriesAPI[0]);
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      <Header countriesNum={countries.length} />
      <Main countriesArray={countries} />
    </>
  );
};

export default App;
