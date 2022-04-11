import ModalFilm from '../components/FilmCard/ModalFilm/ModalFilm';
import MainLayout from '../components/layout/MainLayout';
import ModalFilmContextProvider from '../context/modalFilmContext';
import '../styles/style.scss';

function MyApp({ Component, pageProps }) {
  return (
    <ModalFilmContextProvider>
      <ModalFilm />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ModalFilmContextProvider>
  );
}

export default MyApp;
