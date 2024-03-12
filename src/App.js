/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
 */





// App.js
import React from 'react';
import Header from './components/Header';
import SecondPart from './components/SecondPart';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThirdComponent from './components/ThirdComponent';
import FourthComponent from './components/FourthComponent';
import FifthComponent from './components/FifthComponent';
import SixthComponent from './components/SixthComponent';
import SeventhComponent from './components/SeventhComponent';
import EightComponent from './components/EightComponent';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      {/* Other components and content */}
      <SecondPart />
      <ThirdComponent />
      <FourthComponent />
      <FifthComponent />
      <SixthComponent />
      <SeventhComponent />
      <EightComponent />
      <Footer />
    </div>
  );
};

export default App;
