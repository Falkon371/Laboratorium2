import logo from './logo.svg';
import './App.css';
const _ = require('lodash');

const numbers = [1,2,3,4,5];

function sredniaArytmetyczna(numb){
  return _.mean(numb)
}

const minmax = (numb) =>{
  const min = _.min(numb);
  const max = _.max(numb);
  return min, max;
}

const {min, max} = minmax(numbers);


console.log( "Srednia to: " + sredniaArytmetyczna(numbers))
console.log("Minimalna wartość to: " + min);
console.log("Maksymalna wartość to: " + max);



function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      
      </header>
    </div>
  );
}

export default App;
