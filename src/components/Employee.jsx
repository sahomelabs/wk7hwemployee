// Employee.js

// Employee.js
import React from 'react';
import { EmployeeListItem } from './EmployeeListItem';
import './EmployeeList.css';

const julie = {
  name: 'Julie Taylor',
  position: 'VP of Marketing',
  contactOptions: ['example@gmail.com', '617-000-0002', '617-000-0002', '781-000-0002'],
};

export const Employee = () => {
  return (
    <div className='em-container'>
      <h2 id='emidbox'>Employee</h2>
      <EmployeeListItem name={julie.name} position={julie.position} contactOptions={julie.contactOptions} />
    </div>
  );
};




// Employee.js
// import React from 'react';
// import { EmployeeListItem } from './EmployeeListItem';

// const juliee = {
//   name: 'Julie Taylor',
//   contactOptions: ['Call Office', 'Call Mobile', 'SMS', 'Email'],
// };

// export const Employee = () => {
//   return (
//     <div>
//       <h2>Employee Page</h2>
//       <EmployeeListItem name={juliee.name} contactOptions={juliee.contactOptions} />
//     </div>
//   );
// };



// import React from 'react';
// import { EmployeeListItem } from './EmployeeListItem';

// export const Employee = () => {
//   return (
//     <div>
//       <h2>Employee</h2>
//       <EmployeeListItem />
//     </div>
//   );
// };
