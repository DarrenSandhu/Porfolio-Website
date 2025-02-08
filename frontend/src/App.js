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
import { useState, useEffect } from 'react';
import MotionParticleBackground from './components/3DBackground/MotionBackground';
// import { userData } from './data/userData';

import { useApi } from './data/apiUserData';


function App() {
  const {user, projects, categories} = useApi();

  return (
    <ThemeProvider theme={lightTheme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage userData={user} />} />
          <Route path="/projects" element={<ProjectsPage projectsData={projects} user={user} categories={categories} />} />
          <Route path="/contact" element={<ContactPage user={user} />} />
          <Route path="/resume" element={<ResumePage user={user} />} />
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
        <Footer user={user} />
      </Router>
    </ThemeProvider>
  );
}

export default App;

