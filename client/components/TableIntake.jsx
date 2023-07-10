import React, { Fragment, Component, useEffect, useState } from 'react';
import EditIntake from './EditIntake.jsx';

//create the table that lists all intake

const TableIntake = () => {
  
  //get total intake

  const getTotal = (record) => {
    return record[breastmilk] + record[formula] - record[spitup]
  }

  //get date
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
 
  const getTheDate = () => {
    let today = new Date();
    let month = months[today.getMonth()];
    let day = today.getDate();
    return month + " " + day;
  }
  //delete func

  const deleteEntry = async (id) => {
    try {
      const deleteEntry = await fetch(`http://localhost:3000/${id}`, {
        method: "DELETE"
      })
      //console.log(deleteEntry);
      setNewTable(newTable.filter(record => record.id !== id));
    } catch (err) {
      console.log("error")
    }
  }

  //fetch data for table 

  const [newTable, setNewTable] = useState([])

  const getTable = async () => {
    try {
      const response = await fetch("http://localhost:3000")
      const jsonData = await response.json();
      console.log(jsonData);
      setNewTable(jsonData);

    }catch (err) {
      console.log("error");
    }
  };
  
  useEffect(() => {
    getTable();
  }, []);

  console.log(newTable)  
  return (
    <Fragment>
      <div id="intakeTable">
        <table className="table mt-30 text-center">
          <thead>
            <tr>
              <th>{getTheDate()}</th>
              <th>Breastmilk</th>
              <th>Formula</th>
              <th>Spit Up</th>
              <th>Total</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td>{}</td>
              <td>Doe</td>
              <td>john@example.com</td>
            </tr> */}
            {newTable.map(record => (
              <tr key = {record.id}>
                <td>{record.time}</td>
                <td>{record.breastmilk}</td>
                <td>{record.formula}</td>
                <td>{record.spitup}</td>
                <td></td>
                <td>
                    <EditIntake record ={record} />
                </td>
                <td><button className="delete-btn btn-danger" onClick={() => deleteEntry(record.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    </Fragment>
  )
}

export default TableIntake;