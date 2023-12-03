import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { MovieList } from 'components/MovieList/MovieList';
import { Page, PageTitle } from "./Home.styled";

import { fetchTrendingMovies } from 'Api/api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getTrendingMovies() {
      try {
        const { results } = await fetchTrendingMovies();
        setMovies(results);
      } catch (error) {
        toast.error(`Error while We fetching movies.`);
      }
    }
    getTrendingMovies();
  }, []);

  return (
    <Page>
      <PageTitle>Trending Movies </PageTitle>
      <MovieList movies={movies} />
    </Page>
  );
};
export default Home;