"use clinet";
import React, { useState } from 'react'

export default function CounterApp() {
    const [counter, setCounter]=useState(0);
    const increment=(kitna=1)=>{
        setCounter(counter+kitna);
    }
    const decrement=(kitna=1)=>{
        setCounter(counter-kitna);
    }
  return (
    <>
    <div>
        <br>
        </br>
        <button onClick={()=>increment(1)}>Increment by 1</button>
        <button onClick={()=>increment(2)}>Increment by 2</button>
    counter app {counter}
    <button onClick={()=>decrement(1)}>Decrement by 1</button>
    <button onClick={()=>decrement(2)}>Decrement by 2</button>
 </div>
    </>
 
  );
}
