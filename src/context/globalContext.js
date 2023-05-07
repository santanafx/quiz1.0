import React from 'react'
import { questions } from '../data/questions'

export const QuizContext = React.createContext();

export const QuizProvider = ({ children }) => {

    const stage = ['inicio', 'meio', 'fim']

    const initialState = {
        estado: stage[0],
        questions,
        currentQuestion: 0,
        score: 0,
        answerSelected: false
    }

    const quizReducer = (state, action) => {

        switch (action.type) {
            case 'STAGE_1':
                return {
                    ...state,
                    estado: stage[1]
                }
            case 'CHECK_ANSWER':
                const answer = action.payload.answer;
                const option = action.payload.option;
                let correctAnswer = 0;

                if (answer === option) {
                    correctAnswer = 1;
                }

                return {
                    ...state,
                    score: state.score + correctAnswer,
                }

            default:
                return state
        }
    }

    const value = React.useReducer(quizReducer, initialState);

    return (
        <QuizContext.Provider value={value} > {children}</QuizContext.Provider >
    )
}
