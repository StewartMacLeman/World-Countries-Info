import React from "react";

const CountryFlag = (props) => {
  return (
    <div className="countryFlag">
      <img src={props.flag} alt={`The national flag of ${props.name}.`} />
    </div>
  );
};

export default CountryFlag;
