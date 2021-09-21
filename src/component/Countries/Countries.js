import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>New page loading : {countries.length}</h1>
            <div className="countries-container">
                {
                    countries.map(country => <Country
                        country={country}
                        key={country.alpha3Code}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;