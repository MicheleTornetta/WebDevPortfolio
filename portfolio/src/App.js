// import logo from './logo.svg';
// import './App.css';
import './styles/Header.css';
import './styles/card.css';
import './styles/NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Card from './components/card';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
