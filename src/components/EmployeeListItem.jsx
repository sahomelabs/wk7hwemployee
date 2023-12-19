// // EmployeeListItem.js

// EmployeeListItem.js
import React from 'react';
import './EmployeeListItem.css';

export const EmployeeListItem = ({ name, position, contactOptions }) => {
  const [email, mobile, sms, callOffice] = contactOptions;

  return (

    <div className="detailsem">
      <>{name} <br />{position}</>
      <ul id='removeul'>
        <li>Call Office <br></br> {callOffice}</li>
        <li>Mobile <br></br> {mobile}</li>
        <li>SMS <br></br>  {sms}</li>
        <li>Email <br></br> {email}</li>
      </ul>
    </div>
  );
};






// EmployeeListItem.js
// import React from 'react';

// export const EmployeeListItem = ({ name, contactOptions }) => {
//   return (
//     <div>
//       <h3>{name}</h3>
//       <ul>
//         {contactOptions.map((option, index) => (
//           <li key={index}>{option}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };



// import React from 'react';

// export const EmployeeListItem = () => {
//   return (
//     <div>
//       {/* Employee details */}
//     </div>
//   );
// };
