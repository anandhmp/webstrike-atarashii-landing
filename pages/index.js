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
import Gallery from '../blocks/Gallery/Gallery';
import Masterplan from '../blocks/Masterplan/Masterplan';
import Location from '../blocks/Location/Location';
import VideoSection from '../blocks/VideoSection/VideoSection';
import FinalCta from '../blocks/FinalCta/FinalCta';
import Footer from '../blocks/Footer/Footer';

export default function Home() {
  return (
    <>
      <Head>
        {/* Core Meta Tags */}
        <title>Atarashii Serenity | 2 &amp; 3 BHK Ultra-Luxury Apartments in Trivandrum</title>
        <meta
          name="description"
          content="Atarashii Serenity by Powerlink Builders - 2 &amp; 3 BHK ultra-luxury apartments in Vattiyoorkavu, Trivandrum starting from ₹75 Lakhs. Inspired by Japanese architecture &amp; serenity."
        />
        <meta
          name="keywords"
          content="Atarashii Serenity, Powerlink Builders, Luxury Apartments Trivandrum, 2 BHK Vattiyoorkavu, 3 BHK Trivandrum, Flats in Vattiyoorkavu, Luxury Flats Kerala, Japanese Architecture Residences"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.atarashiii.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.atarashiii.com" />
        <meta property="og:title" content="Atarashii Serenity | 2 & 3 BHK Ultra-Luxury Apartments in Trivandrum" />
        <meta
          property="og:description"
          content="Where stillness meets grandeur. Ultra-luxury 2 & 3 BHK apartments in Vattiyoorkavu, Trivandrum starting from ₹75 Lakhs."
        />
        <meta property="og:image" content="https://www.atarashiii.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Atarashii Serenity - Where Stillness Meets Grandeur" />
        <meta property="og:site_name" content="Atarashii Serenity" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.atarashiii.com" />
        <meta name="twitter:title" content="Atarashii Serenity | 2 & 3 BHK Ultra-Luxury Apartments in Trivandrum" />
        <meta
          name="twitter:description"
          content="Where stillness meets grandeur. Ultra-luxury 2 & 3 BHK apartments in Vattiyoorkavu, Trivandrum starting from ₹75 Lakhs."
        />
        <meta name="twitter:image" content="https://www.atarashiii.com/og-image.jpg" />

        {/* Structured Data / JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SingleFamilyResidence',
              'name': 'Atarashii Serenity',
              'url': 'https://www.atarashiii.com',
              'image': 'https://www.atarashiii.com/og-image.jpg',
              'description': '2 & 3 BHK Ultra-Luxury Apartments in Vattiyoorkavu, Trivandrum starting from ₹75 Lakhs.',
              'address': {
                '@type': 'PostalAddress',
                'addressLocality': 'Vattiyoorkavu',
                'addressRegion': 'Trivandrum, Kerala',
                'addressCountry': 'IN'
              },
              'offers': {
                '@type': 'Offer',
                'priceCurrency': 'INR',
                'price': '7500000',
                'availability': 'https://schema.org/InStock'
              }
            })
          }}
        />
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
        <Gallery />
        {/* <Masterplan /> */}
        <Location />
        <VideoSection />
        {/* <FinalCta /> */}
      </main>
      <Footer />
    </>
  );
}
