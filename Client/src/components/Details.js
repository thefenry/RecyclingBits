import React from 'react';

/*======================================================== 
// This will pull in the details for a recycling item
// to be displayed to a user.
========================================================*/
const Details = props => {
  
  const isItRecyclable = props.recyclable;

  return (
      <div className="main-details">
          <p className="main-details-item">
              Recyclable: YES
          </p>
      </div> 
  );
}

export default Details;