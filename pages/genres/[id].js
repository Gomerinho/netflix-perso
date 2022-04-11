import { useRouter } from 'next/router';
import { React, useState, useEffect } from 'react';
import { getAllGenres, getMoviesByGenre } from '../../service/request';
import FilmGrid from '../../components/FilmGrid/FilmGrid';
import styles from './Genre.module.scss';

const Genres = () => {
  const router = useRouter();

  const { id } = router.query;

  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState('');

  useEffect(() => {
    getMoviesByGenre(id).then(data => setMovies(data));
    getAllGenres().then(data => setGenre(data.find(genre => genre.id == id)));
  }, [id]);

  return (
    <div>
      <h3 className={styles.title}>{genre && genre.name}</h3>
      <FilmGrid movies={movies} />
    </div>
  );
};

export default Genres;
