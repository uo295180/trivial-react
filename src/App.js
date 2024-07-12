import './App.css';
import { useState } from 'react';


let App = () => {
  let [points, setPoints] = useState(0)
  let [question, setQuestions] = useState([
    {
      text: "¿Cual es la capital de España?",
      options: ["Madrid", "Paris", "Berlin"],
      answer: 0
    },
    {
      text: "¿Cual es la capital de Alemania?",
      options: ["Madrid", "Paris", "Berlin"],
      answer: 2
    },
    {
      text: "¿Cuanto es 1 + 1?",
      options: ["1", "2", "3"],
      answer: 1
    }
  ])

  return (
    <div className="App">
      <h1>Trivial</h1>
    </div>
  );
}

export default App;
