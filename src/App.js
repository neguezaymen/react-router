import React, { useState } from "react";
import "./App.css";
import MovieList from "./MovieList";
import Description from "./Description";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "The Matrix",
      rate: 5,
      synopsis:
        "Programmeur anonyme dans un service administratif le jour, Thomas Anderson devient Neo la nuit venue. Sous ce pseudonyme, il...",
      posterurl:
        "https://images-na.ssl-images-amazon.com/images/I/51oBxmV-dML._AC_.jpg",
      trailerlink: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/m8e-FF8MsqU"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
      description: "Action Movie",
      id: uuidv4(),
    },
    {
      title: "Jhon Wick",
      rate: 3,
      synopsis:
        "Depuis la mort de sa femme bien-aimée, John Wick passe ses journées à retaper sa Ford Mustang de 1969, avec pour ...",
      posterurl:
        "https://images-na.ssl-images-amazon.com/images/I/81F5PF9oHhL._AC_SL1500_.jpg",
      trailerlink: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/2AUmvWm5ZDQ"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
      description: "Action Movie",
      id: uuidv4(),
    },
    {
      title: "Inception",
      rate: 2,
      synopsis:
        "Dom Cobb est un voleur expérimenté dans l'art périlleux de `l'extraction' : sa spécialité consiste à s'approprier les ...",
      posterurl:
        "https://images-na.ssl-images-amazon.com/images/I/71uKM%2BLdgFL._AC_SY879_.jpg",
      trailerlink: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YoHD9XEInc0"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
      description: "Action Movie",
      id: uuidv4(),
    },
  ]);
  return (
    <div className="App">
      <Router>
        <MovieList movies={movies} />
        <Route
          path="/movie/:id"
          render={(props) => <Description {...props} movies={movies} />}
        />
      </Router>
    </div>
  );
}

export default App;
