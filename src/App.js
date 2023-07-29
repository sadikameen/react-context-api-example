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
