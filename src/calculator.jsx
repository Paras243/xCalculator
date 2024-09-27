import React from 'react';
import {useState} from 'react';
import "./Calculator.css";
function Calculator (){

const [input,setInput] = useState('');
const [result,setResult] = useState('');
const handleClick = (event) => {
    setInput(input.concat(event.target.name));
}

const clear = ()=>{
    setInput('');
    setResult('');
}

const calculate = ()=>{
    try{
        setResult(eval(input).toString());
    }catch(error){
        setResult("Error");
    }
}
    return (
        <div style={{
            display:"flex",
            flexDirection:"column",
            padding:"20px",
            }}>
            <h1>React Calculator</h1>
            <br />

            <input type="text" style={{height:"20px",width:"300px",padding:"2px",color:"balck"}} onChange={(e) => setInput(e.target.value)} value ={input} readOnly />
            <br />
            <p>{result}</p>

            <div style={{
                display:"grid",
                gridTemplateColumns:"1fr 1fr 1fr 1fr",
                width:"300px",
                height:"300px",
                border:"solid black 2px",    
            }}>

            <button name = "9" onClick={handleClick } className="btn">9</button>
            <button name = "8" onClick={handleClick } className="btn">8</button>
            <button name = "7" onClick={handleClick } className="btn">7</button>
            <button name = "+" onClick={handleClick } class="btn2">+</button>
            <button name = "6" onClick={handleClick } className="btn">6</button>
            <button name = "5" onClick={handleClick } className="btn">5</button>
            <button name = "4" onClick={handleClick } className="btn">4</button>
            <button name = "-" onClick={handleClick } class="btn2">-</button>
            <button name = "3" onClick={handleClick } className="btn">3</button>
            <button name = "2" onClick={handleClick } className="btn">2</button>
            <button name = "1" onClick={handleClick } className="btn">1</button>
            <button name = "*" onClick={handleClick } class="btn2">*</button>
            <button name = "0" onClick={handleClick } className="btn">0</button>
            <button  onClick={clear} id ="Clear" className="btn2">C</button>
            <button name = "=" onClick={calculate} id="result" className="btn2">=</button>
            <button name = "/" onClick={handleClick } class="btn2">/</button>
            </div>
                       
        </div>
    )
}
export default Calculator;