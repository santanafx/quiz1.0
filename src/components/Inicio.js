import React from 'react'
import styles from './Inicio.module.css'
import { QuizContext } from '../context/globalContext'
import quiz from '../imgs/quiz.jpeg'

export const Inicio = () => {

    const [quizState, dispatch] = React.useContext(QuizContext)

    return (
        <div className={styles.inicioContainer}>
            <h1>Bem vindo ao Quiz</h1>
            <h4>Clique abaixo para começar!</h4>
            <button onClick={() => (dispatch({ type: 'STAGE_1' }))}>Iniciar</button>
            <img src={quiz} alt="Imagem do quiz" />
        </div>
    )
}
