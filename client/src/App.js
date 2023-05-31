import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/components/Home/Home.jsx';
import Products from './components/Products/Products';
import Detail from './components/Detail/Detail';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/products/detail' element={<Detail/>} />
          <Route path='*' element={<Home />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
