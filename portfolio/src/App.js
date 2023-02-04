import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css';
import './styles/HeaderStyle.css';
import './styles/cardStyle.css';
import './styles/NavbarStyle.css';
import './styles/FooterStyle.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/card';




// In our main App component, we are rendering only single instances of Header, Footer and Navbar and several instances of Card
function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Card />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
