import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Thay Switch bằng Routes
import Header from './components/header';
import Gallery from './components/gallery';
import Invitation from './components/invitation';
import Story from './components/story';
import WeddingPhotos from './components/weddingPhotos';
import RSVP from './components/rsvp';
import AboutUs from './components/aboutUs';
import FooterComponent from './components/footer';
import QRCode from './components/qrCode';
import './index.css';
import './App.css';
import './components/mobileStyle.css';
import AdminDashboard from './components/admin';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main website routes */}
        <Route path="/" element={
          <div className="App">
            <Header />
            <Gallery />
            <Invitation />
            <AboutUs />
            <Story />
            <WeddingPhotos />
            <RSVP />
            <QRCode />
            <FooterComponent />
          </div>
        } />

        {/* Admin route */}
        <Route path="/admin" element={<AdminDashboard />} /> 
      </Routes>
    </Router>
  );
}

export default App;
