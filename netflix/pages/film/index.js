import { React, useEffect, useState, useContext } from 'react';
import ModalFilm from '../../components/FilmCard/ModalFilm/ModalFilm';
import { ModalFilmContext } from '../../context/modalFilmContext';

const Film = () => {
  const modalFilmContext = useContext(ModalFilmContext);
  return (
    <>
      <button
        onClick={() => {
          modalFilmContext.setOpen(true);
          modalFilmContext.setMovie({
            id: 1,
            name: 'Test',
          });
        }}
      >
        Mon boutton
      </button>
      <ModalFilm></ModalFilm>
    </>
  );
};

export default Film;
