import React from 'react';
import './App.css';
import { useState } from 'react';
const App=()=> {

  const [Calculate,setCalculate]=useState("") // UseState Hook is set to receive math expressions as a string
  
  const handleResult=()=>{
    try{setCalculate(eval(Calculate))} //This check for valid input from the user and return result.
    catch(error){
      setCalculate("Error please press CLEAR")
    }
  }

  return (
    <div className="App">
          <table className="CalculatorFrame">

            <thead>
                  <tr><td colSpan={4}>
                      <div className='Screen'>
                        <div className='ScreenText'>
                          {Calculate===""?0:Calculate} {/* Displays result or default value 0 */}
                          </div>
                      </div>
                    </td></tr>
            </thead>

            <tbody> {/*Calculator Buttons*/}
                <tr><td><button className='Buttons btn1' onClick={()=>setCalculate(Calculate+"(")}>(</button></td>
                  <td><button className='Buttons btn1' onClick={()=>setCalculate(Calculate+")")}>)</button></td>
                  <td><button className='Buttons btn1' onClick={()=>setCalculate(Calculate+"**")}>EXP</button></td>
                  <td><button className='Buttons btn2' onClick={()=>setCalculate("")}>CLEAR</button></td></tr>
                
                <tr><td><button className='Buttons btn3' onClick={()=>setCalculate(Calculate+7)}>7</button></td>
                  <td><button className='Buttons btn3' onClick={()=>setCalculate(Calculate+8)}>8</button></td>
                  <td><button className='Buttons btn3' onClick={()=>setCalculate(Calculate+9)}>9</button></td>
                  <td><button className='Buttons btn2' onClick={()=>setCalculate(Calculate+"/")}>:</button></td></tr>
                
                <tr><td><button className='Buttons btn3' onClick={()=>setCalculate(Calculate+4)}>4</button></td>
                  <td><button className='Buttons btn3'  onClick={()=>setCalculate(Calculate+5)}>5</button></td>
                  <td><button className='Buttons btn3' onClick={()=>setCalculate(Calculate+6)}>6</button></td>
                  <td><button className='Buttons btn2' onClick={()=>setCalculate(Calculate+"*")}>X</button></td></tr>
                
                <tr><td><button className='Buttons btn3' onClick={()=>setCalculate(Calculate+1)}>1</button></td>
                  <td><button className='Buttons btn3' onClick={()=>setCalculate(Calculate+2)}>2</button></td>
                  <td><button className='Buttons btn3' onClick={()=>setCalculate(Calculate+3)}>3</button></td>
                  <td><button className='Buttons btn2' onClick={()=>setCalculate(Calculate+"+")}>+</button></td></tr>

                <tr><td><button className='Buttons btn3' onClick={()=>setCalculate(Calculate+0)}>0</button></td>
                  <td><button className='Buttons btn3' onClick={()=>setCalculate(Calculate+".")}>.</button></td>
                  <td><button className='Buttons btn3' onClick={handleResult}>=</button></td> {/* This evaluates the expression*/}
                  <td><button className='Buttons btn2' onClick={()=>setCalculate(Calculate+"-")}>-</button></td>
                </tr>

            </tbody>
          </table>
      </div>
  );
}
export default App;
