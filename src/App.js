import React from 'react';
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Footer from './Components/Footer/Footer'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
