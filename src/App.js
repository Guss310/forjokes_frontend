// This is the initial code for the Home component. It is used to display the banner carrousel and the information about the college.

// This are the dependencies used in this file.
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/pages/Home';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import Project from '../src/pages/Project';
import Blog from '../src/pages/Blog';
import Profile from '../src/pages/Profile';


// This is the main function of the App component.
// It is used to display the routes of the application.
// The Header and Footer components are used to display the header and footer of the application.
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
