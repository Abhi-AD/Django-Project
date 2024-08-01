import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { Dark, Footer, Navbar, NotFound, SearchView } from './components/import';
import { Contact, Home, University, UniversityCountry, UniversityCountryDetails } from './page/import';
import useDarkMode from './hooks/useDarkMode';

function App() {
  const { DarkMode } = useDarkMode();
  return (
    <Router>
      <div className={`${DarkMode ? 'darkMode' : 'bg-white'} `}>
        <Navbar />
        <Dark />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/country" element={<University />} />
          <Route path="/top-university" element={<University />} />
          <Route path="/country/university" element={<UniversityCountry />} />
          <Route path="/country/university/id" element={<UniversityCountryDetails />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        <Route path="/search-data" element={<SearchView />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
