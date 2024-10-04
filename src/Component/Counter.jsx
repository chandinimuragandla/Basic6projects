import React,{useState} from 'react'

const Counter = () => {
    const[value ,setvalue]=useState(0);
    const Increment =() =>{
        setvalue(value+1);
    }
    const Decrement =()=>{
        if(value>=1)
        setvalue(value-1);
    }
    const Reset =()=>{
        setvalue(0);
    }
  return (
    <div>
         <h2>Counter App</h2>
        <h1>{value}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default Counter;