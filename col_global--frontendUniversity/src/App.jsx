import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Footer, Navbar, NotFound, SearchView } from './components/import';
import { AllCountry, Contact, Home, UniversityCountry, UniversityCountryDetails } from './page/import';
import useDarkMode from './hooks/useDarkMode';
import { EventsAll, OverAllTopUniversityAll } from './container/import';
import CourseDetails from './page/Course/CourseDetails';

function App() {
  const { DarkMode } = useDarkMode();
  return (
    <Router>
      <div className={`${DarkMode ? 'darkMode' : 'bg-white'} `}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-country" element={<AllCountry />} />
          <Route path="/country/usa" element={<UniversityCountry />} />
          <Route path="/all-events" element={<EventsAll />} />
          <Route path="/country/course" element={<CourseDetails />} />

          <Route path="/all-university" element={<OverAllTopUniversityAll />} />
          <Route path="/country/university/id" element={<UniversityCountryDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/search-data" element={<SearchView />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
