import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/pages/Home';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import Project from '../src/pages/Project';
import Blog from '../src/pages/Blog';
import Profile from '../src/pages/Profile';


function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
   </div>
  );
}

export default App;
