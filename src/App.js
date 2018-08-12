import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact name="John Doe" email="me@test.com" phone="555-555-4444" />
        <Contact name="Jose GGG" email="you@test.com" phone="555-415-4444" />
      </div>
    );
  }
}

export default App;
