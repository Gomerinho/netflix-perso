/* eslint-disable @next/next/no-img-element */
import { React, useEffect, useState, useContext } from 'react';
import { ModalFilmContext } from '../../context/modalFilmContext';
import {
  getBackdropImage,
  getGenresByMovieId,
  getMoviesById,
} from '../../service/request';
import styles from './FilmCard.module.scss';
import ModalFilm from './ModalFilm/ModalFilm';

const FilmCard = ({ movie }) => {
  const [backdropImage, setBackdropImage] = useState();
  const [genres, setGenres] = useState([]);
  const [realMovie, setRealMovie] = useState(movie);

  const modalFilmConetext = useContext(ModalFilmContext);
  useEffect(() => {
    getMoviesById(movie.id).then(data => setRealMovie(data));
    getGenresByMovieId(movie.id).then(data => setGenres(data));
    getBackdropImage(movie.id)
      .then(data => {
        setBackdropImage(data);
      })
      .catch(err => {
        setBackdropImage(movie.poster_path);
      });
  }, [movie]);
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card__container}>
          {/* <div
          className={styles.card__image}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
            backgroundSize: 'fill',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div> */}
          <img
            src={`https://image.tmdb.org/t/p/original/${backdropImage}?image_language=en&language=en-US`}
            alt={realMovie.title}
            className={styles.card__image}
            loading='lazy'
          />
          <div className={styles.card__footer}>
            <div className={styles.buttons__container}>
              <button className={`${styles.icon__button} button`}>
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
                  <path
                    d='M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z'
                    fill='currentColor'
                  ></path>
                </svg>
              </button>
              <button className={styles.icon__button}>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  className='Hawkins-Icon Hawkins-Icon-Standard'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z'
                    fill='currentColor'
                  ></path>
                </svg>
              </button>
              <button
                className={`${styles.icon__button} button`}
                onClick={() => {
                  modalFilmConetext.setOpen(true);
                  modalFilmConetext.setMovie(realMovie);
                }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  version='1.1'
                  id='Capa_1'
                  x='0px'
                  y='0px'
                  width='960px'
                  height='560px'
                  viewBox='0 0 960 560'
                  enableBackground='new 0 0 960 560'
                  xmlSpace='preserve'
                >
                  <g id='Rounded_Rectangle_33_copy_4_1_'>
                    <path d='M480,344.181L268.869,131.889c-15.756-15.859-41.3-15.859-57.054,0c-15.754,15.857-15.754,41.57,0,57.431l237.632,238.937   c8.395,8.451,19.562,12.254,30.553,11.698c10.993,0.556,22.159-3.247,30.555-11.698l237.631-238.937   c15.756-15.86,15.756-41.571,0-57.431s-41.299-15.859-57.051,0L480,344.181z' />
                  </g>
                </svg>
              </button>
            </div>
            <div className={styles.genres}>
              {genres &&
                genres.map(genre => (
                  <>
                    <span key={genre.id} className={styles.genres__item}>
                      {genre.name}
                      <span className={styles.genres__bulle}>&bull;</span>
                    </span>
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilmCard;
