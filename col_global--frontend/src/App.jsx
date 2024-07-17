import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { Footer, Navbar } from './components/import';
import { Home } from './page/import';

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
