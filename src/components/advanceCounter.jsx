import React, { useState } from 'react'

const AdvanceCounter = () => {
    const [counter,setCounter] = useState(0);
    const [inputVal,setinputVal] = useState("");
    const handleInc= () => {
        setCounter(counter+inputVal);
    }
    const handleDec= () => {
        setCounter(counter-inputVal);
    }
    const handleReset = () => {
        setCounter(0);
    }
    const takeValue = (e) => {
        const ival = Number(e.target.value);
        setinputVal(ival);
    }
    if(counter < 0){
        setCounter(0)
    }
  return (
    <>
        <input type="Number" placeholder='Enter Number' value={inputVal} onChange={takeValue}/>
        <p>{counter}</p>
        <button onClick={handleInc}>Increment</button><br/>
        <button onClick={handleDec}>Decrement</button><br/>
        <button onClick={handleReset}>Reset</button>

    </>
  )
}

export default AdvanceCounter