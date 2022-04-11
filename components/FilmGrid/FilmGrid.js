import React from 'react';
import FilmCard from '../FilmCard/FilmCard';
import styles from './FilmGrid.module.scss';

const FilmGrid = ({ movies }) => {
  return (
    <div className={styles.grid}>
      {movies.map(movie => (
        <div key={movie.id}>
          <FilmCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default FilmGrid;
