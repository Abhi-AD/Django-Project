import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { Dark, Footer, Navbar, NotFound } from './components/import';
import { Home, University, UniversityCountry, UniversityCountryDetails } from './page/import';
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
          <Route path="/country/university" element={<UniversityCountry />} />
          <Route path="/country/university/id" element={<UniversityCountryDetails />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
