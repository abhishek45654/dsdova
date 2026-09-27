import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer/Footer'
import { CollectionPage } from './pages/CollectionPage'
import { ContactPage } from './pages/ContactPage'
import { FAQPage } from './pages/FAQPage'
import { HomePage } from './pages/HomePage'
import { LegalPage } from './pages/LegalPage'
import { OurStoryPage } from './pages/OurStoryPage'

function App() {
  return (
    <BrowserRouter>
      <div className="page-shell">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/privacy" element={<LegalPage type="privacy" />} />
          <Route path="/terms" element={<LegalPage type="terms" />} />
          <Route path="/shipping" element={<LegalPage type="shipping" />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
