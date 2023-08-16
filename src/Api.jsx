import React, { useEffect, useState } from 'react'

const Api = () => {
    const key="0fe22bd6a07853a2b664b18f2df69540"
    const city="London"
const[api_fetching, setFetching]=useState('');

useEffect(
    ()=>
    {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`).then((response)=>
        {
            return response.json;
        }).then((data)=>
        {
            console.log(data);
        })
    },[]);
  return (
    <div>
      <h1>Hi</h1>  
      
    </div>
  )
}

export default Api
