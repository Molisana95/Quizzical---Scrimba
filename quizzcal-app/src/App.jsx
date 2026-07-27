import "./App.css"
import Main from "./Components/Main"
import { useState, useEffect } from "react"
import Questions from "./Components/Questions.jsx"
import { decode } from "html-entities"
import clsx from "clsx"


export default function App() {
  const [start, setStart] = useState(false)
  const [questions, setQuestions] = useState([])
  const [guessed, setGuessed] = useState([])
  const [scoreShown, setScoreShown] = useState(false)
  console.log(questions)
  console.log(guessed)
  // Function to randomize the order of answers for each question
  function shuffleAnswers(array) {
    return [...array].sort((e) => Math.floor(Math.random() - 0.5))
  }

  // fetch data from the API
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then(res => res.json())
      .then(data => {
        // Handle the fetched and decoded data
        const formattedQuestions = data.results.map(q => {
          const decodedQuestion = decode(q.question)
          const decodedCorrectAnswer = decode(q.correct_answer)
          const decodedIncorrectAnswers = q.incorrect_answers.map(ans => decode(ans))
          return {
            question: decodedQuestion,
            answers: shuffleAnswers([
              { answer: decodedCorrectAnswer, isCorrect: true},
              ...decodedIncorrectAnswers.map(ans => ({ answer: ans, isCorrect: false }))
            ])
          }
        })
        setQuestions(formattedQuestions)
      })
  }, [start])

  // Main render function
  return (
    <div className="App">
      
      {start ? 
      (<>
      <div className="main-app-container">
      <div className="background-1"></div>
      <Questions 
      questions={questions}
      setGuessed={setGuessed}
      guessed={guessed}
      scoreShown={scoreShown}
      setScoreShown={setScoreShown}
      setStart={setStart}
      />
      <div className="background-2"></div>
      </div>
      </>) : 
      <Main setStart={setStart} />}
      
    </div>
  );
}