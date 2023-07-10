import React, { Fragment, useState } from 'react';

const EditIntake = ({ record }) => {
  
  const [time, newTime] = useState(record.time);
  const [breastmilk, newBreastmilk] = useState(record.breastmilk);
  const [formula, newFormula] = useState(record.formula);
  const [spitup, newSpitup] = useState(record.spitup);

  //edit entry
  const updateEntry = async e => {
    e.preventDefault();
    console.log('clicking?????')
    const body = { time, breastmilk, formula, spitup };
    try {    
      const response = await fetch(`http://localhost:3000/${record.id}`, 
      {
        method: 'PATCH',
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify(body) 
      }
    );
    window.location = '/';
    } catch (err) {
      console.log('error')
    }
  }

  return (
    <Fragment>
      
      <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${record.id}`}>Edit</button>

      
      <div class="modal" id={`id${record.id}`}>
        <div class="modal-dialog">

          
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
              <form>
                <input type = "text" id="time-edit" placeholder= "Edit Time" value={time} onChange={e =>
                newTime(e.target.value)} />
                <input type = "text" id="breastmilk-edit" placeholder= "Edit Breast Milk" value={breastmilk} onChange={e =>
                newBreastmilk(e.target.value)}/>
                <input type = "text" id="formula-edit" placeholder= "Edit Formula" value={formula} onChange={e =>
                newFormula(e.target.value)}/>
                <input type = "text" id="spitup-edit" placeholder= "Edit Spit Up" value={spitup} onChange={e =>
                newSpitup(e.target.value)}/>
                <div class="modal-footer">
                <button type="button" class="btn btn-warning" data-dismiss="modal" onClick = {e => updateEntry(e)}>Edit</button>
                </div>
            </form>
            </div>
          </div>

        </div>
      </div>

    </Fragment>
  )
};


export default EditIntake;