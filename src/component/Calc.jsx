import React, { useState, useEffect } from 'react';

const Calc = () => {
    const [count, setcount] = useState("");

    function clear() {
        setcount("");
    }

    // added keyboard input support
    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event;

            if (/\d/.test(key)) {
                setcount((prev) => prev + key);
            } else if (['+', '-', '*', '/'].includes(key)) {
                setcount((prev) => prev + key);
            } else if (key === 'Enter' || key === '=') {
                try {
                    setcount((prev) => eval(prev).toString());
                } catch {
                    setcount("Error");
                }
            } else if (key === 'Backspace') {
                setcount((prev) => prev.slice(0, -1));
            } else if (key === 'Escape') {
                clear();
            } else if (key === '.') {
                setcount((prev) => prev + '.');
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className='main'>
            <div className='span'>{count}</div>
            <div className='box'>
                <div className='num'>
                    <button id='child' value="7" onClick={(e) => setcount(count + e.target.value)}>7</button>
                    <button id='child' value="8" onClick={(e) => setcount(count + e.target.value)}>8</button>
                    <button id='child' value="9" onClick={(e) => setcount(count + e.target.value)}>9</button>
                    <br />
                    <button id='child' value="4" onClick={(e) => setcount(count + e.target.value)}>4</button>
                    <button id='child' value="5" onClick={(e) => setcount(count + e.target.value)}>5</button>
                    <button id='child' value="6" onClick={(e) => setcount(count + e.target.value)}>6</button>
                    <br />
                    <button id='child' value="1" onClick={(e) => setcount(count + e.target.value)}>1</button>
                    <button id='child' value="2" onClick={(e) => setcount(count + e.target.value)}>2</button>
                    <button id='child' value="3" onClick={(e) => setcount(count + e.target.value)}>3</button>
                    <br />
                    <button id='child' value="0" onClick={(e) => setcount(count + e.target.value)}>0</button>
                    <button id='child' value="." onClick={(e) => setcount(count + e.target.value)}>.</button>
                    <button id='child' value="=" onClick={(e) => setcount(eval(count))}>=</button>
                </div>
                <div className='icon'>
                    <button id='ichild' onClick={clear}>Clear</button>
                    <button id='ichild' onClick={(e) => setcount(count.slice(0, -1))}>Delete</button>
                    <button id='ichild' value="+" onClick={(e) => setcount(count + e.target.value)}>+</button>
                    <button id='ichild' value="-" onClick={(e) => setcount(count + e.target.value)}>-</button>
                    <button id='ichild' value="*" onClick={(e) => setcount(count + e.target.value)}>*</button>
                    <button id='ichild' value="/" onClick={(e) => setcount(count + e.target.value)}>/</button>
                </div>
            </div>
        </div>
    );
};

export default Calc;
