import { Swiper, SwiperSlide } from 'swiper/react';
import { React } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import FilmCard from '../FilmCard/FilmCard';

const Slider = ({ title }) => {
  return (
    <>
      <h3 className='slider__title'>{title}</h3>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={5}
        spaceBetween={25}
        loop={true}
        className={'slider'}
        style={{
          overflow: 'inherit',
          padding: '0 3rem',
        }}
      >
        <SwiperSlide>
          <FilmCard img='https://occ-0-6302-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcD2XFK0En3QIQ5vKWqLyPlMUedUjCRcJjXVFNgr-acSedJxAjjmiYaWetaXD2AOzRFXXDYTvuRaZ9rdN0r-AMqYUQJGXy64pnObNoNNvc0_I6lMTX0c0tKVCXfRzz6BGBC88-3mXP2zkxQnd8FCZIR7YgTE-LzqoHk02280mZctDlTwESgC58M.jpg?r=0e8' />
        </SwiperSlide>
        <SwiperSlide>
          <FilmCard img='https://occ-0-6302-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcD2XFK0En3QIQ5vKWqLyPlMUedUjCRcJjXVFNgr-acSedJxAjjmiYaWetaXD2AOzRFXXDYTvuRaZ9rdN0r-AMqYUQJGXy64pnObNoNNvc0_I6lMTX0c0tKVCXfRzz6BGBC88-3mXP2zkxQnd8FCZIR7YgTE-LzqoHk02280mZctDlTwESgC58M.jpg?r=0e8' />
        </SwiperSlide>
        <SwiperSlide>
          <FilmCard img='https://occ-0-6302-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcD2XFK0En3QIQ5vKWqLyPlMUedUjCRcJjXVFNgr-acSedJxAjjmiYaWetaXD2AOzRFXXDYTvuRaZ9rdN0r-AMqYUQJGXy64pnObNoNNvc0_I6lMTX0c0tKVCXfRzz6BGBC88-3mXP2zkxQnd8FCZIR7YgTE-LzqoHk02280mZctDlTwESgC58M.jpg?r=0e8' />
        </SwiperSlide>
        <SwiperSlide>
          <FilmCard img='https://occ-0-6302-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcD2XFK0En3QIQ5vKWqLyPlMUedUjCRcJjXVFNgr-acSedJxAjjmiYaWetaXD2AOzRFXXDYTvuRaZ9rdN0r-AMqYUQJGXy64pnObNoNNvc0_I6lMTX0c0tKVCXfRzz6BGBC88-3mXP2zkxQnd8FCZIR7YgTE-LzqoHk02280mZctDlTwESgC58M.jpg?r=0e8' />
        </SwiperSlide>
        <SwiperSlide>
          <FilmCard img='https://occ-0-6302-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcD2XFK0En3QIQ5vKWqLyPlMUedUjCRcJjXVFNgr-acSedJxAjjmiYaWetaXD2AOzRFXXDYTvuRaZ9rdN0r-AMqYUQJGXy64pnObNoNNvc0_I6lMTX0c0tKVCXfRzz6BGBC88-3mXP2zkxQnd8FCZIR7YgTE-LzqoHk02280mZctDlTwESgC58M.jpg?r=0e8' />
        </SwiperSlide>
        <SwiperSlide>
          <FilmCard img='https://occ-0-6302-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcD2XFK0En3QIQ5vKWqLyPlMUedUjCRcJjXVFNgr-acSedJxAjjmiYaWetaXD2AOzRFXXDYTvuRaZ9rdN0r-AMqYUQJGXy64pnObNoNNvc0_I6lMTX0c0tKVCXfRzz6BGBC88-3mXP2zkxQnd8FCZIR7YgTE-LzqoHk02280mZctDlTwESgC58M.jpg?r=0e8' />
        </SwiperSlide>
        <SwiperSlide>
          <FilmCard img='https://occ-0-6302-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcD2XFK0En3QIQ5vKWqLyPlMUedUjCRcJjXVFNgr-acSedJxAjjmiYaWetaXD2AOzRFXXDYTvuRaZ9rdN0r-AMqYUQJGXy64pnObNoNNvc0_I6lMTX0c0tKVCXfRzz6BGBC88-3mXP2zkxQnd8FCZIR7YgTE-LzqoHk02280mZctDlTwESgC58M.jpg?r=0e8' />
        </SwiperSlide>
        <SwiperSlide>
          <FilmCard img='https://occ-0-6302-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcD2XFK0En3QIQ5vKWqLyPlMUedUjCRcJjXVFNgr-acSedJxAjjmiYaWetaXD2AOzRFXXDYTvuRaZ9rdN0r-AMqYUQJGXy64pnObNoNNvc0_I6lMTX0c0tKVCXfRzz6BGBC88-3mXP2zkxQnd8FCZIR7YgTE-LzqoHk02280mZctDlTwESgC58M.jpg?r=0e8' />
        </SwiperSlide>
        <SwiperSlide>
          <FilmCard img='https://occ-0-6302-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcD2XFK0En3QIQ5vKWqLyPlMUedUjCRcJjXVFNgr-acSedJxAjjmiYaWetaXD2AOzRFXXDYTvuRaZ9rdN0r-AMqYUQJGXy64pnObNoNNvc0_I6lMTX0c0tKVCXfRzz6BGBC88-3mXP2zkxQnd8FCZIR7YgTE-LzqoHk02280mZctDlTwESgC58M.jpg?r=0e8' />
        </SwiperSlide>
        <SwiperSlide>
          <FilmCard img='https://occ-0-6302-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcD2XFK0En3QIQ5vKWqLyPlMUedUjCRcJjXVFNgr-acSedJxAjjmiYaWetaXD2AOzRFXXDYTvuRaZ9rdN0r-AMqYUQJGXy64pnObNoNNvc0_I6lMTX0c0tKVCXfRzz6BGBC88-3mXP2zkxQnd8FCZIR7YgTE-LzqoHk02280mZctDlTwESgC58M.jpg?r=0e8' />
        </SwiperSlide>
        <SwiperSlide>
          <FilmCard img='https://occ-0-6302-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcD2XFK0En3QIQ5vKWqLyPlMUedUjCRcJjXVFNgr-acSedJxAjjmiYaWetaXD2AOzRFXXDYTvuRaZ9rdN0r-AMqYUQJGXy64pnObNoNNvc0_I6lMTX0c0tKVCXfRzz6BGBC88-3mXP2zkxQnd8FCZIR7YgTE-LzqoHk02280mZctDlTwESgC58M.jpg?r=0e8' />
        </SwiperSlide>
        <SwiperSlide>
          <FilmCard img='https://occ-0-6302-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcD2XFK0En3QIQ5vKWqLyPlMUedUjCRcJjXVFNgr-acSedJxAjjmiYaWetaXD2AOzRFXXDYTvuRaZ9rdN0r-AMqYUQJGXy64pnObNoNNvc0_I6lMTX0c0tKVCXfRzz6BGBC88-3mXP2zkxQnd8FCZIR7YgTE-LzqoHk02280mZctDlTwESgC58M.jpg?r=0e8' />
        </SwiperSlide>
        <SwiperSlide>
          <FilmCard img='https://occ-0-6302-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcD2XFK0En3QIQ5vKWqLyPlMUedUjCRcJjXVFNgr-acSedJxAjjmiYaWetaXD2AOzRFXXDYTvuRaZ9rdN0r-AMqYUQJGXy64pnObNoNNvc0_I6lMTX0c0tKVCXfRzz6BGBC88-3mXP2zkxQnd8FCZIR7YgTE-LzqoHk02280mZctDlTwESgC58M.jpg?r=0e8' />
        </SwiperSlide>
        <SwiperSlide>
          <FilmCard img='https://occ-0-6302-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcD2XFK0En3QIQ5vKWqLyPlMUedUjCRcJjXVFNgr-acSedJxAjjmiYaWetaXD2AOzRFXXDYTvuRaZ9rdN0r-AMqYUQJGXy64pnObNoNNvc0_I6lMTX0c0tKVCXfRzz6BGBC88-3mXP2zkxQnd8FCZIR7YgTE-LzqoHk02280mZctDlTwESgC58M.jpg?r=0e8' />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

Slider.defaultProps = {
  title: 'Pas de genre disponible',
};

export default Slider;
