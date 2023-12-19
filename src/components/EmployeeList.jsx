// // EmployeeList.js
// EmployeeList.js

// src/components/EmployeeList.js
import React from 'react';
import SearchBar from './SearchBar';
import { Employee } from './Employee';
import './EmployeeList.css';

export const EmployeeList = () => {
  const employees = [
    { id: 1, name: 'James King', position: 'President and CEO', imageurl: 'https:' },
    { id: 2, name: 'Julie Taylor' , position: 'VP of Marketing'},
    { id: 3, name: 'Eugene Lee' , position: 'CFO'},
    { id: 4, name: 'John Williams' , position: 'VP of Engineer'},
    { id: 5, name: 'Ray Moor' , position: 'VP of Sales'},
    { id: 6, name: 'Paul Jones', position: 'QA Manager' },
  ];

  return (
    <div className="employee-list-container">
      <div className="employee-list-section">
        <div className='color-container'>
          <h2 className='employee-list-title'>Employee Directory</h2>
          <SearchBar />
          <ul id='removeul'>
            <div className='emcolor'>
              {employees.map((employee) => (
                <li key={employee.id} className="employee-item">
                  <div className="employee-details">
                    <span className="employee-name">{employee.name}</span> <br /> <span className="employee-position">{employee.position}</span>
                  </div>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
      <div className="employee-list-section border-left">
        <Employee />
      </div>
    </div>
  );
};






// import React from 'react';
// import SearchBar from './SearchBar';
// import { Employee } from './Employee';
// import './EmployeeList.css'


// export const EmployeeList = () => {
//     const employees = [
//         { id: 1, name: 'James King', position: 'President and CEO', imageurl: 'https:' },
//         { id: 2, name: 'Julie Taylor' , position: 'VP of Marketing'},
//         { id: 3, name: 'Eugene Lee' , position: 'CFO'},
//         { id: 4, name: 'John Williams' , position: 'VP of Engineeer'},
//         { id: 5, name: 'Ray Moor' , position: 'VP of Sales'},
//         { id: 6, name: 'Paul Jones', position: 'QA Manager' },
// ];



//   return (
//     <div className="employee-list-container">
//       <div className="employee-list-section">
//         <div className='color-container'>
//         <h2 className='employee-list-title'>Employee Directory</h2>
//         <SearchBar />
//         <ul id='removeul'>
//             <div className='emcolor'>
//             {employees.map((employee) => (
//                 <li key={employee.id}>
//                     {employee.name} <br></br> {employee.position}
//                     </li>
//                 ))}
//             </div>
//         </ul>
        
//         </div>
        
//       </div>
//       <div className="employee-list-section border-left">
//         <Employee />
//       </div>
//     </div>
//   );
// };








// import React from 'react';
// import SearchBar from './SearchBar';
// import { Employee } from './Employee';

// export const EmployeeList = () => {
//   return (
//     <div style={{ display: 'flex', border: '1px solid black' }}>
//       <div>Employee Directory 
//         <SearchBar />
//         <Employee />
//       </div>
//       <div>
//         {/* Additional EmployeeList content */}
//       </div>
//     </div>
//   );
// };




