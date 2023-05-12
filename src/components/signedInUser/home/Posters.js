import React from "react";
import "../css/posters.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Posters({ posterTitle, posterType }) {
  const [movies, setMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  function scrollLeft(e) {
    document.getElementById(posterType).scrollLeft += 1000;
  }

  function scrollRight(e) {
    document.getElementById(posterType).scrollLeft -= 1000;
  }

  useEffect(() => {
    function getRecommendations(e) {
      const title = e.target.name;
      const response = axios.get(
        "http://localhost:5000/movies/get-recommendations/?id=1"
      );
      setRecommendedMovies([...recommendedMovies, response.data]);
    }
  }, []);

  useEffect(() => {
    async function getMovies() {
      let url;
      if (posterType != "get-recommendations")
        url = "http://localhost:5000/movies/" + posterType;
      else url = "http://localhost:5000/movies/get-recommendations/?id=1";
      const response = await axios.get(url);
      setMovies([...movies, response.data]);
      return response;
    }
    getMovies();
  }, [posterType]);

  const baseImageUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <div>
      <div className="mx-4" style={{ position: "relative" }}>
        <h4>{posterTitle}</h4>
      </div>
      <button className="scroll-left" onClick={scrollRight}>
        {"<"}
      </button>
      <button className="scroll-right" onClick={scrollLeft}>
        {">"}
      </button>
      <div className="posters" id={posterType}>
        {movies.map((movie) =>
          Object.keys(movie).map((id) => {
            return (
              <img
                className="poster-img"
                key={id}
                src={baseImageUrl + movie[id][1]}
                name={movie[id][0]}
                alt="img"
              />
            );
          })
        )}
      </div>
    </div>
  );
}
