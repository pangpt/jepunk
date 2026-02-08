import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Translator from './pages/Translator';
import CameraTranslator from './pages/CameraTranslator';
import Hotels from './pages/Hotels';
import Itinerary from './pages/Itinerary';
import Converter from './pages/Converter';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/translator" element={<Translator />} />
          <Route path="/camera" element={<CameraTranslator />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/itinerary" element={<Itinerary />} />
          <Route path="/converter" element={<Converter />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
