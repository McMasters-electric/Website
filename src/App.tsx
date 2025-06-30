import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import Gallery from './pages/Gallery';

// Main homepage component with Helmet for SEO
const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Licensed Master Electricians Saratoga Springs NY | McMasters Electric LLC</title>
        <meta
          name="description"
          content="Professional electrical services in Saratoga Springs, NY. Licensed master electricians providing panel upgrades, wiring, EV charging, smart home automation. 40+ years experience."
        />
        <link rel="canonical" href="https://mcmasterselectric.com/" />
      </Helmet>
      <div className="min-h-screen">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

const PrivacyPolicyWithHelmet: React.FC = () => (
  <>
    <Helmet>
      <title>Privacy Policy | McMasters Electric LLC</title>
      <meta name="description" content="Privacy policy for McMasters Electric LLC." />
      <link rel="canonical" href="https://mcmasterselectric.com/privacy-policy" />
    </Helmet>
    <PrivacyPolicy />
  </>
);

const TermsOfServiceWithHelmet: React.FC = () => (
  <>
    <Helmet>
      <title>Terms of Service | McMasters Electric LLC</title>
      <meta name="description" content="Terms of service for McMasters Electric LLC." />
      <link rel="canonical" href="https://mcmasterselectric.com/terms-of-service" />
    </Helmet>
    <TermsOfService />
  </>
);

const CookiePolicyWithHelmet: React.FC = () => (
  <>
    <Helmet>
      <title>Cookie Policy | McMasters Electric LLC</title>
      <meta name="description" content="Cookie policy for McMasters Electric LLC." />
      <link rel="canonical" href="https://mcmasterselectric.com/cookie-policy" />
    </Helmet>
    <CookiePolicy />
  </>
);

const GalleryWithHelmet: React.FC = () => (
  <>
    <Helmet>
      <title>Gallery | McMasters Electric LLC</title>
      <meta name="description" content="Gallery of completed electrical projects by McMasters Electric LLC." />
      <link rel="canonical" href="https://mcmasterselectric.com/gallery" />
    </Helmet>
    <Gallery />
  </>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyWithHelmet />} />
      <Route path="/terms-of-service" element={<TermsOfServiceWithHelmet />} />
      <Route path="/cookie-policy" element={<CookiePolicyWithHelmet />} />
      <Route path="/gallery" element={<GalleryWithHelmet />} />
    </Routes>
  );
}

export default App;
