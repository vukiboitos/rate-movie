import Card from '../ui/Card';
import MovieItem from '../Movies/MovieItem';
import classes from './AvailableMovies.module.css';
//import  { DUMMY_MEALS } from '../SortTable';
import { useState, useEffect } from 'react';


const AvailableMovies = () => {
const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
   const fetchMovies= async() => {
     
const response= await fetch (
  "https://http-login-2f5c7-default-rtdb.europe-west1.firebasedatabase.app/http.json")
     
if(!response.ok){
  throw new Error("SOmething went wrong!")
}
      const responseData=await response.json()

      const loadedMovies = [];

      for( const key in responseData){
        loadedMovies.push({
          id:key,
          name:responseData[key].name,
          description:responseData[key].description,
          price:responseData[key].price
        })
      }

      setMovies(loadedMovies);
      setIsLoading(false);
    };

    fetchMovies().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MoviesError}>
        <p>{httpError}</p>
      </section>
    );
  }


  const moviesList = movies.map((movie) => (
    <MovieItem
      key={movie.id}
      id={movie.id}
      name={movie.name}
      description={movie.description}
      price={movie.price}
    />
  ));

  return (
    <section className={classes.movies}>
      <Card>
        <ul >{moviesList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMovies;