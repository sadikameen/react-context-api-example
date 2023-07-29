/*
import logo from './logo.svg';
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

// Default Version
/*
import Header from './Components/Header';
import Employees from './Components/Employees';
import './App.css';

function App() {
  const datas = [
    { id: '1', name: 'John Doe', role: 'dev' },
    { id: '2', name: 'Philip', role: 'dev' },
    { id: '3', name: 'Mark', role: 'manager' }
  ]
  return (
    <div className="App">
      <Header myTitle="My React App" />
      <Employees datas={datas} />
    </div>
  );
}

export default App;
*/

//Version 1
/*
import Header from './Components/version1/Header';
import Employees from './Components/version1/Employees';
import './App.css';
import { createContext } from 'react';

export const employeeContext = createContext(null);

function App() {
  const datas = [
    { id: '1', name: 'John Doe', role: 'dev' },
    { id: '2', name: 'Philip', role: 'dev' },
    { id: '3', name: 'Mark', role: 'manager' }
  ]
  const myTitle = "My React App Context API";
  return (
    <employeeContext.Provider value={{ myTitle, datas }}>
      <div className="App">
        <Header />
        <Employees />
      </div>
    </employeeContext.Provider>
  );
}

export default App;
*/

//version 2

import Header from './Components/version2/Header';
import Employees from './Components/version2/Employees';
import './App.css';
import { EmployeeContextProvider } from './Context/employeeContext';

function App() {
  return (
    <EmployeeContextProvider>
      <div className="App">
        <Header />
        <Employees />
      </div>
    </EmployeeContextProvider>
  );
}

export default App;