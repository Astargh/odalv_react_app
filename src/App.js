import logo from './logo.svg';
import './App.css';

const letter = 'letter'

let user = {     // объект
  name: "John",  // под ключом "name" хранится значение "John"
  age: 30,        // под ключом "age" хранится значение 30
  'birthday data': new Date(), // ключ из нескольких слов
  [letter]: 'A', // ключ в виде переменной
  1: false, // ключ в виде числа
};

const data = 'name';

console.log(user);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Grisha learn Javascript
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



