import React, { useState ,useContext} from 'react'
import { Question } from './QuestionBank'
import { QuizContext } from '../Help/Contexts';



const Quiz = () => {

  const {score,setScore,game,Setgame}=useContext(QuizContext);
  
    const [Ques,Setques]=useState(0);//for conditonal rendering

    const [optionChoose,setOption]=useState(null); //option choose by user

    
    
   const NextQuestion=()=>
   {
    if(optionChoose!==null) //to check the user has clik the option or not 
    {
    if(Question[Ques].answer===optionChoose) //if user select right option then setScore count it.It it for scores
    {
      setScore(score+1);
      
      
    }
  
    Setques(Ques+1); //for moving to next Question
   setOption(null); //Reset the selected option for the next question and leading to incorrect behavior and potentially allowing them to proceed without selecting an option.
  }
  else {
    // Display a message or perform some action to inform the user to select an option first
    alert("Please select an option before proceeding to the next question.");
  }
  }
   
   const FinishQuiz=()=>
   {
    if(Question[Ques].answer==optionChoose)
    {
      setScore(score+1);  
    }
    
    Setgame("result");//redering to result component

   }
    
  return (
    <>
    <div className='quiz_button'>
    
<h3>Question:{Question[Ques].ques}</h3>
<button  onClick={()=>setOption("A")}>{Question[Ques].option1}</button>
<button onClick={()=>setOption("B")}>{Question[Ques].option2}</button>
<button onClick={()=>setOption("C")}>{Question[Ques].option3 }</button>    
    </div>

    {Ques==Question.length-1?(<button onClick={FinishQuiz} className='Start_Quiz_Button'>Finish</button>):(<button onClick={NextQuestion} className='Start_Quiz_Button'>NextQuestion</button>)}
    {/* ternary opreator to finish quiz of if array of objects reached to an end*/}

    </>
  )
}

export default Quiz
