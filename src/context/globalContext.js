import React from 'react'





export const QuizContext = React.createContext();

export const QuizProvider = ({ children }) => {
    const [dado, setDado] = React.useState();

    React.useEffect(() => {
        fetch('https://my-json-server.typicode.com/santanafx/questions/questions')
            .then(response => response.json())
            .then(data => setDado(data))
    }, [])

    const stage = ['inicio', 'meio', 'fim']

    const initialState = {
        estado: stage[0],
    }

    initialState.questions = dado;

    console.log(initialState)

    const quizReducer = (state, action) => {
        console.log(state, action)
        switch (action.type) {
            case 'STAGE_1':
                return {
                    ...state,
                    estado: stage[1]
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
