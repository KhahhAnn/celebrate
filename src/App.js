import React from 'react';
import "./index.css"
import "./App.css"
import Header from './components/header';
import Gallery from './components/gallery';
import Invitation from './components/invitation';
import Story from './components/story';
import WeddingPhotos from './components/weddingPhotos';
import RSVP from './components/rsvp';
import AboutUs from './components/aboutUs';
import FooterComponent from './components/footer';
import QRCode from './components/qrCode';
import "./components/mobileStyle.css"

function App() {
  return (
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
  );
}

export default App;
