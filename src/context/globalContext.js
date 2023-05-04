import React from 'react'

const initialState = {
    constante1: 1,
    constante2: 2,
}

const quizReducer = (state, action) => {
    switch (action.type) {
        case 'STAGE_1':
            return state
        default:
            return state
    }
}


export const QuizContext = React.createContext();

export const QuizProvider = ({ children }) => {
    const value = React.useReducer(quizReducer, initialState);

    return (
        <QuizContext.Provider value={value} > {children}</QuizContext.Provider >
    )
}
