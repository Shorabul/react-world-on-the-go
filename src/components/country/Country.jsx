import React from 'react';
import './Country.css'

const Countries = ({ country }) => {
    const handleVisited = () => {
        console.log('button clicked');
    }
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt}></img>
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? 'Big Country' : "Small Country"}</p>
            <button onClick={handleVisited}>Not Visited</button>
        </div>
    );
}

export default Countries;

/**
 * 1. inline css (style object)
 * 2. 
 * 
*/