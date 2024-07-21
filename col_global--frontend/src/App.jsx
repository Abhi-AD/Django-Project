import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { Footer, Navbar } from './components/import';
import { Blog, BlogDetails, Card, Contact, Euphoria, FounderClub, Home, Job, Learn, Profile, Sanbox, Shop, University, UniversityCountry, UniversityCountryDetails, UniversityCountryDetailsApplyForm } from './page/import';

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country" element={<University />} />
          <Route path="/country/university" element={<UniversityCountry />} />
          <Route path="/country/university/id" element={<UniversityCountryDetails />} />
          <Route path="country/university/id/applyform" element={<UniversityCountryDetailsApplyForm />} />


          <Route path="/learn" element={<Learn />} />
          <Route path="/shop" element={<Shop />} />

          <Route path="/sanbox" element={<Sanbox />} />
          <Route path="/euphoria" element={<Euphoria />} />
          <Route path="/founder-club" element={<FounderClub />} />

          <Route path="/card" element={<Card />} />
          <Route path="/blog-articles" element={<Blog />} />
          <Route path="/blog-articles/details" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/profile" element={<Profile />} />


          <Route path="/jobs" element={<Job />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
