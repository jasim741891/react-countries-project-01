import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, capital, population, flag } = props.country;
    return (
        <div className="country">
            <h4>This is : {name}</h4>
            <p>Capital : {capital} population : {population}</p>
            <img src={flag} alt="" />
        </div>
    );
};

export default Country;