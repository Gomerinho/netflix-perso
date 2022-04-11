import { useRouter } from 'next/router';
import { React, useEffect, useState } from 'react';
import FilmGrid from '../../components/FilmGrid/FilmGrid';
import { getMoviesByQuery } from '../../service/request';

const Search = () => {
  const router = useRouter();
  const { q } = router.query;

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getMoviesByQuery(q).then(data => {
      setMovies(data);
      setLoading(false);
    });
  }, [q]);

  return (
    <div>
      {loading ? (
        <p style={{ color: 'white', textAlign: 'center' }}>Chargement...</p>
      ) : movies.length >= 1 ? (
        <FilmGrid movies={movies} />
      ) : (
        <p
          style={{
            color: 'white',
            textAlign: 'center',
            marginTop: '4rem',
            marginBottom: '70vh',
          }}
        >
          Aucun film trouvé
        </p>
      )}
    </div>
  );
};

export default Search;
