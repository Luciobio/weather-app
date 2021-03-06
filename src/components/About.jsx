import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

export default function About() {
  return(
    <div className="about">
      <div className="aboutCont">
      <h2>About</h2>
      <p>Wheather app is a web app developed during the Henry coding bootcamp in order to 
        learn React with routing.</p>
        <p>Weather info is requested from OpenWeather API 
        (<a href="https://openweathermap.org/api">https://openweathermap.org/api</a>).</p>
      </div>
      <div>
        <Link className="goBackBtn white-link" to='/'>Go back</Link>
      </div>
    </div>
  );
}
