import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { Footer, Navbar } from './components/import';
import { Blog, BlogDetails, Card, Contact, CourseLesson, Euphoria, FounderClub, Home, Job, Learn, LearnAll, LearninsideDetails, Profile, Sanbox, Shop, University, UniversityCountry, UniversityCountryDetails } from './page/import';
import { Login, Register } from './container/import';
import useDarkMode from './hooks/useDarkMode';

function App() {
  const { DarkMode } = useDarkMode();
  return (
    <Router>

      <div className={`${DarkMode ? 'darkMode' : 'bg-white'}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/country" element={<University />} />
          <Route path="/country/university" element={<UniversityCountry />} />
          <Route path="/country/university/id" element={<UniversityCountryDetails />} />


          <Route path="/learn" element={<Learn />} />
          <Route path="/learn/id" element={<LearninsideDetails />} />
          <Route path="/learn/all-course" element={<LearnAll />} />
          <Route path="/learn/id/course" element={<CourseLesson />} />

          <Route path="/shop" element={<Shop />} />

          <Route path="/sanbox" element={<Sanbox />} />
          <Route path="/euphoria" element={<Euphoria />} />
          <Route path="/founder-club" element={<FounderClub />} />

          <Route path="/card" element={<Card />} />
          <Route path="/blog-articles" element={<Blog />} />
          <Route path="/blog-articles/details" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />



          <Route path="/jobs" element={<Job />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
