

import A from './A';
import './A.css';
import B from './B';
import Form from './Form';
import Api from './Api'
import Header from './Site/Header';
import { useState } from 'react';
import Main from './QuizApp/Mian';
import { useContext } from 'react';
import Quiz from './QuizApp/Quiz';
import Result from './QuizApp/Result';
import {QuizContext} from './Help/Contexts';
import './App.css';



function App() {

  const [game,Setgame]=useState("menu");
  const [score,setScore]=useState(0);
  return (
   
          <>
          <div className='Global'>
          <h1 className='Main_Header'>Quiz_App</h1>
<QuizContext.Provider  value={ {game,Setgame,score,setScore}}>
{game==="menu" && <Main/>}
{game==="quiz" && <Quiz/>}
{game==="result" && <Result/>}
</QuizContext.Provider> 
</div>
          {/* <Header/> */}
         {/* <Api/> */}
         {/* <B/> */}
         {/* <Form/> */}

          </>
  );
}

export default App;
