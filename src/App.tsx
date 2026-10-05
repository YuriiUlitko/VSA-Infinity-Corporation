import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { RemodelReasons } from './components/RemodelReasons';
import { ServiceAreas } from './components/ServiceAreas';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { EstimateForm } from './components/EstimateForm/EstimateForm';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen w-full bg-white font-sans text-body">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <RemodelReasons />
        <ServiceAreas />
        <Process />
        <Testimonials />
        <Faq />
        <EstimateForm />
      </main>
      <Footer />
    </div>);

}