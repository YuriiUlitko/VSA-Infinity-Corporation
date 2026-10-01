import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { ServiceAreas } from './components/ServiceAreas';
import { Testimonials } from './components/Testimonials';
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
        <Process />
        <ServiceAreas />
        <Testimonials />
        <EstimateForm />
      </main>
      <Footer />
    </div>);

}