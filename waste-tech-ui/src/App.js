import React from 'react'

import Intro from './components/Dash/Intro'
import ContactSection from './components/contact-section/ContactSection'
import Disclaimer from './components/Disclaimer/Disclaimer'
import Footer from './components/footer/Footer'
import './App.css'
import Map from './components/Map/MapPreview'

function App() {
  return (
    <div className="App">
      <Intro />
      <ContactSection />
      <Map />
      <Disclaimer />
      <Footer />
    </div>
  )
}

export default App
