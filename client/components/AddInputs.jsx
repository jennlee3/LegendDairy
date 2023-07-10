import * as React from 'react'
import { Fragment, useState, useEffect } from 'react';
// import EditIntake from './EditIntake';


const AddInputs = () => {

  const [time, setTime] = useState("");
  const [breastmilk, setBreastmilk] = useState("");
  const [formula, setFormula] = useState("");
  const [spitup, setSpitup] = useState("")

  const onSubmitForm = async e => {
    e.preventDefault();
    console.log('clicked');
    const body = { time, breastmilk, formula, spitup };
    console.log(body);
    try {
      const response = await fetch("http://localhost:3000/entry", {
        method: 'POST',
        // mode: 'no-cors',
        headers: {
        "Content-Type": "application/json", 
        // 'Access-Control-Allow-Origin':'*',
        // 'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'
      }, 
        body: JSON.stringify(body), 
      });
      // const res = response.json();     
      console.log('This is the response:', response);
       window.location = '/';
    } catch (err) {
      console.log(err);
    }
  }
  //console.log(AddInputs)
  return (
    
    <Fragment>
      <div className= 'inputs-box'>
        <form onSubmit={onSubmitForm}>
          <input type = "text" id="time-input" placeholder= "Add Time" value={time}  
          onChange={e => setTime(e.target.value)}/>
          <input type = "text" id="breastmilk-input" placeholder= "Add Breast Milk" value={breastmilk}
          onChange={e => setBreastmilk(e.target.value)}/>
          <input type = "text" id="formula-input" placeholder= "Add Formula" value={formula}
          onChange={e => setFormula(e.target.value)}/>
          <input type = "text" id="spitup-input" placeholder= "Add Spit Up" value={spitup}
          onChange={e => setSpitup(e.target.value)}/>
          <button id="add-button">Add</button>
        </form>        
      </div>
     </Fragment>
  );
};


export default AddInputs;