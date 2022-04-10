import Head from 'next/head';
import Image from 'next/image';
import MainLayout from '../components/layout/MainLayout';
import Slider from '../components/Slider/Slider';

export default function Home() {
  return (
    <div>
      <MainLayout>
        <Slider />
      </MainLayout>
    </div>
  );
}
