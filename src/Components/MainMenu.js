import React, {useContext} from 'react'
import  '../App.css';
import { QuizContext } from '../Helpers/Contexts'
function MainMenu() {
  const {gameState , setGameState, setTimer} = useContext(QuizContext);
  let start = () => {
    setGameState("quiz");
    setTimer(60);
  }
  return (
    <div className='container'>
      <div className='flex-center flex-column'>
       <h1>Daily Programming Quiz</h1>
       <h2>This Quiz Contains:</h2>
       <ul>
        <li> <h3>3 Multiple Choice Questions</h3></li>
        <li> <h3>60 Seconds</h3></li>
       </ul>
       <button onClick={start}>Start Quiz</button>
      </div>
    </div>
  )
}

export default MainMenu
