
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/contact';
import Footer from './components/Footer';
import {Route,Routes} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';

function App() {
  

  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/service" element={<Services/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route  path="/login" element={<Login/>} />
          <Route  path="/register" element={<Register/>} />
          <Route  path="/dashboard" element={<Dashboard/>} />
          <Route  path="/logout" element={<Logout/>} />
        </Routes>
        <Footer/>
    </> 
  );
}

export default App;

