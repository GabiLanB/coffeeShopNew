import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import MainSlider from './components/MainSlider';
import About from './components/About';
import Types from './components/Types';
import Products from './components/Products';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <MainSlider />
        <About />
        <Types />
        <Products />
        <Footer />
      </div>
    );
  }
}

export default App;
