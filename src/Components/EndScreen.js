import React,{useContext} from 'react'
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from '../Helpers/QuestionBank';
import '../App.css'
function EndScreen() {
const {score,setScore , setGameState,timer} = useContext (QuizContext);
const restartQuiz = ()=>{
  setScore(0);
  setGameState("menu")
}
  return (
    <div className='container'>
      <div className='flex-center flex-column'>
        <h1> Quiz Finished</h1>
        <h3>
          You Scored {score} out of {Questions.length}. 
        </h3>
        {(timer!==0)?<h3>Quiz was completed in {60 - timer} seconds.</h3>:<h3>Sorry you ran out of time.</h3>}
        <button onClick={restartQuiz}>Restart Quiz</button>
      </div>
    </div>
  )
}

export default EndScreen
