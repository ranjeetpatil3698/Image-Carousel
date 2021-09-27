import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import { getData } from "./Api";
import Loading from "./components/Loader";
import Error from "./components/Error";

function App() {
  const [movies, setMovies] = useState(null);
  const [movErr, setMovErr] = useState(null);

  const fetchData = async () => {
    const result = await getData();

    if (result.data.results) {
      //console.log(result.data.results);
      setMovies(result.data.results);
    }

    if (result.status && result.status != 200) {
      await console.log(result);
      setMovErr("Some Error Occurred");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!movies && !movErr) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (movErr !== null) {
    return (
      <div>
        <Error />
        <div className="retry" onClick={() => fetchData()}>
        Try Again
      </div>
      </div>
    );
  }

  return (
    <div className="box">
      <div className="title">Movie List</div>
      
      <div className="card_container">
        {movies.map((movie) => (
          <Card
            key={movie.id}
            id={movie.id}
            title={movie.title}
            rating={movie.vote_average}
            adult={movie.adult}
            image={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
