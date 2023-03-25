import './App.css';
import {useState , useContext} from 'react'
import MainMenu from './Components/MainMenu';
import EndScreen from './Components/EndScreen';
import Quiz from './Components/Quiz';
import { QuizContext } from './Helpers/Contexts';
function App() {
  const [gameState, setGameState] = useState("menu")
  const [score , setScore] = useState(0)
  const [timer, setTimer] = useState(60);
  return (
    <div className="container">
      <div id = "home" className = "flex-center flex-column">
      <QuizContext.Provider value ={{gameState, setGameState ,score , setScore,timer , setTimer}}>
        {gameState === 'menu' && <MainMenu />}
        {gameState === 'quiz' && <Quiz />}
        {gameState === 'endScreen' && <EndScreen />}
      </QuizContext.Provider> 
     </div> 
    </div>
  );
}

export default App;
