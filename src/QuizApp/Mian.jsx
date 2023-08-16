import React, { useContext} from 'react'
//import './Main.css'
import { QuizContext } from '../Help/Contexts';
const Mian = () => {

const {game,Setgame}=useContext(QuizContext);


  return (
    <div className='Main'>
      
      <h4>Happy Playing -:)</h4>
      <button  className='Start_Quiz_Button' onClick={()=>Setgame('quiz')}>Start Quiz</button>
    </div>
  )
}

export default Mian
