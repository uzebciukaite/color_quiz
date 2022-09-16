import {React, useState} from 'react'
import data from "../components/colors"

const QuizPage = () => {

const [currentquestion, setCurrentQuestion] = useState(0)
const [scoreboard, setScoreboeard] = useState(false)
const [incorrectBoxes, setIncorrectBoxes] = useState([])
const [score, setScore] = useState(0)



function setNextQuestion(correct){

let findCorrectIndex = data[currentquestion].answers.findIndex(x => x.correct === true)
const indexArr = [0, 1, 2, 3]
let incorrect = indexArr.filter(x => x !== findCorrectIndex)
console.log(incorrect)
setIncorrectBoxes(incorrect)
    
    if(correct === true){
setScore(score + 1)
    }


    setTimeout(() => {
const nextQuestion = currentquestion + 1
    if(nextQuestion < data.length){
        
        setCurrentQuestion(nextQuestion)
        setIncorrectBoxes([])
  
    } else {
        setScoreboeard(true)
        
    }
    },1000)
    
    

}
  
function retakeQuiz(){
    setCurrentQuestion(0)
    setScoreboeard(false)
    setIncorrectBoxes([])
    setScore(0)
}


  return (
    <div className="quizContainer">
        {scoreboard? (
    <div className="scoreboard">   
        <p>Your score is {score} out of {data.length} ! </p>
        <button onClick={() => retakeQuiz()}>RETAKE</button>
    </div>
        ) : (
      <div className="questionBox">   
       <h2>{data[currentquestion].question}</h2>
       <div className='answerGrid'>
        {data[currentquestion].answers.map((x, i) => (
    <div key={i} onClick={() => setNextQuestion(x.correct, i)} style={{backgroundColor: x.answer}} className={incorrectBoxes.includes(i) ? "incorrect" : "" }></div>

))} 

       </div>


<p className='questionsLeft'>Question {currentquestion + 1} of {data.length}</p>
    </div>  
        )
    }
    </div>
  )
}

export default QuizPage