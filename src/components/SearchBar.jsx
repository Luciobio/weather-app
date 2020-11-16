import React, { useState } from "react";
import './SearchBar.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input
        className="searchInput"
        type="text"
        placeholder="City name"
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input className="submitBtn white-link" type="submit" value="Add"/>
    </form>
  );
}
