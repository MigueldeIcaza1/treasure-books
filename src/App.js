import './App.css';
import { Header } from './components/header/header';
import React from 'react';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
