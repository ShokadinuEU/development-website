import React, { Component } from 'react';
import './App.css';
import Navbar from './components/headers/navbar/Navbar'
import Header from './components/headers/header/Header'
import Categories from './components/body/categories/Categories'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Categories />
      </div>
    );
  }
}

export default App;
