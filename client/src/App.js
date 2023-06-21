// import './App.css';
// import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom';
// import ProtectedRouter from './ProtectedRouter/ProtectedRoute';
// import Home from '../src/components/Home/Home.jsx';
// import Products from './components/Products/Products';
// import Detail from './components/Detail/Detail';
// import Navbar from './components/Navbar/Navbar';
// import NavbarAdmin from './components/Admin/NavbarAdmin/NavbarAdmin';
// import Footer from './components/Footer/Footer';
// import About from './components/About/About';
// import PreguntasFrecuentes from './components/PreguntasFrecuentes/PreguntasFrecuentes';
// import Contact from './components/Contact/Contact';
// import HomeAdmin from './components/Admin/HomeAdmin/HomeAdmin';

// function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// function AppContent() {
//   const location = useLocation();
//   const isAdminPage = location.pathname.includes('/home-admin');

//   return (
//     <div className="App">
//       <div className="content-wrapper">
//         {isAdminPage ? (
//           <>
//             <NavbarAdmin />
//             <HomeAdmin />
//           </>
//         ) : (
//           <>
//             <Navbar />
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/products" element={<Products />} />
//               <Route path="/products/detail" element={<Detail />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="*" element={<Home />} />
//             </Routes>
//           </>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default App;
