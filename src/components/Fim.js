import React from 'react'
import { QuizContext } from '../context/globalContext'

export const Fim = () => {

    const [quizState, dispatch] = React.useContext(QuizContext);

    console.log(quizState)
    return (
        <div>
            <h2>Você chegou ao fim do jogo!</h2>
            <h4>Seu acerto foi de {quizState.score}</h4>
            <button onClick={() => dispatch({ type: 'NEW_GAME' })}>Reiniciar</button>
        </div>
    )
}
