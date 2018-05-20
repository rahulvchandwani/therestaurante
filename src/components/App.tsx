import * as React from 'react';
import './App.css';
import { Header } from './Header/Header';
import { Tabs } from './Tabs/Tabs';
import { Routes } from './Routes';
import { Footer } from './Footer/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Tabs />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
