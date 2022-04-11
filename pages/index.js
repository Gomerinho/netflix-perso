import Head from 'next/head';
import { React, useEffect, useState, useContext } from 'react';
import Image from 'next/image';
import MainLayout from '../components/layout/MainLayout';
import Slider from '../components/Slider/Slider';
import react from 'react';
import { getAllGenres, getMovieById } from '../service/request';
import ModalFilm from '../components/FilmCard/ModalFilm/ModalFilm';
import { ModalFilmContext } from '../context/modalFilmContext';
import { useRouter } from 'next/router';
import Hero from '../components/Hero/Hero';

export default function Home() {
  const [genres, setGenres] = useState([]);
  const modalFilmContext = useContext(ModalFilmContext);
  useEffect(() => {
    getAllGenres().then(data => setGenres(data));
  }, []);

  return (
    <div
      style={{
        overflowY: modalFilmContext.open ? 'hidden' : 'auto',
        overflowX: 'hidden',
      }}
    >
      <Hero />
      {genres.map(genre => (
        <Slider key={genre.id} genre={genre} />
      ))}
    </div>
  );
}
