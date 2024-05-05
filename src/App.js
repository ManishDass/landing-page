import './App.css';
import '../src/styles/Global.css';
import React from 'react';

//Import components
import Navbar from './components/layout/Navbar/Navbar';
import Dashboard from './components/pages/Dashboard/Dashboard';
import HeroSection1 from './components/pages/HeroSection1/HeroSection1';
import HeroSection2 from './components/pages/HeroSection2/HeroSection2';
import Footer from './components/layout/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <Dashboard />
        <HeroSection1 />
        <HeroSection2 />
      </main>
      <Footer />
    </div>
  );
}

export default App;


