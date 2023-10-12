import { createContext,  useState} from 'react';

export const Context = createContext('');

export const AppProvider = ({children}) => {

    const [letter, setLetter] = useState('');
    const [incorrectAnswersCount, setIncorrectAnswersCount] = useState(0);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [gameCount, setGameCount] = useState(0)

    const value = {
        letter,
        setLetter,
        incorrectAnswersCount,
        setIncorrectAnswersCount,
        correctAnswersCount,
        setCorrectAnswersCount,
        gameCount,
        setGameCount
    }
    return (
        <Context.Provider value= {value}>
            {children}
        </Context.Provider>
    )
}