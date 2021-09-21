
import './App.css';
import Countries from './component/Countries/Countries';



function App() {
  return (
    <div className="App">
      <Countries></Countries>

    </div>
  );
}




export default App;

/*
 countries api:  <Countries></Countries>
 import logo from './logo.svg';
 import { useEffect, useState } from 'react';

function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])

  return (
    <div>
      <h1>Trivaling another countres</h1>
      <h4>count:{countries.length}</h4>
      {
        countries.map(country => <Country name={country.name} capital={country.capital}></Country>)
      }
    </div>
  )
}
function Country(props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <p>Capital: {props.capital}</p>
    </div>
  )
}



 */