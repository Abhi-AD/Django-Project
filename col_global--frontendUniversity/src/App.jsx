import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Footer, Navbar, NotFound, CourseSearchView } from './components/import';
import { AllCountry, Contact, Home, IdCountry, ScholarshipsDetails, UniversityCountryDetails } from './page/import';
import useDarkMode from './hooks/useDarkMode';
import { EventsAll, OverAllTopUniversityAll } from './container/import';
import CourseDetails from './page/UniversityCountry/Course/CourseDetails';
import SpinnerComponent from './components/Loader/Loader';

function App() {
  const { DarkMode } = useDarkMode();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      setIsLoading(false);
    };

    loadData();
  }, []);

  return (
    <Router>
      <div className={`${DarkMode ? 'darkMode' : 'bg-white'} `}>
        {isLoading ? (
          <SpinnerComponent />
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/all-university" element={<OverAllTopUniversityAll />} />
              <Route path="/all-country" element={<AllCountry />} />
              <Route path="/country/usa" element={<IdCountry />} />
              <Route path="/all-events" element={<EventsAll />} />
              <Route path="/country/university/course/" element={<CourseDetails />} />
              <Route path="/country/university/id" element={<UniversityCountryDetails />} />
              <Route path="/country/university/id/scholarships" element={<ScholarshipsDetails />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/all-course" element={<CourseSearchView />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
