import React from 'react';
import Head from 'next/head';
import Header from '../blocks/Header/Header';
import Hero from '../blocks/Hero/Hero';
import Intro from '../blocks/Intro/Intro';
import Highlights from '../blocks/Highlights/Highlights';
import Project from '../blocks/Project/Project';
import Architecture from '../blocks/Architecture/Architecture';
import Landscape from '../blocks/Landscape/Landscape';
import Residences from '../blocks/Residences/Residences';
import SerenityExperience from '../blocks/SerenityExperience/SerenityExperience';
import SampleResidence from '../blocks/SampleResidence/SampleResidence';
import Masterplan from '../blocks/Masterplan/Masterplan';
import Location from '../blocks/Location/Location';
import VideoSection from '../blocks/VideoSection/VideoSection';
import FinalCta from '../blocks/FinalCta/FinalCta';
import Footer from '../blocks/Footer/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Atarashii Serenity - A Quieter Way of Living</title>
        <meta
          name="description"
          content="Atarashii Serenity - a private collection of residences shaped by architecture, nature, and an uncompromising attention to detail."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />
      <main>
        <Hero />
        <Intro />
        <Highlights />
        <Project />
        <Architecture />
        <Landscape />
        <Residences />
        <SerenityExperience />
        <SampleResidence />
        {/* <Masterplan /> */}
        <Location />
        <VideoSection />
        {/* <FinalCta /> */}
      </main>
      <Footer />
    </>
  );
}
