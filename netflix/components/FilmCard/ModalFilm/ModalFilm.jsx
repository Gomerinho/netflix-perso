/* eslint-disable @next/next/no-img-element */
import { React, useContext, useEffect } from 'react';
import { ModalFilmContext } from '../../../context/modalFilmContext';
import styles from './ModalFilm.module.scss';

const ModalFilm = () => {
  const modalContext = useContext(ModalFilmContext);

  useEffect(() => {
    if (modalContext.open) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [modalContext.open]);

  function handleCloseModal() {
    modalContext.setOpen(false);
    modalContext.setMovie(undefined);
  }

  function convertMinutesToHours(minutes) {
    const hours = Math.floor(minutes / 60);
    const minutesLeft = minutes % 60;
    return `${hours} h ${minutesLeft} min`;
  }

  function convertDateToYear(date) {
    return date.split('-')[0];
  }

  function getFirstSentence(text) {
    if (text.split('.')[0].length < 40) {
      return text.split('.')[0] + '.' + text.split('.')[1];
    }
    return text.split('.')[0];
  }

  if (modalContext.movie && modalContext.open) {
    return (
      <div
        style={{
          display: modalContext.open ? 'flex' : 'none',
        }}
      >
        <div className={styles.overlay} onClick={handleCloseModal}></div>
        <div className={styles.modal}>
          <div className={styles.modal__image}>
            <div className={styles.modal__close} onClick={handleCloseModal}>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='Hawkins-Icon Hawkins-Icon-Standard'
                data-uia='previewModal-closebtn'
                role='button'
                aria-label='close'
                tabIndex='0'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M2.29297 3.70706L10.5859 12L2.29297 20.2928L3.70718 21.7071L12.0001 13.4142L20.293 21.7071L21.7072 20.2928L13.4143 12L21.7072 3.70706L20.293 2.29285L12.0001 10.5857L3.70718 2.29285L2.29297 3.70706Z'
                  fill='currentColor'
                ></path>
              </svg>
            </div>
            <img
              src={`https://image.tmdb.org/t/p/original/${modalContext.movie.backdrop_path}`}
              alt=''
            />
          </div>
          <div className={styles.modal__content}>
            <p className={styles.movie__info}>
              {convertDateToYear(modalContext.movie.release_date)} -{' '}
              {convertMinutesToHours(modalContext.movie.runtime)}
            </p>
            <h2 className={styles.movie__title}>{modalContext.movie.title}</h2>
            <div className={styles.movie__content}>
              <p className={styles.movie__desc}>
                {getFirstSentence(modalContext.movie.overview)}.
              </p>
              <p className={styles.movie__genre}>
                <span className={styles.subtitle}>Genres: </span>
                {modalContext.movie.genres &&
                  modalContext.movie.genres.map(genre => genre.name).join(', ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default ModalFilm;
