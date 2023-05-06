import React from 'react'
import { QuizContext } from '../context/globalContext';

export const Perguntas = () => {
    const [quizState, dispatch] = React.useContext(QuizContext);

    return (
        <div>Perguntas</div>
    )
}
