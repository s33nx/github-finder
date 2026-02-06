import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Home from './pages/Home';
import about from './pages/About';
import notFound from './pages/NotFound';
import Footer from './components/layouts/Footer';
import About from './pages/About';
import { GithubProvider } from './context/github/GithubContext';
function App() {
  return (
    <GithubProvider>
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />

        <main className="flex-grow flex-col "></main>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/not-found' element={<notFound />} />
          <Route path='/*' element={<notFound/>} />
          
        </Routes>
       <Footer />
      </div>
    </Router>
    </GithubProvider>
  );
}

export default App;
