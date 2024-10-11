import logo from './logo.svg';
import './App.css';
const _ = require('lodash');

const numbers = [1,2,3,4,5];

function sredniaArytmetyczna(numb){
  return _.mean(numb)
}

console.log( "Srednia to: " + sredniaArytmetyczna(numbers))

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      
      </header>
    </div>
  );
}

export default App;
