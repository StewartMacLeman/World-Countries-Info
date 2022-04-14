import React from 'react';

const Header = (props) => {
    return (
        <header>
            <h1>Countries of the World!</h1>
            <h2>Below is a list of {props.countriesNum} Countries!</h2>
        </header>
    )
}

export default Header;