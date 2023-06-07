import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/components/Home/Home.jsx';
import Products from './components/Products/Products';
import Detail from './components/Detail/Detail';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import PreguntasFrecuentes from './components/PreguntasFrecuentes/PreguntasFrecuentes';
import Contact from './components/Contact/Contact';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/detail' element={<Detail />} />
          <Route path='/about' element={<About />} />
          <Route path='/preguntas-frecuentes' element={<PreguntasFrecuentes />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
