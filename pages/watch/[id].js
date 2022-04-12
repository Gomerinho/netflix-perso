import { useRouter } from 'next/router';
import { React, useEffect, useState } from 'react';
import { getVideosMoviesById } from '../../service/request';
import ReactPlayer from 'react-player';

const Watch = () => {
  const router = useRouter();
  const { id } = router.query;
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    getVideosMoviesById(id).then(data => {
      if (data[0] && Array.isArray(data)) {
        setVideoId(data[0].key);
      } else {
        setTimeout(() => {
          router.push('/');
        }, 3000);
      }
    });

    return () => {
      clearInterval();
    };
  }, [id]);
  return (
    <div>
      {videoId && (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder='0'
          allow='autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='Embedded youtube'
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
          }}
        />
      )}

      {!videoId && (
        <p style={{ color: 'white', padding: '4rem 15rem' }}>
          Pas de video disponible, retour à l&apos;accueil ...
        </p>
      )}
    </div>
  );
};

export default Watch;
