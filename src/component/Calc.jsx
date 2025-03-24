import React, { useState } from 'react'

const Calc = () => {
    const[count,setcount]=useState("");
    function clear(){
        setcount("")
    }
  return (
    <div className='main'>
         <div className='span' >{count}</div>
         <div className='box'>
                <div className='num'>
                     <button id='child' value="7" onClick={(e)=>setcount(count+e.target.value)}>7</button>
                     <button id='child' value="8" onClick={(e)=>setcount(count+e.target.value)}>8</button>
                     <button id='child' value="9" onClick={(e)=>setcount(count+e.target.value)}>9</button>
                     <br />
                     <button id='child' value="4" onClick={(e)=>setcount(count+e.target.value)}>4</button>
                     <button id='child' value="5" onClick={(e)=>setcount(count+e.target.value)}>5</button>
                     <button id='child' value="6" onClick={(e)=>setcount(count+e.target.value)}>6</button>
                     <br />
                     <button id='child' value="1" onClick={(e)=>setcount(count+e.target.value)}>1</button>
                     <button id='child' value="2" onClick={(e)=>setcount(count+e.target.value)}>2</button>
                     <button id='child' value="3" onClick={(e)=>setcount(count+e.target.value)}>3</button>
                     <br />
                     <button id='child' value="0" onClick={(e)=>setcount(count+e.target.value)}>0</button>
                     <button id='child' value="." onClick={(e)=>setcount(count+e.target.value)}>.</button>
                     <button id='child' value="=" onClick={(e)=>setcount(eval(count))}>=</button>
                </div>
                <div className='icon'>
                     <button id='ichild' onClick={clear}>Clear</button>
                     <button id='ichild' onClick={(e)=>setcount(count.slice(0,-1))}>Delete</button>
                     <button id='ichild' value="+" onClick={(e)=>setcount(count+e.target.value)}>+</button>
                     <button id='ichild' value="-" onClick={(e)=>setcount(count+e.target.value)}>-</button>
                     <button id='ichild' value="*" onClick={(e)=>setcount(count+e.target.value)}>*</button>
                     <button id='ichild' value="/" onClick={(e)=>setcount(count+e.target.value)}>/</button>
                </div>
         </div>
    </div>
  )
}

export default Calc