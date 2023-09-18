import React, { useState } from 'react'

const Calculator = () => {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [error, setError] = useState(null);
    const [result, setResult] = useState(null);
    const validateInput = () => {
        if (input1 == "" || input2 == "" || isNaN(input1) || isNaN(input2)) {
            setError("Please Input A Vaild Number");
            return false;            
        }
        setError(null);        
        return true;
    }
    const add = () => {
        if (validateInput()) {
            setResult(parseFloat(input1) + parseFloat(input2));
        }
    }
    const substract = () => {
        if (validateInput()) {
            setResult(parseFloat(input1) - parseFloat(input2));
        }
    }
    const divide = () => {
        if (validateInput()) {
            if (input2 !== 0) {
                var num =  (parseFloat(input1) / parseFloat(input2));
                setResult(num.toFixed(3));
            }
            else {
                setError("Division not Allowed")
            }
        }
    }
    const multiply = () => {
        if (validateInput()) {
            setResult(parseFloat(input1) * parseFloat(input2));
        }
    }
    return (
        <div className="container">
        <div className="calculator">
            <h1>React Calculator</h1>
            <input type="text" placeholder="Num1" value={input1} onChange={e=>setInput1(e.target.value)}/>
            <input type="text" placeholder="Num2" value={input2} onChange={e=>setInput2(e.target.value)}/>
            <div className="button-div">
                <button onClick={add}>+</button>
                <button onClick={substract}>-</button>
                <button onClick={multiply}>*</button>
                <button onClick={divide}>/</button>
            </div>
        <div className="error"> {error? error:null && error}</div>
            
        <div className="success">
            {result != null ? `Result: ${result}` : null}</div>
        </div>
        </div>
    )
};

export default Calculator; 