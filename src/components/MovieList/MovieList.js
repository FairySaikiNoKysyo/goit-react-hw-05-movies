import { Link, useLocation } from "react-router-dom"
import { ListItem, MovieName, ImageTemplate, MovieImg } from "./MovieList.styled";

export const MovieList = ({movies}) => {
    const imgUrl = 'https://image.tmdb.org/t/p/w500/';
    const location = useLocation();
    return (
        
        <ul>
            {movies.map(movie => (                
                <ListItem key={movie.id}>
                    <Link to={`/movies/${movie.id}`} state={{ from: location}}>
                    {movie.poster_path ?  <MovieImg src={imgUrl.concat(movie.poster_path)}/> : <ImageTemplate/>}
                       <MovieName>{movie.title ?? movie.original_name}</MovieName> 
                    </Link>
                </ListItem>
            ))}
        </ul>
    );
};