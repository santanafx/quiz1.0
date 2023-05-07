import React from 'react'
import { QuizContext } from '../context/globalContext';
import { Option } from './Option';

export const Perguntas = () => {
    const [quizState, dispatch] = React.useContext(QuizContext);

    console.log(quizState)

    return (
        <div>
            <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
            <h2>{quizState.questions[quizState.currentQuestion].question}</h2>
            <div>
                {quizState.questions[quizState.currentQuestion].options.map(option => (
                    <Option key={option} value={option} onSelect={() => (dispatch({
                        type: 'CHECK_ANSWER',
                        payload: { answer: quizState.questions[quizState.currentQuestion].answer, option }
                    }))} />)
                )}
            </div>
            <button>Próximo</button>
        </div>
    )
}
