import React from 'react';
import CountryInfo from './CountryInfo';
import CountryFlag from './CountryFlag';

const CountryContainer = () => {
    return (
        <div className="countryContainer">
        <CountryInfo />
        <CountryFlag />
        </div>
    )
}

export default CountryContainer;