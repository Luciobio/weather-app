import React from 'react';
import { Link } from 'react-router-dom';
import './Ciudad.css';

export default function Ciudad({city}) {
  if (!city) return (
    <div>
      <h2>City not found</h2>
      <h4>Click <Link className="white-link" to='/'>here</Link> to go back</h4>
    </div>
  );
  
  return (
    <div className="ciudad">
      <div className="container">
        <h2>{city.name}</h2>
        <h4>{city.weather}</h4>
        <img className="iconoClima pinkBg" src={"http://openweathermap.org/img/wn/"+city.img+"@2x.png"} width="80" height="80" alt="" />
          <div className="info">
          <div className="cardNum">
            <div className="temp">
              <div className="minMax">
                <p>Min</p>
                <p>{city.min}°</p>
              </div>
              <div className="minMax">
                  <p>Max</p>
                  <p>{city.max}°</p>
              </div>
            </div>
          </div>
            <div>Main temp.: {city.temp} ºC</div>
            <div>Wind speed: {city.wind} km/h</div>
            <div>Cloud %: {city.clouds}</div>
            <div>Lat.: {city.latitud}º</div>
            <div>Long.: {city.longitud}º</div>
          </div>
        </div>
      </div>
  );
}
