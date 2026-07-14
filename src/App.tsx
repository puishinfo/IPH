import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import RouteMeta from './components/RouteMeta';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import SacredSites from './pages/SacredSites';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import TermsConditions from './pages/TermsConditions';
import SoftwareServices from './pages/SoftwareServices';

function App() {
  return (
    <div className="min-h-screen bg-white">
  <Header />
  <ScrollToTop />
  <RouteMeta />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sacred-sites" element={<SacredSites />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/software-services" element={<SoftwareServices />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;