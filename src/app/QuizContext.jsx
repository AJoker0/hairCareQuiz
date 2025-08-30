import { createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";

const QuizContext = createContext(null);

export const QuizProvider = ({ children }) => {
    const [answers, setAnswers] = useLocalStorage("quiz-answers", {
        q1: null, q2: null, q3:null, q4:null, q5: null
    });
    const [wishlist, setWishList] = useLocalStorage("whishlist", []);

    const setAnswer = (key, value) => {
        console.log(`Setting answer: ${key} = ${value}`);
        setAnswers(prev => ({ ...prev, [key]: value }));
    };
    const toggleWishlist = (handle) =>
        setWishList(prev => prev.includes(handle) ? prev.filter(h => h !== handle) : [...prev, handle]);
    
    const resetQuiz = () => {
        console.log("Resetting quiz answers");
        setAnswers({
            q1: null, q2: null, q3:null, q4:null, q5: null
        });
    };

    const value = useMemo(() => ({ 
        answers, 
        setAnswer, 
        wishlist, 
        toggleWishlist, 
        resetQuiz 
    }), [answers, wishlist]);
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;

}

export const useQuiz = () => useContext(QuizContext);