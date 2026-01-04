import './App.css';
<<<<<<< HEAD
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
=======
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
>>>>>>> footer

function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />

<<<<<<< HEAD
        <main>Content</main>
=======
        <main className='container mx-auto px-3 pb-12'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/notfound' element={<NotFound />} />
            <Route path='/*' element={<NotFound/>} />
          </Routes>
        </main>
        <Footer />
>>>>>>> footer
      </div>
    </Router>
  );
}

export default App;
