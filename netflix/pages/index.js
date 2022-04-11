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

export default function Home() {
  const router = useRouter();
  const { q } = router.query;
  const [genres, setGenres] = useState([]);
  const modalFilmContext = useContext(ModalFilmContext);
  useEffect(() => {
    getAllGenres().then(data => setGenres(data));
  }, []);

  useEffect(() => {
    console.log(q);
    console.log(router.query);
  }, [q]);

  return (
    <div
      style={{
        overflow: modalFilmContext.open ? 'hidden' : 'auto',
      }}
    >
      {genres.map(genre => (
        <Slider key={genre.id} genre={genre} />
      ))}
    </div>
  );
}
