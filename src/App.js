import React from 'react'
import './App.css';
import { useState } from 'react';
function App(){
    const [showdiv,setdiv]=useState(false);
    function GoBack(){
        setdiv((prevValue)=>{return !prevValue});
    }
    const [state,setState]=useState({
        Name:"",
        Department:"",
        Rating:"",
        employees:[]
    });
    const ClickHandler=(e)=>{
        e.preventDefault();
        const empObj={
            Name:state.Name,
            Department:state.Department,
            Rating:state.Rating,
        }
        state.employees.push(empObj);
        setState({...state,employees:state.employees});
        GoBack();
        document.getElementById("forms").reset();
    }
    

    const ChangeHandler=(e)=>{
        setState({...state,[e.target.name]:e.target.value});
    }
        if(showdiv){
            return (
                <div>
                <div id='flex-container'>
     {state.employees.map((value,index)=>{
      return(
      <div className='flex' key={index}>
      <span className='span'>Name : {value.Name} | Department : {value.Department} | Rating : {value.Rating}</span> 
  </div>
      )
     }

     )}
     
     </div>
     <center>
     <button id="back" onClick={GoBack}>Go Back</button>
     </center>
     
                </div>
                
            );
            }
            else{
 return (
    <div>
    <h1 style={{textAlign:"center"}}>EMPLOYEE FEEDBACK FORM</h1>
    <center>
    <form id="forms">
      <label htmlFor="Name">Name :</label>
      <input name="Name" type="text" value={state.Name} onChange={ChangeHandler}></input>
      <br/>
      <label htmlFor="Department">Department :</label>
      <input name="Department" type="text"  value={state.Department} onChange={ChangeHandler}></input>
      <br/>
      <label htmlFor="Rating">Rating :</label>
      <input name="Rating" type='digits' value={state.Rating} onChange={ChangeHandler}></input>
      <br/>
    <button id="submit" onClick={ClickHandler} type='submit'>Submit</button>
    </form>
         
    </center>

  </div>
);
            }
           
        }
export default App;