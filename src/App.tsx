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
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfUse } from './components/TermsOfUse';

function normalizedPath(pathname: string) {
  return pathname.replace(/\/+$/, '') || '/';
}

function isPrivacyPath(pathname: string) {
  const path = normalizedPath(pathname);
  return path === '/privacy' || path === '/privacy-policy';
}

function isTermsPath(pathname: string) {
  const path = normalizedPath(pathname);
  return path === '/terms' || path === '/terms-of-use';
}

export function App() {
  if (typeof window !== 'undefined' && isPrivacyPath(window.location.pathname)) {
    return <PrivacyPolicy />;
  }

  if (typeof window !== 'undefined' && isTermsPath(window.location.pathname)) {
    return <TermsOfUse />;
  }

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
    </div>
  );
}
