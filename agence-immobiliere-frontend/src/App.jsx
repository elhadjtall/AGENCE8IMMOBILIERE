import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Home from './pages/Home';
import Immeubles from './pages/Immeubles';
import Appartements from './pages/Appartements';
import Contact from './pages/Contact';
import Footer from './components/layout/Footer';
import Dashboard from './pages/admin/Dashboard';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation bar c'est à dire le menu de navigation notre application */}
        <Navigation />

        {/* Contenu de notre application en fonction de l'url et les routes et les pages de notre site */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/immeubles" element={<Immeubles />} />
          <Route path="/appartements" element={<Appartements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/dashboard" element={<Dashboard/>} />
        </Routes>

        {/* Pied de page le footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;