import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Portfolio from './Components/Pages/Portfolio';
import Login from './Components/Pages/Login';
import SignUp from './Components/Pages/SignUp';
import Blog from './Components/Pages/Blog';
import Navbar from './Components/Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="blog" element={<Blog />} />
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
