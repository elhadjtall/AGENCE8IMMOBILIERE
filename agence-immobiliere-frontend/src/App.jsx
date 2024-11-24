import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Home from './pages/Home';
import Immeubles from './pages/Immeubles';
import Appartements from './pages/Appartements';
import Contact from './pages/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/immeubles" element={<Immeubles />} />
          <Route path="/appartements" element={<Appartements />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;