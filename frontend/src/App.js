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


function App() {
  const [userData, setUserData] = useState({});
  const [projectsData, setProjectData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    fetchUserData();
    fetchProjectData();
    fetchCategorytData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch('https://api.darrensandhu.uk/users/', {
        headers: {
          Authorization: 'Basic ' + btoa('darren:0800')
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const userData = await response.json();
      const user = userData[0];
      setUserData(user);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const fetchProjectData = async () => {
    try {
      const response = await fetch('https://api.darrensandhu.uk/projects/');
      if (!response.ok) {
        throw new Error('Failed to fetch project data');
      }
      const projectData = await response.json();
      setProjectData(projectData);
    } catch (error) {
      console.error('Error fetching project data:', error);
    }
  };

  const fetchCategorytData = async () => {
    try {
      const response = await fetch('https://api.darrensandhu.uk/categories/');
      if (!response.ok) {
        throw new Error('Failed to fetch category data');
      }
      const categoryData = await response.json();
      const categoryNames = categoryData.map((category) => category.name);
      const filteredCategoryNames = ['all', ...categoryNames];
      setCategoriesData(filteredCategoryNames);
    } catch (error) {
      console.error('Error fetching category data:', error);
    }
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage userData={userData} />} />
          <Route path="/projects" element={<ProjectsPage projectsData={projectsData} user={userData} categories={categoriesData} />} />
          <Route path="/contact" element={<ContactPage user={userData} />} />
          <Route path="/resume" element={<ResumePage user={userData} />} />
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
        <Footer user={userData} />
      </Router>
    </ThemeProvider>
  );
}

export default App;

