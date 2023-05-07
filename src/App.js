import React from 'react'
import './App.css'
import { Inicio } from './components/Inicio';
import { QuizContext } from './context/globalContext';
import { Perguntas } from './components/Perguntas';
import { Fim } from './components/Fim';

function App() {
  const [quizState, dispatch] = React.useContext(QuizContext);

  return (
    <>
      {quizState.estado === 'inicio' && <Inicio />}
      {quizState.estado === 'meio' && <Perguntas />}
      {quizState.estado === 'fim' && <Fim />}
    </>
  );
}

export default App;
