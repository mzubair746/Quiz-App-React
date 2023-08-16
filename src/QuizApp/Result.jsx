import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../Help/Contexts'

const Result = () => {
  const {score,setScore,game,Setgame}=useContext(QuizContext);

  const ReQuiz=()=>{
setScore(0);//To set Score again to 0 if we not did then the previous score again add to new socre
Setgame("menu")

  }
  return (
    <div>
    <div className='result'>
      <h3 className='Score'>Score:</h3>
      <p className='ScoreRate'>{score}</p>
      </div>
      <button onClick={ReQuiz} className='Start_Quiz_Button'>Re_Attempt Quiz</button>
    </div>
  )
}

export default Result
