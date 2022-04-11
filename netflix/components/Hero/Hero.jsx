/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Button from '../Button/Button';
import FilmCard from '../FilmCard/FilmCard';
import Slider from '../Slider/Slider';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero__section}>
      <div className={styles.hero}>
        <div className={styles.hero__content}>
          <div className={styles.hero__content__image}>
            <img
              src='https://occ-0-6302-55.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABehLeWpHALOAPWQL0h7ozB18G-XkafQmAYC5YWdwEA7QqHoZizS4NnvNXEEi8RoyR8363p4Bk0QSe0Jo5Wh0GVq2hpHZzWb-DvRYfNtIfPSilT-fGe-02iDabsmEuXRCXGuDfOeWlVwYgRGDj-dnhwLXmfaRm4VG1M-JxicRtDHkdQ.webp?r=4db'
              alt=''
            />
          </div>
          <div className={styles.hero__content__synops}>
            Un agent du FBI est forcé de faire équipe avec le voleur d&apos;art
            le plus recherché de la planète pour coincer une insaisissable
            criminelle qui a toujours un coup d&apos;avance.
          </div>
          <div className={styles.hero__content__buttons}>
            <Button type='primary'>Lecture</Button>
            <Button type='secondary'>Plus d&apos;infos</Button>
          </div>
        </div>
        <div className={styles.hero__vignette}></div>
      </div>
      <div className={styles.film__slider}>
        <Slider title={'Vous pourriez aimer'} />
      </div>
    </section>
  );
};

export default Hero;
