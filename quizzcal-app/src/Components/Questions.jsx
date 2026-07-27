
import clsx from "clsx"
export default function Questions(props) {

    const isGameOver = props.guessed?.length === props.questions.length ? true : false;
    const isCorrectArr = props.guessed.filter(el => el.isCorrect === true)
    

    function resetGame() {
        props.setStart(prev => !prev)
        props.setGuessed([])
        props.setScoreShown(prev => !prev)
    }
    function handleCheckAnswers() {
        
        if(isGameOver) {
            if(props.scoreShown) {
                return (
                    <>
                        <h3>You scored {isCorrectArr.length}/{props.questions.length} correct answers</h3>
                        <button onClick={resetGame}>Play again</button>
                    </>
                )
            } else {
                return (
                    <button className="submit-button" onClick={() => props.setScoreShown(prev => !prev)}>Check answers</button>
                )

            }
        }
    }

    const questionElements = props.questions.map((item, index) => {
        function handleAnswerClick(answer, isCorrect) {
            props.setGuessed(prev => {
                const updatedGuessed = prev.filter(a => a.questionIndex !== index)
                return [...updatedGuessed, {questionIndex: index, answer: answer.toString(), isCorrect: isCorrect}]
                
            })

        }

        return (
            <div key={`question-${index}`} className="question-wrapper">
                <h2>{item.question}</h2>
                <div className="answers-wrapper">
                    {item.answers.map((answer, answerIndex) => {
                        const guessForQuestion = props.guessed.find(g => g.questionIndex === index)
                        const isCorrect = answer.isCorrect === true
                        const isWrong = isGameOver && guessForQuestion?.answer === answer.answer && !answer.isCorrect
                        const className = clsx({
                            "radio-label": true,
                            "correct": isGameOver && isCorrect && props.scoreShown,
                            "wrong": isWrong && props.scoreShown,
                        })
                        return (
                            <label key={`answer-${index}-${answerIndex}`} className={className}>
                                <input className="radio-input" type="radio" name={`question-${index}`} value={answer.answer} onClick={() => handleAnswerClick(answer.answer, answer.isCorrect)} disabled={isGameOver && true} />
                                {answer.answer}
                            </label>
                        )
                    })}
                </div>
            </div>
        )
    })


    return (
        <div className="questions-container">
            
            {questionElements}
            
            {handleCheckAnswers()}
        </div>
    )
}