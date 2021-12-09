import React, { useState } from "react";

import "./styles.css";

export default function App() {
  const placesDB = {
    Delhi: [
      { name: "Humayun's Tomb", type: "Historical Place", rating: "4.5/5" },
      { name: "The Big Chill", type: "Restaurant", rating: "4.8/5" },
      { name: "Qutub Minar", type: "Historical Place", rating: "4/5" },
      { name: "Karim's", type: "Restaurant", rating: "4/5" }
    ],
    Hyderabad: [
      { name: "Charminar", type: "Historical Place", rating: "4/5" },
      { name: "Golconda Fort", type: "Historical Place", rating: "5/5" },
      { name: "Chutney's", type: "Restaurant", rating: "4.2/5" },
      { name: "Vac's Pastries", type: "Restaurant", rating: "5/5" }
    ],
    Jaipur: [
      { name: "Cafe Bae", type: "Restaurant", rating: "4.5/5" },
      { name: "Nib's Cafe", type: "Restaurant", rating: "5/5" },
      { name: "Nahargarh Fort", type: "Historical Place", rating: "4.5/5" },
      { name: "Amer Fort", type: "Historical Place", rating: "4/5" }
    ],
    Bangalore: [
      { name: "Wonderla", type: "Amusement Park", rating: "4.5/5" },
      {
        name: "Bannerghatta National Park",
        type: "National Park",
        rating: "3.8/5"
      },
      { name: "Truffles Koramangala", type: "Restaurant", rating: "4/5" },
      { name: "Mavalli Tiffin Room", type: "Restaurant", rating: "4.5/5" }
    ],
    Singapore: [
      { name: "Universal Studios", type: "Amusement Park", rating: "5/5" },
      { name: "Gardens by the Bay", type: "Garden", rating: "4/5" },
      { name: "Sentosa Island", type: "Amusement Island", rating: "4.5/5" },
      { name: "Superhero's Cafe", type: "Restaurant", rating: "4/5" }
    ]
  };

  const [selectedPlace, setPlace] = useState("Delhi");

  function onClickHandler(place) {
    setPlace(place);
  }

  return (
    <div className="App">
      <h1>✈️ Travel Guide ✈️</h1>

      <p>
        {" "}
        This is your guide to some must see tourist spots in some popular
        destinations!{" "}
      </p>
      <h3>Select a place: {selectedPlace}</h3>

      <div>
        {Object.keys(placesDB).map((place) => (
          <button onClick={() => onClickHandler(place)}>{place}</button>
        ))}
      </div>
      <hr />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {placesDB[selectedPlace].map((rec) => (
            <li key={rec.name}>
              {" "}
              <div style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
                {" "}
                {rec.name}{" "}
              </div>
              <div style={{ fontSize: "1.1rem" }}> {rec.type} </div>
              <div style={{ fontSize: "1.1rem" }}> {rec.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
