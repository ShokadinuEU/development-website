import React, { Component } from 'react';
import './App.css';
import Navbar from './components/headers/navbar/Navbar'
import Header from './components/headers/header/Header'
import Categories from './components/body/categories/Categories'
import Comunity from './components/body/community/Comunity'
import Search from './components/body/search/Search'
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Categories />
        <Comunity />
        <Search />
        <Footer />
      </div>
    );
  }
}

export default App;
