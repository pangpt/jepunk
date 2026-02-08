import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Translator from './pages/Translator';
import CameraTranslator from './pages/CameraTranslator';
import Hotels from './pages/Hotels';
import Itinerary from './pages/Itinerary';

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
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
