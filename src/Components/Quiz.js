import React,{useState , useContext,useEffect} from 'react';
import { Questions } from '../Helpers/QuestionBank';
import { QuizContext } from '../Helpers/Contexts';
import './Quiz.css'
function Quiz() {
  const {score, setScore,setGameState,timer, setTimer} = useContext (QuizContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen,setOptionChosen] = useState("")
  
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 0) {
          clearInterval(intervalId);
          return 0;
        } else {
          return prevTimer - 1;
        }
      });
    }, 1000);
  
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  
  const nextQuestion = () => {
    if(Questions[currQuestion].answer === optionChosen){
      setScore(score+1);
    }
    setCurrQuestion(currQuestion +1);
    setOptionChosen(""); 
  };
  const finishQuiz = () => {
    if(Questions[currQuestion].answer === optionChosen){
      setScore(score+1);
    }
    setGameState("endScreen")
  };
  const timesUp = () => {
    setGameState("endScreen")
  }
  return (
    <div className='container'>
      <div id='quiz' className='justify-center flex-column'>
        <div id = "hud">
          <div id ="hud-item">
            <div className='hud-prefix'>
              Question
            </div>
            <div className='hud-main-text'>
              {currQuestion + 1}/{Questions.length}
            </div>
          </div>
          <div id ="hud-item">
            <div className='hud-prefix'>
              Time Left
            </div>
            <div className='hud-main-text'>
            {timer} seconds
            </div>
          </div>
        </div>
      
      {(timer===0) && (
        <div className="overlay">
          <div className='flex-center flex-column'>
            <h1>Sorry you ran out of time</h1>
            <button className = "finish" onClick={timesUp}>
              Submit
            </button>
          </div>
        </div>
      )}
      <h4>{Questions[currQuestion].prompt}</h4>
      <div className='choice-container'>
        <p className='choice-prefix'>A</p>
        <p className={`choice-text ${optionChosen === "A" ? "highlighted" : ""}`} onClick={() => setOptionChosen("A")}>
        {Questions[currQuestion].optionA}
        </p>
      </div>    
      <div className='choice-container'>
        <p className='choice-prefix'>B</p>
        <p className={`choice-text ${optionChosen === "B" ? "highlighted" : ""}`} onClick={() => setOptionChosen("B")}>
        {Questions[currQuestion].optionB}
        </p>
      </div>
      <div className='choice-container'>
        <p className='choice-prefix'>C</p>
        <p className={`choice-text ${optionChosen === "C" ? "highlighted" : ""}`} onClick={() => setOptionChosen("C")}>
        {Questions[currQuestion].optionC}
        </p>
      </div>
      <div className='choice-container'>
        <p className='choice-prefix'>D</p>
        <p className={`choice-text ${optionChosen === "D" ? "highlighted" : ""}`} onClick={() => setOptionChosen("D")}>
        {Questions[currQuestion].optionD}
        </p>
      </div>  
      
      {currQuestion === Questions.length-1 ? (
        <button className={optionChosen==="" ? 'disabled' : ''} disabled = {optionChosen===""} onClick={finishQuiz}>Finish Quiz</button>
      ):(
        <button className={optionChosen==="" ? 'disabled' : ''} disabled = {optionChosen===""} onClick={nextQuestion}> Next Question</button>
      )}
    </div>
    </div>  
  )
}

export default Quiz