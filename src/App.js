import React from 'react'
import './App.css'
import { Inicio } from './components/Inicio';
import { QuizContext } from './context/globalContext';
import { Perguntas } from './components/Perguntas';

function App() {
  const [quizState, dispatch] = React.useContext(QuizContext);


  return (
    <>
      {quizState.estado === 'meio' ? <Perguntas /> : <Inicio />}
    </>
  );
}

export default App;
