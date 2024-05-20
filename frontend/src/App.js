
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from './utils/Themes';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';




function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
