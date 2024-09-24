
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AboutPage from './pages/AboutPage';
import HomePage from "./pages/HomePage";
import ResponsiveRedesign from './pages/ResponsiveRedesign';
import UnoHealth from "./pages/UnoHealth";
import MovieTracker from "./pages/MovieTracker";
import LitPath from './pages/LitPath';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/redesign" element={<ResponsiveRedesign />} />
            <Route path="/unohealth" element={<UnoHealth />} />
            <Route path="/litpath" element={<LitPath />} />
          </Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
