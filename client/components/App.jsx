import React, { Component } from 'react';
import { Fragment } from 'react';

import AddInputs from "./AddInputs.jsx";
import TableIntake from "./TableIntake.jsx";



function App(){
  return (
    <Fragment>
      <div className='container'>
        <AddInputs />
        <TableIntake /> 
      </div>
      
    </Fragment>
  );
}

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state;
//   };
  
//   render() {
//     return (
//       <div>
//         <AddInputs/>
//         <InputsDisplay/>
//       </div>
//     )
//   }
// }

export default App;