
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from './utils/Themes';

import Navbar from './components/Navbar';
import ErrorNavbar from './components/ErrorPageNavBar';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';
import ErrorPage from './pages/ErrorPage';
import Footer from './components/Footer';


function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="*" element={<ErrorPage />}/>
          </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
