import { Swiper, SwiperSlide } from 'swiper/react';
import { React, useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import FilmCard from '../FilmCard/FilmCard';
import {
  getMoviesByGenre,
  getNetflixMovies,
  getPopularMoviesTheMovieDB,
} from '../../service/request';

const Slider = ({ title, genre }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    if (genre) {
      getMoviesByGenre(genre.id).then(data => setMovies(data.reverse()));
    } else {
      getNetflixMovies().then(data => setMovies(data));
    }
  }, []);

  return (
    <>
      <h3 className='slider__title'>{genre ? genre.name : title}</h3>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={5}
        spaceBetween={25}
        loop={true}
        className={'slider'}
        style={{
          overflow: 'initial',
          padding: '0 3rem',
        }}
      >
        {movies.map(movie => (
          <SwiperSlide key={movie.id}>
            <FilmCard movie={movie} key={movie.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

Slider.defaultProps = {
  title: 'Pas de genre disponible',
};

export default Slider;
